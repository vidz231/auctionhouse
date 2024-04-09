import { Chat, ExpandMore } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { chatWith, hide, show } from "../redux/chatSlice";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import { useEffect, useRef, useState } from "react";
import { GET, POST } from "../utils/request";
import { getCookie } from "../utils/cookie";
import { getPattern } from "../utils/regex";

const BoxItem = ({
  name,
  avatarUrl,
  id,
}: {
  name: string;
  avatarUrl: string;
  id: number;
}) => {
  const dispatch = useDispatch();
  const handleChat = () => {
    dispatch(chatWith(id));
  };
  return (
    <div
      className="w-full flex items-center gap-2 text-sm p-2 border-b border-black bg-slate-100 cursor-pointer"
      onClick={handleChat}
    >
      <Avatar alt={name} src={avatarUrl} className="border border-black" />
      <div className="w-[150px]">
        <div className="font-semibold truncate">{name}</div>
      </div>
    </div>
  );
};

const SendItem = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-start">
      <div>
        <span className="bg-white w-full gap-2 text-sm p-2 border border-black rounded-md">
          {message}
        </span>
      </div>
    </div>
  );
};

const ReceiveItem = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-end">
      <div>
        <span className="bg-white w-full gap-2 text-sm p-2 border border-black rounded-md">
          {message}
        </span>
      </div>
    </div>
  );
};

export default function ChatBox() {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  const [messageList, setMessageList] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const userId = getCookie("userId");
  const showModal = useSelector((state: any) => state.chat.isShowed);
  const { chattingWith } = useSelector((state: any) => state.chat);
  const [receiver, setReceiver] = useState();
  let stompClient = null;
  const [messageUI, setMessageUI] = useState([]);
  const messageEnd = useRef(null);

  useEffect(() => {
    connect();
  }, []);

  useEffect(() => {
    (async () => {
      const userList = (
        await GET(`/api/messages/search/findUsersContactedWith?id=${userId}`)
      )._embedded.users;
      setUserList(userList);
      let receiver;
      if (chattingWith == 0) {
        receiver = userList[0];
      } else {
        receiver = await GET(`/api/users/${chattingWith}`);
      }
      setReceiver(receiver);
      const messageList = (
        await GET(
          `/api/messages/search/findMessagesBetweenUsers?userId1=${userId}&userId2=${receiver.id}`
        )
      )._embedded.messages;
      setMessageList(messageList);
      const messageUI = await Promise.all(
        messageList.map(async (item: any) => {
          const senderId = (
            await GET(
              String(item._links.sender.href).replace(
                import.meta.env.VITE_SERVER_URL,
                ""
              )
            )
          ).id;
          return senderId === receiver.id ? (
            <SendItem key={item.id} message={item.message} />
          ) : (
            <ReceiveItem key={item.id} message={item.message} />
          );
        })
      );
      setMessageUI(messageUI);
      // console.log(messageEnd);
      scrollToBottom();
    })();
  }, [showModal, chattingWith]);

  const scrollToBottom = () => {
    if (messageEnd.current) {
      messageEnd.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const connect = () => {
    const Sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onError = (error: any) => {
    console.log(error);
  };

  const onConnected = () => {
    console.log("connected");
  };

  const handleChatModel = () => {
    if (showModal) {
      dispatch(hide());
    } else {
      dispatch(show());
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageUI]);

  const handleEnter = async (e: any) => {
    if (e.key == "Enter") {
      const messageData = {
        message,
        sender: import.meta.env.VITE_SERVER_URL + `/users/${userId}`,
        receiver: import.meta.env.VITE_SERVER_URL + `/users/${receiver.id}`,
      };
      const returnData = await POST("/api/messages", messageData);
      setMessageList([...messageList, returnData]);
      setMessage("");
      const messageUI = await Promise.all(
        [...messageList, returnData].map(async (item: any) => {
          const senderId = (
            await GET(
              String(item._links.sender.href).replace(
                import.meta.env.VITE_SERVER_URL,
                ""
              )
            )
          ).id;
          return senderId === receiver.id ? (
            <SendItem key={item.id} message={item.message} />
          ) : (
            <ReceiveItem key={item.id} message={item.message} />
          );
        })
      );
      setMessageUI(messageUI);
    }
  };

  return (
    <div className="fixed bottom-0 right-8">
      {!showModal ? (
        <div
          className="bg-red-500 w-[100px] font-bold text-white rounded-t-md px-4 py-2"
          onClick={handleChatModel}
        >
          <Chat fontSize="small" className="mr-2" />
          Chat
        </div>
      ) : (
        <div className="bg-red-200 w-[640px] h-[500px] border rounded-t-md">
          <div className="flex justify-between p-2 border-b-black border-b">
            <div className="font-bold text-base">Chat</div>
            <div onClick={handleChatModel}>
              <ExpandMore />
            </div>
          </div>
          <div className="w-full grid grid-cols-12 h-full">
            <div className="col-span-4 border-r border-black ">
              {userList &&
                userList.map((user) => (
                  <BoxItem
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    avatarUrl={user.avatarUrl}
                  />
                ))}
            </div>
            <div className="col-span-8 relative bg-slate-300">
              <div className="flex gap-2 border-b border-black py-2 px-2 bg-white">
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  src={receiver && receiver.avatarUrl}
                  alt={""}
                  className="border border-black"
                ></Avatar>
                <div className="font-semibold text-sm">
                  {receiver && receiver.name}
                </div>
              </div>
              <div className="px-2 pt-3 flex flex-col gap-4 flex-shrink bg-yellow-400 h-[345px] overflow-y-scroll">
                {messageList && receiver && messageUI}
                <div ref={messageEnd}></div>
              </div>
              <textarea
                className="absolute bottom-10 resize-none h-16 border without-ring w-full p-2 border-t bg-white text-black text-sm"
                placeholder="Write message"
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleEnter}
                value={message}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

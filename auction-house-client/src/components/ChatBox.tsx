import { Chat, ExpandMore } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { chatWith, hide, show } from "../redux/chatSlice";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import { useEffect, useState } from "react";
import { GET } from "../utils/request";

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

const SendItem = () => {
  return (
    <div>
      <span className="bg-white w-full gap-2 text-sm p-2 border border-black rounded-md">
        Hello, how are you today ahhihi ahihi ahihi?
      </span>
    </div>
  );
};

const ReceiveItem = () => {
  return (
    <div className="flex justify-end">
      <div>
        <span className="bg-white w-full gap-2 text-sm p-2 border border-black rounded-md">
          Hello, how are you today ahhihi ahihi ahihi ayyo?
        </span>
      </div>
    </div>
  );
};

export default function ChatBox() {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  const showModal = useSelector((state: any) => state.chat.isShowed);
  const { chattingWith } = useSelector((state: any) => state.chat);
  const [receiver, setReceiver] = useState();
  let stompClient = null;

  useEffect(() => {
    (async () => {
      const userList = (
        await GET("/api/messages/search/findUsersContactedWith?id=949")
      )._embedded.users;
      setUserList(userList);
      const receiver = await GET(`/api/users/${chattingWith}`);
      setReceiver(receiver);
    })();
    connect();
  }, [showModal, chattingWith]);

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
              <div className="px-2 py-3 flex flex-col gap-5 flex-shrink">
                <SendItem />
                <ReceiveItem />
                <SendItem />
                <SendItem />
                <ReceiveItem />
              </div>
              <textarea
                className="absolute bottom-10 resize-none h-16 border without-ring w-full p-2 border-t bg-white text-black text-sm"
                placeholder="Write message"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

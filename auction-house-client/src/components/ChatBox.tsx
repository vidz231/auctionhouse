import { Chat, ExpandMore } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useState } from "react";

const BoxItem = () => {
  return (
    <div className="w-full flex items-center gap-2 text-sm p-2 border-b border-black">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <div className="w-[150px]">
        <div className="font-semibold truncate">Name</div>
        <p className="truncate">Hello, how are you today ahhihi ahihi ahihi?</p>
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
          Hello, how are you today ahhihi ahihi ahihi?
        </span>
      </div>
    </div>
  );
};

export default function ChatBox() {
  const [showModal, setShowModal] = useState(false);
  const handleChatModel = () => {
    setShowModal(!showModal);
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
          <div className="w-full bg-blue-500 grid grid-cols-12 h-full">
            <div className="col-span-4 bg-yellow-300 border-r">
              <BoxItem />
              <BoxItem />
              <BoxItem />
              <BoxItem />
            </div>
            <div className="col-span-8 relative">
              <div className="font-semibold px-2 py-1 border-b border-black">
                Shop name
              </div>
              <div className="px-2 py-3 flex flex-col gap-5 flex-shrink">
                <SendItem />
                <ReceiveItem />
                <SendItem />
                <SendItem />
                <ReceiveItem />
              </div>
              <textarea
                className="absolute bottom-10 resize-none h-16 border without-ring w-full p-2 border-t bg-slate-300 text-black text-sm"
                placeholder="Write message"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

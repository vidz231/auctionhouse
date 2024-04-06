import { Avatar } from "@mui/material";

export default function ChatItem() {
  return (
    <div>
      <div className="flex">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sizes="small"
        />
        <div className="ml-4">
          <div className="">
            <span className="font-bold mr-2">John Mayer</span>
            <span>
              Nam sed ante erat. Mauris ut varius neque.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Curabitur sagittis sagittis
              quam ac tincidunt. Praesent in ultrices ipsum. Morbi vulputate
              tortor ligula, quis feugiat erat finibus eget. Aliquam erat
              volutpat. Morbi euismod faucibus ligula, non aliquam purus
              imperdiet eget. Etiam blandit tempus odio. Fusce aliquam molestie
              felis eu ultricies. Nullam vel laoreet enim.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

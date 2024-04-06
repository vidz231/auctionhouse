import { Avatar, Rating } from "@mui/material";

export default function FeedbackItem() {
  return (
    <div>
      <div className="flex">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <div className="ml-4">
          <div className="flex gap-4 items-center">
            <div className="font-bold">John Mayer</div>
            <div className="text-slate-600 text-sm">2 hour ago</div>
          </div>
          <div>
            <Rating name="read-only" value={4} readOnly size="small" />
          </div>
        </div>
      </div>
      <div>
        Nam sed ante erat. Mauris ut varius neque. Fusce ut massa justo.
        Suspendisse non quam quis libero sollicitudin egestas vel at erat. Proin
        maximus justo sed nibh semper molestie. Nam id nulla quis nunc dictum
        tincidunt. Maecenas convallis diam id est vehicula, fermentum viverra
        magna efficitur. Aliquam scelerisque vel velit vel feugiat. Suspendisse
        potenti. Suspendisse ultrices, massa convallis rhoncus aliquet, sem orci
        blandit arcu, ac tincidunt ipsum magna eu odio. Praesent tempus varius
        vehicula.
      </div>
    </div>
  );
}

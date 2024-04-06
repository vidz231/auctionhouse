import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FeedbackItem from "./components/FeedbackItem";

export default function SellProduct() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">Sell</Link>
        <Link to="/">Other</Link>
        <Typography color="text.primary">
          The name of a auction product
        </Typography>
      </Breadcrumbs>
      <div>
        <div className="rounded-md flex gap-4 mt-4 p-2">
          <div className="flex flex-col gap-4">
            <div className="bg-red-300 aspect-square h-[80px]">Image</div>
            <div className="bg-red-300 aspect-square h-[80px]">Image</div>
            <div className="bg-red-300 aspect-square h-[80px]">
              <div></div>
            </div>
          </div>
          <div className="bg-red-300 aspect-square h-[480px]">Image</div>
          <div className="mt-2 mx-4 text-xl flex flex-col gap-2">
            <div className="font-bold text-md">
              The name of a auction product
            </div>
            <div className="text-md text-slate-500 italic">
              by Nguyen Van Hieu
            </div>
            <div className="">Vietnam</div>
            <div className="font-bold">$123045</div>
            <div className="flex gap-4">
              <Link
                to="/product"
                className="py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-md inline-block text-white font-bold my-2 text-base"
              >
                Add to cart
              </Link>
              <Link
                to="/product"
                className="py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-md inline-block text-white font-bold my-2 text-base"
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <div className="font-bold text-xl mb-4">Description</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sagittis sagittis quam ac tincidunt. Praesent in
                ultrices ipsum. Morbi vulputate tortor ligula, quis feugiat erat
                finibus eget. Aliquam erat volutpat. Morbi euismod faucibus
                ligula, non aliquam purus imperdiet eget. Etiam blandit tempus
                odio. Fusce aliquam molestie felis eu ultricies. Nullam vel
                laoreet enim. Nam sed ante erat. Mauris ut varius neque. Fusce
                ut massa justo. Suspendisse non quam quis libero sollicitudin
                egestas vel at erat. Proin maximus justo sed nibh semper
                molestie. Nam id nulla quis nunc dictum tincidunt. Maecenas
                convallis diam id est vehicula, fermentum viverra magna
                efficitur. Aliquam scelerisque vel velit vel feugiat.
                Suspendisse potenti. Suspendisse ultrices, massa convallis
                rhoncus aliquet, sem orci blandit arcu, ac tincidunt ipsum magna
                eu odio. Praesent tempus varius vehicula. Nunc et sodales enim,
                sit amet sagittis sapien. Nunc ut odio elementum, lobortis nunc
                et, tempus ipsum. Duis id sagittis eros. Proin viverra hendrerit
                risus, vitae euismod lacus ullamcorper sed. In semper rhoncus
                varius. Vivamus laoreet nec dui nec tempus. Maecenas ac purus
                mauris. Nunc at orci ac nisi condimentum pharetra. Duis ac
                aliquam nisl, ut finibus justo. Cras placerat urna at neque
                iaculis tempus. Vivamus eu mauris nisi. Duis tincidunt eu lectus
                ac egestas. Aenean nibh massa, porta sed hendrerit venenatis,
                pulvinar ut nibh. Praesent ac posuere nisi. Maecenas maximus
                dictum metus. Integer finibus lacus at accumsan pellentesque.
                Vestibulum porttitor diam sed est pharetra fermentum. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas
                erat et justo pharetra malesuada. Etiam eu magna at lectus
                tempor accumsan. Integer consequat at dolor vel ultricies.
                Integer vehicula urna quam. Nulla vel nunc nec velit suscipit
                auctor vel nec nulla. In hac habitasse platea dictumst. Donec
                eget diam a turpis finibus euismod eu a tortor. Mauris auctor
                diam a felis tempus condimentum. Quisque ac ex commodo,
                pellentesque felis eu, pharetra nunc. Nullam nibh elit, dapibus
                ac purus nec, blandit bibendum dui. Aenean blandit a leo eget
                volutpat. Aliquam lobortis, mi nec tincidunt suscipit, mauris
                neque imperdiet mi, eu fermentum justo eros non elit. In hac
                habitasse platea dictumst. Etiam dictum, nibh et maximus
                finibus, nunc ex mollis nisl, vitae interdum massa dolor vitae
                dui. Integer at metus auctor, ultrices orci a, eleifend diam.
                Aliquam nec nunc ullamcorper, consequat diam ac, consequat odio.
                Ut nunc massa, imperdiet eu libero aliquet, fermentum dignissim
                odio. Suspendisse id blandit felis.
              </div>
              <div className="text-slate-500 cursor-pointer">Read less</div>
            </div>
            <div className="col-span-4">
              <div className="font-bold text-xl mb-4">Seller</div>
              <div className="flex gap-4">
                <div className="bg-red-300 aspect-square h-[100px]">Image</div>
                <div>
                  <div>Seller name</div>
                  <div>Follower</div>
                  <div>Address</div>
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <div className="font-bold text-xl mb-4">Feedback</div>
              <div className="flex flex-col gap-8">
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

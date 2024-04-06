import { Divider } from "@mui/material";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PersonIcon from "@mui/icons-material/Person";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SpaIcon from "@mui/icons-material/Spa";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

const NavItem = ({
  children,
  icon,
  href,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      to={href}
      className="flex gap-2 items-center px-4 py-2 transition-all font-semibold text-slate-400 hover:text-black hover:bg-slate-100 hover:border-r-blue-600 hover:border-r-4 text-md"
    >
      {icon}
      {children}
    </Link>
  );
};

export default function SideNav() {
  return (
    <div className="col-span-2 border-r">
      <div className="flex justify-center m-4">
        <Link to="/" className="lobster-regular text-2xl">
          Auction House
        </Link>
      </div>
      <Divider />
      <div>
        <NavItem icon={<EqualizerIcon fontSize="small" />} href="./">
          Dashboard
        </NavItem>
        <NavItem icon={<SpaIcon fontSize="small" />} href="./product">
          Product
        </NavItem>
        <NavItem icon={<PersonIcon fontSize="small" />} href="./user">
          User
        </NavItem>
        <NavItem icon={<ShowChartIcon fontSize="small" />} href="./auction">
          Auction
        </NavItem>
        <NavItem icon={<ReportIcon fontSize="small" />} href="./report">
          Report
        </NavItem>
      </div>
    </div>
  );
}

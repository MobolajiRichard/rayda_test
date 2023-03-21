import { Badge } from "@mui/material";
import BellIcon from "../assets/Icons/bell";

const Header = () => {
  return (
    <div data-testid='header' className="flex justify-between w-full items-center border-b border-gray-200 pb-4">
      <div>
        <p className="font-plex font-bold text-xl text-[#101828]">Welcome</p>
        <p className="text-sm font-plex text-[#475467]">
          Your current sales auction and activity.
        </p>
      </div>
      <div className="bg-white w-8 h-8 flex items-center justify-center rounded-sm">
        <Badge
          color="error"
          badgeContent={2}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
         <BellIcon/>
        </Badge>
      </div>
    </div>
  );
};

export default Header;

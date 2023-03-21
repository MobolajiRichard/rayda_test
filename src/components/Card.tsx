import { Avatar } from "@mui/material";
import image from "../assets/Image.png";
import furniture from "../assets/furniture.png";
import samsung from "../assets/samsung.png";
import apple from "../assets/apple.png";

type DataProps = {
  name: string;
  title: string;
  bid: string;
  image: string;
};

const Card = (data: DataProps) => {
  //function to get the correct image the api response is returning image not found
  const getCorrectImage = (text: string) => {
    if (text.includes("Samsung")) {
      return samsung;
    } else if (text.includes("MacBook")) {
      return apple;
    } else if (text.includes("Furniture")) {
      return furniture;
    } else if (text.includes("Phone 8")) {
      return image;
    } else {
      return "not found";
    }
  };

  return (
    <div data-testid='item' className="border border-gray-300 rounded-lg h-[300px] font-plex  mt-3 p-2 flex flex-col">
      <img
        className="h-[120px] bg-[#F2F4F7] rounded-lg"
        alt="items"
        src={getCorrectImage(data.title)}
      />
      <div className="flex items-center mt-4">
        <Avatar
          sx={{ backgroundColor: "#F2F4F7", width: "30px", height: "30px" }}
        >
          <p className="font-plex text-[12px] font-bold text-[#475467]">
            {data.name.split(" ")[0][0] + data.name.split(" ")[1][0]}
          </p>
        </Avatar>
        <p className="font-bold text-[10px] text-[#475467] ml-2">
          {data.name}
          <span className="font-normal text-[#98A2B3]"> (Highest Bidder)</span>
        </p>
      </div>
      <p className="text-[11px] font-bold mt-2">{data.title}</p>
      <p className="text-[12px] text-[#344054] pb-2 mt-2 border-b border-gray-200">
        Current Bid: <span className="font-bold">{data.bid}</span>
      </p>
      <button className="hover:bg-[#004CCC] mt-2 shadow-sm  text-white rounded-md text-[12px] p-2 font-bold bg-blue-600">
        Add to wishlist
      </button>
    </div>
  );
};

export default Card;

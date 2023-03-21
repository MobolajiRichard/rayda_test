import layers from "../assets/Layers.png";
import gradient from "../assets/gradient.png";
import Like from "../assets/Icons/like";

const Auction = () => {
  return (
    <div data-testid='auction' className="mt-8 h-[250px] w-full border border-gray-200 rounded-lg shadow-sm p-2 md:p-5 relative">
      <img

        className="h-2/3 rounded-lg relative w-full" src={gradient} />
      <div className="flex flex-col md:flex-row justify-between mt-1 md:mt-4 items-center">
        <div className="flex h-full w-full">
          <img
            alt="layer"
            src={layers}
            className=" h-[130px] w-[130px] shadow-sm rounded-full absolute top-[15%] left-[30%] md:top-[50%] md:ml-7 md:left-0"
          />
          <div className="md:ml-[18%] flex flex-col items-center md:items-start w-full">
            <p className="text-sm md:text-[24px] md:text-lg font-bold font-plex text-[#101828]">
              Starts in 3 days : 2 hours : 24 minutes
            </p>
            <div className="flex items-center">
              <div className="flex bg-[#FFFAEB] items-center p-1 rounded-xl">
                <div className="h-1 w-1 bg-[#F79009] rounded-full mr-2"></div>
                <p className="text-[#B54708] text-[11px] font-semibold">
                  Not Live
                </p>
              </div>
              <p className="text-[#475467] text-[14px] ml-3 font-plex">
                Layers Auction
              </p>
            </div>
          </div>
        </div>

        <div className="flex border border-gray-300 items-center w-[8em] h-8 p-1 rounded-md cursor-pointer hover:shadow-sm ">
            <Like/>
          <p className="text-[12px] font-bold ml-2 font-plex text-[#344054]">
            Accept Invite
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auction;

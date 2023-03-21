import layers from "../assets/Layers.png";
import gradient from "../assets/gradient.png";

const Auction = () => {
  return (
    <div className="mt-8 h-[250px] w-full border border-gray-200 rounded-lg shadow-sm p-2 md:p-5 relative">
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
            <p className="text-sm md:text-lg font-bold font-plex text-[#101828]">
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
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.83332 18.3333V9.16666M1.66666 10.8333V16.6667C1.66666 17.5871 2.41285 18.3333 3.33332 18.3333H14.5219C15.7558 18.3333 16.8052 17.433 16.9928 16.2135L17.8902 10.3801C18.1232 8.86574 16.9515 7.49999 15.4193 7.49999H12.5C12.0398 7.49999 11.6667 7.12689 11.6667 6.66666V3.72152C11.6667 2.58665 10.7467 1.66666 9.61179 1.66666C9.3411 1.66666 9.09581 1.82607 8.98587 2.07343L6.05327 8.67177C5.91952 8.97271 5.62109 9.16666 5.29176 9.16666H3.33332C2.41285 9.16666 1.66666 9.91285 1.66666 10.8333Z"
              stroke="#344054"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[12px] font-bold ml-2 font-plex text-[#344054]">
            Accept Invite
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auction;

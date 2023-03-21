import Card from "./Card";
import { Grid } from "@mui/material";
import { useGetDataQuery } from "../api/apiSlice";
import { Skeleton } from "@mui/material";

const ItemList = () => {
  const { data, isLoading, isError} = useGetDataQuery(undefined);

  //content to display if data is loading
//   if (isLoading) {
//     return (
//       <div className="flex justify-between w-full mt-4">
//         {new Array(4).fill(Infinity).map((_, i) => (
//           <Skeleton key={i} variant="rectangular" width={210} height={150} />
//         ))}
//       </div>
//     );
//   }

//   //content to display if an error occurred
//   if (isError) {
//     return (
//       <div className="mt-4 flex flex-col items-center">
//         <h2>Oops....</h2>
//         <p> An unexpected error occured, We couldn't fetch the bids at this time</p>
//         <p>Please refresh and try again.</p>
//       </div>
//     );
//   }

  //After successful data fetching, display this
  return (
    <div  className="border border-gray-200 w-full  my-8 rounded-lg p-4">
      <div className="flex items-center justify-between border-b border-gray-200 pb-5">
        <p className="font-plex text-sm font-bold">Featured Items</p>
        <p className="border border-grey-200 p-2 text-[12px] text-[#344054] cursor-pointer hover:shadow-sm hover:text-[#004ccc] font-plex font-bold rounded-md">
          View Auction
        </p>
      </div>
      <Grid container spacing={2}>
        {data?.data.map((d, i) => (
          <Grid data-testid='item' item xs={12} sm={6} md={3} key={i}>
            <Card {...d} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ItemList;

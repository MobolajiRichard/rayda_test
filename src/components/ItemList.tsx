import Card from "./Card";
import { Grid } from "@mui/material";

const ItemList = () => {
  return (
    <div className="border border-gray-200 w-full  my-8 rounded-lg p-4">
      <div className="flex items-center justify-between border-b border-gray-200 pb-5">
        <p className=" font-plex text-sm font-bold">Featured Items</p>
        <p className="border border-grey-200 p-2 text-[12px] text-[#344054] cursor-pointer hover:shadow-sm hover:text-[#004ccc] font-plex font-bold rounded-md">
          View Auction
        </p>
      </div>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={6} md={3} >
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card />
        </Grid>
      </Grid>
      {/* <Card/> */}
    </div>
  );
};

export default ItemList;

import { Avatar } from "@mui/material"
import image from './image.png'

const Card = () => {
  return (
    <div className="border border-gray-300 rounded-lg h-[300px] font-plex  mt-3 p-2 flex flex-col" >
        <img className="h-[120px] bg-[#F2F4F7] rounded-lg" alt='items' src={image}/>
        <div className="flex items-center mt-4">
            <Avatar sx={{backgroundColor:'#F2F4F7', width:'30px', height:'30px'}}>
                <p className="font-plex text-[12px] font-bold text-[#475467]">KO</p>
            </Avatar>
            <p className="font-bold text-[10px] text-[#475467] ml-2">Koray Okumus <span className="font-normal text-[#98A2B3]">(Highest Bidder)</span></p>
        </div>
        <p className="text-[#101828] text-[13px] font-bold mt-2">Modern Office Desk Table Computer Table Furniture</p>
        <p className="text-[12px] ttext-[#344054] pb-2 mt-2 border-b border-gray-200">Current Bid: <span className="font-bold">&#8358;195,000</span></p>
        <button className="bg-[#004CCC] mt-2  text-white rounded-md text-[12px] p-2 font-bold">Add to wishlist</button>
    </div>
  )
}

export default Card
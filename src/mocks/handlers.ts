import { rest } from "msw";

const items = {
    success: true,
    message: "Operation Successful",
    data: [
      {
        name: "John Doe",
        title: "Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold",
        bid: "₦795,000",
        image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png",
      },
      {
        name: "Peter Doe",
        title: "Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold",
        bid: "₦795,000",
        image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png",
      },
      {
        name: "Mary Doe",
        title: "Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold",
        bid: "₦795,000",
        image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png",
      },
      {
        name: "Paul Doe",
        title: "Samsung Galaxy A23, 4GB/128GB Memory, Android 12 - Balck",
        bid: "₦141,999",
        image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png",
      },
      {
        name: "John Andrew",
        title: "Modern Office Table Desk Computer Table Furniture",
        bid: "₦₦37,000",
        image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png",
      },
      {
        name: "Abi Jones",
        title: "Modern Office Table Desk Computer Table Furniture",
        bid: "₦37,000",
        image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png",
      },
      {
        name: "John Doe",
        title: "Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold",
        bid: "₦120,000",
        image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png",
      },
      {
        name: "Andrew Doe",
        title: "Phone 8 - 256GB, 4G LTE, Green (Refurbished)",
        bid: "₦141,999",
        image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png",
      },
    ],
  };
  
  export const handlers = [
    rest.get(
      "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b",
      (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(items));
      }
    ),
  ];
  
export default interface Data {
  success: boolean;
  message: string;
  data: {
    name: string;
    title: string;
    bid: string;
    image: string;
  }[];
}


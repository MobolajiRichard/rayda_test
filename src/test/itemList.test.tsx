import { render, screen, waitFor } from "@testing-library/react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "../api/apiSlice";
import { describe, expect, test, it } from "vitest";
import ItemList from "../components/ItemList";
import Card from "../components/Card";


let item = {
  name: "Andrew Doe",
  title: "Phone 8 - 256GB, 4G LTE, Green (Refurbished)",
  bid: "₦141,999",
  image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png",
}
describe("Items", () => {
  //check if there are 8 items rendered 
  test("Item list renders correctly", async () => {
    render(
      <ApiProvider api={apiSlice}>
        <ItemList />
      </ApiProvider>
    );
    const items = await screen.findAllByTestId("item");
    waitFor(() => expect(items).toHaveLength(8));
  });


});

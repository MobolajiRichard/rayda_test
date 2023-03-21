import { render, screen, waitFor } from "@testing-library/react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "../api/apiSlice";
import { describe, expect, test, it } from "vitest";
import ItemList from "../components/ItemList";
import Header from "../components/Header";
import Auction from "../components/Auction";



describe("Items", () => {
  //check if the header is included in the ui
  test("Header component renders correctly", async () => {
    render(<Header/>);
    const header= await screen.findByTestId("header");
    waitFor(() => expect(header).toBeDefined());
  });

//check if the auction component is included in the ui
  test("Auction component renders correctly", async () => {
    render(<Auction/>);
    const auction = await screen.findAllByTestId("auction");
    waitFor(() => expect(auction).toBeDefined());
  });


  //check if there are 8 items listed after api calls
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

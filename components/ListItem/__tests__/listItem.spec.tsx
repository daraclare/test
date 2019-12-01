import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ListItem } from "../ListItem";
import { LIST_ITEM_MOCK } from "../__mocks__/listItem.mocks";

describe("Component: ListItem", () => {
  it("should render without throwing an error", () => {
    const { container } = render(<ListItem {...LIST_ITEM_MOCK} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render with correct span text", () => {
    const { getByTestId } = render(<ListItem {...LIST_ITEM_MOCK} />);
    const beerName = getByTestId("listItem-spanText");
    expect(beerName.innerHTML).toBe(` ${LIST_ITEM_MOCK.spanText} `);
  });
  it("should render with button text of IDLE", () => {
    const { getByTestId } = render(<ListItem {...LIST_ITEM_MOCK} />);
    const buttonText = getByTestId("listItem-button");
    expect(buttonText.innerHTML).toBe(`IDLE`);
  });
  it("should render with button text of DONE", () => {
    const { getByTestId } = render(
      <ListItem {...LIST_ITEM_MOCK} isChecked={true} />
    );
    const buttonText = getByTestId("listItem-button");
    expect(buttonText.innerHTML).toBe(`DONE`);
  });
});

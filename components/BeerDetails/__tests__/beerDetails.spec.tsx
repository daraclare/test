import React from "react";
import { render } from "@testing-library/react";
import { BeerDetails } from "../BeerDetails";
import { BEER_MOCK } from "../__mocks__/beerDetails.mocks";

describe("Component: BeerDetails", () => {
  it("should render without throwing an error", () => {
    const { container } = render(<BeerDetails beer={BEER_MOCK} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render with correct name, including tagline", () => {
    const { getByTestId } = render(<BeerDetails beer={BEER_MOCK} />);
    const beerName = getByTestId("beer-name");
    expect(beerName.innerHTML).toBe(
      `${BEER_MOCK.name} <span>(${BEER_MOCK.tagline})</span>`
    );
  });
  it("should render with correct abv", () => {
    const { getByTestId } = render(<BeerDetails beer={BEER_MOCK} />);
    const beerAbv = getByTestId("beer-abv");
    expect(beerAbv.innerHTML).toBe(`ABV: ${BEER_MOCK.abv}`);
  });
  it("should render with correct description", () => {
    const { getByTestId } = render(<BeerDetails beer={BEER_MOCK} />);
    const beerDesc = getByTestId("beer-desc");
    expect(beerDesc.innerHTML).toBe(BEER_MOCK.description);
  });
  it("should render with correct number of hop and malt items", () => {
    const { getAllByTestId } = render(<BeerDetails beer={BEER_MOCK} />);
    const ListItem = getAllByTestId("listItem");
    expect(ListItem).toHaveLength(8);
  });
});

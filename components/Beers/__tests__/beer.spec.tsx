import React from "react";
import { render } from "@testing-library/react";
import { Beer } from "../Beer";
import { BEERS_MOCK } from "../__mocks__/beers.mocks";

describe("Component: Beers", () => {
  it("should render without throwing an error", () => {
    const { container } = render(
      <Beer {...BEERS_MOCK[0]} img={BEERS_MOCK[0].image_url} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render with correct name", () => {
    const { getByTestId } = render(
      <Beer {...BEERS_MOCK[0]} img={BEERS_MOCK[0].image_url} />
    );
    const beerName = getByTestId("beer-name");
    expect(beerName.textContent).toBe(BEERS_MOCK[0].name);
  });

  it("should render with correct image", () => {
    const { getByTestId } = render(
      <Beer {...BEERS_MOCK[0]} img={BEERS_MOCK[0].image_url} />
    );
    const beerImg = getByTestId("beer-img");
    expect(beerImg.getAttribute("src")).toEqual(BEERS_MOCK[0].image_url);
  });

  it("should render with correct description", () => {
    const { getByTestId } = render(
      <Beer {...BEERS_MOCK[0]} img={BEERS_MOCK[0].image_url} />
    );
    const beerDesc = getByTestId("beer-desc");
    expect(beerDesc.textContent).toEqual(BEERS_MOCK[0].description);
  });
});

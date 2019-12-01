import React from "react";
import { render } from "@testing-library/react";
import { Beers } from "../Beers";
import { BEERS_MOCK } from "../__mocks__/beers.mocks";

describe("Component: Beers", () => {
  it("should render without throwing an error", () => {
    const { container } = render(<Beers beers={BEERS_MOCK} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render with correct number of beers", () => {
    const { getAllByTestId } = render(<Beers beers={BEERS_MOCK} />);
    const beers = getAllByTestId("beer");
    expect(beers).toHaveLength(7);
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Index from "../pages/index";

describe("Homepage", () => {
  it("should render without throwing an error", () => {
    const { container } = render(<Index />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

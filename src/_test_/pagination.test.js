import { render, screen, cleanup } from "@testing-library/react";
import { paginate } from "../components/paginate";

describe("paginate", () => {
  it("should return the correct page of items", () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pageNumber = 2;
    const pageSize = 3;
    const expectedOutput = [4, 5, 6];

    const result = paginate(inputArray, pageNumber, pageSize);

    expect(result).toEqual(expectedOutput);
  });

  it("should handle an empty input array", () => {
    const inputArray = [];
    const pageNumber = 1;
    const pageSize = 5;
    const expectedOutput = [];

    const result = paginate(inputArray, pageNumber, pageSize);

    expect(result).toEqual(expectedOutput);
  });

  it("should handle a page number beyond the array length", () => {
    const inputArray = [1, 2, 3];
    const pageNumber = 2;
    const pageSize = 5;
    const expectedOutput = [];

    const result = paginate(inputArray, pageNumber, pageSize);

    expect(result).toEqual(expectedOutput);
  });
});

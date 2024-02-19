import { expect, it } from "vitest";
import { convert } from "../src";

it("convert", async () => {
  expect(async () => await convert()).not.toThrowError();
});

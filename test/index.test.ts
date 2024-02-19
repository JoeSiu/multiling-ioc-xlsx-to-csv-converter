import { expect, it } from "vitest";
import { generate } from "../src";

it("generate", async () => {
  expect(async () => await generate()).not.toThrowError();
});

const Sum = require("../utils/sum");

it("test sum by 2 numbers", () => {
  expect(Sum(1, 2)).toBe(3);
});

it("test undefined", () => {
  const a = undefined;

  expect(a).toBeUndefined();
});

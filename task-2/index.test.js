const { getItemList, calculateTotalCost, tallyHealthyFoods } = require("./");

const groceries = [
  {
    item: "potatoes",
    price: 1.5,
    healthy: true,
  },
  {
    item: "chocolate",
    price: 1,
    healthy: false,
  },
  {
    item: "cheese",
    price: 2.5,
    healthy: true,
  },
  {
    item: "beer",
    price: 3.5,
    healthy: false,
  },
  {
    item: "lettuce",
    price: 0.5,
    healthy: true,
  },
];

describe("Task 2", () => {
  test("getItemList should work", () => {
    expect(getItemList(groceries)).toEqual([
      "potatoes",
      "chocolate",
      "cheese",
      "beer",
      "lettuce",
    ]);
  });
  test("calculateTotalCose should work", () => {
    expect(calculateTotalCost(groceries)).toEqual(9);
  });
  test("tallyHealthyFoods should work", () => {
    expect(tallyHealthyFoods(groceries)).toEqual({
      healthy: 3,
      unhealthy: 2,
    });
  });
});

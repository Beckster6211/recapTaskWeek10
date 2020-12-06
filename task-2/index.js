/* In ./index.test.js there is a list of groceries. In each of the below functions, use the .reduce() method to return the correct result. */

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

/* Task 2.1 - Return an array containing all of the item names: ['potatoes', 'chocolate', 'cheese', 'beer', 'lettuce']*/

function getItemList() {
  return groceries.reduce((acc, cur) => [...acc, cur.item], []);
}
getItemList();
/* Task 2.2 - Return the total value of all of the items as a number: 9 */

function calculateTotalCost(groceries) {
  return groceries.reduce((acc, cur) => acc + cur.price, 0);
}

/* Task 2.3 - Return an object which tallies the number of items which are healthy, and the number of items which are unhealthy:

{
  healthy: 3,
  unhealthy: 2
}

*/

function tallyHealthyFoods(groceries) {
  // return groceries.reduce(
  //   (acc, cur) => {
  //     //     //   if (acc[cur.healthy] === true) {
  //     //     //     cur + 1;
  //     //     //   }
  //     //     //   return acc;
  //     //     // }, {});
  //     if (cur.healthy === true) {
  //       healthy = acc.healthy + 1;
  //       console.log(healthy);
  //     } else {
  //       unhealthy = acc.healthy + 1;
  //       console.log(unhealthy);
  //     }
  //   },
  //   { healthy: 0, unhealthy: 0 }
  // );
  return groceries.reduce(
    (acc, cur) => {
      cur.healthy //=== true
        ? { ...acc, healthy: acc.healthy + 1 }
        : { ...acc, unhealthy: acc.unhealthy + 1 };
    },
    { healthy: 0, unhealthy: 0 }
  );
}

module.exports = {
  getItemList,
  calculateTotalCost,
  tallyHealthyFoods,
};

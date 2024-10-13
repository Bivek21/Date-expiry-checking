// // const today = new Date();
// const today = Date.now();
// console.log(today);
// const today = new Date("2020-8-29");
// const data = today.getMonth();
// console.log(data);
const milliSecPerDay = 24 * 60 * 60 * 1000;
const checkExp = ({ name, exp }) => {
  console.log(name, exp);

  const today = Date.now();
  const expts = new Date(exp).getTime();
  console.log(today, expts);
  const diffDay = Math.floor((expts - today) / milliSecPerDay);
  console.log(diffDay);
  if (diffDay < 1) {
    return `${name} is expired 4 days ago`;
  } else {
    return `You have ${diffDay} days to used this product`;
  }
};

const food = [
  {
    name: "Tuna",
    exp: "2024-3-25",
  },
  {
    name: "Milk",
    exp: "2025-4-25",
  },
];
food.map((food, i) => {
  console.log(food, i);
  const result = checkExp(food);
  console.log(result);
});

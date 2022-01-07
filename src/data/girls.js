const girls = [
  { id: 1, name: "anna", image: "anna.jpeg", visible: true },
  { id: 2, name: "carrie", image: "carrie.jpeg", visible: true },
  { id: 3, name: "bella", image: "bella.jpeg", visible: true },
  { id: 4, name: "daisy", image: "daisy.jpeg", visible: true },
  { id: 5, name: "emma", image: "emma.jpeg", visible: true },
  { id: 6, name: "fancy", image: "fancy.jpeg", visible: true },
  { id: 7, name: "gwen", image: "gwen.jpeg", visible: true },
  { id: 8, name: "hannah", image: "hannah.jpeg", visible: true },
];

export const shuffleArray = (arr) => {
  return arr.sort(function (a, b) {
    return 0.5 - Math.random();
  });
};

// let allGirls = girls.concat(girls);

// let girlsArray = allGirls.sort(function (a, b) {
//   return 0.5 - Math.random();
// });

const girlsArray = shuffleArray(girls.concat(girls));

export default girlsArray;

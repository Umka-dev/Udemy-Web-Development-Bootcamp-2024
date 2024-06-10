// An example of destructuring data from the file

// import animals from "./data";

// console.log(animals);
// const [name, sound] = ["cat", "meow"];
// const [cat, dog] = animals;
// console.log(cat);
// console.log(dog);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// console.log(cars);

const [honda, tesla] = cars;
// console.log(honda);
// console.log(tesla);

// Destructuring for Honda
// console.log(honda.model);
// console.log(honda.coloursByPopularity);
// console.log(honda.speedStats);

// const [hondaTopColour] = honda.coloursByPopularity;
// console.log(hondaTopColour);
const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour],
} = honda;
console.log(hondaTopSpeed);

// Destructuring for Tesla
// console.log(tesla.model);
// console.log(tesla.coloursByPopularity);
// console.log(tesla.speedStats);

// const [teslaTopColour] = tesla.coloursByPopularity;
// console.log(teslaTopColour);
const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour],
} = tesla;
console.log(teslaTopSpeed);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

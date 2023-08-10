const svgElements = document.querySelectorAll("svg:not(.no-shadow)");
const svgInHero = document.querySelectorAll(".side svg");
const imgMiddles = document.querySelectorAll(".Whole-mid-sec img");

svgElements.forEach((svg) => {
  const randomValue1 = getRandomValue(10, 20); // Adjust the range as needed
  const randomValue2 = getRandomValue(5, 10); // Adjust the range as needed

  svg.style.animation = `wiggle ${randomValue1}s ease-in-out infinite`;
});

// svgInHero.forEach((svg) => {
//   const randomValue1 = getRandomValue(3, 5); // Adjust the range as needed

//   // svg.style.transform = "scale("1")";
// });

imgMiddles.forEach((img) => {
  const randomValue1 = getRandomValue(10, 20); // Adjust the range as needed
  const randomValue2 = getRandomValue(5, 10); // Adjust the range as needed

  img.style.animation = `wiggle ${randomValue1}s ease-in-out infinite`;
});

function getRandomValue(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

const compareControl = document.querySelector("#compareControl");
const blurControl = document.querySelector("#blurControl");
const grayscaleControl = document.querySelector("#grayscaleControl");
const image = document.querySelector(".original");
const imageModified = document.querySelector(".modified");
// console.log(blurControl, image);

filter = {
  compare: 50,
  blur: 0,
  grayscale: 1,
};

updateFilter();

image.addEventListener("mousemove", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = ((e.clientX - rect.left) * 100) / rect.width; //x position within the element.
  filter.compare = x;
  updateFilter();
});

compareControl.addEventListener("input", (e) => {
  filter.compare = e.target.value;
  updateFilter();
});

blurControl.addEventListener("input", (e) => {
  filter.blur = e.target.value;
  updateFilter();
});

grayscaleControl.addEventListener("input", (e) => {
  filter.grayscale = e.target.value / 100;
  console.log(filter);
  updateFilter();
});

function updateFilter() {
  const cssValue = `blur(${filter.blur}px) grayscale(${filter.grayscale})`;
  image.style.webkitFilter = cssValue;

  const compareValue = `polygon(0 0, ${filter.compare}% 0, ${filter.compare}% 100%, 0% 100%)`;
  imageModified.style.clipPath = compareValue;
}

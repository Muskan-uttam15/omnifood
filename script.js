console.log("hello world");

const myName = "Muskan";
const h1 = document.querySelector(".heading-primary");
console.log(h1);
console.log(myName);

// h1.addEventListener("click", function () {
//   h1.textcontent = myName;
//   h1.style.backgroundColor = "blue";
//   h1.style.padding = "5rem";
// });

// set current year ///////

const yearEl = document.querySelector(".year");
const currentyear = new Date().getFullYear();
console.log(currentyear);
yearEl.textContent = currentyear;
/////////////////////////////////////////////////////

//  make mobile navigation work////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

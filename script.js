console.log("hello body");

const list = document.getElementById("list");
const mobile = document.getElementById("mobile");
console.log(mobile);
if (mobile) {
  mobile.addEventListener("click", () => {
    list.classList.toggle("active");
  });
}

var firstChild = mobile.firstChild;
firstChild.addEventListener("click", () => {
  firstChild.classList.toggle("fa-bars");
  firstChild.classList.toggle("fa-xmark");
});

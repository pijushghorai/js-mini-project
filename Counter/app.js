const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
// console.log(btns);
// const decrease = document.querySelector(".decrease")
// const reset = document.querySelector(".reset")
// const increase = document.querySelector(".increase")

let counter = 0;

// increase.addEventListener("click", function() {
//     counter = counter + 1;
//     value.innerText = counter
// })

// decrease.addEventListener("click", function() {
//     counter = counter - 1
//     value.innerText = counter
// })

// reset.addEventListener("click", function() {
//     counter = 0
//     value.innerText = counter
// })

btns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      counter = counter - 1;
    } else if (styles.contains("increase")) {
      counter = counter + 1;
    } else {
      counter = 0;
    }
    if (counter > 0) {
      value.style.color = "green";
    } else if (counter < 0) {
      value.style.color = "red";
    }
    value.textContent = counter;
  });
});

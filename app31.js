let spans = Array.from(document.querySelectorAll("span"));

let button = document.querySelector("button");

button.addEventListener("click", function () {
  for (let i in spans) {
    if (spans[i].classList.contains("rot1")) {
      spans[i].classList.remove("rot1");
      spans[i].classList.add("rot2");

    }else if(spans[i].classList.contains("rot2")){
        spans[i].classList.remove("rot2");
        spans[i].classList.add("rot1");
    }
  }
});

// function removeRot1() {
//   for (let i in spans) {
//     spans[i].classList.remove("rot1");
//   }
// }
// function removeRot2() {
//   for (let i in spans) {
//     spans[i].classList.remove("rot");
//   }
// }
// for (let i in spans) {
//     spans[i].classList.add("rot");
//   }

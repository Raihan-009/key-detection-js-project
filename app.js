const background = document.querySelector(".background");
document.addEventListener("keydown", (e) => {
  background.classList.add("active");
  console.log(e);
});

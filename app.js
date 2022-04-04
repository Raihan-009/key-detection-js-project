const background = document.querySelector(".background");
document.addEventListener("keydown", (e) => {
  // console.log(e);
  background.classList.add("active");

  let keyname = e.keyCode === 32 ? "Space" : e.keyCode;
  background.querySelector(".key-code").innerHTML = e.key;
  background.querySelector(".key-name").innerHTML = keyname;
  background.querySelector(".key span").innerHTML = keyname;
  background.querySelector(".code span").innerHTML = e.keyCode;
});

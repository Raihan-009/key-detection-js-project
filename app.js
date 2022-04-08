const background = document.querySelector(".background");
document.addEventListener("keydown", (e) => {
  console.log(e);
  background.classList.add("active");

  //let keyname = e.keyCode === 32 ? "Space" : e.keyCode;

  let keyname = e.keyCode;
  let code = e.key;
  if (e.keyCode == 32) {
    keyname = 32;
    code = "space";
  }
  background.querySelector(".key-code").innerHTML = keyname;
  background.querySelector(".key-name").innerHTML = code;
  background.querySelector(".key span").innerHTML = code;
  background.querySelector(".code span").innerHTML = keyname;
});

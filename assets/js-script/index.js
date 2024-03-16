document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  const body = document.querySelector("body");
  // const formDiv = document.querySelector(".formDiv");
  const form = document.querySelector("form");
  // console.log(body);
  const loginButton = document.querySelector(".connectYs");
  loginButton.addEventListener("click", (e) => {
    body.classList.toggle("contactForm");
    // formDiv.classList.toggle("contactForm");
    form.style.display = "inherit";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  const loginButton = document.querySelector(".connectYs");
  loginButton.addEventListener("click", (e) => {
    console.log(loginButton);
    console.log(e);
    loginButton.classList.add(".color-red");
  });
});

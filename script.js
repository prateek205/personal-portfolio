// navbar
let navbar = document.querySelector("nav");
let menulinks = document.getElementById("menu-links");

function openmenu() {
  menulinks.classList.toggle("show-menu");
}

window.onscroll = function () {
  if (window.scrollY > 0) {
    navbar.style.background = "#000";
  } else {
    navbar.style.background = "hidden";
  }
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzf2K_MCRYdsMF0LJzwk1czoq8KGZGANHTWrwZYUwQZflBR19-L9NUUr3zrPzZu0c_E4A/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully !!!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000)
      form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});

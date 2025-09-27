const shareBtn = document.getElementById("shareBtn");     
const shareBtnInside = document.getElementById("shareBtnInside");
const shareMenu = document.getElementById("shareMenu");
const footer = document.querySelector(".card__footer");

shareMenu.style.display = "none";

function toggleShareMenu() {
  footer.classList.toggle("active");

  if (footer.classList.contains("active")) {
    shareMenu.style.display = "flex";
  } else {
    shareMenu.style.display = "none";
  }
}

shareBtn.addEventListener("click", toggleShareMenu);
shareBtnInside.addEventListener("click", toggleShareMenu);
 
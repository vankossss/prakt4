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

shareBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleShareMenu();
});

shareBtnInside.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleShareMenu();
});

document.addEventListener("click", (e) => {
  if (footer.classList.contains("active") && !shareMenu.contains(e.target) && !shareBtn.contains(e.target)) {
    footer.classList.remove("active");
    shareMenu.style.display = "none";
  }
});

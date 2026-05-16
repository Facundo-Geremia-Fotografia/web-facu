// =========================
// ARCHIVO: script.js
// =========================

// FILTRO GALERIA
const buttons = document.querySelectorAll(".categories button");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    items.forEach(item => {

      if(filter === "all"){
        item.style.display = "block";
      } else {

        if(item.classList.contains(filter)){
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }

      }

    });

  });

});

// FADE IN
const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }

  });

});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

// PARALLAX SUAVE
window.addEventListener("scroll", () => {

  const scrolled = window.pageYOffset;

  document.querySelector(".hero").style.backgroundPositionY =
    -(scrolled * 0.2) + "px";

});
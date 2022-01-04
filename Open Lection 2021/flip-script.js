var flip = document.querySelector(".animation");

console.log(flip);

flip.addEventListener("click", function(evt) {
  evt.preventDefault();
  flip.classList.add("animation-watch");
});

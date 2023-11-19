var flip = document.querySelectorAll(".animation");

console.log(flip);
for (let i = 0;i< flip.length; i++) {
  console.log(flip[i]);

  flip[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  flip[i].classList.add("animation-watch");
  setTimeout(function() {flip[i].classList.remove("animation-watch")}, 1000);
});
};

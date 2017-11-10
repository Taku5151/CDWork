function imageLoaded() {
  console.log("Enhance Picture Loaded!");
}
function onLoad() {
  const img = document.querySelector("img");
  img.style.opacity = "1.0";
  img.addEventListener("transitionend", imageLoaded);
}
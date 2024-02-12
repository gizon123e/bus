const bars = document.getElementById("bars");
const dropdown = document.getElementById("dropdown");

bars.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", function() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.textContent = "Light";
  } else {
    toggle.textContent = "Dark";
  }
});
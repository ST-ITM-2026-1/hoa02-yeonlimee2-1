const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.textContent = "Light";
}

toggle.addEventListener("click", function() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.textContent = "Light";
    localStorage.setItem("theme", "dark");
  } else {
    toggle.textContent = "Dark";
    localStorage.setItem("theme", "light");
  }
});
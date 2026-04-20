function filterProjects(category) {
  const projects = document.querySelectorAll(".project");

  projects.forEach(function(project) {
    if (category === "all") {
      project.style.display = "block";
    } else if (project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
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

const username = "yeonlimee2";

fetch("https://api.github.com/users/" + username)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.getElementById("avatar").src = data.avatar_url;
    document.getElementById("name").textContent = data.name;
    document.getElementById("bio").textContent = data.bio;
    document.getElementById("repository").textContent = data.public_repos;
    document.getElementById("followers").textContent = data.followers;
    document.getElementById("following").textContent = data.following;
  })
  .catch(function() {
    document.getElementById("error-message").textContent = "Failed to load profile.";
  });

fetch("https://api.github.com/users/" + username + "/repos")
  .then(function(response) {
    return response.json();
  })
  .then(function(repos) {
    const repoList = document.getElementById("repo-list");
    repos.forEach(function(repo) {
      const card = document.createElement("div");
      card.className = "repo-card";
      const title = document.createElement("h3");
      const link = document.createElement("a");
      link.href = repo.html_url;
      link.textContent = repo.name;
      link.target = "_blank";
      title.appendChild(link);
      const desc = document.createElement("p");
      desc.textContent = repo.description;
      const lang = document.createElement("p");
      lang.textContent = "Language: " + repo.language;
      const stats = document.createElement("p");
      stats.textContent = "Stars: " + repo.stargazers_count + ", Forks: " + repo.forks_count;
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(lang);
      card.appendChild(stats);
      repoList.appendChild(card);
    });
  })
  .catch(function() {
    document.getElementById("error-message").textContent = "Failed to load repositories.";
  });
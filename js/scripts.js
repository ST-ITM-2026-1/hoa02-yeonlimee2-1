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
  });
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");


var getUserRepos = function(user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a get request to url
  fetch(apiUrl).then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        displayRepos(data, user);
      });
    } else {
      alert("Error: GitHub User Not Found");
    }
  });
};


var formSubmitHandler = function(event) {
    event.preventDefault();
  // get value from input element
  var username = nameInputEl.value.trim();
    if (username) {
      //getUserRepos(username);
      nameInputEl.value = "";
    } else {
      alert("Please enter a GitHub username");
    }

};

userFormEl.addEventListener("submit", formSubmitHandler);

function displayInfo(name, code, job) {
  var infoContainer = document.getElementById("info-container");
  var infoText = document.getElementById("image-info");
  
  infoText.innerHTML = "<strong><centered>Name:</centered></strong> " + name + "<br>" +
                       "<strong>Code:</strong> " + code + "<br>" +
                       "<strong>Job:</strong> " + job;

  infoContainer.classList.remove("hidden");
}

document.addEventListener("click", function(event) {
  var infoContainer = document.getElementById("info-container");
  var container = document.getElementById("content");

  if (!infoContainer.contains(event.target)) {
    infoContainer.classList.add("hidden");
    container.classList.remove("centered");
  }
});

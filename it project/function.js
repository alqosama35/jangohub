function displayInfo(name, code, job) {
  var infoContainer = document.getElementById("info-container");
  var infoText = document.getElementById("image-info");
  
  // Set the text content of the info paragraph
  infoText.innerHTML = "<strong>Name:</strong> " + name + "<br>" +
                       "<strong>Code:</strong> " + code + "<br>" +
                       "<strong>Job:</strong> " + job;

  // Remove the 'hidden' class to display the info container
  infoContainer.classList.remove("hidden");
}

// Optional: Close info container when clicking outside
window.addEventListener("click", function(event) {
  var infoContainer = document.getElementById("info-container");
  if (!infoContainer.contains(event.target)) {
    infoContainer.classList.add("hidden");
  }
});

function displayInfo(name, code, job) {
  var infoContainer = document.getElementById("info-container");
  var infoText = document.getElementById("image-info");
  
  infoText.innerHTML = "<strong><centered>Name:</centered></strong> " + name + "<br>" +
                       "<strong>Code:</strong> " + code + "<br>" +
                       "<strong>Job:</strong> " + job;
                      
  infoContainer.classList.remove("hidden");
};console.log(document.getElementById("theme"));
document.getElementById("theme").addEventListener("click", function() {
  console.log("Button clicked");
  var currentCSS = document.getElementById("css-link").getAttribute("href");
  if (currentCSS === "CSS/contact light.css") {
      document.getElementById("css-link").setAttribute("href", "CSS/contact dark.css");
  } else {
      document.getElementById("css-link").setAttribute("href", "CSS/contact light.css");
  }
});

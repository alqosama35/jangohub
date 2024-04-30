document.getElementById("theme").addEventListener("click", function() {
  var currentCSS = document.getElementById("css-link").getAttribute("href");
  if (currentCSS === "CSS/live.css") {
      document.getElementById("css-link").setAttribute("href", "CSS/livedark.css");
  } else {
      document.getElementById("css-link").setAttribute("href", "CSS/live.css");
  }
});
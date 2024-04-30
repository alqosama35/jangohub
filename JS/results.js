document.getElementById("theme").addEventListener("click", function() {
    var currentCSS = document.getElementById("css-link").getAttribute("href");
    if (currentCSS === "CSS/results.css") {
        document.getElementById("css-link").setAttribute("href", "CSS/resultsdark.css");
    } else {
        document.getElementById("css-link").setAttribute("href", "CSS/results.css");
    }
  });
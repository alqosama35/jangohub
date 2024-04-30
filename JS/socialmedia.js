document.getElementById("theme").addEventListener("click", function() {
    var currentCSS = document.getElementById("css-link").getAttribute("href");
    if (currentCSS === "CSS/socialmedia.css") {
        document.getElementById("css-link").setAttribute("href", "CSS/socialmediad.css");
    } else {
        document.getElementById("css-link").setAttribute("href", "CSS/socialmedia.css");
    }
  });
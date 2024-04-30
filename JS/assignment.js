document.getElementById("sticky").addEventListener("click", function() {
    var currentCSS = document.getElementById("css-link").getAttribute("href");
    if (currentCSS === "CSS/assignment.css") {
        document.getElementById("css-link").setAttribute("href", "CSS/assignmentdark.css");
    } else {
        document.getElementById("css-link").setAttribute("href", "CSS/assignment.css");
    }
  });
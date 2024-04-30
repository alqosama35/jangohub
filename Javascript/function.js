  document.getElementById('complaint-form').addEventListener('submit', function(event) {
      event.preventDefault();

      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var complaint = document.getElementById('complaint').value;

      var complaintsContainer = document.getElementById('complaints-container');
      var newComplaint = document.createElement('div');
      newComplaint.innerHTML = '<strong>Name:</strong> ' + name + '<br>' +
                               '<strong>Email:</strong> ' + email + '<br>' +
                               '<strong>Complaint:</strong> ' + complaint + '<hr>';
      complaintsContainer.appendChild(newComplaint);


      document.getElementById('complaint-form').reset();
    });
    console.log(document.getElementById("theme"));
    document.getElementById("theme").addEventListener("click", function() {
      console.log("Button clicked");
      var currentCSS = document.getElementById("css-link").getAttribute("href");
      if (currentCSS === "CSS/contact light.css") {
          document.getElementById("css-link").setAttribute("href", "CSS/contact dark.css");
      } else {
          document.getElementById("css-link").setAttribute("href", "CSS/contact light.css");
      }
    });

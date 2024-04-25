document.addEventListener("DOMContentLoaded", function() {
    const icon = document.getElementById('list_icon');
    const slide = document.getElementById('slide');
    const xmark = document.getElementById('list_xicon')
  
    // Toggle the visibility of the container when the icon is clicked
    icon.addEventListener('click', function() {
      slide.classList.toggle('active');
        xmark.classList.toggle('active');
    });
    xmark.addEventListener('click', function() {
        slide.classList.toggle('active');
        xmark.classList.toggle('active');
      });
  });
  
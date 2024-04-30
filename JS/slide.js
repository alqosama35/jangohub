document.addEventListener("DOMContentLoaded", function() {
    const icon = document.getElementById('list_icon');
    const slide = document.getElementById('slide');
    const xmark = document.getElementById('list_xicon')
  

    icon.addEventListener('click', function() {
      slide.classList.toggle('active');
        xmark.classList.toggle('active');
    });
    xmark.addEventListener('click', function() {
        slide.classList.toggle('active');
        xmark.classList.toggle('active');
      });
  });
  
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
      alert(`You clicked on ${icon.querySelector('p').textContent}`);
    });
  });
  
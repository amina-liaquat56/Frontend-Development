toggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  toggleBtn.textContent = body.classList.contains('dark-mode') 
    ? 'Toggle Light Mode' 
    : 'Toggle Dark Mode';
});

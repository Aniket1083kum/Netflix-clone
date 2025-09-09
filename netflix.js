
document.querySelectorAll('.info-btn').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const answer = document.getElementById(targetId);
      const icon = button.querySelector('i');

      // Toggle visibility
      answer.classList.toggle('show');

      // Toggle icon rotation
      icon.classList.toggle('rotate');
    });
  });


document.addEventListener('DOMContentLoaded', function () {
const header = document.querySelector('.site-header');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) { // If scrolled more than 50px
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  });


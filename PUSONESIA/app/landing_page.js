window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('.web-section');
    let navLinks = document.querySelectorAll('.navbar-nav a');
  
    sections.forEach((section, index) => {
      let top = section.offsetTop;
      let height = section.offsetHeight;
      if (pageYOffset >= top && pageYOffset < top + height) {
        navLinks[index].classList.add('active');
        navLinks[index].setAttribute("aria-current", "page");
      } else {
        navLinks[index].classList.remove('active');
        navLinks[index].removeAttribute("aria-current");
      }
    });
  });
  
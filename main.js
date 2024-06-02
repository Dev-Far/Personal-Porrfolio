document.addEventListener('DOMContentLoaded', () => {
  const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  };

  document.getElementById('link').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('.about-1');
  });

  document.getElementById('link1').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('.features');
  });

  document.getElementById('link2').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('.pricing-h');
  });

  document.getElementById('link3').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('.skills');
  });
});

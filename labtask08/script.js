document.addEventListener('DOMContentLoaded', function () {
  const lazyImgs = document.querySelectorAll('img.lazy');

  if (!('IntersectionObserver' in window)) {
    lazyImgs.forEach(loadImage);
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px 200px 0px',
    threshold: 0.01
  };

  const observer = new IntersectionObserver(onIntersect, observerOptions);

  lazyImgs.forEach(img => observer.observe(img));

  function onIntersect(entries, obs) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        obs.unobserve(img);
        loadImage(img);
      }
    });
  }

  function loadImage(img) {
    const src = img.dataset.src;
    if (!src) return;
    img.addEventListener('load', function onLoad() {
      img.classList.add('loaded');
      img.classList.remove('lazy');
      img.removeEventListener('load', onLoad);
    });
    img.src = src;
  }
});

document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.splide', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 4000,
      pauseOnHover: false,
      pauseOnFocus: false,
      arrows: true,
      pagination: true,
    });
  
    const bar = splide.root.querySelector('.my-slider-progress-bar');
  
    splide.on('mounted move', () => {
      const end = splide.Components.Controller.getEnd() + 1;
      const rate = Math.min((splide.index + 1) / end, 1);
      bar.style.width = `${100 * rate}%`;
    });
  
    splide.mount();
  });
  
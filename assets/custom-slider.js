class SplideSlider extends HTMLElement {
  constructor() {
    super();

    
    console.log(this.element);
    this.splideList = this.querySelectorAll(".splide__list");
    console.log('from custom element',this.splideList);
    this.initializeSlider();

    console.log(this.splideList);
  }

  initializeSlider() {
      document.addEventListener("DOMContentLoaded", function () {
        this.element = this.querySelector(".splide");
      var splide = new Splide(this.element, {
        type: "slide",
        perPage: 4,
        gap: "24px",
        pagination: false,
        breakpoints: {
          1200: { perPage: 2, gap: "1rem" },
          640: { perPage: 1, gap: 0 },
        },
        perMove: 1
      });
      splide.mount();
    });
  }
}

customElements.define("splide-slider", SplideSlider);


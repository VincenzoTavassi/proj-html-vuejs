const { createApp } = Vue;

createApp({
  data() {
    return {
      headerLinks: [
        { text: "home", active: true, link: "#" },
        { text: "shop", active: false, link: "#" },
        { text: "about", active: false, link: "#our-products" },
        { text: "gallery", active: false, link: "#" },
        { text: "locations", active: false, link: "#locations" },
        { text: "journal", active: false, link: "#" },
        { text: "contacts", active: false, link: "#" },
        { text: "my account", active: false, link: "#" },
      ],
      footerLinks: [
        { text: "home", active: false, link: "#" },
        { text: "shop", active: false, link: "#" },
        { text: "about", active: false, link: "#our-products" },
        { text: "gallery", active: false, link: "#" },
        { text: "locations", active: false, link: "#locations" },
        { text: "journal", active: false, link: "#" },
        { text: "contacts", active: false, link: "#" },
        { text: "orders", active: false, link: "#" },
      ],
      products: [
        {
          text: "Choco Chips Cookies",
          category: "cookies, pastries",
          price: "$19.00 - $39.00",
          img: "./img/choco-chip-cookies.jpg",
        },
        {
          text: "Strawberry Jam Cookies",
          category: "cookies, pastries",
          price: "$24.00 - $62.00",
          img: "./img/strawberry-jam-cookies.jpg",
        },
        {
          text: "Strawberry Donut",
          category: "pastries",
          price: "$24.00 - $42.00",
          img: "./img/strawberry-donut.jpg",
        },
        {
          text: "Perfect Macarons",
          category: "cookies",
          price: "$18.00 - $52.00",
          img: "./img/perfect-macarons.jpg",
        },
        {
          text: "Glazed Pancake",
          category: "pastries",
          price: "$28.00 - $56.00",
          img: "./img/glazed-pancake-with-lemon.jpg",
        },
        {
          text: "Cookies with ice cream",
          category: "pastries - cookies",
          price: "$21.00 - $36.00",
          img: "./img/cookies-with-ice-cream.jpg",
        },
        {
          text: "Blackberry Bread",
          category: "bread",
          price: "$21.00 - $36.00",
          img: "./img/blackberry-stuffed-bread.jpg",
        },
        {
          text: "Home Bread",
          category: "bread",
          price: "$21.00 - $36.00",
          img: "./img/home-bread.jpg",
        },
      ],
      pastries: [
        {
          text: "Choco Chips Cookies",
          category: "cookies, pastries",
          price: "$19.00 - $39.00",
          img: "./img/choco-chip-cookies.jpg",
        },
        {
          text: "Strawberry Jam Cookies",
          category: "cookies, pastries",
          price: "$24.00 - $62.00",
          img: "./img/strawberry-jam-cookies.jpg",
        },
        {
          text: "Strawberry Donut",
          category: "pastries",
          price: "$24.00 - $42.00",
          img: "./img/strawberry-donut.jpg",
        },
        {
          text: "Perfect Macarons",
          category: "cookies",
          price: "$18.00 - $52.00",
          img: "./img/perfect-macarons.jpg",
        },
        {
          text: "Glazed Pancake",
          category: "pastries",
          price: "$28.00 - $56.00",
          img: "./img/glazed-pancake-with-lemon.jpg",
        },
        {
          text: "Cookies with ice cream",
          category: "pastries - cookies",
          price: "$21.00 - $36.00",
          img: "./img/cookies-with-ice-cream.jpg",
        },
        {
          text: "Cherry Cake",
          category: "cakes",
          price: "$71.00 - $96.00",
          img: "./img/cherry-cake.jpg",
        },
      ],
      logo: "./img/avada-bakery-logo.png",
      orderCount: 2,
      activeProducts: [0, 1],
      productSlider: [0, 1, 2, 3],
    };
  },
  computed: {
    firstTopSlide() {
      return this.pastries[this.activeProducts[0]];
    },
    secondTopSlide() {
      return this.pastries[this.activeProducts[1]];
    },
  },
  methods: {
    moveForward() {
      if (this.activeProducts[1] + 1 < this.pastries.length) {
        this.activeProducts[0] = this.activeProducts[1];
        this.activeProducts[1]++;
      } else {
        this.activeProducts[0] = this.pastries.length - 1;
        this.activeProducts[1] = 0;
      }
    },
    moveBack() {
      if (this.activeProducts[0] - 1 < 0) {
        this.activeProducts[0] = this.pastries.length - 1;
        this.activeProducts[1] = 0;
      } else {
        this.activeProducts[1] = this.activeProducts[0];
        this.activeProducts[0]--;
      }
    },
    sliderForward() {
      if (this.productSlider[3] + 1 < this.products.length) {
        this.productSlider[0] = this.productSlider[1];
        this.productSlider[1]++;
        this.productSlider[1] = this.productSlider[2];
        this.productSlider[2]++;
        this.productSlider[2] = this.productSlider[3];
        this.productSlider[3]++;
      } else {
        this.productSlider[3] = 0;
        this.productSlider[2] = this.products.length - 1;
        this.productSlider[1] = this.products.length - 2;
        this.productSlider[0] = this.products.length - 3;
      }
    },
    sliderBack() {
      if (this.productSlider[0] - 1 >= 0) {
        this.productSlider[3] = this.productSlider[2];
        this.productSlider[2]--;
        this.productSlider[2] = this.productSlider[1];
        this.productSlider[1]--;
        this.productSlider[1] = this.productSlider[0];
        this.productSlider[0]--;
      } else {
        this.productSlider[0] = this.products.length - 1;
        this.productSlider[1] = 0;
        this.productSlider[2] = 1;
        this.productSlider[3] = 2;
      }
    },
  },
}).mount("#root");

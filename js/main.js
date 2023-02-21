const { createApp } = Vue;

createApp({
  data() {
    return {
      headerLinks: [
        { text: "home", active: true, link: "#" },
        { text: "shop", active: false, link: "#" },
        { text: "about", active: false, link: "#" },
        { text: "gallery", active: false, link: "#" },
        { text: "locations", active: false, link: "#locations" },
        { text: "journal", active: false, link: "#" },
        { text: "contacts", active: false, link: "#" },
        { text: "my account", active: false, link: "#" },
      ],
      footerLinks: [
        { text: "home", active: false, link: "#" },
        { text: "shop", active: false, link: "#" },
        { text: "about", active: false, link: "#" },
        { text: "gallery", active: false, link: "#" },
        { text: "locations", active: false, link: "#locations" },
        { text: "journal", active: false, link: "#" },
        { text: "contacts", active: false, link: "#" },
        { text: "orders", active: false, link: "#" },
      ],
      orderCount: 2,
    };
  },
}).mount("#root");

console.log(Vue);

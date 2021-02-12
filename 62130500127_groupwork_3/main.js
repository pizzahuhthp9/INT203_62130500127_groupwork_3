console.log('vue is running');
const app = {
  data() {
    return {
      thumbnails: [
        {
          name: "A Pic",
          src: "images/1.jpg",
          like: 123,
          toggle: false
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 0,
          toggle: false
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 999,
          toggle: true
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 1000,
          toggle: true
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 10,
          toggle: true
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 7,
          toggle: false
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 9,
          toggle: false
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 285,
          toggle: true
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 228,
          toggle: false
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 299,
          toggle: false
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 9999,
          toggle: false
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 123456,
          toggle: true
        },
      ],
    };
  },
};
Vue.createApp(app).mount("#app");

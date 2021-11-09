import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    disable() {
      const maxWidth = 600;
      return window.innerWidth < maxWidth;
    },
    // offset: 200,
    duration: 600,
    easing: "ease-in-out-cubic",
    once: true
  }); // or any other options you need
};

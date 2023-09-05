import "./styles/tabs.css";
class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = document.querySelectorAll(".trigger");
  }
  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          this.toggleTab(e);
          this.toggleContent(e);
        }
      });
    });
  }
  toggleTab(e) {
    console.log("e", e);
    this.tabs.forEach((item) => {
      console.log("item", item);
      item.classList.remove("active");
    });
    //  this.tabs.forEach((tab) => tab.classList.remove("active"));
    e.target.classList.add("active");
  }

  toggleContent(e) {
    this.container.querySelectorAll(".content").forEach((item) => {
      item.classList.remove("active");
    });
    const selector = e.target.getAttribute("data-target");
    const content = this.container.querySelector(selector);
    content.classList.add("active");
  }
}

export default Tabs;

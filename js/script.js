import tabs from "./modules/tabs.js";
import shadows from "./modules/shadowsData.js";

import addShaddow from "./modules/addShadow.js";
import updateBoxShadow from "./modules/boxShadow.js";
import updateTextShadow from "./modules/textShadow.js";
import borderRadius from "./modules/borderRadius.js";
import generateTransition from "./modules/transition.js";
import generateTransform from "./modules/transform.js";

window.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".tabcontent__container")) {
    tabs({
      selectorTab: ".tab__links",
      selectorContent: ".tabcontent__container",
      selectorParent: ".tabcontent",
      activeClass: "active",
    });
  }

  // burger menu
  const burger = document.querySelector(".burger");
  const navigation = document.querySelector(".nav");
  const tabNav = document.querySelector(".tab");

  if (document.querySelector(".burger")) {
    burger.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        this.style.position = "relative";
        navigation.classList.remove("open");
      } else {
        this.classList.add("active");
        this.style.position = "fixed";
        navigation.classList.add("open");
      }
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const tabId = urlParams.get("tab");
  const tabLink = document.querySelectorAll(".tab__links");
  const tabContent = document.querySelectorAll(".tabcontent__container");
  if (tabId) {
    // Деактивируем все табы и контент
    tabLink.forEach((tab) => {
      tab.classList.remove("active");
      // tab.style.display = "none";
    });
    tabContent.forEach((content) => {
      content.classList.remove("active");
      content.style.display = "none";
    });

    // Активируем нужный таб и соответствующий контент
    const selectedTab = document.querySelector(
      `.tab__links[data-tab="${tabId}"]`
    );
    const selectedContent = document.querySelector(
      `.tabcontent__container[data-tab="${tabId}"]`
    );

    if (selectedTab && selectedContent) {
      selectedTab.classList.add("active");
      selectedContent.classList.add("active");
      selectedContent.style.display = "block";
    }
  } else if (document.querySelector(".tabcontent__container")) {
    tabs({
      selectorTab: ".tab__links",
      selectorContent: ".tabcontent__container",
      selectorParent: ".tabcontent",
      activeClass: "active",
    });
  }

  // boxshadow generator (tab Box Shadow)
  if (document.querySelector("#insetBox")) {
    updateBoxShadow();
  }

  // Applying shadows to blocks (tab Examples)
  if (document.querySelector(".tabcontent")) {
    shadows.forEach(addShaddow);
  }

  //text shadow generator (tab Text Shadow)
  if (document.querySelector("#textShadow")) {
    updateTextShadow();
  }

  // border radius generator (tab Border Radius)
  if (document.querySelector("#pixels")) {
    borderRadius();
  }

  // transition
  if (document.querySelector("#transition")) {
    generateTransition();
  }

  // transform
  if (document.querySelector("#transform")) {
    generateTransform();
  }
});

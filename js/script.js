import tabs from "./modules/tabs.js";
import { shadows } from "./modules/shadowsData.js";

import addShaddow from "./modules/addShadow.js";
import { copyToClipboard } from "./modules/addShadow.js";

window.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".tabcontent__container")) {
    tabs({
      selectorTab: ".tab__links",
      selectorContent: ".tabcontent__container",
      selectorParent: ".tabcontent",
      activeClass: "active",
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
    tabs();
  }
});

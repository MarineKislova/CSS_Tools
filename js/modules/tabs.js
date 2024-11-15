function tabs({ selectorTab, selectorContent, selectorParent, activeClass }) {
  const tabs = document.querySelectorAll(selectorTab);
  const tabsContent = document.querySelectorAll(selectorContent);
  const tabsParent = document.querySelector(selectorParent);

  const urlParams = new URLSearchParams(window.location.search);
  const tabId = urlParams.get("tab");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent(0);

  tabs.forEach((item, i) => {
    item.addEventListener("click", () => {
      // if (item.classList.contains(activeClass)) return;
      hideTabContent();
      showTabContent(i);
    });
  });

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains(tabs)) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

export default tabs;

function borderRadius() {
  const input = document.querySelectorAll("[data-pixels]");
  const pixelBtn = document.querySelector("#pixels");
  const percentBtn = document.querySelector("#percent");
  const measurement = document.querySelectorAll("#measurement");
  let unit;
  const topLeft = document.querySelector("#topLeft");
  const topRight = document.querySelector("#topRight");
  const bottomLeft = document.querySelector("#bottomLeft");
  const bottomRight = document.querySelector("#bottomRight");
  const radiusOutput = document.querySelector("#borderRadiusOutput");
  const copyButton = document.getElementById("borderRadiusCopy");

  function setActive(activeId) {
    if (activeId === "pixels") {
      pixelBtn.classList.add("active");
      percentBtn.classList.remove("active");
    } else if (activeId === "percent") {
      percentBtn.classList.add("active");
      pixelBtn.classList.remove("active");
    }
  }

  window.addEventListener("load", () => {
    setActive("pixels");
    input.forEach((input) => {
      input.max = "150";
    });
    measurement.forEach((item) => {
      item.textContent = "px";
      unit = item.textContent;
    });
    addBorderRadius();
  });

  pixelBtn.addEventListener("click", () => {
    setActive("pixels");
    input.forEach((input) => {
      input.max = "150";
    });
    measurement.forEach((item) => {
      item.textContent = "px";
      unit = item.textContent;
    });
    addBorderRadius();
  });

  percentBtn.addEventListener("click", () => {
    setActive("percent");
    input.forEach((input) => {
      input.max = "100";
    });
    measurement.forEach((item) => {
      item.textContent = "%";
      unit = item.textContent;
    });
    addBorderRadius();
  });

  function addBorderRadius() {
    //applying border radius to preview block
    const borderRadiusValue = `${topLeft.value}${unit} ${topRight.value}${unit} ${bottomRight.value}${unit} ${bottomLeft.value}${unit}`;

    // Applying border radius
    const borderRadius = document.querySelector("#borderRadiusPreview");
    borderRadius.style.borderRadius = borderRadiusValue;

    // Updating border radius value in output
    radiusOutput.textContent = `border-radius: ${borderRadiusValue};`;
    // Update values in the inputs
    topLeftValue.textContent = `${topLeft.value}${unit}`;
    topRightValue.textContent = `${topRight.value}${unit}`;
    rightValue.textContent = `${bottomRight.value}${unit}`;
    leftValue.textContent = `${bottomLeft.value}${unit}`;

    topLeft.addEventListener("input", addBorderRadius);
    topRight.addEventListener("input", addBorderRadius);
    bottomRight.addEventListener("input", addBorderRadius);
    bottomLeft.addEventListener("input", addBorderRadius);

    // copy button
    copyButton.addEventListener("click", () => {
      navigator.clipboard.writeText(radiusOutput.textContent);
      copyButton.classList.add("copied");
      copyButton.textContent = "Copied!";
      setTimeout(() => {
        copyButton.classList.remove("copied");
        copyButton.textContent = "Copy";
      }, 1000);
    });
  }

  addBorderRadius();
}

export default borderRadius;

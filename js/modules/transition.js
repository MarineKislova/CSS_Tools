const property = document.querySelector("#property");
const duration = document.querySelector("#duration");
const timingFunction = document.querySelector("#timingFunction");
const transitionPreview = document.querySelector("#transitionPreview");
const transitionOutput = document.querySelector("#transitionOutput");
const transitionCopy = document.querySelector("#transitionCopy");

function generateTransition() {
  // Generate CSS
  const transitionStyle = `${property.value} ${duration.value}s ${timingFunction.value}`;
  transitionPreview.style.transition = transitionStyle;
  transitionOutput.textContent = `transition: ${transitionStyle};`;

  console.log(property.value);

  // Update values in the inputs
  durationValue.textContent = `${duration.value}s`;

  property.addEventListener("input", generateTransition);
  duration.addEventListener("input", generateTransition);
  timingFunction.addEventListener("input", generateTransition);

  // copy button
  transitionCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(transitionOutput.textContent);
    transitionCopy.classList.add("copied");
    transitionCopy.textContent = "Copied!";
    setTimeout(() => {
      transitionCopy.classList.remove("copied");
      transitionCopy.textContent = "Copy";
    }, 1000);
  });

  transitionPreview.addEventListener("mouseover" || "mousedown", () => {
    if (property.value === "all") {
      transitionPreview.style.cssText = `
        transition: ${transitionStyle};
        background-color: rgba(255, 0, 0, 0.5);
        color: rgba(255, 0, 0, 0.7);
        width: 100px;
        opacity: 0.5;
        box-shadow: 5px 9px 12px var(--color-border-hover);
        transform: skewX(10deg);
        border-radius: 5px;
        `;
    }
    if (property.value === "background") {
      transitionPreview.style.cssText = `
        transition: ${transitionStyle};
        background-color: rgba(255, 0, 0, 0.5);
        `;
    }
    if (property.value === "color") {
      transitionPreview.style.cssText = `
        transition: ${transitionStyle};
        color: rgba(255, 0, 0, 0.7);
        `;
    }
    if (property.value === "width") {
      transitionPreview.style.cssText = `
        transition: ${transitionStyle};
        width: 100px;
        `;
    }
    if (property.value === "opacity") {
      transitionPreview.style.cssText = `
        transition: ${transitionStyle};
        opacity: 0.3;
        `;
    }
    if (property.value === "box-shadow") {
      transitionPreview.style.cssText = `
        transition: ${transitionStyle};
        box-shadow: 5px 9px 12px var(--color-border-hover);
        `;
    }
    if (property.value === "transform") {
      transitionPreview.style.cssText = `
        transition: ${transitionStyle};
        transform: translate(12px, 12px);
        `;
    }
    if (property.value === "border-radius") {
      transitionPreview.style.cssText = `
        transition: ${transitionStyle};
        border-radius: 5px;
        `;
    }
    // return;
  });

  transitionPreview.addEventListener("mouseout", () => {
    transitionPreview.style.cssText = `transition: ${transitionStyle};`;
  });
}

export default generateTransition;

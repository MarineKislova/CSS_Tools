const scale = document.querySelector("#scale");
const rotate = document.querySelector("#rotate");
const translateX = document.querySelector("#translateX");
const translateY = document.querySelector("#translateY");
const skewX = document.querySelector("#skewX");
const skewY = document.querySelector("#skewY");
const transformPreview = document.querySelector("#transformPreview");
const transformOutput = document.querySelector("#transformOutput");
const transformCopy = document.querySelector("#transformCopy");
let currentTransform = "none";

function generateTransform() {
  transformOutput.style.height = "max-content";
  document.querySelector("#transform").style.overflow = "clip";

  // initial transform
  window.addEventListener("load", () => {
    transformOutput.textContent = `      
          -webkit-transform: ${currentTransform};
        -moz-transform: ${currentTransform};
      -o-transform: ${currentTransform};
    transform: ${currentTransform};
          `;
  });

  // Generate CSS
  const transformStyle = `scale(${scale.value}) rotate(${rotate.value}deg) translate(${translateX.value}px, ${translateY.value}px)   skew(${skewX.value}deg, ${skewY.value}deg)`;
  transformPreview.style.transform = transformStyle;
  transformOutput.textContent = `
          -webkit-transform: ${transformStyle};
        -moz-transform: ${transformStyle};
      -o-transform: ${transformStyle};
    transform: ${transformStyle};
    `;

  // Update values in the inputs
  xValue.textContent = `${translateX.value}px`;
  yValue.textContent = `${translateY.value}px`;
  scaleValue.textContent = `${scale.value}x`;
  rotateValue.textContent = `${rotate.value}deg`;
  skewXValue.textContent = `${skewX.value}deg`;
  skewYValue.textContent = `${skewY.value}deg`;

  //Update preview block
  transformPreview.style.transform = transformStyle;

  // Copy button
  transformCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(transformOutput.textContent);
    transformCopy.classList.add("copied");
    transformCopy.textContent = "Copied!";
    setTimeout(() => {
      transformCopy.classList.remove("copied");
      transformCopy.textContent = "Copy";
    }, 1000);
  });

  // Update transform on inputs
  scale.addEventListener("input", generateTransform);
  rotate.addEventListener("input", generateTransform);
  translateX.addEventListener("input", generateTransform);
  translateY.addEventListener("input", generateTransform);
  skewX.addEventListener("input", generateTransform);
  skewY.addEventListener("input", generateTransform);
}

export default generateTransform;

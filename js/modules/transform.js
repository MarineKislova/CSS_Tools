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

transformOutput.style.height = "max-content";
document.querySelector('#transform').style.overflow = "clip";

function generateTransformCSS({
  scale,
  rotate,
  translateX,
  translateY,
  skewX,
  skewY,
}) {
  // Create an array for properties transform
  const transformProperties = [];

  // Проверяем каждое значение и добавляем только ненулевые свойства
  if (scale && scale !== 1) transformProperties.push(`scale(${scale})`);
  if (rotate && rotate !== 0) transformProperties.push(`rotate(${rotate}deg)`);
  if ((translateX && translateX !== 0) || (translateY && translateY !== 0)) {
    transformProperties.push(
      `translate(${translateX || 0}px, ${translateY || 0}px)`
    );
  }

  if ((skewX && skewX !== 0) || (skewY && skewY !== 0)) {
    transformProperties.push(`skew(${skewX || 0}deg, ${skewY || 0}deg)`);
  }

  return transformProperties.length > 0
    ? transformProperties.join(" ")
    : "none";
}

function generateTransform() {
  // Update values in the inputs
  xValue.textContent = `${translateX.value}px`;
  yValue.textContent = `${translateY.value}px`;
  scaleValue.textContent = `${scale.value}x`;
  rotateValue.textContent = `${rotate.value}deg`;
  skewXValue.textContent = `${skewX.value}deg`;
  skewYValue.textContent = `${skewY.value}deg`;

  // Update transform on inputs
  scale.addEventListener("input", generateTransform);
  rotate.addEventListener("input", generateTransform);
  translateX.addEventListener("input", generateTransform);
  translateY.addEventListener("input", generateTransform);
  skewX.addEventListener("input", generateTransform);
  skewY.addEventListener("input", generateTransform);

  // Generate CSS and update output
  const cssOutput = generateTransformCSS({
    scale: parseFloat(scale.value) || 1,
    rotate: parseFloat(rotate.value) || 0,
    translateX: parseFloat(translateX.value) || 0,
    translateY: parseFloat(translateY.value) || 0,
    skewX: parseFloat(skewX.value) || 0,
    skewY: parseFloat(skewY.value) || 0,
  });

  if (transformOutput.textContent === "") {
    currentTransform = "none";
    transformPreview.style.transform = "none";
    transformOutput.textContent = `transform: none;`;
  } else {
    transformOutput.textContent = `-webkit-transform: ${cssOutput};
    -moz-transform: ${cssOutput};
    -ms-transform: ${cssOutput};
    -o-transform: ${cssOutput};
    transform: ${cssOutput};`;
  }

  //Update preview block
  transformPreview.style.transform = cssOutput;

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
}

generateTransform();

export default generateTransform;
export { generateTransformCSS };

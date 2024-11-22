//text shadow generator (tab Text Shadow)
const textShadow = document.querySelector("#textShadow");
const hTextShadow = document.querySelector("#horizontalText");
const vTextShadow = document.querySelector("#verticalText");
const blurTextShadow = document.querySelector("#blurText");
const colorTextShadow = document.querySelector("#colorTextShadow");
const colorText = document.querySelector("#textColor");
const textPreview = document.querySelector("#textPreview");
const textOutput = document.querySelector("#textOutput");
const copyButton = document.getElementById("textShadowOutput");

function updateTextShadow() {
  const h = hTextShadow.value;
  const v = vTextShadow.value;
  const blur = blurTextShadow.value;
  const color = colorTextShadow.value;

  textShadow.addEventListener("input", () => {
    textShadow.setAttribute("value", textShadow.value);
    textPreview.textContent = textShadow.value;
  });

  colorText.addEventListener("change", () => {
    colorText.setAttribute("value", colorText.value);
    textPreview.style.color = colorText.value;
  });
  textPreview.style.textShadow = `${h}px ${v}px ${blur}px ${color}`;
  textOutput.textContent = `text-shadow: ${h}px ${v}px ${blur}px ${color}; 
  color: ${colorText.value};`;

  // Update values in the inputs
  horizontalTextValue.textContent = `${h}px`;
  verticalTextValue.textContent = `${v}px`;
  blurTextValue.textContent = `${blur}px`;

  // copy button
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(textOutput.textContent);
    copyButton.classList.add("copied");
    copyButton.textContent = "Copied!";
    setTimeout(() => {
      copyButton.classList.remove("copied");
      copyButton.textContent = "Copy";
    }, 1000);
  });

  hTextShadow.addEventListener("input", updateTextShadow);
  vTextShadow.addEventListener("input", updateTextShadow);
  blurTextShadow.addEventListener("input", updateTextShadow);
  colorTextShadow.addEventListener("input", updateTextShadow);
  colorText.addEventListener("change", updateTextShadow);
}

export default updateTextShadow;

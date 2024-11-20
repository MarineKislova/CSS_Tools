// boxshadow generator (tab Box Shadow)

const hShadow = document.querySelector("#horizontalBox");
const vShadow = document.querySelector("#verticalBox");
const blurShadow = document.querySelector("#blurBox");
const spreadShadow = document.querySelector("#spreadBox");
const colorShadow = document.querySelector("#shadowBoxColor");
const insetBox = document.querySelector("#insetBox");
const cssOutput = document.querySelector("#cssOutput");
const copyButton = document.getElementById("boxShadowOutput");

function updateBoxShadow() {
  const inset = insetBox.checked ? "inset " : "";
  // const copyButton = document.querySelector("copyButton");

  // Update box shadow style
  const boxShadowStyle = `${inset}${hShadow.value}px ${vShadow.value}px ${blurShadow.value}px ${spreadShadow.value}px ${colorShadow.value}`;
  boxShadow.style.boxShadow = boxShadowStyle;

  // Update CSS
  cssOutput.textContent = `box-shadow: ${boxShadowStyle};`;

  // Update values in the inputs
  horizontalBoxValue.textContent = `${hShadow.value}px`;
  verticalBoxValue.textContent = `${vShadow.value}px`;
  blurBoxValue.textContent = `${blurShadow.value}px`;
  spreadBoxValue.textContent = `${spreadShadow.value}px`;

  // copy button
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(cssOutput.textContent);
    copyButton.classList.add("copied");
    copyButton.textContent = "Copied!";
    setTimeout(() => {
      copyButton.classList.remove("copied");
      copyButton.textContent = "Copy";
    }, 1000);
  });

  // Add event listeners to update shadow on input change

  [hShadow, vShadow, blurShadow, spreadShadow, colorShadow, insetBox].forEach(
    (input) => {
      input.addEventListener("input", updateBoxShadow);
    }
  );
}

export default updateBoxShadow;

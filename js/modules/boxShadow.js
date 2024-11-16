// boxshadow generator (tab Box Shadow)

const horizontalInput = document.querySelector("#horizontalBox");
const verticalInput = document.querySelector("#verticalBox");
const blurInput = document.querySelector("#blurBox");
const spreadInput = document.querySelector("#spreadBox");
const colorInput = document.querySelector("#shadowBoxColor");
const insetBox = document.querySelector("#insetBox");
const cssOutput = document.querySelector("#cssOutput");

function updateBoxShadow() {
  const h = horizontalInput.value;
  const v = verticalInput.value;
  const blur = blurInput.value;
  const spread = spreadInput.value;
  const color = colorInput.value;
  const inset = insetBox.checked ? "inset " : "";

  // Обновляем тень у блока
  const boxShadowStyle = `${inset}${h}px ${v}px ${blur}px ${spread}px ${color}`;
  boxShadow.style.boxShadow = boxShadowStyle;

  // Обновляем CSS-код
  cssOutput.textContent = `box-shadow: ${boxShadowStyle};`;

  // Обновляем отображение текущих значений
  horizontalBoxValue.textContent = `${h}px`;
  verticalBoxValue.textContent = `${v}px`;
  blurBoxValue.textContent = `${blur}px`;
  spreadBoxValue.textContent = `${spread}px`;

  // Слушаем изменения на ползунках и цвете
  horizontalInput.addEventListener("input", updateBoxShadow);
  verticalInput.addEventListener("input", updateBoxShadow);
  blurInput.addEventListener("input", updateBoxShadow);
  spreadInput.addEventListener("input", updateBoxShadow);
  colorInput.addEventListener("input", updateBoxShadow);
  insetBox.addEventListener("input", updateBoxShadow);
}

export default updateBoxShadow;

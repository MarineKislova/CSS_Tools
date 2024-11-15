// boxshadow generator (tab Box Shadow)

const horizontalInput = document.querySelector("#horizontal");
const verticalInput = document.querySelector("#vertical");
const blurInput = document.querySelector("#blur");
const spreadInput = document.querySelector("#spread");
const colorInput = document.querySelector("#shadowColor");

function updateBoxShadow() {
  const h = horizontalInput.value;
  const v = verticalInput.value;
  const blur = blurInput.value;
  const spread = spreadInput.value;
  const color = colorInput.value;

  // Обновляем тень у блока
  const boxShadowStyle = `${h}px ${v}px ${blur}px ${spread}px ${color}`;
  boxShadow.style.boxShadow = boxShadowStyle;

  // Обновляем CSS-код
  cssOutput.textContent = `box-shadow: ${h}px ${v}px ${blur}px ${spread}px ${color};`;

  // Обновляем отображение текущих значений
  document.querySelector("#horizontalValue").textContent = `${h}px`;
  verticalValue.textContent = `${v}px`;
  blurValue.textContent = `${blur}px`;
  spreadValue.textContent = `${spread}px`;

  // Слушаем изменения на ползунках и цвете
  horizontalInput.addEventListener("input", updateBoxShadow);
  verticalInput.addEventListener("input", updateBoxShadow);
  blurInput.addEventListener("input", updateBoxShadow);
  spreadInput.addEventListener("input", updateBoxShadow);
  colorInput.addEventListener("input", updateBoxShadow);
}

export default updateBoxShadow;

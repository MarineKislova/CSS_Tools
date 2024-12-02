const shadows = [
  "rgba(149, 157, 165, 0.2) 0 8px 24px",
  "0 7px 29px 0 rgba(100,100,111,.2)",
  "rgba(0,0,0,.15) 1.95px 1.95px 2.6px",
  "0px 5px 15px rgba(0, 0, 0, 0.35)",
  "rgba(0, 0, 0, 0.16) 0 1px 4px",
  "rgba(0, 0, 0, 0.24) 0 3px 8px",
  "0 2px 8px 0 rgba(99,99,99,.2)",
  "rgba(0, 0, 0, 0.16) 0 1px 4px, #333 0 0 0 3px",
  "rgba(0, 0, 0, 0.02) 0 1px 3px 0, rgba(27, 31, 35, 0.15) 0 0 0 1px",
  "rgba(0, 0, 0, 0.1) 0 4px 12px",
  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, .09) 0px -3px 5px",
  "rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px",
  "rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px",
  "rgba(17, 12, 46, 0.15) 0 48px 100px 0",
  "rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px",
  "0 50px 100px -20px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)",
  "0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3)",
  "0 2px 5px -1px rgba(50,50,93,.25), 0 1px 3px -1px rgba(0,0,0,.3)",
  "0 20px 30px -10px #26394d",
  "0 6px 12px -2px rgba(50,50,93,0.25),0 3px 7px -3px rgba(0,0,0,0.3)",
  "0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3)", // dup
  "0 30px 60px -12px rgba(50,50,93,0.25),0 18px 36px -18px rgba(0,0,0,0.3)",
  "0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3)", // dup
  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  "rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px",
  "rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 1px 3px 1px",
  "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "0 0 0 1px rgba(0, 0, 0, 0.05)",
  "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  "0 0 5px 0 rgba(0, 0, 0, 0.1),0 0 1px 0 rgba(0, 0, 0, 0.1)",
  "0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)",
  "0 2px 1px rgba(0,0,0,0.09), 0 4px 2px rgba(0,0,0,0.09), 0 8px 4px rgba(0,0,0,0.09), 0 16px 8px rgba(0,0,0,0.09), 0 32px 16px rgba(0,0,0,0.09)",
  "rgba(0, 0, 0, 0.2) 0 18px 50px -10px",
  "rgba(0, 0, 0, 0.1) 0 10px 50px",
  "rgba(0, 0, 0, 0.04) 0 3px 5px",
  "-5px 5px rgba(240, 46, 170, 0.4), -10px 10px rgba(240, 46, 170, 0.3), -15px 15px rgba(240, 46, 170, 0.2), -20px 20px rgba(240, 46, 170, 0.1), -25px 25px rgba(240, 46, 170, 0.05)",
  "0 5px rgba(240, 46, 170, 0.4), 0 10px rgba(240, 46, 170, 0.3), 0 15px rgba(240, 46, 170, 0.2), 0 20px rgba(240, 46, 170, 0.1), 0 25px rgba(240, 46, 170, 0.05)",
  "5px 5px rgba(240, 46, 170, 0.4), 10px 10px rgba(240, 46, 170, 0.3), 15px 15px rgba(240, 46, 170, 0.2), 20px 20px rgba(240, 46, 170, 0.1), 25px 25px rgba(240, 46, 170, 0.05)",
  "rgba(0, 0, 0, 0.07) 0 1px 1px, rgba(0, 0, 0, 0.07) 0 2px 2px, rgba(0, 0, 0, 0.07) 0 4px 4px, rgba(0, 0, 0, 0.07) 0 8px 8px, rgba(0, 0, 0, 0.07) 0 16px 16px",
  "rgba(67, 71, 85, 0.27) 0 0 .25em, rgba(90, 125, 188, 0.05) 0 .25em 1em",
  "rgba(0,0,0,.1) 0 1px 2px 0",
  "rgba(3, 102, 214, 0.3) 0 0 0 3px",
  "rgba(14, 30, 37, 0.12) 0 2px 4px 0, rgba(14, 30, 37, 0.32) 0 2px 16px 0",
  "rgba(0, 0, 0, 0.15) 0 5px 15px 0",
  "rgba(33, 35, 38, 0.1) 0 10px 10px -10px",
  "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px",
  "6px 2px 16px 0px rgba(136, 165, 191, 0.48) , -6px -2px 16px 0px rgba(255, 255, 255, 0.8)",
  "0px 1px 0px rgba(17,17,26,0.1)",
  "0px 1px 0px rgba(17,17,26,0.05), 0px 0px 8px rgba(17,17,26,0.1)",
  "0px 0px 16px rgba(17,17,26,0.1)",
  "0px 4px 16px rgba(17,17,26,0.05), 0px 8px 32px rgba(17,17,26,0.05)",
  "0px 4px 16px rgba(17,17,26,0.1), 0px 8px 32px rgba(17,17,26,0.05)",
  "0px 1px 0px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 48px rgba(17,17,26,0.1)",
  "0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)",
  "0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1), 0px 24px 80px rgba(17,17,26,0.1)",
  "rgba(50, 50, 105, 0.15) 0 2px 5px 0, rgba(0, 0, 0, 0.05) 0 1px 1px 0",
  "0 15px 25px rgba(0, 0, 0, 0.15),0 5px 10px rgba(0, 0, 0, 0.05)",
  "rgba(0,0,0,.15) 2.4px 2.4px 3.2px",
  "0 3px 3px 0 rgba(0,0,0,0.15)",
  "rgba(0, 0, 0, 0.08) 0 4px 12px",
  "rgba(0, 0, 0, 0.15) 0 2px 8px",
  "rgba(0, 0, 0, 0.18) 0 2px 4px",
  "-4px 9px 25px -6px rgba(0,0,0,.1)",
  "0 60px 40px -7px rgba(0,0,0,.2)",
  "0 30px 90px rgba(0,0,0,0.4)",
  "0 22px 70px 4px rgba(0, 0, 0, 0.56)",
  "0px 20px 30px rgba(0, 0, 0, 0.2)",
  "rgba(0,0,0,0.09) 0px 3px 12px",
  "rgba(0, 0, 0, 0.45) 0 25px 20px -20px",
  "rgba(9, 30, 66, 0.25) 0 1px 1px, rgba(9, 30, 66, 0.13) 0 0 1px 1px",
  "rgba(9, 30, 66, 0.25) 0 4px 8px -2px, rgba(9, 30, 66, 0.08) 0 0 0 1px",
  "0 0 0 1px #0e3f7e0a,0 1px 1px -.5px #2a33450a,0 3px 3px -1.5px #2a33460a,0 6px 6px -3px #2a33460a,0 12px 12px -6px #0e3f7e0a,0 24px 24px -12px #0e3f7e0a",
  "0 0 0 1px #0e3f7e0f,0 1px 1px -.5px #2a334608,0 2px 2px -1px #2a33460a,0 3px 3px -1.5px #2a33460a,0 5px 5px -2.5px #2a334608,0 10px 10px -5px #2a334608,0 24px 24px -8px #2a334608",
  "0 20px 10px -20px rgba(0,0,0,0.45) inset",
  "0 .0625em .0625em rgba(0, 0, 0, 0.25), 0 .125em .5em rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
  "rgba(149, 157, 165, 0.2) 0 8px 24px",
  "20px 0 10px -20px rgba(0,0,0,0.45) inset",
  "0 -20px 10px -20px rgba(0,0,0,0.45) inset",
  "20px 0 10px -20px rgba(0,0,0,0.45) inset;",
  "0 20px 10px -20px rgba(0,0,0,0.45) inset, -20px 0 10px -20px rgba(0,0,0,0.45) inset",
  "0 20px 10px -20px rgba(0,0,0,0.45) inset, 0 -20px 10px -20px rgba(0,0,0,0.45) inset",
  "0 20px 10px -20px rgba(0,0,0,0.45) inset, 20px 0 10px -20px rgba(0,0,0,0.45) inset",
  "0 -20px 10px -20px rgba(0,0,0,0.45) inset, -20px 0 10px -20px rgba(0,0,0,0.45) inset",
  "0 -20px 10px -20px rgba(0,0,0,0.45) inset, 20px 0 10px -20px rgba(0,0,0,0.45) inset",
  "-20px 0 10px -20px rgba(0,0,0,0.45) inset, 20px 0 10px -20px rgba(0,0,0,0.45) inset",
  "0 20px 10px -20px rgba(0,0,0,0.45) inset, 0 -20px 10px -20px rgba(0,0,0,0.45) inset, -20px 0 10px -20px rgba(0,0,0,0.45) inset",
  "0 20px 10px -20px rgba(0,0,0,0.45) inset, 0 -20px 10px -20px rgba(0,0,0,0.45) inset, 20px 0 10px -20px rgba(0,0,0,0.45) inset",
  "0 0 10px 0 rgba(0,0,0,0.45) inset",
  "-12px -8px 40px rgba(70,70,70,0.12) inset",
  "0px -23px 25px 0px rgba(0, 0, 0, 0.17) inset, 0px -36px 30px 0px rgba(0, 0, 0, 0.15) inset, 0px -79px 40px 0px rgba(0, 0, 0, 0.1) inset, 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 4px 2px rgba(0, 0, 0, 0.09), 0px 8px 4px rgba(0, 0, 0, 0.09), 0px 16px 8px rgba(0, 0, 0, 0.09)",
  "inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px rgba(0,0,0,0.25)",
  "-15px -15px 15px rgba(255,255,255,0.2), 15px 15px 15px rgba(0,0,0,0.1), inset -5px -5px 5px rgba(255,255,255,0.2), inset 5px 5px 5px rgba(0,0,0,0.1)",
  "0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)",
  "inset 2px 2px 10px rgba(255,255,255,.1), inset -5px -8px 8px rgba(0,0,0,.2)",
];

//tab Examples (tab2)

const shadowsList = document.querySelectorAll(".tabcontent__list");
const ulID = document.querySelector("#main-ul");

shadowsList.forEach((ul) => {
  ul.style.display = "grid";
  ul.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 300px))";
  ul.style.gap = "10px";
  ul.style.gridAutoRows = "minmax(100px, auto)";
  ul.style.justifyContent = "space-around";
  ul.style.alignContent = "center";
  ul.style.padding = 20 + "px";
});

function addShaddow(shadow) {
  const li = document.createElement("li");
  li.className = "shadow-li";

  li.innerHTML = `<span> #${shadows.indexOf(shadow)}</span>`;
  li.style.width = 300 + "px";
  li.style.height = 150 + "px";
  li.style.margin = "0 auto";
  li.style.marginTop = 20 + "px";
  li.style.display = "flex";
  li.style.flexDirection = "column";
  li.style.alignItems = "center";
  li.style.justifyContent = "center";
  li.style.gap = 10 + "px";
  li.style.backgroundColor = "$backgroundColorSecondary";
  // li.style.borderRadius = "5px";
  li.style.willChange = "transform";

  window.addEventListener("resize", () => {
    li.style.maxWidth = window.innerWidth - 100 + "px";
  });

  if (typeof shadow === "object") {
    li.style.boxShadow = shadow.boxShadow;

    if (shadow.extra) {
      for (let z = 0; z < Object.keys(shadow.extra).length; z++) {
        li.style[Object.keys(shadow.extra)[z]] =
          shadow.extra[Object.keys(shadow.extra)[z]];
      }
    }

    if (shadow.credits) {
      li.innerHTML += `<span class="credits">by ${shadow.credits}</span>`;

      li.querySelectorAll(".credits").forEach((credit) => {
        credit.style.fontFamily = "Roboto Serif";
        credit.style.weight = "bolder";
        credit.style.fontStyle = "regular";
      });
    }
  } else {
    li.style.boxShadow = shadow;
  }
  li.style.boxShadow = shadow;
  li.dataset.tippyContent = `Click to copy box-shadow #${shadows.indexOf(
    shadow
  )}`;

  ulID.appendChild(li);

  li.addEventListener("click", function (e) {
    const previousHTML = li.innerHTML;
    li.classList.add("copied");
    navigator.clipboard.writeText(`box-shadow: ${li.style.boxShadow};`);
    li.innerHTML = "Copied!";
    setTimeout(() => {
      li.innerHTML = previousHTML;
      li.classList.remove("copied");
    }, 1000);
  });
}

export default addShaddow;

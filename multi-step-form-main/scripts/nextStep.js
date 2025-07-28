import { getFormIdFromButton, useButton } from "./utils.js";

const buttons = document.getElementsByClassName("next-step");

for (const button of buttons) {
  button.addEventListener("click", function (e) {
    const formId = getFormIdFromButton(e);
    if (formId) {
      useButton(formId, "next");
    }
  });
}

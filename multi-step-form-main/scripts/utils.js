function getFormIdFromButton(e) {
  const buttonSection = e.target.closest("section");
  if (buttonSection) {
    const formSection = buttonSection.parentElement;
    if (formSection) {
      const formId = formSection.id;
      return formId;
    }
  }
}

function useButton(targetId, cmd) {
  const counter = parseInt(targetId);
  if (cmd === "next") {
    const nextStep = counter + 1;
    const targetForm = document.getElementById(nextStep);
    targetForm.classList.remove("hidden");
    document.getElementById(targetId).classList.add("hidden");
  }
  if (cmd === "previous") {
    const previousStep = counter - 1;
    const targetForm = document.getElementById(previousStep);
    targetForm.classList.remove("hidden");
    document.getElementById(targetId).classList.add("hidden");
  }
}

export { getFormIdFromButton, useButton };

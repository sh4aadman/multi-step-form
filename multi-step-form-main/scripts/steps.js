const buttons = document.getElementsByClassName("next-step");

for (let button of buttons) {
  button.addEventListener("click", function (e) {
    const buttonSection = e.target.closest("section");
    if (buttonSection) {
      const formSection = buttonSection.parentElement;
      if (formSection) {
        const formId = formSection.id;
        if (formId) {
          const nextStep = parseInt(formId) + 1;
          if (formId >= 1) {
            const targetSection = document.getElementById(nextStep);
            targetSection.classList.remove("hidden");
            document.getElementById(formId).classList.add("hidden");
          }
        }
      }
    }
  });
}

function currentForm() {
  const formSections = document.getElementsByClassName("form");

  const steps = document.getElementsByTagName("li");

  for (const formSection of formSections) {
    const targetId = formSection.id;
    const isActive = formSection.classList.contains("hidden");
    if (!isActive) {
      for (const step of steps) {
        if (step.innerText === targetId) {
          step.classList.add("active");
        } else {
          step.classList.remove("active");
        }
      }
    }
  }
}

export default currentForm;

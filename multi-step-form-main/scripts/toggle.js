const toggleButton = document.getElementById("btnToggle");

toggleButton.addEventListener("click", function () {
  if (toggleButton.checked) {
    document
      .querySelectorAll("span.monthly-price")
      .forEach((element) => element.classList.add("hidden"));
    document
      .querySelectorAll("span.yearly-price")
      .forEach((element) => element.classList.remove("hidden"));
    document
      .getElementById("yearly-subscription")
      .classList.remove("text-(--secondary-text)");
    document
      .getElementById("yearly-subscription")
      .classList.add("text-(--primary-color)", "font-medium");
    document
      .getElementById("monthly-subscription")
      .classList.remove("text-(--primary-color)", "font-medium");
    document
      .getElementById("monthly-subscription")
      .classList.add("text-(--secondary-text)");
  }
  if (!toggleButton.checked) {
    document
      .querySelectorAll("span.yearly-price")
      .forEach((element) => element.classList.add("hidden"));
    document
      .querySelectorAll("span.monthly-price")
      .forEach((element) => element.classList.remove("hidden"));
    document
      .getElementById("yearly-subscription")
      .classList.remove("text-(--primary-color)", "font-medium");
    document
      .getElementById("yearly-subscription")
      .classList.add("text-(--secondary-text)");
    document
      .getElementById("monthly-subscription")
      .classList.remove("text-(--secondary-text)");
    document
      .getElementById("monthly-subscription")
      .classList.add("text-(--primary-color)", "font-medium");
  }
});

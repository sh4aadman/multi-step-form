const sections = document.getElementsByClassName("form");

for (let form of sections) {
  const classNames = form.classList.contains("hidden");
  if (!classNames) {
      const sectionId = form.id;
    document.getElementById(sectionId).classList.add("active");
  }
}

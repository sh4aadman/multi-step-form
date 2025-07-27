const links = document.getElementsByTagName("li");

const forms = document.getElementsByClassName("form");

for (const link of links) {
  link.addEventListener("click", function () {
    const id = link.innerText;
    for (const form of forms) {
      if (form.id == id) {
        form.classList.remove("hidden");
      } else {
        form.classList.add("hidden");
      }
    }
  });
}

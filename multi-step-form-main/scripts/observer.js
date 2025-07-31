import currentForm from "./currentForm.js";

const observer = new MutationObserver((entries) => {
  // console.log(entries);
  if (
    entries.length === 2 &&
    entries[1].type === "attributes" &&
    entries[1].attributeName === "class"
  ) {
    const formSection = entries[1].target.children[0];
    const formData = new FormData(formSection);

    if (entries[1].target.id === "1") {
      const [name, email, phoneNumber] = formData.values();
      const userDetails = { name, email, phoneNumber };
      sessionStorage.setItem("user", JSON.stringify(userDetails));
    }
    if (entries[1].target.id === "2") {
      const [plan] = formData.values();
      const user = JSON.parse(sessionStorage.getItem("user"));
      sessionStorage.setItem("user", JSON.stringify({ ...user, plan }));
    }
    currentForm();
  }
});

const targetNode = document.body;

const config = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true,
};

observer.observe(targetNode, config);

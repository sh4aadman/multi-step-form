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
      console.log(name, email, phoneNumber);
      const userDetails = { name, email, phoneNumber };
      console.log(userDetails);
    }
    if (entries[1].target.id === "2") {
      console.log("hello");
      const [plan] = formData.values();
      console.log(plan);
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

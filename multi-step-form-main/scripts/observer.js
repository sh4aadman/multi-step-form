import currentForm from "./currentForm.js";

const observer = new MutationObserver((entries) => {
  console.log(entries);
  if (entries.length === 2 && entries[1].type === "attributes" && entries[1].attributeName === "class") {
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

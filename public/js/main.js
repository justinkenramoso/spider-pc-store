const modalBodies = document.getElementsByClassName("modal-body");

for (let i = 0; i < modalBodies.length; i++) {
  const currentItem = modalBodies.item(i);
  const html = currentItem.dataset.specs;
  const div = document.createElement("div");
  div.innerHTML = html;
  currentItem.appendChild(div);
}

const sidebar = document.getElementById("sidebar");
const categories = document.getElementById("categories");

const tree = document.getElementById("tree");

function renderTree() {
  let html = "";

  family.forEach(person => {
    html += `
      <div class="node">
        <img src="${person.image}">
        <p>${person.name}</p>
      </div>
    `;
  });

  tree.innerHTML = html;
}

renderTree();

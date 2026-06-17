const tree = document.getElementById("tree");
const profile = document.getElementById("profile");
const search = document.getElementById("search");
const svg = document.getElementById("lines");

let currentData = family;

function getPerson(id) {
  return family.find(p => p.id === id);
}

function getChildren(id) {
  return family.filter(p => p.father === id || p.mother === id);
}

function render(data) {
  tree.innerHTML = "";
  svg.innerHTML = "";

  const roots = data.filter(p => !p.father && !p.mother);

  let used = new Set();

  function makeLevel(list) {
    const level = document.createElement("div");
    level.className = "level";

    list.forEach(p => {
      if (used.has(p.id)) return;
      used.add(p.id);

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `<h3>${p.name}</h3>`;

      card.onclick = () => showProfile(p);

      level.appendChild(card);
    });

    tree.appendChild(level);
  }

  makeLevel(roots);

  let children = [];
  roots.forEach(r => {
    children = children.concat(getChildren(r.id));
  });

  if (children.length) makeLevel(children);

  setTimeout(drawLines, 150);
}

function drawLines() {
  const cards = document.querySelectorAll(".card");
  svg.innerHTML = "";

  cards.forEach((card, i) => {
    const person = currentData[i];
    if (!person) return;

    if (person.father) {
      const parentIndex = currentData.findIndex(p => p.id === person.father);
      const parentCard = cards[parentIndex];

      if (parentCard) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

        const r1 = parentCard.getBoundingClientRect();
        const r2 = card.getBoundingClientRect();

        line.setAttribute("x1", r1.left + r1.width / 2);
        line.setAttribute("y1", r1.top + r1.height);
        line.setAttribute("x2", r2.left + r2.width / 2);
        line.setAttribute("y2", r2.top);

        line.setAttribute("stroke", "white");
        line.setAttribute("stroke-width", "2");

        svg.appendChild(line);
      }
    }
  });
}

function showProfile(p) {
  const father = getPerson(p.father)?.name || "অজানা";
  const mother = getPerson(p.mother)?.name || "অজানা";

  profile.classList.remove("hidden");

  profile.innerHTML = `
    <h2>${p.name}</h2>
    <p>বাবা: ${father}</p>
    <p>মা: ${mother}</p>
    <button onclick="profile.classList.add('hidden')">বন্ধ করুন</button>
  `;
}

search.addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();

  if (!val) {
    currentData = family;
  } else {
    currentData = family.filter(p =>
      p.name.toLowerCase().includes(val)
    );
  }

  render(currentData);
});

render(family);

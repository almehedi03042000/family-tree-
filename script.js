const tree = document.getElementById("tree");
const profile = document.getElementById("profile");
const search = document.getElementById("search");
const svg = document.getElementById("lines");

function getPerson(id) {
  return family.find(p => p.id === id);
}

function getChildren(id) {
  return family.filter(p => p.father === id || p.mother === id);
}

function render() {
  tree.innerHTML = "";
  svg.innerHTML = "";

  const roots = family.filter(p => !p.father && !p.mother);

  let allCards = [];

  function makeLevel(list) {
    const level = document.createElement("div");
    level.className = "level";

    list.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.setAttribute("data-name", p.name.toLowerCase());

      card.innerHTML = `<h3>${p.name}</h3>`;

      card.onclick = () => showProfile(p);

      allCards.push({ person: p, element: card });

      level.appendChild(card);
    });

    tree.appendChild(level);
  }

  makeLevel(roots);

  let children = [];
  roots.forEach(r => {
    children = children.concat(getChildren(r.id));
  });

  makeLevel(children);

  setTimeout(() => drawLines(allCards), 150);
}

function drawLines(allCards) {
  svg.innerHTML = "";

  allCards.forEach(item => {
    const child = item.person;

    if (!child.father) return;

    const parentItem = allCards.find(x => x.person.id === child.father);
    if (!parentItem) return;

    const parentEl = parentItem.element;
    const childEl = item.element;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    const r1 = parentEl.getBoundingClientRect();
    const r2 = childEl.getBoundingClientRect();

    line.setAttribute("x1", r1.left + r1.width / 2);
    line.setAttribute("y1", r1.top + r1.height);
    line.setAttribute("x2", r2.left + r2.width / 2);
    line.setAttribute("y2", r2.top);

    line.setAttribute("stroke", "white");
    line.setAttribute("stroke-width", "2");

    svg.appendChild(line);
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

/* 🔥 REAL SEARCH FIX */
search.addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    const name = card.getAttribute("data-name");

    if (name.includes(val)) {
      card.style.display = "block";
    } else {
      card.style.display = val ? "none" : "block";
    }
  });
});

render();

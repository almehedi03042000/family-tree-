const tree = document.getElementById("tree");
const profile = document.getElementById("profile");
const search = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

function getPerson(id) {
  return family.find(p => p.id === id);
}

function getChildren(id) {
  return family.filter(p => p.father === id || p.mother === id);
}

/* ================= TREE ================= */

function render(list = family) {
  tree.innerHTML = "";

  const roots = family.filter(p => !p.father && !p.mother);

  function makeLevel(items) {
    const level = document.createElement("div");
    level.className = "level";

    items.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `<b>${p.name}</b>`;

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
}

/* ================= PROFILE ================= */

function showProfile(p) {
  const father = getPerson(p.father);
  const mother = getPerson(p.mother);

  profile.classList.remove("hidden");

  profile.innerHTML = `
    <h2>${p.name}</h2>
    <p>👨 বাবা: ${father ? father.name : "অজানা"}</p>
    <p>👩 মা: ${mother ? mother.name : "অজানা"}</p>
    <button onclick="profile.classList.add('hidden')">বন্ধ করুন</button>
  `;
}

/* ================= LIVE SEARCH ================= */

search.addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase().trim();

  suggestions.innerHTML = "";

  if (!val) {
    suggestions.style.display = "none";
    render(family);
    return;
  }

  const matches = family.filter(p =>
    p.name.toLowerCase().includes(val)
  );

  suggestions.style.display = "block";

  matches.forEach(p => {
    const item = document.createElement("div");
    item.className = "suggestion-item";
    item.innerText = p.name;

    item.onclick = () => {
      search.value = p.name;
      suggestions.style.display = "none";
      render([p]);
    };

    suggestions.appendChild(item);
  });

  render(matches.length ? matches : family);
});

/* ================= INIT ================= */

render(family);

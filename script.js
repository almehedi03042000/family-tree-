const tree = document.getElementById("tree");
const profile = document.getElementById("profile");
const search = document.getElementById("search");

/* ALWAYS USE FULL FAMILY AS SOURCE */
let sourceData = family;

function getPerson(id) {
  return family.find(p => p.id === id);
}

function getChildren(id) {
  return family.filter(p => p.father === id || p.mother === id);
}

function render(list = family) {
  tree.innerHTML = "";

  const roots = list.filter(p => !p.father && !p.mother);

  function makeLevel(items) {
    const level = document.createElement("div");
    level.className = "level";

    items.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";

      /* BOX STYLE OUTPUT */
      card.innerHTML = `
        <div><b>${p.name}</b></div>
      `;

      card.onclick = () => showProfile(p);

      level.appendChild(card);
    });

    tree.appendChild(level);
  }

  /* ROOT LEVEL */
  makeLevel(roots);

  /* CHILD LEVEL */
  let children = [];
  roots.forEach(r => {
    children = children.concat(getChildren(r.id));
  });

  if (children.length) makeLevel(children);
}

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

/* 🔥 SIMPLE WORKING SEARCH */
search.addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase().trim();

  if (!val) {
    render(family);
    return;
  }

  const filtered = family.filter(p =>
    p.name.toLowerCase().includes(val)
  );

  render(filtered);
});

/* INIT */
render(family);

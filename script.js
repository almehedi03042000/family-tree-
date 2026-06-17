const tree = document.getElementById("tree");
const search = document.getElementById("search");
const suggestions = document.getElementById("suggestions");
const profile = document.getElementById("profile");

function render(data = family) {
  tree.innerHTML = "";

  data.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = p.name;

    card.onclick = () => {
      profile.innerHTML = `
        <h2>${p.name}</h2>
        <p>Father ID: ${p.father || "N/A"}</p>
        <p>Mother ID: ${p.mother || "N/A"}</p>
      `;
    };

    tree.appendChild(card);
  });
}

/* 🔥 LIVE SEARCH (GUARANTEED) */
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
    const div = document.createElement("div");
    div.innerText = p.name;
    div.style.padding = "8px";
    div.style.cursor = "pointer";

    div.onclick = () => {
      search.value = p.name;
      suggestions.style.display = "none";
      render([p]);
    };

    suggestions.appendChild(div);
  });

  render(matches.length ? matches : []);
});

render(family);

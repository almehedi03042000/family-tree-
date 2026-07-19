/* ==========================================
   Sardar Family Tree
   Version 2.0.0
   Author : AL Mehedi
========================================== */

"use strict";

/* ==========================================
   APP INFO
========================================== */

const APP = {
    name: "Sardar Family Tree",
    version: "2.0.0",
    author: "AL Mehedi"
};

console.log(`${APP.name} v${APP.version} Loaded`);

/* ==========================================
   DOM ELEMENTS
========================================== */

const treeContainer = document.getElementById("treeContainer");
const searchBox = document.getElementById("searchBox");

const zoomInBtn = document.getElementById("zoomIn");
const zoomOutBtn = document.getElementById("zoomOut");
const resetZoomBtn = document.getElementById("resetZoom");

const darkModeBtn = document.getElementById("darkModeBtn");

/* ==========================================
   GLOBAL VARIABLES
========================================== */

let familyData = null;
let currentZoom = 1;
let selectedMember = null;

/* ==========================================
   LOAD DATABASE
========================================== */

async function loadFamilyData() {

    try {

        const response = await fetch("data/family.json");

        if (!response.ok) {
            throw new Error("family.json not found");
        }

        familyData = await response.json();

        console.log("✅ Family Database Loaded");

    } catch (error) {

        console.error(error);

        treeContainer.innerHTML = `
            <div class="error-box">
                <h2>Database Load Failed</h2>
                <p>family.json পাওয়া যায়নি।</p>
            </div>
        `;

    }

}

/* ==========================================
   DATA HELPERS
========================================== */

function getMember(id) {

    return familyData.members.find(member => member.id === id);

}

function getChildren(id) {

    const person = getMember(id);

    if (!person) return [];

   return (person.children || [])
    .map(childId => getMember(childId))
    .filter(Boolean);

   }

function getFather(id) {

    const person = getMember(id);

    if (!person || !person.father) return null;

    return getMember(person.father);

}

function getMother(id) {

    const person = getMember(id);

    if (!person || !person.mother) return null;

    return getMember(person.mother);

}

function hasChildren(id) {

    return getChildren(id).length > 0;

}

function getGenderIcon(gender) {

    return gender === "male"
        ? "♂"
        : "♀";

}


/* ==========================================
   RECURSIVE TREE
========================================== */

function createTree(personId) {

    const person = getMember(personId);

    if (!person) return "";

    const children = getChildren(person.id);

    return `

        <div class="tree-node">

            ${createMemberCard(person)}

            ${children.length > 0 ? `

                <div class="tree-line"></div>

                <div class="children-row">

                    ${children
                        .map(child => createTree(child.id))
                        .join("")}

                </div>

            ` : ""}

        </div>

    `;

}

/* ==========================================
   RENDER TREE
========================================== */

async function renderTree() {

    if (!familyData) {

        await loadFamilyData();

    }

    if (!familyData) {

        treeContainer.innerHTML =
            errorComponent("Family database load failed.");

        return;

    }

    treeContainer.innerHTML =
        createTree(familyData.project.rootPerson);

    updateZoom();

}

/* ==========================================
   MEMBER PROFILE
========================================== */

function showMemberProfile(memberId){

    const person = getMember(memberId);

    if(!person) return;

    selectedMember = person;

    openProfile(person);

}
/* ==========================================
   CARD CLICK
========================================== */

treeContainer.addEventListener("click", function(e){

    const card = e.target.closest(".member-card");

    if(!card) return;

    showMemberProfile(card.dataset.id);

});
/* ==========================================
   SEARCH
========================================== */

function searchMember() {

    const keyword = searchBox.value.trim().toLowerCase();

    if (!familyData) return;

    if (keyword === "") {

        renderTree();

        return;

    }

    const results = familyData.members.filter(member =>
        member.name.toLowerCase().includes(keyword)
    );

    if (results.length === 0) {

        treeContainer.innerHTML = `
            <div class="no-result">
                <h2>No Member Found</h2>
            </div>
        `;

        return;

    }

    treeContainer.innerHTML = results
        .map(member => createMemberCard(member))
        .join("");

}

/* ==========================================
   ZOOM
========================================== */

function updateZoom() {

    treeContainer.style.transform = `scale(${currentZoom})`;
    treeContainer.style.transformOrigin = "top center";

}

function zoomIn() {

    currentZoom += 0.1;

    updateZoom();

}

function zoomOut() {

    currentZoom = Math.max(0.5, currentZoom - 0.1);

    updateZoom();

}

function resetZoom() {

    currentZoom = 1;

    updateZoom();

}

/* ==========================================
   DARK MODE
========================================== */

function toggleDarkMode() {

    document.body.classList.toggle("dark");

}

/* ==========================================
   EVENTS
========================================== */

zoomInBtn?.addEventListener("click", zoomIn);

zoomOutBtn?.addEventListener("click", zoomOut);

resetZoomBtn?.addEventListener("click", resetZoom);

darkModeBtn?.addEventListener("click", toggleDarkMode);

searchBox?.addEventListener("input", searchMember);

/* ==========================================
   INITIALIZE
========================================== */

window.addEventListener("DOMContentLoaded", () => {

    renderTree();

});

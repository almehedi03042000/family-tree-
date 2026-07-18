/* ==========================================
   Sardar Family Tree
   Version 0.6.0
========================================== */

"use strict";

// ==========================================
// App Information
// ==========================================

const APP = {
    name: "Sardar Family Tree",
    version: "0.6.0"
};

console.log(`${APP.name} v${APP.version} Loaded`);

// ==========================================
// DOM Elements
// ==========================================

const treeContainer = document.getElementById("treeContainer");
const searchBox = document.getElementById("searchBox");

const zoomInBtn = document.getElementById("zoomIn");
const zoomOutBtn = document.getElementById("zoomOut");
const resetZoomBtn = document.getElementById("resetZoom");

const darkModeBtn = document.getElementById("darkModeBtn");

// ==========================================
// Global Variables
// ==========================================

let familyData = null;

// ==========================================
// Database
// ==========================================

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
            <h2>❌ Database Load Failed</h2>
            <p>family.json লোড করা যায়নি।</p>
        `;
    }

}

// ==========================================
// Data Helper Functions
// ==========================================

function getMember(id) {

    return familyData.members.find(member => member.id === id);

}

function getChildren(id) {

    const member = getMember(id);

    if (!member) return [];

    return member.children
        .map(childId => getMember(childId))
        .filter(child => child);

}

// ==========================================
// Tree Rendering
// ==========================================

async function renderTree() {

    await loadFamilyData();

    if (!familyData) return;

    const root = getMember(familyData.project.rootPerson);

    const children = getChildren(root.id);

    let html = `
        <div class="tree-home">

            <div class="member-card">
                <h2>${root.name}</h2>
            </div>
    `;

    children.forEach(child => {

        html += `
            <div class="member-card">
                <h2>${child.name}</h2>
            </div>
        `;

    });

    html += `
        </div>
    `;

  treeContainer.innerHTML = createTree(
    familyData.project.rootPerson
);

}

// ==========================================
// Feature Functions
// ==========================================

function searchMember() {

    console.log("Search :", searchBox.value);

}

function zoomIn() {

    console.log("Zoom In");

}

function zoomOut() {

    console.log("Zoom Out");

}

function resetZoom() {

    console.log("Reset Zoom");

}

function toggleDarkMode() {

    document.body.classList.toggle("dark");

}

// ==========================================
// Events
// ==========================================

zoomInBtn.addEventListener("click", zoomIn);

zoomOutBtn.addEventListener("click", zoomOut);

resetZoomBtn.addEventListener("click", resetZoom);

darkModeBtn.addEventListener("click", toggleDarkMode);

searchBox.addEventListener("input", searchMember);

// ==========================================
// Initialize
// ==========================================


async function renderTree() {

    await loadFamilyData();

    if (!familyData) return;

    const root = familyData.members.find(
        member => member.id === familyData.project.rootPerson
    );

    const children = familyData.members.filter(
    member => member.father === root.id
);
    treeContainer.innerHTML = `
        <div class="tree-home">

            <div class="member-card">
                <h2>${root.name}</h2>
            </div>

            <div style="font-size:40px;">↓</div>

            <div class="member-card">
                <h2>${akali.name}</h2>
            </div>

            <div style="font-size:40px;">↓</div>

            <div class="children-row">

                <div class="member-card">
                    <h2>${isu.name}</h2>
                </div>

                <div class="member-card">
                    <h2>${kesu.name}</h2>
                </div>

            </div>

        </div>
    `;
}
function createTree(personId) {

    const person = familyData.members.find(
        member => member.id === personId
    );

    if (!person) return "";

    const children = familyData.members.filter(
        member => member.father === person.id
    );

    return `
        <div class="tree-node">

            <div class="member-card">
                <h2>${person.name}</h2>
            </div>

            ${
                children.length > 0
                ? `
                    <div class="children-row">
                        ${children.map(child => createTree(child.id)).join("")}
                    </div>
                  `
                : ""
            }

        </div>
    `;
}
renderTree();

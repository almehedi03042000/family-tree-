/* ==========================================
   Sardar Family Tree
   Version 0.6.1
========================================== */

"use strict";

// ==========================================
// App Information
// ==========================================

const APP = {
    name: "Sardar Family Tree",
    version: "0.6.1"
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
// Load Database
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
// Helper Functions
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
// Recursive Tree
// ==========================================

function createTree(personId) {

    const person = getMember(personId);

    if (!person) return "";

    const children = getChildren(person.id);

    return `

        <div class="tree-node">

            <div class="member-card">

                <h2>${person.name}</h2>

            </div>
<div class="tree-line"></div>
           ${children.length > 0 ? `

    <div class="tree-connector">

        <div class="vertical-line"></div>

        <div class="horizontal-line"></div>

    </div>

    <div class="children-row">

        ${children.map(child => createTree(child.id)).join("")}

    </div>

` : ""}

// ==========================================
// Render Tree
// ==========================================

async function renderTree() {

    await loadFamilyData();

    if (!familyData) return;

    treeContainer.innerHTML = createTree(
        familyData.project.rootPerson
    );

}

// ==========================================
// Features
// ==========================================

function searchMember() {

    console.log(searchBox.value);

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
// Start App
// ==========================================

renderTree();


/* ==========================================
   Sardar Family Tree
   Version 0.1
========================================== */

"use strict";

// =============================
// Project Information
// =============================

const APP = {
    name: "Sardar Family Tree",
    version: "0.1"
};

console.log(`${APP.name} v${APP.version} Loaded`);

// =============================
// DOM Elements
// =============================

const treeContainer = document.getElementById("treeContainer");
const searchBox = document.getElementById("searchBox");

const zoomInBtn = document.getElementById("zoomIn");
const zoomOutBtn = document.getElementById("zoomOut");
const resetZoomBtn = document.getElementById("resetZoom");

const darkModeBtn = document.getElementById("darkModeBtn");

// =============================
// Placeholder Functions
// =============================

function loadFamilyData() {
    console.log("Family Database will load here...");
}

function renderTree() {
    console.log("Tree Rendering...");
}

function searchMember() {
    console.log("Searching...");
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
    console.log("Dark Mode");
}

// =============================
// Events
// =============================

zoomInBtn.addEventListener("click", zoomIn);

zoomOutBtn.addEventListener("click", zoomOut);

resetZoomBtn.addEventListener("click", resetZoom);

darkModeBtn.addEventListener("click", toggleDarkMode);

searchBox.addEventListener("input", searchMember);

// =============================
// Start Application
// =============================

loadFamilyData();
let familyData = null;

async function loadFamilyData() {

    try {

        const response = await fetch("data/family.json");

        familyData = await response.json();

        console.log("Database Loaded");

        console.log(familyData);

    } catch (error) {

        console.error("Database Load Failed", error);

    }

}

async function renderTree() {

    await loadFamilyData();

    if (!familyData) return;

    treeContainer.innerHTML = `
        <h2>🌳 Family Tree Database</h2>

        <p>Total Members : <strong>${familyData.members.length}</strong></p>

        <p>Project Version : ${familyData.project.version}</p>
    `;

}
renderTree();
let familyData = null;

async function loadFamilyData() {

    try {

        const response = await fetch("data/family.json");

        familyData = await response.json();

        console.log("Database Loaded");

        console.log(familyData);

    } catch (error) {

        console.error("Database Load Failed", error);

    }

}

async function renderTree() {

    await loadFamilyData();

    if (!familyData) return;

    treeContainer.innerHTML = `
        <h2>🌳 Family Tree Database</h2>

        <p>Total Members : <strong>${familyData.members.length}</strong></p>

        <p>Project Version : ${familyData.project.version}</p>
    `;

}

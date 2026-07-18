/* ==========================================
   Sardar Family Tree
   Version 0.3.1
========================================== */

"use strict";

// ==========================================
// App Information
// ==========================================

const APP = {
    name: "Sardar Family Tree",
    version: "0.3.1"
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
// Core Functions
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

async function renderTree() {

    await loadFamilyData();

    if (!familyData) return;

    treeContainer.innerHTML = `

        <div class="tree-home">

            <h2>🌳 সর্দার পরিবারের বংশবৃক্ষ</h2>

            <p><strong>মোট সদস্য:</strong> ${familyData.members.length}</p>

            <p><strong>Database Version:</strong> ${familyData.project.version}</p>

            <hr>

            <p>✅ Tree Engine প্রস্তুত।</p>

            <p>পরবর্তী Version থেকে বংশবৃক্ষ দেখা যাবে।</p>

        </div>

    `;

}

// ==========================================
// Feature Functions
// ==========================================

function searchMember() {
    console.log("Search:", searchBox.value);
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
// Initialize App
// ==========================================

renderTree();
async function renderTree() {

    await loadFamilyData();

    if (!familyData) return;

    const root = familyData.members.find(
        member => member.id === familyData.project.rootPerson
    );

    treeContainer.innerHTML = `
        <div class="tree-home">

            <div class="member-card">
                <h2>${root.name}</h2>
                <p>ID : ${root.id}</p>
                <p>Gender : ${root.gender}</p>
            </div>

        </div>
    `;
}

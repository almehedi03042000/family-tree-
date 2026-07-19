/* ==========================================
   COMPONENTS.JS
   Sardar Family Tree
   Version 2.0.0
========================================== */

"use strict";

/* ==========================================
   MEMBER CARD
========================================== */

function createMemberCard(person) {

    return `

        <div class="member-card"
             data-id="${person.id}">

            <div class="member-photo">

                ${
                    person.photo
                        ? `<img src="${person.photo}" alt="${person.name}">`
                        : "👤"
                }

            </div>

            <h2>${person.name}</h2>

            <p class="member-id">

                ${person.id}

            </p>

            <p class="member-gender">

                ${
                    person.gender === "male"
                        ? "♂ পুরুষ"
                        : "♀ মহিলা"
                }

            </p>

        </div>

    `;

}

/* ==========================================
   LOADING
========================================== */

function loadingComponent() {

    return `

        <div class="loading">

            <div class="loader"></div>

            <h2>Family Tree Loading...</h2>

        </div>

    `;

}

/* ==========================================
   ERROR
========================================== */

function errorComponent(message = "Database Load Failed") {

    return `

        <div class="error-box">

            <h2>❌ Error</h2>

            <p>${message}</p>

        </div>

    `;

}

/* ==========================================
   EMPTY RESULT
========================================== */

function noResultComponent() {

    return `

        <div class="no-result">

            <h2>

                কোন সদস্য পাওয়া যায়নি

            </h2>

        </div>

    `;

}
/* ==========================================
   PROFILE MODAL
========================================== */

function profileModal(person) {

    return `

    <div class="profile-overlay" id="profileOverlay">

        <div class="profile-modal">

            <button
                class="close-profile"
                onclick="closeProfile()">

                ✕

            </button>

            <div class="profile-top">

                <div class="profile-photo">

                    ${
                        person.photo
                            ? `<img src="${person.photo}" alt="${person.name}">`
                            : "👤"
                    }

                </div>

                <div class="profile-name">

                    <h2>${person.name}</h2>

                    <p>

                        ${
                            person.gender === "male"
                                ? "♂ পুরুষ"
                                : "♀ মহিলা"
                        }

                    </p>

                </div>

            </div>

            <div class="profile-body">

                <table>

                    <tr>

                        <td>ID</td>

                        <td>${person.id}</td>

                    </tr>

                    <tr>

                        <td>Father</td>

                        <td>${person.father || "-"}</td>

                    </tr>

                    <tr>

                        <td>Mother</td>

                        <td>${person.mother || "-"}</td>

                    </tr>

                    <tr>

                        <td>Birth</td>

                        <td>${person.birth || "-"}</td>

                    </tr>

                    <tr>

                        <td>Death</td>

                        <td>${person.death || "-"}</td>

                    </tr>

                    <tr>

                        <td>Occupation</td>

                        <td>${person.occupation || "-"}</td>

                    </tr>

                    <tr>

                        <td>Phone</td>

                        <td>${person.phone || "-"}</td>

                    </tr>

                    <tr>

                        <td>Address</td>

                        <td>${person.address || "-"}</td>

                    </tr>

                    <tr>

                        <td>Notes</td>

                        <td>${person.notes || "-"}</td>

                    </tr>

                </table>

            </div>

        </div>

    </div>

    `;

}

/* ==========================================
   OPEN PROFILE
========================================== */

function openProfile(person){

    document.body.insertAdjacentHTML(

        "beforeend",

        profileModal(person)

    );

}

/* ==========================================
   CLOSE PROFILE
========================================== */

function closeProfile(){

    const modal = document.getElementById(

        "profileOverlay"

    );

    if(modal){

        modal.remove();

    }

}
/* ==========================================
   BADGE COMPONENT
========================================== */

function createBadge(text, color = "#22c55e") {

    return `

        <span
            class="member-badge"
            style="background:${color};">

            ${text}

        </span>

    `;

}

/* ==========================================
   INFO ROW COMPONENT
========================================== */

function createInfoRow(label, value) {

    return `

        <div class="info-row">

            <div class="info-label">

                ${label}

            </div>

            <div class="info-value">

                ${value || "-"}

            </div>

        </div>

    `;

}

/* ==========================================
   CONFIRM DIALOG
========================================== */

function confirmDialog(message) {

    return window.confirm(message);

}

/* ==========================================
   SUCCESS MESSAGE
========================================== */

function successMessage(message) {

    console.log("✅ " + message);

}

/* ==========================================
   ERROR MESSAGE
========================================== */

function errorMessage(message) {

    console.error("❌ " + message);

}

/* ==========================================
   COMPONENTS READY
========================================== */

console.log("✅ Components.js Loaded");

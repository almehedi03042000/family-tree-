/* ==========================================
   Sardar Family Tree
   Components
   Version 2.0.0
========================================== */

"use strict";

/* ==========================================
   COMPONENTS
========================================== */

/**
 * Loading Component
 */

function loadingComponent() {

    return `
        <div class="loading">
            🌳 Family Tree Loading...
        </div>
    `;

}

/**
 * Error Component
 */

function errorComponent(message) {

    return `
        <div class="error-box">

            <h2>❌ Error</h2>

            <p>${message}</p>

        </div>
    `;

}

/**
 * Empty Result Component
 */

function emptyComponent(title = "কোন তথ্য পাওয়া যায়নি") {

    return `
        <div class="no-result">

            <h2>${title}</h2>

        </div>
    `;

}
/* ==========================================
   Sardar Family Tree
   Components.js
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

function createLoading() {

    return `

        <div class="loading">

            Family Tree Loading...

        </div>

    `;

}

/* ==========================================
   ERROR BOX
========================================== */

function createError(message) {

    return `

        <div class="error-box">

            <h2>ত্রুটি</h2>

            <p>${message}</p>

        </div>

    `;

}

/* ==========================================
   NO RESULT
========================================== */

function createNoResult() {

    return `

        <div class="no-result">

            <h2>কোন সদস্য পাওয়া যায়নি</h2>

        </div>

    `;

}

/* ==========================================
   Sardar Family Tree
   Components
   Version 2.1.0
========================================== */

"use strict";

/* ==========================================
   MEMBER CARD COMPONENT
========================================== */

function createMemberCard(person) {

    return `

        <div class="member-card" data-id="${person.id}">

            <div class="member-photo">

                ${
                    person.photo
                        ? `<img src="${person.photo}" alt="${person.name}">`
                        : "👤"
                }

            </div>

            <h2>${person.name}</h2>

            <p class="member-id">

                ID : ${person.id}

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
   LOADING COMPONENT
========================================== */

function createLoadingComponent() {

    return `

        <div class="loading">

            🌳 Family Tree Loading...

        </div>

    `;

}

/* ==========================================
   ERROR COMPONENT
========================================== */

function createErrorComponent(message) {

    return `

        <div class="error-box">

            <h2>❌ Error</h2>

            <p>${message}</p>

        </div>

    `;

}

/* ==========================================
   EMPTY COMPONENT
========================================== */

function createEmptyComponent(message) {

    return `

        <div class="no-result">

            <h2>${message}</h2>

        </div>

    `;

}

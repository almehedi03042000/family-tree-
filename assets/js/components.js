/* ==========================================
   Sardar Family Tree
   Components.js
   Version : 5.0 FINAL
   Author  : AL Mehedi
========================================== */

"use strict";

/* ==========================================
   HTML ESCAPE
========================================== */

function escapeHTML(value){

    if(value===undefined || value===null){

        return "";

    }

    return String(value)
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#39;");

}

/* ==========================================
   DEFAULT PHOTO
========================================== */

function getPhoto(member){

    if(member.photo && member.photo.trim()!==""){

        return `
            <img
                src="${escapeHTML(member.photo)}"
                alt="${escapeHTML(member.name)}">
        `;

    }

    return `
        <div class="member-photo-placeholder">
            👤
        </div>
    `;

}

/* ==========================================
   GENDER
========================================== */

function genderText(gender){

    return gender==="female"
        ? "মহিলা"
        : "পুরুষ";

}

function genderIcon(gender){

    return gender==="female"
        ? "♀"
        : "♂";

}

/* ==========================================
   MEMBER CARD
========================================== */

function createMemberCard(member){

    return `

<div
    class="member-card fade"
    data-id="${escapeHTML(member.id)}">

    <div class="member-photo">

        ${getPhoto(member)}

    </div>

    <h2>

        ${escapeHTML(member.name)}

    </h2>

    <div class="member-gender">

        <span>

            ${genderIcon(member.gender)}

        </span>

        <span>

            ${genderText(member.gender)}

        </span>

    </div>

</div>

`;

}

/* ==========================================
   EMPTY RESULT
========================================== */

function emptyResultComponent(){

    return `

<div class="no-result">

    <h2>

        কোনো সদস্য পাওয়া যায়নি

    </h2>

</div>

`;

}

/* ==========================================
   ERROR
========================================== */

function errorComponent(message){

    return `

<div class="no-result">

    <h2>

        Error

    </h2>

    <p>

        ${escapeHTML(message)}

    </p>

</div>

`;

}

/* ==========================================
   LOADING
========================================== */

function loadingComponent(){

    return `

<div class="loading">

    <div class="loader"></div>

    <p>

        Family Tree Loading...

    </p>

</div>

`;

}

/* ==========================================
   TREE NODE
========================================== */

function createTreeNode(member){

    if(!member){
        return "";
    }

    let children = [];

    if(
        member.gender === "male" &&
        Array.isArray(member.children)
    ){
        children = member.children
            .map(id => getMember(id))
            .filter(Boolean);
    }

    let html = `
        <div class="tree-node">

            ${createMemberCard(member)}
    `;

   if (children.length) {

    html += `
        <div class="tree-line"></div>

        <div class="children-row">

            ${children.map(child => createTreeNode(child)).join("")}

        </div>
    `;
}

    html += `
        </div>
    `;

    return html;
}

/* ==========================================
   TREE BUILDER
========================================== */

function buildFamilyTree(rootId){

    const root=getMember(rootId);

    if(!root){

        return errorComponent("Root Member Not Found");

    }

    return createTreeNode(root);

}

/* ==========================================
   SEARCH SUGGESTIONS
========================================== */

function suggestionItem(member){

    return `

<div
    class="search-item"
    data-id="${escapeHTML(member.id)}">

    ${escapeHTML(member.name)}

</div>

`;

}

function renderSuggestions(list){

    const box=document.getElementById(
        "searchSuggestions"
    );

    if(!box){

        return;

    }

    if(!list.length){

        box.classList.remove("show");

        box.innerHTML="";

        return;

    }

    box.innerHTML=list
        .map(suggestionItem)
        .join("");

    box.classList.add("show");

}

function clearSuggestions(){

    const box=document.getElementById(
        "searchSuggestions"
    );

    if(!box){

        return;

    }

    box.classList.remove("show");

    box.innerHTML="";

}

/* ==========================================
   PROFILE INFO ROW
========================================== */

function profileRow(title, value){

    if(
        value===undefined ||
        value===null ||
        value===""

    ){

        return "";

    }

    return `

<tr>

    <th>

        ${escapeHTML(title)}

    </th>

    <td>

        ${escapeHTML(value)}

    </td>

</tr>

`;

}

/* ==========================================
   PROFILE GALLERY
========================================== */

function profileGallery(images){

    if(

        !Array.isArray(images) ||

        images.length===0

    ){

        return "";

    }

    return `

<div class="profile-section">

    <h3>

        ছবি

    </h3>

    <div class="gallery-grid">

        ${images.map((img,index)=>`

<img

    src="${escapeHTML(img)}"

    class="gallery-image"

    data-index="${index}"

    loading="lazy"

    alt="Gallery">

`).join("")}

    </div>

</div>

`;

}

/* ==========================================
   BIOGRAPHY
========================================== */

function biographySection(text){

    if(!text){

        return "";

    }

    return `

<div class="profile-section">

    <h3>

        পরিচিতি

    </h3>

    <p>

        ${escapeHTML(text)}

    </p>

</div>

`;

}

/* ==========================================
   PROFILE COMPONENT
========================================== */

function profileComponent(member){

    return `

<div class="profile-header">

    <div class="profile-photo">

        ${getPhoto(member)}

    </div>

    <div class="profile-info">

        <h2>

            ${escapeHTML(member.name)}

        </h2>

        <table>

            ${profileRow("লিঙ্গ",genderText(member.gender))}

            ${profileRow("পিতা",member.fatherName)}

            ${profileRow("মাতা",member.motherName)}

            ${profileRow("জন্ম",member.birth)}

            ${profileRow("মৃত্যু",member.death)}

            ${profileRow("মোবাইল",member.mobile)}

            ${profileRow("রক্তের গ্রুপ",member.blood)}

            ${profileRow("পেশা",member.profession)}

            ${profileRow("ঠিকানা",member.address)}

        </table>

    </div>

</div>

${biographySection(member.biography)}

${profileGallery(member.gallery)}

`;

}

/* ==========================================
   OPEN PROFILE
========================================== */

function openProfile(member){

    const modal=document.getElementById(

        "profileModal"

    );

    const body=document.getElementById(

        "profileBody"

    );

    if(

        !modal ||

        !body

    ){

        return;

    }

    body.innerHTML=

        profileComponent(member);

    modal.classList.remove("hidden");

}

/* ==========================================
   CLOSE PROFILE
========================================== */

function closeProfile(){

    const modal=document.getElementById(

        "profileModal"

    );

    if(modal){

        modal.classList.add("hidden");

    }

}
/* ==========================================
   STATISTICS COMPONENT
========================================== */

function statisticsComponent(){

    const data = window.familyData;

    if(!data){

        return;

    }

    const total = data.members.length;

    const male = data.members.filter(

        m => m.gender === "male"

    ).length;

    const female = data.members.filter(

        m => m.gender === "female"

    ).length;

    const generation = Math.max(

        ...data.members.map(

            m => m.generation || 1

        )

    );

    document.getElementById("totalMembers").textContent = total;

    document.getElementById("maleMembers").textContent = male;

    document.getElementById("femaleMembers").textContent = female;

    document.getElementById("generationCount").textContent = generation;

}
/* ==========================================
   IMAGE VIEWER
========================================== */

let galleryImages=[];

let currentImage=0;

function openImageViewer(images,index=0){

    const viewer=document.getElementById("imageViewer");

    const image=document.getElementById("viewerImage");

    if(!viewer || !image) return;

    galleryImages=images;

    currentImage=index;

    image.src=galleryImages[currentImage];

    viewer.classList.remove("hidden");

}

function nextImage(){

    if(!galleryImages.length) return;

    currentImage++;

    if(currentImage>=galleryImages.length){

        currentImage=0;

    }

    document.getElementById("viewerImage").src=

        galleryImages[currentImage];

}

function previousImage(){

    if(!galleryImages.length) return;

    currentImage--;

    if(currentImage<0){

        currentImage=galleryImages.length-1;

    }

    document.getElementById("viewerImage").src=

        galleryImages[currentImage];

}

function closeImageViewer(){

    document

        .getElementById("imageViewer")

        .classList.add("hidden");

}

/* ==========================================
   PROFILE EVENTS
========================================== */

document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("gallery-image")){

        const images=[

            ...document.querySelectorAll(".gallery-image")

        ].map(img=>img.src);

        openImageViewer(

            images,

            Number(e.target.dataset.index)

        );

    }

});

document

.getElementById("viewerNext")

?.addEventListener(

    "click",

    nextImage

);

document

.getElementById("viewerPrev")

?.addEventListener(

    "click",

    previousImage

);

document

.getElementById("viewerClose")

?.addEventListener(

    "click",

    closeImageViewer

);

document

.getElementById("closeProfile")

?.addEventListener(

    "click",

    closeProfile

);

/* ==========================================
   MEMBER CLICK EVENTS
========================================== */

document.addEventListener("click",(e)=>{

    const card=e.target.closest(".member-card");

    if(!card){

        return;

    }

    const id=card.dataset.id;

    const member=getMember(id);

    if(member){

        openProfile(member);

    }

});

/* ==========================================
   SEARCH EVENTS
========================================== */

function searchMembers(keyword){

    keyword=keyword.trim().toLowerCase();

    if(keyword===""){

        clearSuggestions();

        return;

    }

    const result=familyData.members.filter(member=>

        (member.name || "").toLowerCase().includes(keyword)

    );

    renderSuggestions(result);

}

document

.getElementById("searchBox")

?.addEventListener("input",(e)=>{

    searchMembers(e.target.value);

});

document.addEventListener("click",(e)=>{

    const item=e.target.closest(".search-item");

    if(!item){

        return;

    }

    const member=getMember(item.dataset.id);

    if(member){

        openProfile(member);

    }

    clearSuggestions();

});

/* ==========================================
   CLOSE MODALS
========================================== */

document.querySelectorAll(".modal-overlay")

.forEach(overlay=>{

    overlay.addEventListener("click",()=>{

        closeProfile();

        closeImageViewer();

    });

});

/* ==========================================
   ESC KEY
========================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeProfile();

        closeImageViewer();

        clearSuggestions();

    }

});

/* ==========================================
   COMPONENT EXPORTS
========================================== */

window.Components={

    createMemberCard,

    createTreeNode,

    buildFamilyTree,

    profileComponent,

    openProfile,

    closeProfile,

    statisticsComponent,

    loadingComponent,

    errorComponent,

    emptyResultComponent,

    searchMembers,

    renderSuggestions,

    clearSuggestions

};

/* ==========================================
   COMPONENTS READY
========================================== */

console.log(

    "Sardar Family Tree Components Loaded"

);

/* ==========================================
   Sardar Family Tree
   app.js
   Version : 5.0 FINAL
   Author  : AL Mehedi
========================================== */

"use strict";

/* ==========================================
   GLOBAL STATE
========================================== */

let familyData = null;

let currentRootId = null;

let currentScale = 1;

const MIN_SCALE = 0.50;

const MAX_SCALE = 2.50;

const SCALE_STEP = 0.10;

let isDragging = false;

let startX = 0;

let startY = 0;

let scrollLeft = 0;

let scrollTop = 0;

/* ==========================================
   DOM
========================================== */

const treeArea = document.getElementById("treeArea");

const treeContainer = document.getElementById("treeContainer");

const zoomInBtn = document.getElementById("zoomIn");

const zoomOutBtn = document.getElementById("zoomOut");

const resetZoomBtn = document.getElementById("resetZoom");

const darkModeBtn = document.getElementById("darkModeBtn");

/* ==========================================
   MEMBER HELPERS
========================================== */

function getMember(id){

    if(
        !familyData ||
        !Array.isArray(familyData.members)
    ){

        return null;

    }

    return familyData.members.find(

        member=>member.id===id

    ) || null;

}

function getRootMember(){

    if(!familyData){

        return null;

    }

    if(currentRootId){

        return getMember(currentRootId);

    }

    return familyData.members.find(

        member=>member.root===true

    ) || familyData.members[0];

}

/* ==========================================
   LOAD JSON
========================================== */

async function loadFamilyData(){

    try{

        treeContainer.innerHTML=

            Components.loadingComponent();

        const response=await fetch(

            "assets/data/family.json"

        );

        if(!response.ok){

            throw new Error(

                "family.json load failed."

            );

        }

        familyData=await response.json();
window.familyData = familyData;
        const root=getRootMember();

        if(!root){

            throw new Error(

                "Root member not found."

            );

        }

        currentRootId=root.id;

        renderTree();

    }

    catch(error){

        console.error(error);

        treeContainer.innerHTML=

            Components.errorComponent(

                error.message

            );

    }

}

/* ==========================================
   RENDER TREE
========================================== */

function renderTree(){

    if(

        !familyData ||

        !currentRootId

    ){

        return;

    }

    treeContainer.innerHTML=

        Components.buildFamilyTree(

            currentRootId

        );

    Components.statisticsComponent();

    applyZoom();

}

/* ==========================================
   CHANGE ROOT
========================================== */

function showMemberTree(id){

    const member=getMember(id);

    if(!member){

        return;

    }

    currentRootId=id;

    renderTree();

}

/* ==========================================
   REFRESH
========================================== */

function refreshTree(){

    renderTree();

}

/* ==========================================
   APPLY ZOOM
========================================== */

function applyZoom(){

    treeContainer.style.transform=

        `scale(${currentScale})`;

}

/* ==========================================
   ZOOM IN
========================================== */

function zoomIn(){

    currentScale=Math.min(

        currentScale+SCALE_STEP,

        MAX_SCALE

    );

    applyZoom();

}

/* ==========================================
   ZOOM OUT
========================================== */

function zoomOut(){

    currentScale=Math.max(

        currentScale-SCALE_STEP,

        MIN_SCALE

    );

    applyZoom();

}

/* ==========================================
   RESET ZOOM
========================================== */

function resetZoom(){

    currentScale=1;

    applyZoom();

}

/* ==========================================
   BUTTON EVENTS
========================================== */

zoomInBtn?.addEventListener(

    "click",

    zoomIn

);

zoomOutBtn?.addEventListener(

    "click",

    zoomOut

);

resetZoomBtn?.addEventListener(

    "click",

    resetZoom

);

/* ==========================================
   MOUSE WHEEL ZOOM
========================================== */

treeArea?.addEventListener(

    "wheel",

    function(e){

        if(!e.ctrlKey){

            return;

        }

        e.preventDefault();

        if(e.deltaY<0){

            zoomIn();

        }

        else{

            zoomOut();

        }

    },

    {

        passive:false

    }

);

/* ==========================================
   DRAG START
========================================== */

treeArea?.addEventListener(

    "mousedown",

    function(e){

        isDragging=true;

        startX=e.pageX-treeArea.offsetLeft;

        startY=e.pageY-treeArea.offsetTop;

        scrollLeft=treeArea.scrollLeft;

        scrollTop=treeArea.scrollTop;

        treeArea.style.cursor="grabbing";

    }

);

/* ==========================================
   DRAG MOVE
========================================== */

treeArea?.addEventListener(

    "mousemove",

    function(e){

        if(!isDragging){

            return;

        }

        e.preventDefault();

        const x=e.pageX-treeArea.offsetLeft;

        const y=e.pageY-treeArea.offsetTop;

        const walkX=(x-startX);

        const walkY=(y-startY);

        treeArea.scrollLeft=

            scrollLeft-walkX;

        treeArea.scrollTop=

            scrollTop-walkY;

    }

);

/* ==========================================
   DRAG END
========================================== */

function stopDragging(){

    isDragging=false;

    treeArea.style.cursor="grab";

}

treeArea?.addEventListener(

    "mouseup",

    stopDragging

);

treeArea?.addEventListener(

    "mouseleave",

    stopDragging

);

/* ==========================================
   TOUCH SUPPORT
========================================== */

treeArea?.addEventListener(

    "touchstart",

    function(e){

        if(e.touches.length!==1){

            return;

        }

        isDragging=true;

        startX=e.touches[0].pageX-treeArea.offsetLeft;

        startY=e.touches[0].pageY-treeArea.offsetTop;

        scrollLeft=treeArea.scrollLeft;

        scrollTop=treeArea.scrollTop;

    },

    {

        passive:true

    }

);

treeArea?.addEventListener(

    "touchmove",

    function(e){

        if(!isDragging){

            return;

        }

        const x=e.touches[0].pageX-treeArea.offsetLeft;

        const y=e.touches[0].pageY-treeArea.offsetTop;

        treeArea.scrollLeft=

            scrollLeft-(x-startX);

        treeArea.scrollTop=

            scrollTop-(y-startY);

    },

    {

        passive:true

    }

);

treeArea?.addEventListener(

    "touchend",

    function(){

        isDragging=false;

    }

);

/* ==========================================
   DARK MODE
========================================== */

function enableDarkMode(){

    document.body.classList.add("dark");

    localStorage.setItem(

        "theme",

        "dark"

    );

    if(darkModeBtn){

        darkModeBtn.textContent="☀️";

    }

}

function disableDarkMode(){

    document.body.classList.remove("dark");

    localStorage.setItem(

        "theme",

        "light"

    );

    if(darkModeBtn){

        darkModeBtn.textContent="🌙";

    }

}

function toggleDarkMode(){

    if(

        document.body.classList.contains("dark")

    ){

        disableDarkMode();

    }

    else{

        enableDarkMode();

    }

}

darkModeBtn?.addEventListener(

    "click",

    toggleDarkMode

);

/* ==========================================
   LOAD SAVED THEME
========================================== */

(function(){

    const savedTheme=

        localStorage.getItem("theme");

    if(savedTheme==="dark"){

        enableDarkMode();

    }

})();

/* ==========================================
   INITIALIZE
========================================== */

document.addEventListener(

    "DOMContentLoaded",

    function(){

        loadFamilyData();

    }

);

/* ==========================================
   GLOBAL EXPORTS
========================================== */


window.getMember=getMember;

window.showMemberTree=showMemberTree;

window.refreshTree=refreshTree;

window.loadFamilyData=loadFamilyData;

/* ==========================================
   READY
========================================== */

console.log(

    "Sardar Family Tree App Loaded"

);

let familyData = [];
let currentRootId = "1"; 
let rootHistory = []; 
let svg, g, zoomHandler;
let isAdminLoggedIn = false;
const ADMIN_PASSWORD = "ampmhd@@@03042000"; 

// ১৮৬ জনের সম্পূর্ণ ডেটা সেট (ইংরেজি নাম এবং পূর্ণাঙ্গ তথ্য সহ)
const familyData = [
  name: "পদ্মাশী সর্দার",
  children: [
    {
      name: "আকালি সর্দার",
      children: [
        {
          name: "ইসু সর্দার",
          children: [
            {
              name: "দোশর সর্দার",
              children: [
                {
                  name: "বানেজ সর্দার",
                  children: [
                    { name: "মহাসিন সর্দার" },
                    { name: "আবুল সর্দার" },
                    { name: "আমজাদ সর্দার" },
                    { name: "রেজিয়া" },
                    { name: "হাফিয়া" },
                    { name: "বুলু" },
                    { name: "রাশু" },
                    { name: "ফজিলা" }
                  ]
                },
                {
                  name: "মকবুল সর্দার",
                  children: [
                    { name: "মৃত আলতাফ সর্দার" },
                    { name: "রবিউল সর্দার" },
                    { name: "রশিদ সর্দার" },
                    { name: "মনোয়ার" },
                    { name: "আম্বিয়া" },
                    { name: "হাশেরা" },
                    { name: "রেকেনা" },
                    { name: "রুশিয়া" }
                  ]
                },
                { name: "জাইমন" },
                { name: "হারিজা" },
                { name: "হাইতন" }
              ]
            },
            {
              name: "পেয়ার সর্দার",
              children: [
                {
                  name: "জানু সর্দার",
                  children: [
                    { name: "জামশেদ সর্দার" },
                    { name: "ফুলু জান" },
                    { name: "মাজেদা খাতুন" },
                    { name: "লুলু জান" },
                    { name: "খদিজান" }
                  ]
                },
                {
                  name: "হারান সর্দার",
                  children: [
                    { name: "ঝন্টু সর্দার" },
                    { name: "সিদ্দিক সর্দার" },
                    { name: "জাহাঙ্গীর সর্দার" },
                    { name: "কমেজান" },
                    { name: "মিষ্টুজান" },
                    { name: "বালীজান" }
                  ]
                },
                {
                  name: "জাহের সর্দার",
                  children: [
                    { name: "সাধু সর্দার" },
                    { name: "মধু সর্দার" },
                    { name: "জাদু সর্দার" },
                    { name: "মদিনা" },
                    { name: "মরজিনা" },
                    { name: "করিমন নেছা" },
                    { name: "তারাজাম" }
                  ]
                },
                {
                  name: "ভাষা সর্দার",
                  children: [
                    { name: "মোজা সর্দার" },
                    { name: "মৃত মইনুদ্দিন সর্দার" },
                    { name: "জিয়ারুল সর্দার" },
                    { name: "সামিয়ন" }
                  ]
                }
              ]
            },
            {
              name: "ফকির সর্দার",
              children: [
                {
                  name: "আজিম সর্দার",
                  children: [
                    { name: "জালাল সর্দার" },
                    { name: "জিয়া সর্দার" },
                    { name: "রতন সর্দার" },
                    { name: "ইয়াতন" },
                    { name: "ফুকন" },
                    { name: "মৃত টুকলিমা" }
                  ]
                },
                {
                  name: "লায়েব সর্দার",
                  children: [
                    { name: "মৃত দুলাল সর্দার" },
                    { name: "আলাল সর্দার" },
                    { name: "হেলাল সর্দার" },
                    { name: "ফুনকা" },
                    { name: "ফিরোজা" }
                  ]
                }
              ]
            },
            { name: "আবেদা খাতুন" }
          ]
        },
        {
          name: "কেসু সর্দার",
          children: [
            {
              name: "আশারত সর্দার",
              children: [
                {
                  name: "কুকন সর্দার",
                  children: [
                    { name: "হযরত সর্দার" },
                    { name: "হাফেজ সর্দার" },
                    { name: "শাহবাজ সর্দার" },
                    { name: "শরেজান" },
                    { name: "মীনা" },
                    { name: "ফইমা" },
                    { name: "সুখেজান" }
                  ]
                },
                {
                  name: "এলাহী সর্দার",
                  children: [
                    { name: "ইদ্রিস সর্দার" },
                    { name: "আলম সর্দার" },
                    { name: "আউলাদ সর্দার" },
                    { name: "ইলেফ সর্দার" },
                    { name: "জাহারন" },
                    { name: "তহুরা" },
                    { name: "খালেদা" }
                  ]
                }
              ]
            },
            {
              name: "বসারত সর্দার",
              children: [
                {
                  name: "শুকট সর্দার",
                  children: [
                    { name: "মৃত হাবিল সর্দার" },
                    { name: "মৃত হানিফ সর্দার" },
                    { name: "বজলু সর্দার" },
                    { name: "কাবিল সর্দার" },
                    { name: "মালেকা" },
                    { name: "হিমা" },
                    { name: "নিমা" }
                  ]
                },
                {
                  name: "জলিল সর্দার",
                  children: [
                    { name: "মান্নান সর্দার" },
                    { name: "সাধু সর্দার" },
                    { name: "মধু সর্দার" },
                    { name: "মৃত আনুরা" },
                    { name: "নাহেরা" },
                    { name: "মৃত ফনুয়ারা" }
                  ]
                },
                {
                  name: "মহির সর্দার",
                  children: [
                    { name: "কামরুজ্জামান করেশ" },
                    { name: "শফিকুল সর্দার" },
                    { name: "নাসিমা" },
                    { name: "মদন" },
                    { name: "লাকি" },
                    { name: "রোকসানা" }
                  ]
                },
                { name: "পরিজান" },
                { name: "জমেলা" }
              ]
            },
            {
              name: "ভুগল সর্দার",
              children: [
                {
                  name: "সুবল সর্দার",
                  children: [
                    { name: "ময়লাল সর্দার" },
                    { name: "হবিবার সর্দার" },
                    { name: "মতালি সর্দার" },
                    { name: "লতা জান" },
                    { name: "খরকি" },
                    { name: "সহুরা" }
                  ]
                },
                {
                  name: "মজিবর সর্দার",
                  children: [
                    { name: "নজরুল সর্দার" },
                    { name: "জালাল সর্দার" },
                    { name: "কামাল সর্দার" },
                    { name: "আহাদ সর্দার" },
                    { name: "মনোয়ারা" },
                    { name: "তসলিমা" },
                    { name: "স্বাধীনা" }
                  ]
                },
                {
                  name: "মকলেস সর্দার",
                  children: [
                    { name: "আকমান সর্দার" },
                    { name: "ইংরাজ সর্দার" },
                    { name: "ইয়াকুব সর্দার" },
                    { name: "আনারুল সর্দার" },
                    { name: "রেসে" },
                    { name: "রুশি" },
                    { name: "মৃত ফরিদা" },
                    { name: "ফিরো" }
                  ]
                },
                {
                  name: "সারু সর্দার",
                  children: [
                    { name: "ইয়াদুল সর্দার" },
                    { name: "ইউনুস সর্দার" },
                    { name: "মৃত বেনেয়ামিন" },
                    { name: "রঞ্জনা" },
                    { name: "মেরিনা" }
                  ]
                },
                { name: "রহিমা" },
                { name: "জায়েদা" },
                { name: "জয়গন নেসা" }
              ]
            },
            {
              name: "কসের সর্দার",
              children: [
                {
                  name: "খলিল সর্দার",
                  children: [
                    { name: "রেফেজ সর্দার" },
                    { name: "কুবির সর্দার" },
                    { name: "জুমির সর্দার" },
                    { name: "শাইজুদ্দি সর্দার" },
                    { name: "মৃত রাজিয়া" }
                  ]
                },
                {
                  name: "নুরল সর্দার",
                  children: [
                    { name: "ওয়ারিস সর্দার" },
                    { name: "ইদ্রিস সর্দার" },
                    { name: "আপিল সর্দার" },
                    { name: "নিহারুল সর্দার" }
                  ]
                },
                {
                  name: "আলিম সর্দার",
                  children: [
                    { name: "উজ্জ্বল সর্দার" },
                    { name: "রফিকুল সর্দার" },
                    { name: "হিসাব সর্দার" }
                  ]
                },
                {
                  name: "তফেজ্জল সর্দার",
                  children: [
                    { name: "মহন সর্দার" },
                    { name: "করণ সর্দার" },
                    { name: "রফিয়া" },
                    { name: "তহুরা" },
                    { name: "তাহেরা" },
                    { name: "সুলতানা" }
                  ]
                },
                { name: "রমেলা খাতুন" }
              ]
            },
            {
              name: "ইমান আলী সর্দার",
              children: [
                {
                  name: "সলেমান সর্দার",
                  children: [
                    { name: "পেন্টু সর্দার" },
                    { name: "সেন্টু সর্দার" },
                    { name: "আসাদ সর্দার" },
                    { name: "জুয়েল সর্দার" },
                    { name: "সোহেল সর্দার" },
                    { name: "রিংকু সর্দার" },
                    { name: "বেলি" },
                    { name: "সেলিনা" },
                    { name: "লাভলি" },
                    { name: "রিক্তা" },
                    { name: "পিস্তা" }
                  ]
                },
                {
                  name: "আব্দুস সামাদ সর্দার",
                  children: [
                    { name: "রোকনুজ্জামান রানা" },
                    { name: "হাসানুজ্জামান রাজা" },
                    { name: "মৃত তানিম হাসান রাঙ্গা" },
                    { name: "সুমন সর্দার" },
                    { name: "রীনা" },
                    { name: "বিনা" },
                    { name: "টিনা" }
                  ]
                },
                {
                  name: "জামাল সর্দার",
                  children: [
                    { name: "মামুন সর্দার" },
                    { name: "মাসুম সর্দার" },
                    { name: "মৌসুম সর্দার" },
                    { name: "কুসুম সর্দার" },
                    { name: "পান্না সর্দার" },
                    { name: "নান্টু সর্দার" },
                    { name: "মিঠন সর্দার" },
                    { name: "টুটন সর্দার" },
                    { name: "ছোটন সর্দার" },
                    { name: "জাহানারা" },
                    { name: "সাথি" }
                  ]
                },
                {
                  name: "রুস্তম সর্দার",
                  children: [
                    { name: "রেজাউল সর্দার" },
                    { name: "মানিক সর্দার" },
                    { name: "আরিফ সর্দার" },
                    { name: "রিপন সর্দার" },
                    { name: "রোজিনা" },
                    { name: "রুমা" }
                  ]
                },
                {
                  name: "আকবর সর্দার",
                  children: [
                    { name: "শুভ্র" },
                    { name: "অন্ত" },
                    { name: "আফিফা" }
                  ]
                },
                {
                  name: "মাহাতাব উদ্দিন সর্দার",
                  children: [
                    { name: "আল-মেহেদী" },
                    { name: "আবু সাঈদ" },
                    { name: "মরিয়ম খাতুন" },
                    { name: "মৃত পপি" },
                    { name: "মেরিনা খাতুন" }
                  ]
                },
                { name: "নেহার" },
                { name: "সকিনা" },
                { name: "শহিদা" },
                { name: "শাহানূর" },
                { name: "কাজল" }
              ]
            },
            { name: "সালেজান" }
          ]
        }
      ]
    }
  ]
]

document.addEventListener("DOMContentLoaded", () => {
    loadFamilyData();
    initD3Canvas();
    updateStatistics();
    renderTree();
    setupEventListeners();
    setupSearchEngine();
    setupHistoryEngine();
});

function loadFamilyData() {
    const saved = localStorage.getItem("sardarFamilyTreeData_v2");
    if (saved && JSON.parse(saved).length > 0) {
        familyData = JSON.parse(saved);
    } else {
        familyData = fullSardarData;
        saveFamilyData();
    }
}

function saveFamilyData() {
    localStorage.setItem("sardarFamilyTreeData_v2", JSON.stringify(familyData));
    updateStatistics();
    populateFormOptions();
    renderTree();
}

function updateStatistics() {
    const totalEl = document.getElementById("topStatTotal");
    const maleEl = document.getElementById("topStatMale");
    const femaleEl = document.getElementById("topStatFemale");

    if (totalEl) totalEl.innerText = familyData.length;
    if (maleEl) maleEl.innerText = familyData.filter(m => m.gender === "male").length;
    if (femaleEl) femaleEl.innerText = familyData.filter(m => m.gender === "female").length;
}

function initD3Canvas() {
    svg = d3.select("#treeSvg");
    g = d3.select("#treeGroup");

    zoomHandler = d3.zoom()
        .scaleExtent([0.15, 2.5])
        .on("zoom", (event) => g.attr("transform", event.transform));

    svg.call(zoomHandler);
}

function getCustomAvatar(member) {
    if (member.photo) return member.photo;
    const seed = encodeURIComponent(member.nameEn || member.name || "Sardar");
    if (member.gender === "female") {
        return `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}&backgroundColor=ffdfbf`;
    }
    return `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}&backgroundColor=b6e3f4`;
}

function buildHierarchy(rootId) {
    const rootItem = familyData.find(item => item.id === rootId);
    if (!rootItem) return null;

    let rootNode = { ...rootItem, children: [] };

    function getSortedChildren(parentId) {
        const children = familyData.filter(item => item.fatherId === parentId);
        const males = children.filter(c => c.gender === "male");
        const females = children.filter(c => c.gender === "female");
        return [...males, ...females];
    }

    if (rootId === "1") {
        const gen2 = getSortedChildren(rootId);
        gen2.forEach(child2 => {
            let node2 = { ...child2, children: [] };
            const gen3 = getSortedChildren(child2.id);
            gen3.forEach(child3 => {
                node2.children.push({ ...child3, children: [] });
            });
            rootNode.children.push(node2);
        });
    } else {
        const directChildren = getSortedChildren(rootId);
        directChildren.forEach(child => {
            rootNode.children.push({ ...child, children: [] });
        });
    }

    return d3.hierarchy(rootNode);
}

function drawOrthogonalLink(d) {
    const startX = d.source.x;
    const startY = d.source.y;
    const endX = d.target.x;
    const endY = d.target.y;
    const midY = startY + (endY - startY) / 2;

    return `M ${startX} ${startY} V ${midY} H ${endX} V ${endY}`;
}

function changeRoot(newRootId) {
    if (currentRootId !== newRootId) {
        rootHistory.push(currentRootId);
        currentRootId = newRootId;
        window.history.pushState({ rootId: currentRootId, type: "tree" }, "");
        renderTree();
    }
}

function renderTree() {
    g.selectAll("*").remove();

    const root = buildHierarchy(currentRootId);
    if (!root) return;

    const isMobile = window.innerWidth < 640;
    const nodeWidth = isMobile ? 130 : 145;
    const nodeHeight = isMobile ? 50 : 55;
    const treeLayout = d3.tree().nodeSize([nodeWidth + 16, nodeHeight + 55]);

    treeLayout(root);

    g.selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "#0284c7")
        .attr("stroke-width", 2)
        .attr("d", drawOrthogonalLink);

    const node = g.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.x - nodeWidth / 2},${d.y - nodeHeight / 2})`);

    // মেম্বার কার্ড বক্স (চ্যাপ্টা সুন্দর শেপ)
    node.append("rect")
        .attr("width", nodeWidth)
        .attr("height", d => hasChildren(d.data.id) ? nodeHeight + 18 : nodeHeight)
        .attr("rx", 8)
        .attr("fill", "#ffffff")
        .attr("stroke", d => d.data.gender === "male" ? "#2563eb" : "#ec4899")
        .attr("stroke-width", 2)
        .attr("class", "cursor-pointer")
        .on("click", (event, d) => openProfileModal(d.data.id));

    // বাংলা নাম (স্পষ্ট, বড় ও অত্যন্ত বোল্ড)
    node.append("text")
        .attr("x", nodeWidth / 2)
        .attr("y", 19)
        .attr("text-anchor", "middle")
        .attr("font-weight", "900")
        .attr("font-size", isMobile ? "12px" : "13.5px")
        .attr("fill", "#0f172a")
        .attr("class", "cursor-pointer select-none")
        .on("click", (event, d) => openProfileModal(d.data.id))
        .text(d => d.data.name);

    // ইংরেজি নাম (বাংলা নামের নিচ দিয়ে স্পষ্টভাবে দেখানো)
    node.append("text")
        .attr("x", nodeWidth / 2)
        .attr("y", 35)
        .attr("text-anchor", "middle")
        .attr("font-weight", "600")
        .attr("font-size", isMobile ? "9.5px" : "10.5px")
        .attr("fill", "#0284c7")
        .attr("class", "cursor-pointer select-none")
        .on("click", (event, d) => openProfileModal(d.data.id))
        .text(d => d.data.nameEn || (d.data.isDeceased ? "(Late)" : ""));

    // বংশধারা নেভিগেশন বাটন
    node.each(function(d) {
        if (hasChildren(d.data.id)) {
            const btnGroup = d3.select(this)
                .append("g")
                .attr("class", "cursor-pointer")
                .on("click", (e) => {
                    e.stopPropagation();
                    changeRoot(d.data.id);
                });

            btnGroup.append("rect")
                .attr("x", 4)
                .attr("y", nodeHeight - 2)
                .attr("width", nodeWidth - 8)
                .attr("height", 16)
                .attr("rx", 4)
                .attr("fill", "#f59e0b");

            btnGroup.append("text")
                .attr("x", nodeWidth / 2)
                .attr("y", nodeHeight + 9)
                .attr("text-anchor", "middle")
                .attr("font-size", "8.5px")
                .attr("fill", "#ffffff")
                .attr("font-weight", "bold")
                .text("বংশধারা ➔");
        }
    });

    autoFitTree();
}

function hasChildren(id) {
    return familyData.some(item => item.fatherId === id);
}

function autoFitTree() {
    if (!g || !svg) return;
    
    setTimeout(() => {
        const bbox = g.node().getBBox();
        if (bbox.width === 0 || bbox.height === 0) return;

        const svgNode = svg.node();
        const width = svgNode.clientWidth || window.innerWidth;
        const height = svgNode.clientHeight || window.innerHeight;

        const padding = 60;
        const scale = Math.min(
            (width - padding) / bbox.width,
            (height - padding) / bbox.height,
            1.1
        );

        const translateX = (width - bbox.width * scale) / 2 - bbox.x * scale;
        const translateY = 80;

        svg.transition()
            .duration(600)
            .call(zoomHandler.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale));
    }, 50);
}

function resetZoom() {
    autoFitTree();
}

function isAnyModalOpen() {
    const modals = ["profileModal", "adminDrawer", "adminLoginModal"];
    return modals.some(id => {
        const el = document.getElementById(id);
        return el && !el.classList.contains("hidden");
    });
}

function handleGlobalBack() {
    if (isAnyModalOpen()) {
        closeAllModals();
        return true;
    }
    if (rootHistory.length > 0) {
        currentRootId = rootHistory.pop();
        renderTree();
        return true;
    }
    return false;
}

function setupHistoryEngine() {
    window.history.replaceState({ rootId: currentRootId, type: "tree" }, "");

    window.addEventListener("popstate", (event) => {
        if (isAnyModalOpen()) {
            closeAllModals();
            window.history.pushState({ rootId: currentRootId, type: "tree" }, "");
        } else if (rootHistory.length > 0) {
            currentRootId = rootHistory.pop();
            renderTree();
        }
    });
}

// বিস্তারিত প্রোফাইল পপআপ খোলার ফাংশন
function openProfileModal(id) {
    const m = familyData.find(item => item.id === id);
    if (!m) return;

    document.getElementById("modalName").innerText = m.name;
    document.getElementById("modalNameEn").innerText = m.nameEn || "";
    document.getElementById("modalPhoto").src = getCustomAvatar(m);

    const statusEl = document.getElementById("modalStatus");
    statusEl.innerText = m.isDeceased ? "মৃত" : "জীবিত";
    statusEl.className = m.isDeceased 
        ? "inline-block mt-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300" 
        : "inline-block mt-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300";

    const father = familyData.find(f => f.id === m.fatherId);
    document.getElementById("modalFather").innerText = father ? father.name : "তথ্য নেই";

    const mother = familyData.find(f => f.id === m.motherId);
    document.getElementById("modalMother").innerText = mother ? mother.name : "তথ্য নেই";

    document.getElementById("modalBloodGroup").innerText = m.bloodGroup || "তথ্য নেই";
    document.getElementById("modalDob").innerText = m.dob || "তথ্য নেই";
    
    const dodRow = document.getElementById("dodRow");
    if (m.isDeceased) {
        dodRow.classList.remove("hidden");
        document.getElementById("modalDod").innerText = m.dod || "তথ্য নেই";
    } else {
        dodRow.classList.add("hidden");
    }

    document.getElementById("modalOccupation").innerText = m.occupation || "তথ্য নেই";
    document.getElementById("modalEducation").innerText = m.education || "তথ্য নেই";
    document.getElementById("modalPhone").innerText = m.phone || "তথ্য নেই";
    document.getElementById("modalAddress").innerText = m.address || "তথ্য নেই";
    document.getElementById("modalBio").innerText = m.bio || "এই সদস্য সম্পর্কে কোনো বিশেষ বিবরণ বা জীবনবৃত্তান্ত যুক্ত করা হয়নি।";

    const viewSubtreeBtn = document.getElementById("viewSubtreeBtn");
    if (viewSubtreeBtn) {
        viewSubtreeBtn.onclick = () => {
            closeAllModals();
            changeRoot(m.id);
        };
    }

    const editBtn = document.getElementById("adminEditMemberBtn");
    if (editBtn) {
        if (isAdminLoggedIn) {
            editBtn.classList.remove("hidden");
            editBtn.onclick = () => {
                closeAllModals();
                openEditForm(m);
            };
        } else {
            editBtn.classList.add("hidden");
        }
    }

    const modal = document.getElementById("profileModal");
    if (modal) {
        modal.classList.remove("hidden");
        window.history.pushState({ modal: true }, "");
    }
}

function openEditForm(member) {
    const adminDrawer = document.getElementById("adminDrawer");
    if (adminDrawer) {
        adminDrawer.classList.remove("hidden");
        window.history.pushState({ drawer: true }, "");
    }
    
    document.getElementById("editMemberId").value = member ? member.id : "";
    document.getElementById("formName").value = member ? member.name : "";
    document.getElementById("formNameEn").value = member ? (member.nameEn || "") : "";
    document.getElementById("formGender").value = member ? member.gender : "male";
    document.getElementById("formFather").value = member ? (member.fatherId || "") : "";
    document.getElementById("formMother").value = member ? (member.motherId || "") : "";
    document.getElementById("formIsDeceased").value = member ? (member.isDeceased ? "true" : "false") : "false";
    document.getElementById("formBloodGroup").value = member ? (member.bloodGroup || "") : "";
    document.getElementById("formPhone").value = member ? (member.phone || "") : "";
    document.getElementById("formDob").value = member ? (member.dob || "") : "";
    document.getElementById("formDod").value = member ? (member.dod || "") : "";
    document.getElementById("formOccupation").value = member ? (member.occupation || "") : "";
    document.getElementById("formEducation").value = member ? (member.education || "") : "";
    document.getElementById("formAddress").value = member ? (member.address || "") : "";
    document.getElementById("formPhoto").value = member ? (member.photo || "") : "";
    document.getElementById("formBio").value = member ? (member.bio || "") : "";

    const formTitle = document.getElementById("formTitle");
    if (formTitle) formTitle.innerText = member ? "তথ্য এডিট / সংযোজন করুন" : "নতুন সদস্য যোগ করুন";
}

function saveMemberForm(event) {
    if (event) event.preventDefault();

    const id = document.getElementById("editMemberId").value;
    const name = document.getElementById("formName").value.trim();
    const nameEn = document.getElementById("formNameEn").value.trim();
    const gender = document.getElementById("formGender").value;
    const fatherId = document.getElementById("formFather").value || null;
    const motherId = document.getElementById("formMother").value || null;
    const isDeceased = (document.getElementById("formIsDeceased").value === "true");
    const bloodGroup = document.getElementById("formBloodGroup").value;
    const phone = document.getElementById("formPhone").value.trim();
    const dob = document.getElementById("formDob").value;
    const dod = document.getElementById("formDod").value;
    const occupation = document.getElementById("formOccupation").value.trim();
    const education = document.getElementById("formEducation").value.trim();
    const address = document.getElementById("formAddress").value.trim();
    const photo = document.getElementById("formPhoto").value.trim();
    const bio = document.getElementById("formBio").value.trim();

    if (!name || !nameEn) {
        alert("বাংলা এবং ইংরেজি উভয় নামই প্রদান করা আবশ্যক!");
        return;
    }

    if (id) {
        const index = familyData.findIndex(m => m.id === id);
        if (index !== -1) {
            familyData[index] = { 
                ...familyData[index], 
                name, nameEn, gender, fatherId, motherId, isDeceased, bloodGroup,
                phone, dob, dod, occupation, education, address, photo, bio
            };
        }
    } else {
        const newId = Date.now().toString();
        familyData.push({ 
            id: newId, name, nameEn, gender, fatherId, motherId, isDeceased, bloodGroup,
            phone, dob, dod, occupation, education, address, photo, bio
        });
    }

    saveFamilyData();
    closeAllModals();
    renderTree();
    alert("সকল তথ্য সফলভাবে সংরক্ষণ করা হয়েছে!");
}

function deleteCurrentMember() {
    const id = document.getElementById("editMemberId").value;
    if (!id) {
        alert("কোনো সদস্য সিলেক্ট করা হয়নি!");
        return;
    }

    if (confirm("আপনি কি নিশ্চিত যে এই সদস্যকে বংশবৃক্ষ থেকে মুছে ফেলতে চান?")) {
        familyData = familyData.filter(m => m.id !== id);
        saveFamilyData();
        closeAllModals();
        renderTree();
        alert("সদস্যকে সফলভাবে মুছে ফেলা হয়েছে!");
    }
}

function closeAllModals() {
    ["profileModal", "adminDrawer", "adminLoginModal"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
    });
}

function populateFormOptions() {
    const fatherSelect = document.getElementById("formFather");
    const motherSelect = document.getElementById("formMother");

    if (fatherSelect) {
        fatherSelect.innerHTML = `<option value="">পিতা নির্বাচন করুন</option>`;
        familyData.filter(m => m.gender === "male").forEach(m => {
            fatherSelect.innerHTML += `<option value="${m.id}">${m.name} (${m.id})</option>`;
        });
    }

    if (motherSelect) {
        motherSelect.innerHTML = `<option value="">মাতা নির্বাচন করুন</option>`;
        familyData.filter(m => m.gender === "female").forEach(m => {
            motherSelect.innerHTML += `<option value="${m.id}">${m.name} (${m.id})</option>`;
        });
    }
}

function setupEventListeners() {
    document.getElementById("closeProfileBtn").onclick = closeAllModals;
    document.getElementById("closeAdminBtn").onclick = closeAllModals;
    document.getElementById("closeAdminLoginBtn").onclick = closeAllModals;
    document.getElementById("resetZoomBtn").onclick = resetZoom;

    document.getElementById("screenBackButton").onclick = () => {
        handleGlobalBack();
    };

    document.getElementById("zoomInBtn").onclick = () => svg.transition().duration(300).call(zoomHandler.scaleBy, 1.2);
    document.getElementById("zoomOutBtn").onclick = () => svg.transition().duration(300).call(zoomHandler.scaleBy, 0.8);

    document.getElementById("adminLoginBtn").onclick = () => {
        if (!isAdminLoggedIn) {
            const modal = document.getElementById("adminLoginModal");
            if (modal) {
                modal.classList.remove("hidden");
                window.history.pushState({ adminLogin: true }, "");
            }
        } else {
            openEditForm(null);
        }
    };

    document.getElementById("adminLoginForm").onsubmit = (e) => {
        e.preventDefault();
        const pass = document.getElementById("adminPassword").value;
        if (pass === ADMIN_PASSWORD) {
            isAdminLoggedIn = true;
            closeAllModals();
            openEditForm(null);
            alert("অ্যাডমিন লগইন সফল হয়েছে!");
        } else {
            alert("ভুল পাসওয়ার্ড!");
        }
    };

    document.getElementById("adminLogoutBtn").onclick = () => {
        isAdminLoggedIn = false;
        closeAllModals();
        alert("লগআউট সফল হয়েছে!");
    };

    document.getElementById("memberForm").onsubmit = saveMemberForm;

    document.getElementById("themeToggleBtn").onclick = () => {
        document.documentElement.classList.toggle("dark");
    };
}

function setupSearchEngine() {
    const searchInput = document.getElementById("searchInput");
    const suggestionBox = document.getElementById("searchSuggestionBox");

    if (!searchInput || !suggestionBox) return;

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query === "") {
            suggestionBox.classList.add("hidden");
            return;
        }

        const filtered = familyData.filter(m => 
            (m.name && m.name.toLowerCase().includes(query)) || 
            (m.nameEn && m.nameEn.toLowerCase().includes(query))
        );
        
        renderList(filtered, suggestionBox, searchInput);
    });

    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !suggestionBox.contains(e.target)) {
            suggestionBox.classList.add("hidden");
        }
    });
}

function renderList(items, box, inputElement) {
    if (items.length === 0) {
        box.classList.add("hidden");
        return;
    }

    box.innerHTML = "";

    items.slice(0, 8).forEach(m => {
        const row = document.createElement("div");
        row.className = "px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-700/50 flex justify-between items-center text-xs text-gray-700 dark:text-gray-200";
        row.innerHTML = `
            <div>
                <span class="font-bold">${m.name}</span>
                ${m.nameEn ? `<span class="text-[10px] text-gray-400 ml-1">(${m.nameEn})</span>` : ''}
            </div>
            <span class="text-[10px] px-1.5 py-0.5 rounded ${m.gender === 'male' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'}">${m.gender === "male" ? "পুরুষ" : "নারী"}</span>
        `;

        row.addEventListener("click", () => {
            if (inputElement) inputElement.value = m.name;
            box.classList.add("hidden");

            changeRoot(m.fatherId ? m.fatherId : m.id);
            openProfileModal(m.id);
        });

        box.appendChild(row);
    });

    box.classList.remove("hidden");
}

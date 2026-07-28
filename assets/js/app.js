// ==========================================
// শেঁকড় - ধাপে ধাপে বংশবৃক্ষ (Compact Drill-Down View)
// ==========================================

let familyData = [];
let currentRootId = "1"; // ডিফল্টভাবে পদ্মাশী সর্দার (Root)
let historyStack = []; // নেভিগেশনের জন্য
let svg, g, zoomHandler;

const DEFAULT_MALE_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=SardarMaleAvatar&backgroundColor=b6e3f4";
const DEFAULT_FEMALE_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=SardarFemaleAvatar&backgroundColor=ffdfbf";

// মূল বংশলতিকা ডাটাবেজ
const fullSardarData = [
    // ১ম ও ২য় প্রজন্ম
    { id: "1", name: "পদ্মাশী সর্দার", nameEn: "Padmashi Sardar", gender: "male", fatherId: null },
    { id: "2", name: "আকালি সর্দার", nameEn: "Akali Sardar", gender: "male", fatherId: "1" },
    
    // ৩য় প্রজন্ম
    { id: "3", name: "ইসু সর্দার", nameEn: "Isu Sardar", gender: "male", fatherId: "2" },
    { id: "70", name: "কেসু সর্দার", nameEn: "Kesu Sardar", gender: "male", fatherId: "2" },

    // ইসু সর্দার শাখা (৪র্থ ও পরবর্তী প্রজন্ম)
    { id: "4", name: "দোশর সর্দার", nameEn: "Doshor Sardar", gender: "male", fatherId: "3" },
    { id: "5", name: "বানেজ সর্দার", gender: "male", fatherId: "4" },
    { id: "6", name: "মহাসিন সর্দার", gender: "male", fatherId: "5" },
    { id: "7", name: "আবুল সর্দার", gender: "male", fatherId: "5" },
    { id: "8", name: "আমজাদ সর্দার", gender: "male", fatherId: "5" },
    { id: "9", name: "রেজিয়া", gender: "female", fatherId: "5" },
    { id: "10", name: "হাফিয়া", gender: "female", fatherId: "5" },
    { id: "11", name: "রইলা", gender: "female", fatherId: "5" },
    { id: "12", name: "বুলু", gender: "female", fatherId: "5" },
    { id: "13", name: "রাশু", gender: "female", fatherId: "5" },
    { id: "14", name: "ফজিলা", gender: "female", fatherId: "5" },
    
    { id: "15", name: "মকবুল সর্দার", gender: "male", fatherId: "4" },
    { id: "16", name: "মৃত আলতাফ সর্দার", gender: "male", fatherId: "15", isDeceased: true },
    { id: "17", name: "রবিউল সর্দার", gender: "male", fatherId: "15" },
    { id: "18", name: "রশিদ সর্দার", gender: "male", fatherId: "15" },
    { id: "19", name: "মনোয়ার", gender: "male", fatherId: "15" },
    { id: "20", name: "আম্বিয়া", gender: "female", fatherId: "15" },
    { id: "21", name: "হাশেরা", gender: "female", fatherId: "15" },
    { id: "22", name: "রেকেনা", gender: "female", fatherId: "15" },
    { id: "23", name: "রুশিয়া", gender: "female", fatherId: "15" },
    
    { id: "24", name: "জাইমন", gender: "female", fatherId: "4" },
    { id: "25", name: "হারিজা", gender: "female", fatherId: "4" },
    { id: "26", name: "হাইতন", gender: "female", fatherId: "4" },

    { id: "27", name: "পেয়ার সর্দার", gender: "male", fatherId: "3" },
    { id: "28", name: "জানু সর্দার", gender: "male", fatherId: "27" },
    { id: "29", name: "জামশেদ সর্দার", gender: "male", fatherId: "28" },
    { id: "30", name: "ফুলু জান", gender: "female", fatherId: "28" },
    { id: "31", name: "মাজেদা খাতুন", gender: "female", fatherId: "28" },
    { id: "32", name: "লুলু জান", gender: "female", fatherId: "28" },
    { id: "33", name: "খদিজান", gender: "female", fatherId: "28" },

    { id: "34", name: "হারান সর্দার", gender: "male", fatherId: "27" },
    { id: "35", name: "ঝন্টু সর্দার", gender: "male", fatherId: "34" },
    { id: "36", name: "সিদ্দিক সর্দার", gender: "male", fatherId: "34" },
    { id: "37", name: "জাহাঙ্গীর সর্দার", gender: "male", fatherId: "34" },
    { id: "38", name: "কমেজান", gender: "female", fatherId: "34" },
    { id: "39", name: "মিষ্টুজান", gender: "female", fatherId: "34" },
    { id: "40", name: "বালীজান", gender: "female", fatherId: "34" },

    { id: "41", name: "জাহের সর্দার", gender: "male", fatherId: "27" },
    { id: "42", name: "সাধু সর্দার", gender: "male", fatherId: "41" },
    { id: "43", name: "মধু সর্দার", gender: "male", fatherId: "41" },
    { id: "44", name: "জাদু সর্দার", gender: "male", fatherId: "41" },
    { id: "45", name: "মদিনা", gender: "female", fatherId: "41" },
    { id: "46", name: "মরজিনা", gender: "female", fatherId: "41" },
    { id: "47", name: "করিমন নেছা", gender: "female", fatherId: "41" },
    { id: "48", name: "তারাজাম", gender: "female", fatherId: "41" },

    { id: "49", name: "ভাষা সর্দার", gender: "male", fatherId: "27" },
    { id: "50", name: "মোজা সর্দার", gender: "male", fatherId: "49" },
    { id: "51", name: "মৃত মইনুদ্দিন সর্দার", gender: "male", fatherId: "49", isDeceased: true },
    { id: "52", name: "জিয়ারুল সর্দার", gender: "male", fatherId: "49" },
    { id: "53", name: "সামিয়ন", gender: "female", fatherId: "49" },
    { id: "54", name: "রমেসা", gender: "female", fatherId: "27" },

    { id: "55", name: "ফকির সর্দার", gender: "male", fatherId: "3" },
    { id: "56", name: "আজিম সর্দার", gender: "male", fatherId: "55" },
    { id: "57", name: "জালাল সর্দার", gender: "male", fatherId: "56" },
    { id: "58", name: "জিয়া সর্দার", gender: "male", fatherId: "56" },
    { id: "59", name: "রতন সর্দার", gender: "male", fatherId: "56" },
    { id: "60", name: "ইয়াতন", gender: "female", fatherId: "56" },
    { id: "61", name: "ফুকন", gender: "female", fatherId: "56" },
    { id: "62", name: "মৃত টুকলিমা", gender: "female", fatherId: "56", isDeceased: true },

    { id: "63", name: "লায়েব সর্দার", gender: "male", fatherId: "55" },
    { id: "64", name: "মৃত দুলাল সর্দার", gender: "male", fatherId: "63", isDeceased: true },
    { id: "65", name: "আলাল সর্দার", gender: "male", fatherId: "63" },
    { id: "66", name: "হেলাল সর্দার", gender: "male", fatherId: "63" },
    { id: "67", name: "ফুনকা", gender: "female", fatherId: "63" },
    { id: "68", name: "ফিরোজা", gender: "female", fatherId: "63" },
    { id: "69", name: "আবেদা খাতুন", gender: "female", fatherId: "3" },

    // কেসু সর্দার শাখা
    { id: "71", name: "ভুগল সর্দার", gender: "male", fatherId: "70" },
    { id: "72", name: "সুবল সর্দার", gender: "male", fatherId: "71" },
    { id: "73", name: "ময়লাল সর্দার", gender: "male", fatherId: "72" },
    { id: "74", name: "হবিবার সর্দার", gender: "male", fatherId: "72" },
    { id: "75", name: "মতালি সর্দার", gender: "male", fatherId: "72" },
    { id: "76", name: "লতা জান", gender: "female", fatherId: "72" },
    { id: "77", name: "খরকি", gender: "female", fatherId: "72" },
    { id: "78", name: "সহুরা", gender: "female", fatherId: "72" },

    { id: "79", name: "মজিবর সর্দার", gender: "male", fatherId: "71" },
    { id: "80", name: "নজরুল সর্দার", gender: "male", fatherId: "79" },
    { id: "81", name: "জালাল সর্দার", gender: "male", fatherId: "79" },
    { id: "82", name: "কামাল সর্দার", gender: "male", fatherId: "79" },
    { id: "83", name: "আহাদ সর্দার", gender: "male", fatherId: "79" },
    { id: "84", name: "মনোয়ারা", gender: "female", fatherId: "79" },
    { id: "85", name: "তসলিমা", gender: "female", fatherId: "79" },
    { id: "86", name: "স্বাধীনা", gender: "female", fatherId: "79" },

    { id: "87", name: "মকলেস সর্দার", gender: "male", fatherId: "71" },
    { id: "88", name: "আকমান সর্দার", gender: "male", fatherId: "87" },
    { id: "89", name: "ইংরাজ সর্দার", gender: "male", fatherId: "87" },
    { id: "90", name: "ইয়াকুব সর্দার", gender: "male", fatherId: "87" },
    { id: "91", name: "আনারুল সর্দার", gender: "male", fatherId: "87" },
    { id: "92", name: "রেসে", gender: "female", fatherId: "87" },
    { id: "93", name: "রুশি", gender: "female", fatherId: "87" },
    { id: "94", name: "মৃত ফরিদা", gender: "female", fatherId: "87", isDeceased: true },
    { id: "95", name: "ফিরো", gender: "female", fatherId: "87" },

    { id: "96", name: "সারু সর্দার", gender: "male", fatherId: "71" },
    { id: "97", name: "ইয়াদুল সর্দার", gender: "male", fatherId: "96" },
    { id: "98", name: "ইউনুস সর্দার", gender: "male", fatherId: "96" },
    { id: "99", name: "মৃত বেনেয়ামিন", gender: "male", fatherId: "96", isDeceased: true },
    { id: "100", name: "রঞ্জনা", gender: "female", fatherId: "96" },
    { id: "101", name: "মেরিনা", gender: "female", fatherId: "96" },
    { id: "102", name: "রহিমা", gender: "female", fatherId: "71" },
    { id: "103", name: "জায়েদা", gender: "female", fatherId: "71" },
    { id: "104", name: "জয়গন নেসা", gender: "female", fatherId: "71" },

    { id: "105", name: "কসের সর্দার", gender: "male", fatherId: "70" },
    { id: "106", name: "খলিল সর্দার", gender: "male", fatherId: "105" },
    { id: "107", name: "রেফেজ সর্দার", gender: "male", fatherId: "106" },
    { id: "108", name: "কুবির সর্দার", gender: "male", fatherId: "106" },
    { id: "109", name: "জুমির সর্দার", gender: "male", fatherId: "106" },
    { id: "110", name: "শাইজুদ্দি সর্দার", gender: "male", fatherId: "106" },
    { id: "111", name: "মৃত রাজিয়া", gender: "female", fatherId: "106", isDeceased: true },

    { id: "112", name: "নুরল সর্দার", gender: "male", fatherId: "105" },
    { id: "113", name: "ওয়ারিস সর্দার", gender: "male", fatherId: "112" },
    { id: "114", name: "ইদ্রিস সর্দার", gender: "male", fatherId: "112" },
    { id: "115", name: "আপিল সর্দার", gender: "male", fatherId: "112" },
    { id: "116", name: "নিহারুল সর্দার", gender: "male", fatherId: "112" },

    { id: "117", name: "আলিম সর্দার", gender: "male", fatherId: "105" },
    { id: "118", name: "উজ্জ্বল সর্দার", gender: "male", fatherId: "117" },
    { id: "119", name: "রফিকুল সর্দার", gender: "male", fatherId: "117" },
    { id: "120", name: "হিসাব সর্দার", gender: "male", fatherId: "117" },

    { id: "121", name: "তফেজ্জল সর্দার", gender: "male", fatherId: "105" },
    { id: "122", name: "মহন সর্দার", gender: "male", fatherId: "121" },
    { id: "123", name: "করণ সর্দার", gender: "male", fatherId: "121" },
    { id: "124", name: "রফিয়া", gender: "female", fatherId: "121" },
    { id: "125", name: "তহুরা", gender: "female", fatherId: "121" },
    { id: "126", name: "তাহেরা", gender: "female", fatherId: "121" },
    { id: "127", name: "সুলতানা", gender: "female", fatherId: "121" },
    { id: "128", name: "রমেলা খাতুন", gender: "female", fatherId: "105" },

    { id: "129", name: "ইমান আলী সর্দার", gender: "male", fatherId: "70" },
    { id: "130", name: "সলেমান সর্দার", gender: "male", fatherId: "129" },
    { id: "131", name: "পেন্টু সর্দার", gender: "male", fatherId: "130" },
    { id: "132", name: "সেন্টু সর্দার", gender: "male", fatherId: "130" },
    { id: "133", name: "আসাদ সর্দার", gender: "male", fatherId: "130" },
    { id: "134", name: "জুয়েল সর্দার", gender: "male", fatherId: "130" },
    { id: "135", name: "সোহেল সর্দার", gender: "male", fatherId: "130" },
    { id: "136", name: "রিংকু সর্দার", gender: "male", fatherId: "130" },
    { id: "137", name: "বেলি", gender: "female", fatherId: "130" },
    { id: "138", name: "সেলিনা", gender: "female", fatherId: "130" },
    { id: "139", name: "লাভলি", gender: "female", fatherId: "130" },
    { id: "140", name: "রিক্তা", gender: "female", fatherId: "130" },
    { id: "141", name: "পিস্তা", gender: "female", fatherId: "130" },

    { id: "142", name: "আব্দুস সামাদ সর্দার", gender: "male", fatherId: "129" },
    { id: "143", name: "রোকনুজ্জামান রানা", gender: "male", fatherId: "142" },
    { id: "144", name: "হাসানুজ্জামান রাজা", gender: "male", fatherId: "142" },
    { id: "145", name: "মৃত তানিম হাসান রাঙ্গা", gender: "male", fatherId: "142", isDeceased: true },
    { id: "146", name: "সুমন সর্দার", gender: "male", fatherId: "142" },
    { id: "147", name: "রীনা", gender: "female", fatherId: "142" },
    { id: "148", name: "বিনা", gender: "female", fatherId: "142" },
    { id: "149", name: "টিনা", gender: "female", fatherId: "142" },

    { id: "150", name: "জামাল সর্দার", gender: "male", fatherId: "129" },
    { id: "151", name: "মামুন সর্দার", gender: "male", fatherId: "150" },
    { id: "152", name: "মাসুম সর্দার", gender: "male", fatherId: "150" },
    { id: "153", name: "মৌসুম সর্দার", gender: "male", fatherId: "150" },
    { id: "154", name: "কুসুম সর্দার", gender: "male", fatherId: "150" },
    { id: "155", name: "পান্না সর্দার", gender: "male", fatherId: "150" },
    { id: "156", name: "নান্টু সর্দার", gender: "male", fatherId: "150" },
    { id: "157", name: "মিঠন সর্দার", gender: "male", fatherId: "150" },
    { id: "158", name: "টুটন সর্দার", gender: "male", fatherId: "150" },
    { id: "159", name: "ছোটন সর্দার", gender: "male", fatherId: "150" },
    { id: "160", name: "জাহানারা", gender: "female", fatherId: "150" },
    { id: "161", name: "সাথি", gender: "female", fatherId: "150" },

    { id: "162", name: "রুস্তম সর্দার", gender: "male", fatherId: "129" },
    { id: "163", name: "রেজাউল সর্দার", gender: "male", fatherId: "162" },
    { id: "164", name: "মানিক সর্দার", gender: "male", fatherId: "162" },
    { id: "165", name: "আরিফ সর্দার", gender: "male", fatherId: "162" },
    { id: "166", name: "রিপন সর্দার", gender: "male", fatherId: "162" },
    { id: "167", name: "রোজিনা", gender: "female", fatherId: "162" },
    { id: "168", name: "রুমা", gender: "female", fatherId: "162" },

    { id: "169", name: "আকবর সর্দার", gender: "male", fatherId: "129" },
    { id: "170", name: "শুভ্র", gender: "male", fatherId: "169" },
    { id: "171", name: "অন্ত", gender: "male", fatherId: "169" },
    { id: "172", name: "আফিফা", gender: "female", fatherId: "169" },

    { id: "173", name: "মাহাতাব উদ্দিন সর্দার", gender: "male", fatherId: "129" },
    { id: "174", name: "আল-মেহেদী", gender: "male", fatherId: "173" },
    { id: "175", name: "আবু সাঈদ", gender: "male", fatherId: "173" },
    { id: "176", name: "মরিয়ম খাতুন", gender: "female", fatherId: "173" },
    { id: "177", name: "মৃত পপি", gender: "female", fatherId: "173", isDeceased: true },
    { id: "178", name: "মেরিনা খাতুন", gender: "female", fatherId: "173" },
    { id: "179", name: "কোকন সর্দার", gender: "male", fatherId: "129" },
    { id: "180", name: "মঞ্জুরা", gender: "female", fatherId: "179" },
    { id: "181", name: "নেহার", gender: "female", fatherId: "129" },
    { id: "182", name: "সকিনা", gender: "female", fatherId: "129" },
    { id: "183", name: "শহিদা", gender: "female", fatherId: "129" },
    { id: "184", name: "শাহানূর", gender: "female", fatherId: "129" },
    { id: "185", name: "কাজল", gender: "female", fatherId: "129" },
    { id: "186", name: "সালেজান", gender: "female", fatherId: "70" }
];

document.addEventListener("DOMContentLoaded", () => {
    loadFamilyData();
    initD3Canvas();
    renderTree();
});

function loadFamilyData() {
    familyData = fullSardarData;
}

function initD3Canvas() {
    svg = d3.select("#treeSvg");
    g = d3.select("#treeGroup");

    zoomHandler = d3.zoom()
        .scaleExtent([0.3, 2])
        .on("zoom", (event) => g.attr("transform", event.transform));

    svg.call(zoomHandler);
}

// শুধুমাত্র ২ লেভেল তৈরি করার লজিক (বর্তমান রুট এবং তার সন্তান)
function buildLimitedHierarchy(rootId) {
    const rootItem = familyData.find(item => item.id === rootId);
    if (!rootItem) return null;

    let rootNode = { ...rootItem, children: [] };
    
    // ১ম স্তরের সন্তান
    const directChildren = familyData.filter(item => item.fatherId === rootId);
    
    directChildren.forEach(child => {
        let childNode = { ...child, children: [] };
        // ২য় স্তরের সন্তান
        const grandChildren = familyData.filter(item => item.fatherId === child.id);
        grandChildren.forEach(gc => {
            childNode.children.push({ ...gc, children: [] });
        });
        rootNode.children.push(childNode);
    });

    return d3.hierarchy(rootNode);
}

function renderTree() {
    g.selectAll("*").remove();
    updateBreadcrumbs();

    const root = buildLimitedHierarchy(currentRootId);
    if (!root) return;

    // ট্রি পেজ সাইজ লেআউট
    const treeLayout = d3.tree().nodeSize([160, 130]);
    treeLayout(root);

    // Connecting Lines
    g.selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "#1e3a8a")
        .attr("stroke-width", 2)
        .attr("d", d3.linkVertical().x(d => d.x).y(d => d.y));

    // Card Nodes
    const node = g.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.x - 65},${d.y - 35})`);

    // Rect Box
    node.append("rect")
        .attr("width", 130)
        .attr("height", d => hasChildren(d.data.id) ? 65 : 45)
        .attr("rx", 6)
        .attr("fill", "#ffffff")
        .attr("stroke", "#2563eb")
        .attr("stroke-width", 2);

    // Name (Bengali)
    node.append("text")
        .attr("x", 65)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("font-size", "12px")
        .attr("fill", "#1e293b")
        .text(d => d.data.name);

    // Name (English)
    node.append("text")
        .attr("x", 65)
        .attr("y", 34)
        .attr("text-anchor", "middle")
        .attr("font-size", "9px")
        .attr("fill", "#64748b")
        .text(d => d.data.nameEn || "");

    // "বংশধারা দেখুন" Button (যাদের সন্তান আছে তাদের জন্য)
    node.each(function(d) {
        if (hasChildren(d.data.id) && d.data.id !== currentRootId) {
            const btnGroup = d3.select(this)
                .append("g")
                .attr("class", "cursor-pointer")
                .on("click", (e) => {
                    e.stopPropagation();
                    historyStack.push(currentRootId);
                    currentRootId = d.data.id;
                    renderTree();
                });

            btnGroup.append("rect")
                .attr("x", 12)
                .attr("y", 42)
                .attr("width", 106)
                .attr("height", 18)
                .attr("rx", 3)
                .attr("fill", "#0284c7");

            btnGroup.append("text")
                .attr("x", 65)
                .attr("y", 54)
                .attr("text-anchor", "middle")
                .attr("font-size", "9px")
                .attr("fill", "#ffffff")
                .attr("font-weight", "bold")
                .text("বংশধারা দেখুন");
        }
    });

    resetZoom();
}

function hasChildren(id) {
    return familyData.some(item => item.fatherId === id);
}

// নেভিগেশন (Breadcrumbs Update)
function updateBreadcrumbs() {
    let breadcrumbEl = document.getElementById("breadcrumbPath");
    if (!breadcrumbEl) return;

    let path = [];
    let curr = familyData.find(m => m.id === currentRootId);
    while (curr) {
        path.unshift(curr);
        curr = familyData.find(m => m.id === curr.fatherId);
    }

    breadcrumbEl.innerHTML = path.map((item, idx) => {
        if (idx === path.length - 1) {
            return `<span class="font-bold text-gray-800">${item.name}</span>`;
        }
        return `<span class="cursor-pointer hover:underline text-blue-600" onclick="navigateTo('${item.id}')">${item.name}</span> ➔ `;
    }).join("");
}

function navigateTo(id) {
    currentRootId = id;
    renderTree();
}

function resetZoom() {
    svg.transition().duration(400).call(
        zoomHandler.transform,
        d3.zoomIdentity.translate(window.innerWidth / 2, 80).scale(1)
    );
}

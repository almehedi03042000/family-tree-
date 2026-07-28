// ==========================================
// সরদার বংশবৃক্ষ - সম্পূর্ণ ডাটাবেজ ও লজিক
// ==========================================

let familyData = [];
let currentRootId = null;
let svg, g, zoomHandler;
let isAdminLoggedIn = false;

const DEFAULT_MALE_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=SardarMaleAvatar&backgroundColor=b6e3f4";
const DEFAULT_FEMALE_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=SardarFemaleAvatar&backgroundColor=ffdfbf";

// মূল বংশলতিকা ডাটাবেজ
const fullSardarData = [
    // ১ম ও ২য় প্রজন্ম
    { id: "1", name: "পদ্মাশী সর্দার", gender: "male", fatherId: null, motherId: null },
    { id: "2", name: "আকালি সর্দার", gender: "male", fatherId: "1", motherId: null },
    
    // ইসু সর্দার শাখা
    { id: "3", name: "ইসু সর্দার", gender: "male", fatherId: "2", motherId: null },
    { id: "4", name: "দোশর সর্দার", gender: "male", fatherId: "3", motherId: null },
    { id: "5", name: "বানেজ সর্দার", gender: "male", fatherId: "4", motherId: null },
    { id: "6", name: "মহাসিন সর্দার", gender: "male", fatherId: "5", motherId: null },
    { id: "7", name: "আবুল সর্দার", gender: "male", fatherId: "5", motherId: null },
    { id: "8", name: "আমজাদ সর্দার", gender: "male", fatherId: "5", motherId: null },
    { id: "9", name: "রেজিয়া", gender: "female", fatherId: "5", motherId: null },
    { id: "10", name: "হাফিয়া", gender: "female", fatherId: "5", motherId: null },
    { id: "11", name: "রইলা", gender: "female", fatherId: "5", motherId: null },
    { id: "12", name: "বুলু", gender: "female", fatherId: "5", motherId: null },
    { id: "13", name: "রাশু", gender: "female", fatherId: "5", motherId: null },
    { id: "14", name: "ফজিলা", gender: "female", fatherId: "5", motherId: null },
    
    { id: "15", name: "মকবুল সর্দার", gender: "male", fatherId: "4", motherId: null },
    { id: "16", name: "মৃত আলতাফ সর্দার", gender: "male", fatherId: "15", motherId: null, isDeceased: true },
    { id: "17", name: "রবিউল সর্দার", gender: "male", fatherId: "15", motherId: null },
    { id: "18", name: "রশিদ সর্দার", gender: "male", fatherId: "15", motherId: null },
    { id: "19", name: "মনোয়ার", gender: "male", fatherId: "15", motherId: null },
    { id: "20", name: "আম্বিয়া", gender: "female", fatherId: "15", motherId: null },
    { id: "21", name: "হাশেরা", gender: "female", fatherId: "15", motherId: null },
    { id: "22", name: "রেকেনা", gender: "female", fatherId: "15", motherId: null },
    { id: "23", name: "রুশিয়া", gender: "female", fatherId: "15", motherId: null },
    
    { id: "24", name: "জাইমন", gender: "female", fatherId: "4", motherId: null },
    { id: "25", name: "হারিজা", gender: "female", fatherId: "4", motherId: null },
    { id: "26", name: "হাইতন", gender: "female", fatherId: "4", motherId: null },

    { id: "27", name: "পেয়ার সর্দার", gender: "male", fatherId: "3", motherId: null },
    { id: "28", name: "জানু সর্দার", gender: "male", fatherId: "27", motherId: null },
    { id: "29", name: "জামশেদ সর্দার", gender: "male", fatherId: "28", motherId: null },
    { id: "30", name: "ফুলু জান", gender: "female", fatherId: "28", motherId: null },
    { id: "31", name: "মাজেদা খাতুন", gender: "female", fatherId: "28", motherId: null },
    { id: "32", name: "লুলু জান", gender: "female", fatherId: "28", motherId: null },
    { id: "33", name: "খদিজান", gender: "female", fatherId: "28", motherId: null },

    { id: "34", name: "হারান সর্দার", gender: "male", fatherId: "27", motherId: null },
    { id: "35", name: "ঝন্টু সর্দার", gender: "male", fatherId: "34", motherId: null },
    { id: "36", name: "সিদ্দিক সর্দার", gender: "male", fatherId: "34", motherId: null },
    { id: "37", name: "জাহাঙ্গীর সর্দার", gender: "male", fatherId: "34", motherId: null },
    { id: "38", name: "কমেজান", gender: "female", fatherId: "34", motherId: null },
    { id: "39", name: "মিষ্টুজান", gender: "female", fatherId: "34", motherId: null },
    { id: "40", name: "বালীজান", gender: "female", fatherId: "34", motherId: null },

    { id: "41", name: "জাহের সর্দার", gender: "male", fatherId: "27", motherId: null },
    { id: "42", name: "সাধু সর্দার", gender: "male", fatherId: "41", motherId: null },
    { id: "43", name: "মধু সর্দার", gender: "male", fatherId: "41", motherId: null },
    { id: "44", name: "জাদু সর্দার", gender: "male", fatherId: "41", motherId: null },
    { id: "45", name: "মদিনা", gender: "female", fatherId: "41", motherId: null },
    { id: "46", name: "মরজিনা", gender: "female", fatherId: "41", motherId: null },
    { id: "47", name: "করিমন নেছা", gender: "female", fatherId: "41", motherId: null },
    { id: "48", name: "তারাজাম", gender: "female", fatherId: "41", motherId: null },

    { id: "49", name: "ভাষা সর্দার", gender: "male", fatherId: "27", motherId: null },
    { id: "50", name: "মোজা সর্দার", gender: "male", fatherId: "49", motherId: null },
    { id: "51", name: "মৃত মইনুদ্দিন সর্দার", gender: "male", fatherId: "49", motherId: null, isDeceased: true },
    { id: "52", name: "জিয়ারুল সর্দার", gender: "male", fatherId: "49", motherId: null },
    { id: "53", name: "সামিয়ন", gender: "female", fatherId: "49", motherId: null },
    { id: "54", name: "রমেসা", gender: "female", fatherId: "27", motherId: null },

    { id: "55", name: "ফকির সর্দার", gender: "male", fatherId: "3", motherId: null },
    { id: "56", name: "আজিম সর্দার", gender: "male", fatherId: "55", motherId: null },
    { id: "57", name: "জালাল সর্দার", gender: "male", fatherId: "56", motherId: null },
    { id: "58", name: "জিয়া সর্দার", gender: "male", fatherId: "56", motherId: null },
    { id: "59", name: "রতন সর্দার", gender: "male", fatherId: "56", motherId: null },
    { id: "60", name: "ইয়াতন", gender: "female", fatherId: "56", motherId: null },
    { id: "61", name: "ফুকন", gender: "female", fatherId: "56", motherId: null },
    { id: "62", name: "মৃত টুকলিমা", gender: "female", fatherId: "56", motherId: null, isDeceased: true },

    { id: "63", name: "লায়েব সর্দার", gender: "male", fatherId: "55", motherId: null },
    { id: "64", name: "মৃত দুলাল সর্দার", gender: "male", fatherId: "63", motherId: null, isDeceased: true },
    { id: "65", name: "আলাল সর্দার", gender: "male", fatherId: "63", motherId: null },
    { id: "66", name: "হেলাল সর্দার", gender: "male", fatherId: "63", motherId: null },
    { id: "67", name: "ফুনকা", gender: "female", fatherId: "63", motherId: null },
    { id: "68", name: "ফিরোজা", gender: "female", fatherId: "63", motherId: null },
    { id: "69", name: "আবেদা খাতুন", gender: "female", fatherId: "3", motherId: null },

    // কেসু সর্দার শাখা
    { id: "70", name: "কেসু সর্দার", gender: "male", fatherId: "2", motherId: null },
    { id: "71", name: "ভুগল সর্দার", gender: "male", fatherId: "70", motherId: null },
    { id: "72", name: "সুবল সর্দার", gender: "male", fatherId: "71", motherId: null },
    { id: "73", name: "ময়লাল সর্দার", gender: "male", fatherId: "72", motherId: null },
    { id: "74", name: "হবিবার সর্দার", gender: "male", fatherId: "72", motherId: null },
    { id: "75", name: "মতালি সর্দার", gender: "male", fatherId: "72", motherId: null },
    { id: "76", name: "লতা জান", gender: "female", fatherId: "72", motherId: null },
    { id: "77", name: "খরকি", gender: "female", fatherId: "72", motherId: null },
    { id: "78", name: "সহুরা", gender: "female", fatherId: "72", motherId: null },

    { id: "79", name: "মজিবর সর্দার", gender: "male", fatherId: "71", motherId: null },
    { id: "80", name: "নজরুল সর্দার", gender: "male", fatherId: "79", motherId: null },
    { id: "81", name: "জালাল সর্দার", gender: "male", fatherId: "79", motherId: null },
    { id: "82", name: "কামাল সর্দার", gender: "male", fatherId: "79", motherId: null },
    { id: "83", name: "আহাদ সর্দার", gender: "male", fatherId: "79", motherId: null },
    { id: "84", name: "মনোয়ারা", gender: "female", fatherId: "79", motherId: null },
    { id: "85", name: "তসলিমা", gender: "female", fatherId: "79", motherId: null },
    { id: "86", name: "স্বাধীনা", gender: "female", fatherId: "79", motherId: null },

    { id: "87", name: "মকলেস সর্দার", gender: "male", fatherId: "71", motherId: null },
    { id: "88", name: "আকমান সর্দার", gender: "male", fatherId: "87", motherId: null },
    { id: "89", name: "ইংরাজ সর্দার", gender: "male", fatherId: "87", motherId: null },
    { id: "90", name: "ইয়াকুব সর্দার", gender: "male", fatherId: "87", motherId: null },
    { id: "91", name: "আনারুল সর্দার", gender: "male", fatherId: "87", motherId: null },
    { id: "92", name: "রেসে", gender: "female", fatherId: "87", motherId: null },
    { id: "93", name: "রুশি", gender: "female", fatherId: "87", motherId: null },
    { id: "94", name: "মৃত ফরিদা", gender: "female", fatherId: "87", motherId: null, isDeceased: true },
    { id: "95", name: "ফিরো", gender: "female", fatherId: "87", motherId: null },

    { id: "96", name: "সারু সর্দার", gender: "male", fatherId: "71", motherId: null },
    { id: "97", name: "ইয়াদুল সর্দার", gender: "male", fatherId: "96", motherId: null },
    { id: "98", name: "ইউনুস সর্দার", gender: "male", fatherId: "96", motherId: null },
    { id: "99", name: "মৃত বেনেয়ামিন", gender: "male", fatherId: "96", motherId: null, isDeceased: true },
    { id: "100", name: "রঞ্জনা", gender: "female", fatherId: "96", motherId: null },
    { id: "101", name: "মেরিনা", gender: "female", fatherId: "96", motherId: null },
    { id: "102", name: "রহিমা", gender: "female", fatherId: "71", motherId: null },
    { id: "103", name: "জায়েদা", gender: "female", fatherId: "71", motherId: null },
    { id: "104", name: "জয়গন নেসা", gender: "female", fatherId: "71", motherId: null },

    { id: "105", name: "কসের সর্দার", gender: "male", fatherId: "70", motherId: null },
    { id: "106", name: "খলিল সর্দার", gender: "male", fatherId: "105", motherId: null },
    { id: "107", name: "রেফেজ সর্দার", gender: "male", fatherId: "106", motherId: null },
    { id: "108", name: "কুবির সর্দার", gender: "male", fatherId: "106", motherId: null },
    { id: "109", name: "জুমির সর্দার", gender: "male", fatherId: "106", motherId: null },
    { id: "110", name: "শাইজুদ্দি সর্দার", gender: "male", fatherId: "106", motherId: null },
    { id: "111", name: "মৃত রাজিয়া", gender: "female", fatherId: "106", motherId: null, isDeceased: true },

    { id: "112", name: "নুরল সর্দার", gender: "male", fatherId: "105", motherId: null },
    { id: "113", name: "ওয়ারিস সর্দার", gender: "male", fatherId: "112", motherId: null },
    { id: "114", name: "ইদ্রিস সর্দার", gender: "male", fatherId: "112", motherId: null },
    { id: "115", name: "আপিল সর্দার", gender: "male", fatherId: "112", motherId: null },
    { id: "116", name: "নিহারুল সর্দার", gender: "male", fatherId: "112", motherId: null },

    { id: "117", name: "আলিম সর্দার", gender: "male", fatherId: "105", motherId: null },
    { id: "118", name: "উজ্জ্বল সর্দার", gender: "male", fatherId: "117", motherId: null },
    { id: "119", name: "রফিকুল সর্দার", gender: "male", fatherId: "117", motherId: null },
    { id: "120", name: "হিসাব সর্দার", gender: "male", fatherId: "117", motherId: null },

    { id: "121", name: "তফেজ্জল সর্দার", gender: "male", fatherId: "105", motherId: null },
    { id: "122", name: "মহন সর্দার", gender: "male", fatherId: "121", motherId: null },
    { id: "123", name: "করণ সর্দার", gender: "male", fatherId: "121", motherId: null },
    { id: "124", name: "রফিয়া", gender: "female", fatherId: "121", motherId: null },
    { id: "125", name: "তহুরা", gender: "female", fatherId: "121", motherId: null },
    { id: "126", name: "তাহেরা", gender: "female", fatherId: "121", motherId: null },
    { id: "127", name: "সুলতানা", gender: "female", fatherId: "121", motherId: null },
    { id: "128", name: "রমেলা খাতুন", gender: "female", fatherId: "105", motherId: null },

    { id: "129", name: "ইমান আলী সর্দার", gender: "male", fatherId: "70", motherId: null },
    { id: "130", name: "সলেমান সর্দার", gender: "male", fatherId: "129", motherId: null },
    { id: "131", name: "পেন্টু সর্দার", gender: "male", fatherId: "130", motherId: null },
    { id: "132", name: "সেন্টু সর্দার", gender: "male", fatherId: "130", motherId: null },
    { id: "133", name: "আসাদ সর্দার", gender: "male", fatherId: "130", motherId: null },
    { id: "134", name: "জুয়েল সর্দার", gender: "male", fatherId: "130", motherId: null },
    { id: "135", name: "সোহেল সর্দার", gender: "male", fatherId: "130", motherId: null },
    { id: "136", name: "রিংকু সর্দার", gender: "male", fatherId: "130", motherId: null },
    { id: "137", name: "বেলি", gender: "female", fatherId: "130", motherId: null },
    { id: "138", name: "সেলিনা", gender: "female", fatherId: "130", motherId: null },
    { id: "139", name: "লাভলি", gender: "female", fatherId: "130", motherId: null },
    { id: "140", name: "রিক্তা", gender: "female", fatherId: "130", motherId: null },
    { id: "141", name: "পিস্তা", gender: "female", fatherId: "130", motherId: null },

    { id: "142", name: "আব্দুস সামাদ সর্দার", gender: "male", fatherId: "129", motherId: null },
    { id: "143", name: "রোকনুজ্জামান রানা", gender: "male", fatherId: "142", motherId: null },
    { id: "144", name: "হাসানুজ্জামান রাজা", gender: "male", fatherId: "142", motherId: null },
    { id: "145", name: "মৃত তানিম হাসান রাঙ্গা", gender: "male", fatherId: "142", motherId: null, isDeceased: true },
    { id: "146", name: "সুমন সর্দার", gender: "male", fatherId: "142", motherId: null },
    { id: "147", name: "রীনা", gender: "female", fatherId: "142", motherId: null },
    { id: "148", name: "বিনা", gender: "female", fatherId: "142", motherId: null },
    { id: "149", name: "টিনা", gender: "female", fatherId: "142", motherId: null },

    { id: "150", name: "জামাল সর্দার", gender: "male", fatherId: "129", motherId: null },
    { id: "151", name: "মামুন সর্দার", gender: "male", fatherId: "150", motherId: null },
    { id: "152", name: "মাসুম সর্দার", gender: "male", fatherId: "150", motherId: null },
    { id: "153", name: "মৌসুম সর্দার", gender: "male", fatherId: "150", motherId: null },
    { id: "154", name: "কুসুম সর্দার", gender: "male", fatherId: "150", motherId: null },
    { id: "155", name: "পান্না সর্দার", gender: "male", fatherId: "150", motherId: null },
    { id: "156", name: "নান্টু সর্দার", gender: "male", fatherId: "150", motherId: null },
    { id: "157", name: "মিঠন সর্দার", gender: "male", fatherId: "150", motherId: null },
    { id: "158", name: "টুটন সর্দার", gender: "male", fatherId: "150", motherId: null },
    { id: "159", name: "ছোটন সর্দার", gender: "male", fatherId: "150", motherId: null },
    { id: "160", name: "জাহানারা", gender: "female", fatherId: "150", motherId: null },
    { id: "161", name: "সাথি", gender: "female", fatherId: "150", motherId: null },

    { id: "162", name: "রুস্তম সর্দার", gender: "male", fatherId: "129", motherId: null },
    { id: "163", name: "রেজাউল সর্দার", gender: "male", fatherId: "162", motherId: null },
    { id: "164", name: "মানিক সর্দার", gender: "male", fatherId: "162", motherId: null },
    { id: "165", name: "আরিফ সর্দার", gender: "male", fatherId: "162", motherId: null },
    { id: "166", name: "রিপন সর্দার", gender: "male", fatherId: "162", motherId: null },
    { id: "167", name: "রোজিনা", gender: "female", fatherId: "162", motherId: null },
    { id: "168", name: "রুমা", gender: "female", fatherId: "162", motherId: null },

    { id: "169", name: "আকবর সর্দার", gender: "male", fatherId: "129", motherId: null },
    { id: "170", name: "শুভ্র", gender: "male", fatherId: "169", motherId: null },
    { id: "171", name: "অন্ত", gender: "male", fatherId: "169", motherId: null },
    { id: "172", name: "আফিফা", gender: "female", fatherId: "169", motherId: null },

    { id: "173", name: "মাহাতাব উদ্দিন সর্দার", gender: "male", fatherId: "129", motherId: null },
    { id: "174", name: "আল-মেহেদী", gender: "male", fatherId: "173", motherId: null },
    { id: "175", name: "আবু সাঈদ", gender: "male", fatherId: "173", motherId: null },
    { id: "176", name: "মরিয়ম খাতুন", gender: "female", fatherId: "173", motherId: null },
    { id: "177", name: "মৃত পপি", gender: "female", fatherId: "173", motherId: null, isDeceased: true },
    { id: "178", name: "মেরিনা খাতুন", gender: "female", fatherId: "173", motherId: null },
    { id: "179", name: "কোকন সর্দার", gender: "male", fatherId: "129", motherId: null },
    { id: "180", name: "মঞ্জুরা", gender: "female", fatherId: "179", motherId: null },
    { id: "181", name: "নেহার", gender: "female", fatherId: "129", motherId: null },
    { id: "182", name: "সকিনা", gender: "female", fatherId: "129", motherId: null },
    { id: "183", name: "শহিদা", gender: "female", fatherId: "129", motherId: null },
    { id: "184", name: "শাহানূর", gender: "female", fatherId: "129", motherId: null },
    { id: "185", name: "কাজল", gender: "female", fatherId: "129", motherId: null },
    { id: "186", name: "সালেজান", gender: "female", fatherId: "70", motherId: null }
];

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    loadFamilyData();
    initD3Canvas();
    renderTree();
    updateStatistics();
    setupEventListeners();
    populateFormOptions();
});

function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

document.getElementById("themeToggleBtn").onclick = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    renderTree();
};

function initD3Canvas() {
    svg = d3.select("#treeSvg");
    g = d3.select("#treeGroup");

    zoomHandler = d3.zoom()
        .scaleExtent([0.1, 3])
        .on("zoom", (event) => g.attr("transform", event.transform));

    svg.call(zoomHandler);
}

function buildHierarchy() {
    const dataMap = {};
    familyData.forEach(item => dataMap[item.id] = { ...item, children: [] });

    let rootNodes = [];
    familyData.forEach(item => {
        if (item.fatherId && dataMap[item.fatherId]) {
            dataMap[item.fatherId].children.push(dataMap[item.id]);
        } else if (!item.fatherId && !item.motherId) {
            rootNodes.push(dataMap[item.id]);
        }
    });

    if (currentRootId && dataMap[currentRootId]) {
        return d3.hierarchy(dataMap[currentRootId]);
    }

    return d3.hierarchy(rootNodes[0] || { name: "Root", children: [] });
}

function renderTree() {
    g.selectAll("*").remove();
    if (familyData.length === 0) return;

    const root = buildHierarchy();
    const treeLayout = d3.tree().nodeSize([180, 140]);
    treeLayout(root);

    // Links
    g.selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", document.documentElement.classList.contains("dark") ? "#374151" : "#d1d5db")
        .attr("stroke-width", 2)
        .attr("d", d3.linkVertical().x(d => d.x).y(d => d.y));

    // Nodes
    const node = g.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", d => `node cursor-pointer id-${d.data.id}`)
        .attr("transform", d => `translate(${d.x - 70},${d.y - 35})`)
        .on("click", (event, d) => openProfileModal(d.data.id));

    // Card Rect
    node.append("rect")
        .attr("width", 140)
        .attr("height", 75)
        .attr("rx", 14)
        .attr("fill", document.documentElement.classList.contains("dark") ? "#111827" : "#ffffff")
        .attr("stroke", d => d.data.gender === "male" ? "#3b82f6" : "#ec4899")
        .attr("stroke-width", 2);

    // Profile Photo / Avatar
    node.append("foreignObject")
        .attr("x", 50)
        .attr("y", -16)
        .attr("width", 40)
        .attr("height", 40)
        .html(d => {
            const imgSrc = d.data.photo || (d.data.gender === "female" ? DEFAULT_FEMALE_AVATAR : DEFAULT_MALE_AVATAR);
            return `<img src="${imgSrc}" class="w-10 h-10 rounded-xl border-2 border-amber-500 bg-amber-50 object-cover shadow-md">`;
        });

    // Name Bengali
    node.append("text")
        .attr("x", 70)
        .attr("y", 38)
        .attr("text-anchor", "middle")
        .attr("class", "fill-gray-800 dark:fill-gray-100 font-bold text-xs")
        .text(d => d.data.name);

    // Badge / Gender Status
    node.append("foreignObject")
        .attr("x", 10)
        .attr("y", 48)
        .attr("width", 120)
        .attr("height", 20)
        .html(d => {
            const status = d.data.isDeceased ? "মৃত" : (d.data.gender === 'male' ? 'পুরুষ' : 'নারী');
            const colorClass = d.data.isDeceased ? 'bg-gray-500 text-white' : (d.data.gender === 'male' ? 'bg-blue-500 text-white' : 'bg-pink-500 text-white');
            return `<div class="flex justify-center items-center text-[9px]">
                <span class="${colorClass} px-2 py-0.2 rounded-md font-semibold">${status}</span>
            </div>`;
        });

    resetZoom();
}

document.getElementById("zoomInBtn").onclick = () => svg.transition().call(zoomHandler.scaleBy, 1.2);
document.getElementById("zoomOutBtn").onclick = () => svg.transition().call(zoomHandler.scaleBy, 0.8);
function resetZoom() {
    svg.transition().duration(500).call(zoomHandler.transform, d3.zoomIdentity.translate(window.innerWidth / 2 - 70, 100).scale(0.85));
}
document.getElementById("resetZoomBtn").onclick = resetZoom;

function loadFamilyData() {
    const saved = localStorage.getItem("sardarFamilyTreeData");
    if (saved && JSON.parse(saved).length > 0) {
        familyData = JSON.parse(saved);
    } else {
        familyData = fullSardarData;
        saveFamilyData();
    }
}

function saveFamilyData() {
    localStorage.setItem("sardarFamilyTreeData", JSON.stringify(familyData));
    populateFormOptions();
    updateStatistics();
    renderTree();
}

function updateStatistics() {
    document.getElementById("topStatTotal").innerText = familyData.length;
    document.getElementById("topStatMale").innerText = familyData.filter(m => m.gender === "male").length;
    document.getElementById("topStatFemale").innerText = familyData.filter(m => m.gender === "female").length;
}

// Search Function
const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");

searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    searchSuggestions.innerHTML = "";

    if (!query) {
        searchSuggestions.classList.add("hidden");
        return;
    }

    const matches = familyData.filter(m => m.name && m.name.toLowerCase().includes(query));

    if (matches.length > 0) {
        searchSuggestions.classList.remove("hidden");
        matches.forEach(m => {
            const div = document.createElement("div");
            div.className = "p-2 hover:bg-amber-50 dark:hover:bg-gray-700/50 cursor-pointer text-xs flex justify-between items-center";
            div.innerHTML = `<span><b>${m.name}</b></span><span class="text-[10px] text-gray-400">${m.gender === 'male' ? 'পুরুষ' : 'নারী'}</span>`;
            div.onclick = () => highlightMember(m.id);
            searchSuggestions.appendChild(div);
        });
    } else {
        searchSuggestions.classList.add("hidden");
    }
});

function highlightMember(id) {
    searchSuggestions.classList.add("hidden");
    searchInput.value = "";
    
    d3.selectAll(".node rect").attr("stroke-width", 2);
    const targetNode = d3.select(`.id-${id} rect`);
    
    if (!targetNode.empty()) {
        targetNode.transition().duration(300).attr("stroke", "#f59e0b").attr("stroke-width", 4);
        const d3Data = d3.select(`.id-${id}`).datum();
        if (d3Data) {
            svg.transition().duration(750).call(
                zoomHandler.transform,
                d3.zoomIdentity.translate(window.innerWidth / 2 - d3Data.x, 150 - d3Data.y).scale(1.1)
            );
        }
    }
}

function closeAllModals() {
    document.getElementById("profileModal").classList.add("hidden");
    document.getElementById("adminDrawer").classList.add("hidden");
    document.getElementById("adminLoginModal").classList.add("hidden");
}

function openProfileModal(id) {
    const m = familyData.find(item => item.id === id);
    if (!m) return;

    document.getElementById("modalName").innerText = m.name;
    document.getElementById("modalNameEn").innerText = m.nameEn || '';
    document.getElementById("modalPhoto").src = m.photo || (m.gender === "female" ? DEFAULT_FEMALE_AVATAR : DEFAULT_MALE_AVATAR);
    document.getElementById("modalBadge").innerText = m.gender === "male" ? "পুরুষ" : "নারী";
    document.getElementById("modalBadge").className = `text-[10px] px-2 py-0.5 rounded-full font-semibold ${m.gender === 'male' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200' : 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200'}`;
    document.getElementById("modalOccupation").innerText = m.occupation || "-";
    document.getElementById("modalDob").innerText = m.dob || "-";
    document.getElementById("modalDod").innerText = m.isDeceased ? "মৃত" : "-";
    document.getElementById("modalStatus").innerText = m.isDeceased ? "মৃত" : "জীবিত";

    const father = familyData.find(f => f.id === m.fatherId);
    document.getElementById("modalFather").innerText = father ? father.name : "-";

    const mother = familyData.find(f => f.id === m.motherId);
    document.getElementById("modalMother").innerText = mother ? mother.name : "-";

    const editBtn = document.getElementById("adminEditMemberBtn");
    if (isAdminLoggedIn) {
        editBtn.classList.remove("hidden");
        editBtn.onclick = () => {
            closeAllModals();
            openEditForm(m);
        };
    } else {
        editBtn.classList.add("hidden");
    }

    document.getElementById("viewSubtreeBtn").onclick = () => {
        currentRootId = m.id;
        document.getElementById("resetSubtreeBtn").classList.remove("hidden");
        closeAllModals();
        renderTree();
    };

    document.getElementById("profileModal").classList.remove("hidden");
}

// Admin Panel Features
document.getElementById("adminLoginBtn").onclick = () => {
    if (isAdminLoggedIn) {
        document.getElementById("adminDrawer").classList.remove("hidden");
    } else {
        document.getElementById("adminLoginModal").classList.remove("hidden");
    }
};

document.getElementById("adminLoginForm").onsubmit = (e) => {
    e.preventDefault();
    const pass = document.getElementById("adminPassword").value;
    if (pass === "12345") {
        isAdminLoggedIn = true;
        document.getElementById("adminLoginModal").classList.add("hidden");
        document.getElementById("adminDrawer").classList.remove("hidden");
        document.getElementById("adminPassword").value = "";
    } else {
        alert("ভুল পাসওয়ার্ড!");
    }
};

document.getElementById("adminLogoutBtn").onclick = () => {
    isAdminLoggedIn = false;
    closeAllModals();
};

function openEditForm(member) {
    document.getElementById("adminDrawer").classList.remove("hidden");
    document.getElementById("formTitle").innerText = "তথ্য এডিট / মুছে ফেলুন";
    document.getElementById("editMemberId").value = member.id;
    document.getElementById("formName").value = member.name || "";
    document.getElementById("formNameEn").value = member.nameEn || "";
    document.getElementById("formGender").value = member.gender || "male";
    document.getElementById("formIsDeceased").value = member.isDeceased ? "true" : "false";
    document.getElementById("formFather").value = member.fatherId || "";
    document.getElementById("formMother").value = member.motherId || "";
    document.getElementById("formDob").value = member.dob || "";
    document.getElementById("formOccupation").value = member.occupation || "";
}

function deleteMember(id) {
    if (confirm("আপনি কি নিশ্চিত যে এই সদস্যকে বংশবৃক্ষ থেকে বাদ দিতে চান?")) {
        familyData = familyData.filter(m => m.id !== id);
        saveFamilyData();
        closeAllModals();
        alert("সদস্য বাদ দেওয়া হয়েছে।");
    }
}

document.getElementById("memberForm").onsubmit = async (e) => {
    e.preventDefault();
    const editId = document.getElementById("editMemberId").value;

    const memberData = {
        id: editId || Date.now().toString(),
        name: document.getElementById("formName").value,
        nameEn: document.getElementById("formNameEn").value,
        gender: document.getElementById("formGender").value,
        isDeceased: document.getElementById("formIsDeceased").value === "true",
        fatherId: document.getElementById("formFather").value || null,
        motherId: document.getElementById("formMother").value || null,
        dob: document.getElementById("formDob").value,
        occupation: document.getElementById("formOccupation").value,
    };

    if (editId) {
        const index = familyData.findIndex(m => m.id === editId);
        if (index !== -1) familyData[index] = { ...familyData[index], ...memberData };
    } else {
        familyData.push(memberData);
    }

    saveFamilyData();
    document.getElementById("memberForm").reset();
    document.getElementById("editMemberId").value = "";
    closeAllModals();
};

function populateFormOptions() {
    const fatherSelect = document.getElementById("formFather");
    const motherSelect = document.getElementById("formMother");

    fatherSelect.innerHTML = `<option value="">পিতা নির্বাচন করুন</option>`;
    motherSelect.innerHTML = `<option value="">মাতা নির্বাচন করুন</option>`;

    familyData.forEach(m => {
        if (m.gender === "male") fatherSelect.innerHTML += `<option value="${m.id}">${m.name}</option>`;
        if (m.gender === "female") motherSelect.innerHTML += `<option value="${m.id}">${m.name}</option>`;
    });
}

function setupEventListeners() {
    document.getElementById("closeProfileBtn").onclick = closeAllModals;
    document.getElementById("closeAdminBtn").onclick = closeAllModals;
    document.getElementById("closeAdminLoginBtn").onclick = closeAllModals;
    document.getElementById("resetSubtreeBtn").onclick = () => {
        currentRootId = null;
        document.getElementById("resetSubtreeBtn").classList.add("hidden");
        renderTree();
    };
}

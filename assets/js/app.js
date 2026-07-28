// ==========================================
// শেঁকড় - ১ জেনারেশন নির্ভর বংশবৃক্ষ (Single Generation View)
// ==========================================

let familyData = [];
let currentRootId = "1"; // ডিফল্ট পদ্মাশী সর্দার
let svg, g, zoomHandler;
let isAdminLoggedIn = false;

const DEFAULT_MALE_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=SardarMaleAvatar&backgroundColor=b6e3f4";
const DEFAULT_FEMALE_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=SardarFemaleAvatar&backgroundColor=ffdfbf";

// ১৮৬ জন সদস্যের মূল বংশলতিকা ডাটাবেজ (সকল তথ্য সংরক্ষিত)
const fullSardarData = [
    // ১ম ও ২য় প্রজন্ম
    { id: "1", name: "পদ্মাশী সর্দার", nameEn: "Padmashi Sardar", gender: "male", fatherId: null, motherId: null },
    { id: "2", name: "আকালি সর্দার", nameEn: "Akali Sardar", gender: "male", fatherId: "1", motherId: null },
    
    // ৩য় প্রজন্ম
    { id: "3", name: "ইসু সর্দার", nameEn: "Isu Sardar", gender: "male", fatherId: "2", motherId: null },
    { id: "70", name: "কেসু সর্দার", nameEn: "Kesu Sardar", gender: "male", fatherId: "2", motherId: null },

    // ইসু সর্দার শাখা
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
    loadFamilyData();
    initD3Canvas();
    updateStatistics();
    renderTree();
    setupEventListeners();
    populateFormOptions();
});

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
    updateStatistics();
    populateFormOptions();
    renderTree();
}

// স্ট্যাটিস্টিক্স আপডেট (সকল সদস্যদের নিয়ে)
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
        .scaleExtent([0.3, 2.5])
        .on("zoom", (event) => g.attr("transform", event.transform));

    svg.call(zoomHandler);
}

// শুধুমাত্র ১ স্তরের সন্তান লোড করার হাইরার্কি লজিক
function buildDirectChildrenHierarchy(rootId) {
    const rootItem = familyData.find(item => item.id === rootId);
    if (!rootItem) return null;

    let rootNode = { ...rootItem, children: [] };
    
    // কেবল সরাসরি সন্তানরা যুক্ত হবে
    const directChildren = familyData.filter(item => item.fatherId === rootId);
    directChildren.forEach(child => {
        rootNode.children.push({ ...child, children: [] });
    });

    return d3.hierarchy(rootNode);
}

function renderTree() {
    g.selectAll("*").remove();
    updateBreadcrumbs();

    const root = buildDirectChildrenHierarchy(currentRootId);
    if (!root) return;

    // সুন্দর কমপ্যাক্ট লেআউট
    const treeLayout = d3.tree().nodeSize([160, 130]);
    treeLayout(root);

    // সংযোগকারী রেখা (Lines)
    g.selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "#0284c7")
        .attr("stroke-width", 2)
        .attr("d", d3.linkVertical().x(d => d.x).y(d => d.y));

    // প্রতিটি মেম্বার কার্ড (Nodes)
    const node = g.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.x - 65},${d.y - 35})`);

    // মূল বক্স (Rect) - প্রোফাইল দেখার জন্য ক্লিক
    node.append("rect")
        .attr("width", 130)
        .attr("height", d => hasChildren(d.data.id) ? 72 : 50)
        .attr("rx", 8)
        .attr("fill", "#ffffff")
        .attr("stroke", d => d.data.gender === "male" ? "#2563eb" : "#ec4899")
        .attr("stroke-width", 2)
        .attr("class", "cursor-pointer")
        .on("click", (event, d) => openProfileModal(d.data.id));

    // নাম (বাংলা)
    node.append("text")
        .attr("x", 65)
        .attr("y", 22)
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("font-size", "12px")
        .attr("fill", "#1e293b")
        .attr("class", "cursor-pointer")
        .on("click", (event, d) => openProfileModal(d.data.id))
        .text(d => d.data.name);

    // নাম (ইংরেজি / পদবি)
    node.append("text")
        .attr("x", 65)
        .attr("y", 37)
        .attr("text-anchor", "middle")
        .attr("font-size", "9px")
        .attr("fill", "#64748b")
        .text(d => d.data.nameEn || (d.data.isDeceased ? "(মৃত)" : ""));

    // "এর বংশধারা দেখতে ক্লিক করুন" বাটন
    node.each(function(d) {
        if (hasChildren(d.data.id)) {
            const btnGroup = d3.select(this)
                .append("g")
                .attr("class", "cursor-pointer")
                .on("click", (e) => {
                    e.stopPropagation();
                    currentRootId = d.data.id;
                    renderTree();
                });

            btnGroup.append("rect")
                .attr("x", 8)
                .attr("y", 46)
                .attr("width", 114)
                .attr("height", 20)
                .attr("rx", 4)
                .attr("fill", "#0284c7");

            btnGroup.append("text")
                .attr("x", 65)
                .attr("y", 59)
                .attr("text-anchor", "middle")
                .attr("font-size", "8.5px")
                .attr("fill", "#ffffff")
                .attr("font-weight", "bold")
                .text("বংশধারা দেখতে ক্লিক করুন");
        }
    });

    resetZoom();
}

function hasChildren(id) {
    return familyData.some(item => item.fatherId === id);
}

// ব্রেডক্রাম্ব নেভিগেশন (পদ্মাশী সর্দার ➔ আকালি সর্দার ➔ ...)
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
            return `<span class="font-bold text-blue-900">${item.name}</span>`;
        }
        return `<span class="cursor-pointer hover:underline text-blue-600 font-semibold" onclick="navigateTo('${item.id}')">${item.name}</span> ➔ `;
    }).join("");
}

function navigateTo(id) {
    currentRootId = id;
    renderTree();
}

function resetZoom() {
    svg.transition().duration(400).call(
        zoomHandler.transform,
        d3.zoomIdentity.translate(window.innerWidth / 2, 70).scale(1)
    );
}

// মোডাল ও সার্চ ফাংশনালিটি
function openProfileModal(id) {
    const m = familyData.find(item => item.id === id);
    if (!m) return;

    const modalName = document.getElementById("modalName");
    if(modalName) modalName.innerText = m.name;

    const modalPhoto = document.getElementById("modalPhoto");
    if(modalPhoto) modalPhoto.src = m.photo || (m.gender === "female" ? DEFAULT_FEMALE_AVATAR : DEFAULT_MALE_AVATAR);

    const modalStatus = document.getElementById("modalStatus");
    if(modalStatus) modalStatus.innerText = m.isDeceased ? "মৃত" : "জীবিত";

    const father = familyData.find(f => f.id === m.fatherId);
    const modalFather = document.getElementById("modalFather");
    if(modalFather) modalFather.innerText = father ? father.name : "-";

    const viewSubtreeBtn = document.getElementById("viewSubtreeBtn");
    if(viewSubtreeBtn) {
        viewSubtreeBtn.onclick = () => {
            currentRootId = m.id;
            closeAllModals();
            renderTree();
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
    if(modal) modal.classList.remove("hidden");
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
        familyData.forEach(m => {
            if (m.gender === "male") fatherSelect.innerHTML += `<option value="${m.id}">${m.name}</option>`;
        });
    }

    if (motherSelect) {
        motherSelect.innerHTML = `<option value="">মাতা নির্বাচন করুন</option>`;
        familyData.forEach(m => {
            if (m.gender === "female") motherSelect.innerHTML += `<option value="${m.id}">${m.name}</option>`;
        });
    }
}

function setupEventListeners() {
    const closeProfile = document.getElementById("closeProfileBtn");
    if(closeProfile) closeProfile.onclick = closeAllModals;

    const closeAdmin = document.getElementById("closeAdminBtn");
    if(closeAdmin) closeAdmin.onclick = closeAllModals;

    const resetZoomBtn = document.getElementById("resetZoomBtn");
    if(resetZoomBtn) resetZoomBtn.onclick = resetZoom;
}

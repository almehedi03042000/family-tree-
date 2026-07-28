// ==========================================
// শেঁকড় - বংশবৃক্ষ (Compact Tree & Smart Search)
// ==========================================

let familyData = [];
let currentRootId = "1"; // ১ম পেজের রুট: পদ্মাশী সর্দার
let svg, g, zoomHandler;
let recentSearches = JSON.parse(localStorage.getItem("sardarRecentSearches")) || [];

const DEFAULT_MALE_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=SardarMaleAvatar&backgroundColor=b6e3f4";
const DEFAULT_FEMALE_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=SardarFemaleAvatar&backgroundColor=ffdfbf";

// ১৮৬ জন সদস্যের মূল বংশলতিকা ডাটাবেজ
const fullSardarData = [
    // ১ম প্রজন্ম
    { id: "1", name: "পদ্মাশী সর্দার", nameEn: "Padmashi Sardar", gender: "male", fatherId: null },
    // ২য় প্রজন্ম
    { id: "2", name: "আকালি সর্দার", nameEn: "Akali Sardar", gender: "male", fatherId: "1" },
    // ৩য় প্রজন্ম
    { id: "3", name: "ইসু সর্দার", nameEn: "Isu Sardar", gender: "male", fatherId: "2" },
    { id: "70", name: "কেসু সর্দার", nameEn: "Kesu Sardar", gender: "male", fatherId: "2" },

    // ইসু সর্দার শাখা (৪র্থ ও পরবর্তী)
    { id: "4", name: "দোশর সর্দার", gender: "male", fatherId: "3" },
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
    { id: "186", name: "সালেجان", gender: "female", fatherId: "70" }
];

document.addEventListener("DOMContentLoaded", () => {
    familyData = fullSardarData;
    initD3Canvas();
    updateStatistics();
    renderTree();
    setupSearchSuggestions();
});

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

// ১ম পেজে শুধুমাত্র ৩টি প্রজন্ম (পদ্মাশী -> আকালি -> ইসু ও কেসু) এবং পরবর্তী পেজগুলোতে ১টি জেনারেশন
function buildTreeHierarchy(rootId) {
    const rootItem = familyData.find(item => item.id === rootId);
    if (!rootItem) return null;

    let rootNode = { ...rootItem, children: [] };
    
    // যদি ১ম পেজ (পদ্মাশী সর্দার) হয়, তবে ৩টি প্রজন্ম একসাথে বিল্ড করবে
    if (rootId === "1") {
        const gen2 = familyData.filter(item => item.fatherId === "1"); // আকালি
        gen2.forEach(child2 => {
            let child2Node = { ...child2, children: [] };
            const gen3 = familyData.filter(item => item.fatherId === child2.id); // ইসু ও কেসু
            gen3.forEach(child3 => {
                child2Node.children.push({ ...child3, children: [] });
            });
            rootNode.children.push(child2Node);
        });
    } else {
        // অন্যান্য ক্ষেত্রে শুধুমাত্র তার সন্তানাদি (১ প্রজন্ম) দেখাবে
        const directChildren = familyData.filter(item => item.fatherId === rootId);
        directChildren.forEach(child => {
            rootNode.children.push({ ...child, children: [] });
        });
    }

    return d3.hierarchy(rootNode);
}

function renderTree() {
    g.selectAll("*").remove();
    updateBreadcrumbs();

    const root = buildTreeHierarchy(currentRootId);
    if (!root) return;

    const treeLayout = d3.tree().nodeSize([160, 120]);
    treeLayout(root);

    // লিঙ্ক রেখা
    g.selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "#1e3a8a")
        .attr("stroke-width", 2)
        .attr("d", d3.linkVertical().x(d => d.x).y(d => d.y));

    // মেম্বার কার্ড
    const node = g.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.x - 65},${d.y - 35})`);

    // কার্ডের ব্যাকগ্রাউন্ড
    node.append("rect")
        .attr("width", 130)
        .attr("height", d => hasChildren(d.data.id) ? 68 : 48)
        .attr("rx", 6)
        .attr("fill", "#ffffff")
        .attr("stroke", d => d.data.gender === "male" ? "#1d4ed8" : "#ec4899")
        .attr("stroke-width", 2);

    // নাম (বাংলা)
    node.append("text")
        .attr("x", 65)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("font-size", "12px")
        .attr("fill", "#0f172a")
        .text(d => d.data.name);

    // নাম (ইংরেজি / স্ট্যাটাস)
    node.append("text")
        .attr("x", 65)
        .attr("y", 34)
        .attr("text-anchor", "middle")
        .attr("font-size", "9px")
        .attr("fill", "#64748b")
        .text(d => d.data.nameEn || (d.data.isDeceased ? "(মৃত)" : ""));

    // "বংশধারা দেখতে ক্লিক করুন" বাটন
    node.each(function(d) {
        if (hasChildren(d.data.id) && d.data.id !== currentRootId) {
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
                .attr("y", 42)
                .attr("width", 114)
                .attr("height", 20)
                .attr("rx", 4)
                .attr("fill", "#0284c7");

            btnGroup.append("text")
                .attr("x", 65)
                .attr("y", 55)
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
            return `<span class="font-bold text-slate-800">${item.name}</span>`;
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

// ==========================================
// স্মার্ট সার্চ ও অক্ষর ভিত্তিক অটো-সাজেশন
// ==========================================
function setupSearchSuggestions() {
    const searchInput = document.querySelector('input[placeholder*="নাম খুঁজুন"]');
    if (!searchInput) return;

    // সাজেশন বক্স ডায়নামিক তৈরি
    let suggestionBox = document.getElementById("searchSuggestionBox");
    if (!suggestionBox) {
        suggestionBox = document.createElement("div");
        suggestionBox.id = "searchSuggestionBox";
        suggestionBox.className = "absolute z-50 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto w-full mt-1 hidden text-left text-sm";
        searchInput.parentNode.style.position = "relative";
        searchInput.parentNode.appendChild(suggestionBox);
    }

    // ইনপুট টাইপ করলে (অক্ষর অনুসারে সাজেশন)
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (!query) {
            showRecentSearches(suggestionBox);
            return;
        }

        const matches = familyData.filter(m => m.name.toLowerCase().includes(query));
        renderSuggestions(matches, suggestionBox, searchInput, false);
    });

    // সার্চ বক্সে ক্লিক করলে (পূর্বের সার্চ করা নাম প্রদর্শন)
    searchInput.addEventListener("focus", () => {
        if (!searchInput.value.trim()) {
            showRecentSearches(suggestionBox);
        }
    });

    // বাইরে ক্লিক করলে সাজেশন বন্ধ
    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !suggestionBox.contains(e.target)) {
            suggestionBox.classList.add("hidden");
        }
    });
}

function showRecentSearches(box) {
    if (recentSearches.length === 0) {
        box.classList.add("hidden");
        return;
    }
    const recentItems = familyData.filter(m => recentSearches.includes(m.id));
    renderSuggestions(recentItems, box, null, true);
}

function renderSuggestions(items, box, searchInput, isHistory) {
    if (items.length === 0) {
        box.classList.add("hidden");
        return;
    }

    box.innerHTML = isHistory ? `<div class="p-2 text-xs font-bold text-gray-400 bg-gray-50 border-b">🕒 সাম্প্রতিক সার্চসমূহ:</div>` : "";

    items.slice(0, 10).forEach(m => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "p-2 hover:bg-blue-50 cursor-pointer border-b flex justify-between items-center text-gray-800";
        itemDiv.innerHTML = `<span><strong>${m.name}</strong></span> <span class="text-xs text-gray-400">${m.gender === "male" ? "পুরুষ" : "নারী"}</span>`;
        
        itemDiv.addEventListener("click", () => {
            saveRecentSearch(m.id);
            if (searchInput) searchInput.value = m.name;
            box.classList.add("hidden");
            
            // সার্চকৃত মেম্বারের প্যারেন্ট ধরে ট্রি লোড করা
            currentRootId = m.fatherId || m.id;
            renderTree();
        });

        box.appendChild(itemDiv);
    });

    box.classList.remove("hidden");
}

function saveRecentSearch(id) {
    recentSearches = recentSearches.filter(item => item !== id);
    recentSearches.unshift(id);
    if (recentSearches.length > 5) recentSearches.pop(); // লাস্ট ৫টি সাম্প্রতিক সার্চ রাখবে
    localStorage.setItem("sardarRecentSearches", JSON.stringify(recentSearches));
}

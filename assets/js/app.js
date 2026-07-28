// ==========================================
// শেঁকড় - বংশবৃক্ষ (Sardar Family Tree Engine)
// ==========================================

let familyData = [];
let currentRootId = "1"; // ডিফল্ট পদ্মাশী সর্দার
let svg, g, zoomHandler;
let isAdminLoggedIn = false;
const ADMIN_PASSWORD = "ampmhd@@@03042000"; // ডিফল্ট পাসওয়ার্ড

const DEFAULT_MALE_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=SardarMaleAvatar&backgroundColor=b6e3f4";
const DEFAULT_FEMALE_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=SardarFemaleAvatar&backgroundColor=ffdfbf";

// ১৮৬ জন সদস্যের সম্পূর্ণ ডাটাবেজ (সকল তথ্যসহ)
const fullSardarData = [
    { id: "1", name: "পদ্মাশী সর্দার", nameEn: "Padmashi Sardar", gender: "male", fatherId: null, motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "2", name: "আকালি সর্দার", nameEn: "Akali Sardar", gender: "male", fatherId: "1", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "3", name: "ইসু সর্দার", nameEn: "Isu Sardar", gender: "male", fatherId: "2", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "4", name: "দোশর সর্দার", nameEn: "Doshor Sardar", gender: "male", fatherId: "3", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "5", name: "বানেজ সর্দার", nameEn: "Banej Sardar", gender: "male", fatherId: "4", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "6", name: "মহাসিন সর্দার", nameEn: "Mohasin Sardar", gender: "male", fatherId: "5", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "7", name: "আবুল সর্দার", nameEn: "Abul Sardar", gender: "male", fatherId: "5", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "8", name: "আমজাদ সর্দার", nameEn: "Amjad Sardar", gender: "male", fatherId: "5", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "9", name: "রেজিয়া", nameEn: "Rezia", gender: "female", fatherId: "5", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "10", name: "হাফিয়া", nameEn: "Hafia", gender: "female", fatherId: "5", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "11", name: "রইলা", nameEn: "Roila", gender: "female", fatherId: "5", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "12", name: "বুলু", nameEn: "Bulu", gender: "female", fatherId: "5", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "13", name: "রাশু", nameEn: "Rashu", gender: "female", fatherId: "5", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "14", name: "ফজিলা", nameEn: "Fojila", gender: "female", fatherId: "5", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "15", name: "মকবুল সর্দার", nameEn: "Mokbul Sardar", gender: "male", fatherId: "4", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "16", name: "মৃত আলতাফ সর্দার", nameEn: "Late Altaf Sardar", gender: "male", fatherId: "15", motherId: null, isDeceased: true, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "17", name: "রবিউল সর্দার", nameEn: "Robiul Sardar", gender: "male", fatherId: "15", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "18", name: "রশিদ সর্দার", nameEn: "Rashid Sardar", gender: "male", fatherId: "15", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "19", name: "মনোয়ার", nameEn: "Monowar", gender: "male", fatherId: "15", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "20", name: "আম্বিয়া", nameEn: "Ambia", gender: "female", fatherId: "15", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "21", name: "হাশেরা", nameEn: "Hashera", gender: "female", fatherId: "15", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "22", name: "রেকেনা", nameEn: "Rekena", gender: "female", fatherId: "15", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "23", name: "রুশিয়া", nameEn: "Rushia", gender: "female", fatherId: "15", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "24", name: "জাইমন", nameEn: "Jaimon", gender: "female", fatherId: "4", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "25", name: "হারিজা", nameEn: "Harija", gender: "female", fatherId: "4", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "26", name: "হাইতন", nameEn: "Haitan", gender: "female", fatherId: "4", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "27", name: "পেয়ার সর্দার", nameEn: "Peyar Sardar", gender: "male", fatherId: "3", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "28", name: "জানু সর্দার", nameEn: "Janu Sardar", gender: "male", fatherId: "27", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "29", name: "জামশেদ সর্দার", nameEn: "Jamshed Sardar", gender: "male", fatherId: "28", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "30", name: "ফুলু জান", nameEn: "Fulu Jan", gender: "female", fatherId: "28", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "31", name: "মাজেদা খাতুন", nameEn: "Majeda Khatun", gender: "female", fatherId: "28", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "32", name: "লুলু জান", nameEn: "Lulu Jan", gender: "female", fatherId: "28", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "33", name: "খদিজান", nameEn: "Khodijan", gender: "female", fatherId: "28", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "34", name: "হারান সর্দার", nameEn: "Haran Sardar", gender: "male", fatherId: "27", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "35", name: "ঝন্টু সর্দার", nameEn: "Jhontu Sardar", gender: "male", fatherId: "34", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "36", name: "সিদ্দিক সর্দার", nameEn: "Siddique Sardar", gender: "male", fatherId: "34", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "37", name: "জাহাঙ্গীর সর্দার", nameEn: "Jahangir Sardar", gender: "male", fatherId: "34", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "38", name: "কমেজান", nameEn: "Komejan", gender: "female", fatherId: "34", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "39", name: "মিষ্টুজান", nameEn: "Mishtujan", gender: "female", fatherId: "34", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "40", name: "বালীজান", nameEn: "Balijan", gender: "female", fatherId: "34", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "41", name: "জাহের সর্দার", nameEn: "Jaher Sardar", gender: "male", fatherId: "27", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "42", name: "সাধু সর্দার", nameEn: "Sadhu Sardar", gender: "male", fatherId: "41", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "43", name: "মধু সর্দার", nameEn: "Modhu Sardar", gender: "male", fatherId: "41", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "44", name: "জাদু সর্দার", nameEn: "Jadu Sardar", gender: "male", fatherId: "41", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "45", name: "মদিনা", nameEn: "Modina", gender: "female", fatherId: "41", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "46", name: "মরজিনা", nameEn: "Morjina", gender: "female", fatherId: "41", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "47", name: "করিমন নেছা", nameEn: "Korimon Nesa", gender: "female", fatherId: "41", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "48", name: "তারাজাম", nameEn: "Tarajam", gender: "female", fatherId: "41", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "49", name: "ভাষা সর্দার", nameEn: "Bhasha Sardar", gender: "male", fatherId: "27", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "50", name: "মোজা সর্দার", nameEn: "Moja Sardar", gender: "male", fatherId: "49", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "51", name: "মৃত মইনুদ্দিন সর্দার", nameEn: "Late Moinuddin Sardar", gender: "male", fatherId: "49", motherId: null, isDeceased: true, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "52", name: "জিয়ারুল সর্দার", nameEn: "Jiyarul Sardar", gender: "male", fatherId: "49", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "53", name: "সামিয়ন", nameEn: "Samiyon", gender: "female", fatherId: "49", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "54", name: "রমেসা", nameEn: "Romesa", gender: "female", fatherId: "27", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "55", name: "ফকির সর্দার", nameEn: "Fokir Sardar", gender: "male", fatherId: "3", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "56", name: "আজিম সর্দার", nameEn: "Ajim Sardar", gender: "male", fatherId: "55", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "57", name: "জালাল সর্দার", nameEn: "Jalal Sardar", gender: "male", fatherId: "56", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "58", name: "জিয়া সর্দার", nameEn: "Jiya Sardar", gender: "male", fatherId: "56", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "59", name: "রতন সর্দার", nameEn: "Ratan Sardar", gender: "male", fatherId: "56", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "60", name: "ইয়াতন", nameEn: "Yatan", gender: "female", fatherId: "56", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "61", name: "ফুকন", nameEn: "Fukon", gender: "female", fatherId: "56", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "62", name: "মৃত টুকলিমা", nameEn: "Late Tuklima", gender: "female", fatherId: "56", motherId: null, isDeceased: true, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "63", name: "লায়েব সর্দার", nameEn: "Layeb Sardar", gender: "male", fatherId: "55", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "64", name: "মৃত দুলাল সর্দার", nameEn: "Late Dulal Sardar", gender: "male", fatherId: "63", motherId: null, isDeceased: true, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "65", name: "আলাল সর্দার", nameEn: "Alal Sardar", gender: "male", fatherId: "63", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "66", name: "হেলাল সর্দার", nameEn: "Helal Sardar", gender: "male", fatherId: "63", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "67", name: "ফুনকা", nameEn: "Funka", gender: "female", fatherId: "63", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "68", name: "ফিরোজা", nameEn: "Firoza", gender: "female", fatherId: "63", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "69", name: "আবেদা খাতুন", nameEn: "Abeda Khatun", gender: "female", fatherId: "3", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "70", name: "কেসু সর্দার", nameEn: "Kesu Sardar", gender: "male", fatherId: "2", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "71", name: "ভুগল সর্দার", nameEn: "Bhugal Sardar", gender: "male", fatherId: "70", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "72", name: "সুবল সর্দার", nameEn: "Subal Sardar", gender: "male", fatherId: "71", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "73", name: "ময়লাল সর্দার", nameEn: "Moylall Sardar", gender: "male", fatherId: "72", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "74", name: "হবিবার সর্দার", nameEn: "Hobibar Sardar", gender: "male", fatherId: "72", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "75", name: "মতালি সর্দার", nameEn: "Motali Sardar", gender: "male", fatherId: "72", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "76", name: "লতা জান", nameEn: "Lota Jan", gender: "female", fatherId: "72", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "77", name: "খরকি", nameEn: "Khorki", gender: "female", fatherId: "72", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "78", name: "সহুরা", nameEn: "Sohura", gender: "female", fatherId: "72", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "79", name: "মজিবর সর্দার", nameEn: "Mojibor Sardar", gender: "male", fatherId: "71", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "80", name: "নজরুল সর্দার", nameEn: "Nojrul Sardar", gender: "male", fatherId: "79", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "81", name: "জালাল সর্দার", nameEn: "Jalal Sardar", gender: "male", fatherId: "79", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "82", name: "কামাল সর্দার", nameEn: "Kamal Sardar", gender: "male", fatherId: "79", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "83", name: "আহাদ সর্দার", nameEn: "Ahad Sardar", gender: "male", fatherId: "79", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "84", name: "মনোয়ারা", nameEn: "Monowara", gender: "female", fatherId: "79", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "85", name: "তসলিমা", nameEn: "Toslima", gender: "female", fatherId: "79", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "86", name: "স্বাধীনা", nameEn: "Swadhina", gender: "female", fatherId: "79", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "87", name: "মকলেস সর্দার", nameEn: "Mokles Sardar", gender: "male", fatherId: "71", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "88", name: "আকমান সর্দার", nameEn: "Akman Sardar", gender: "male", fatherId: "87", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "89", name: "ইংরাজ সর্দার", nameEn: "Ingraj Sardar", gender: "male", fatherId: "87", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "90", name: "ইয়াকুব সর্দার", nameEn: "Yakub Sardar", gender: "male", fatherId: "87", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "91", name: "আনারুল সর্দার", nameEn: "Anarul Sardar", gender: "male", fatherId: "87", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "92", name: "রেসে", nameEn: "Rese", gender: "female", fatherId: "87", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "93", name: "রুশি", nameEn: "Rushi", gender: "female", fatherId: "87", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "94", name: "মৃত ফরিদা", nameEn: "Late Forida", gender: "female", fatherId: "87", motherId: null, isDeceased: true, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "95", name: "ফিরো", nameEn: "Firo", gender: "female", fatherId: "87", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "96", name: "সারু সর্দার", nameEn: "Saru Sardar", gender: "male", fatherId: "71", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "97", name: "ইয়াদুল সর্দার", nameEn: "Yadul Sardar", gender: "male", fatherId: "96", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "98", name: "ইউনুস সর্দার", nameEn: "Yunus Sardar", gender: "male", fatherId: "96", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "99", name: "মৃত বেনেয়ামিন", nameEn: "Late Beneyamin", gender: "male", fatherId: "96", motherId: null, isDeceased: true, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "100", name: "রঞ্জনা", nameEn: "Ranjana", gender: "female", fatherId: "96", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "101", name: "মেরিনা", nameEn: "Merina", gender: "female", fatherId: "96", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "102", name: "রহিমা", nameEn: "Rohima", gender: "female", fatherId: "71", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "103", name: "জায়েদা", nameEn: "Jayeda", gender: "female", fatherId: "71", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "104", name: "জয়গন নেসা", nameEn: "Joygon Nesa", gender: "female", fatherId: "71", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "105", name: "কসের সর্দার", nameEn: "Koser Sardar", gender: "male", fatherId: "70", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "106", name: "খলিল সর্দার", nameEn: "Kholil Sardar", gender: "male", fatherId: "105", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "107", name: "রেফেজ সর্দার", nameEn: "Refej Sardar", gender: "male", fatherId: "106", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "108", name: "কুবির সর্দার", nameEn: "Kubir Sardar", gender: "male", fatherId: "106", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "109", name: "জুমির সর্দার", nameEn: "Jumir Sardar", gender: "male", fatherId: "106", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "110", name: "শাইজুদ্দি সর্দার", nameEn: "Shaijuddi Sardar", gender: "male", fatherId: "106", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "111", name: "মৃত রাজিয়া", nameEn: "Late Rajia", gender: "female", fatherId: "106", motherId: null, isDeceased: true, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "112", name: "নুরল সর্দার", nameEn: "Nurol Sardar", gender: "male", fatherId: "105", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "113", name: "ওয়ারিস সর্দার", nameEn: "Waris Sardar", gender: "male", fatherId: "112", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "114", name: "ইদ্রিস সর্দার", nameEn: "Idris Sardar", gender: "male", fatherId: "112", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "115", name: "আপিল সর্দার", nameEn: "Apil Sardar", gender: "male", fatherId: "112", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "116", name: "নিহারুল সর্দার", nameEn: "Niharul Sardar", gender: "male", fatherId: "112", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "117", name: "আলিম সর্দার", nameEn: "Alim Sardar", gender: "male", fatherId: "105", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "118", name: "উজ্জ্বল সর্দার", nameEn: "Ujjwal Sardar", gender: "male", fatherId: "117", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "119", name: "রফিকুল সর্দার", nameEn: "Rofikul Sardar", gender: "male", fatherId: "117", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "120", name: "হিসাব সর্দার", nameEn: "Hisab Sardar", gender: "male", fatherId: "117", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "121", name: "তফেজ্জল সর্দার", nameEn: "Tofejjol Sardar", gender: "male", fatherId: "105", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "122", name: "মহন সর্দার", nameEn: "Mohon Sardar", gender: "male", fatherId: "121", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "123", name: "করণ সর্দার", nameEn: "Koron Sardar", gender: "male", fatherId: "121", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "124", name: "রফিয়া", nameEn: "Rofia", gender: "female", fatherId: "121", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "125", name: "তহুরা", nameEn: "Tohura", gender: "female", fatherId: "121", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "126", name: "তাহেরা", nameEn: "Tahera", gender: "female", fatherId: "121", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "127", name: "সুলতানা", nameEn: "Sultana", gender: "female", fatherId: "121", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "128", name: "রমেলা খাতুন", nameEn: "Romela Khatun", gender: "female", fatherId: "105", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "129", name: "ইমান আলী সর্দার", nameEn: "Iman Ali Sardar", gender: "male", fatherId: "70", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "130", name: "সলেমান সর্দার", nameEn: "Soleman Sardar", gender: "male", fatherId: "129", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "131", name: "পেন্টু সর্দার", nameEn: "Pentu Sardar", gender: "male", fatherId: "130", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "132", name: "সেন্টু সর্দার", nameEn: "Sentu Sardar", gender: "male", fatherId: "130", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "133", name: "আসাদ সর্দার", nameEn: "Asad Sardar", gender: "male", fatherId: "130", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "134", name: "জুয়েল সর্দার", nameEn: "Juwel Sardar", gender: "male", fatherId: "130", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "135", name: "সোহেল সর্দার", nameEn: "Sohel Sardar", gender: "male", fatherId: "130", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "136", name: "রিংকু সর্দার", nameEn: "Rinku Sardar", gender: "male", fatherId: "130", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "137", name: "বেলি", nameEn: "Beli", gender: "female", fatherId: "130", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "138", name: "সেলিনা", nameEn: "Selina", gender: "female", fatherId: "130", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "139", name: "লাভলি", nameEn: "Lavlai", gender: "female", fatherId: "130", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "140", name: "রিক্তা", nameEn: "Rikta", gender: "female", fatherId: "130", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "141", name: "পিস্তা", nameEn: "Pista", gender: "female", fatherId: "130", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "142", name: "আব্দুস সামাদ সর্দার", nameEn: "Abdus Samad Sardar", gender: "male", fatherId: "129", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "143", name: "রোকনুজ্জামান রানা", nameEn: "Roknuzzaman Rana", gender: "male", fatherId: "142", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "144", name: "হাসানুজ্জামান রাজা", nameEn: "Hasanuzzaman Raja", gender: "male", fatherId: "142", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "145", name: "মৃত তানিম হাসান রাঙ্গা", nameEn: "Late Tanim Hasan Ranga", gender: "male", fatherId: "142", motherId: null, isDeceased: true, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "146", name: "সুমন সর্দার", nameEn: "Sumon Sardar", gender: "male", fatherId: "142", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "147", name: "রীনা", nameEn: "Rina", gender: "female", fatherId: "142", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "148", name: "বিনা", nameEn: "Bina", gender: "female", fatherId: "142", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "149", name: "টিনা", nameEn: "Tina", gender: "female", fatherId: "142", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "150", name: "জামাল সর্দার", nameEn: "Jamal Sardar", gender: "male", fatherId: "129", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "151", name: "মামুন সর্দার", nameEn: "Mamun Sardar", gender: "male", fatherId: "150", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "152", name: "মাসুম সর্দার", nameEn: "Masum Sardar", gender: "male", fatherId: "150", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "153", name: "মৌসুম সর্দার", nameEn: "Mousum Sardar", gender: "male", fatherId: "150", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "154", name: "কুসুম সর্দার", nameEn: "Kusum Sardar", gender: "male", fatherId: "150", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "155", name: "পান্না সর্দার", nameEn: "Panna Sardar", gender: "male", fatherId: "150", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "156", name: "নান্টু সর্দার", nameEn: "Nantu Sardar", gender: "male", fatherId: "150", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "157", name: "মিঠন সর্দার", nameEn: "Mithon Sardar", gender: "male", fatherId: "150", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "158", name: "টুটন সর্দার", nameEn: "Tuton Sardar", gender: "male", fatherId: "150", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "159", name: "ছোটন সর্দার", nameEn: "Choton Sardar", gender: "male", fatherId: "150", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "160", name: "জাহানারা", nameEn: "Jahanara", gender: "female", fatherId: "150", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "161", name: "সাথি", nameEn: "Sathi", gender: "female", fatherId: "150", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "162", name: "রুস্তম সর্দার", nameEn: "Rustom Sardar", gender: "male", fatherId: "129", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "163", name: "রেজাউল সর্দার", nameEn: "Rejaul Sardar", gender: "male", fatherId: "162", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "164", name: "মানিক সর্দার", nameEn: "Manik Sardar", gender: "male", fatherId: "162", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "165", name: "আরিফ সর্দার", nameEn: "Arif Sardar", gender: "male", fatherId: "162", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "166", name: "রিপন সর্দার", nameEn: "Ripon Sardar", gender: "male", fatherId: "162", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "167", name: "রোজিনা", nameEn: "Rojina", gender: "female", fatherId: "162", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "168", name: "রুমা", nameEn: "Ruma", gender: "female", fatherId: "162", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "169", name: "আকবর সর্দার", nameEn: "Akbor Sardar", gender: "male", fatherId: "129", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "170", name: "শুভ্র", nameEn: "Shuvro", gender: "male", fatherId: "169", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "171", name: "অন্ত", nameEn: "Anto", gender: "male", fatherId: "169", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "172", name: "আফিফা", nameEn: "Afifa", gender: "female", fatherId: "169", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "173", name: "মাহাতাব উদ্দিন সর্দার", nameEn: "Mahatab Uddin Sardar", gender: "male", fatherId: "129", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "174", name: "আল-মেহেদী", nameEn: "Al-Mehedi", gender: "male", fatherId: "173", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "175", name: "আবু সাঈদ", nameEn: "Abu Sayed", gender: "male", fatherId: "173", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "176", name: "মরিয়ম খাতুন", nameEn: "Moriyom Khatun", gender: "female", fatherId: "173", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "177", name: "মৃত পপি", nameEn: "Late Popi", gender: "female", fatherId: "173", motherId: null, isDeceased: true, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "178", name: "মেরিনা খাতুন", nameEn: "Merina Khatun", gender: "female", fatherId: "173", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "179", name: "কোকন সর্দার", nameEn: "Kokon Sardar", gender: "male", fatherId: "129", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "180", name: "মঞ্জুরা", nameEn: "Monjura", gender: "female", fatherId: "179", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "181", name: "নেহার", nameEn: "Nehar", gender: "female", fatherId: "129", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "182", name: "সকিনা", nameEn: "Sokina", gender: "female", fatherId: "129", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "183", name: "শহিদা", nameEn: "Shohida", gender: "female", fatherId: "129", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "184", name: "শাহানূর", nameEn: "Shahanur", gender: "female", fatherId: "129", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "185", name: "কাজল", nameEn: "Kajol", gender: "female", fatherId: "129", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" },
    { id: "186", name: "সালেজান", nameEn: "Salejan", gender: "female", fatherId: "70", motherId: null, dob: "", dod: "", bloodGroup: "", address: "", occupation: "", education: "", bio: "", gallery: [], photo: "" }
];

document.addEventListener("DOMContentLoaded", () => {
    loadFamilyData();
    initD3Canvas();
    updateStatistics();
    renderTree();
    setupEventListeners();
    setupSearchEngine();
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
        .scaleExtent([0.2, 2.5])
        .on("zoom", (event) => g.attr("transform", event.transform));

    svg.call(zoomHandler);
}

// Dynamic Gender-based & Age-aware Cute Avatar Generator
function getCustomAvatar(member) {
    if (member.photo) return member.photo;
    const seed = encodeURIComponent(member.nameEn || member.name || "Sardar");
    if (member.gender === "female") {
        return `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}&backgroundColor=ffdfbf`;
    }
    return `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}&backgroundColor=b6e3f4`;
}

// ==========================================
// হায়ারার্কি তৈরি ও সাজানো (ছেলেদের বামে, মেয়েদের ডানে)
// ==========================================
function buildHierarchy(rootId) {
    const rootItem = familyData.find(item => item.id === rootId);
    if (!rootItem) return null;

    let rootNode = { ...rootItem, children: [] };

    // সন্তানাদি বের করে পুরুষ ও নারীদের আলাদা সাজিয়ে কম্প্যাক্ট করা
    function getSortedChildren(parentId) {
        const children = familyData.filter(item => item.fatherId === parentId);
        const males = children.filter(c => c.gender === "male");
        const females = children.filter(c => c.gender === "female");
        return [...males, ...females]; // একপাশে ছেলে, অন্যপাশে মেয়ে
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

// সোজাসুজি (Orthogonal/Straight Step) কানেক্টিং লাইন ফাংশন
function drawOrthogonalLink(d) {
    const startX = d.source.x;
    const startY = d.source.y;
    const endX = d.target.x;
    const endY = d.target.y;
    const midY = startY + (endY - startY) / 2;

    return `M ${startX} ${startY} V ${midY} H ${endX} V ${endY}`;
}

function renderTree() {
    g.selectAll("*").remove();
    updateBreadcrumbs();

    const root = buildHierarchy(currentRootId);
    if (!root) return;

    // কম্প্যাক্ট সাইজিং (মোবাইলে আঁটার জন্য ছোট সাইজ)
    const isMobile = window.innerWidth < 640;
    const nodeWidth = isMobile ? 110 : 120;
    const nodeHeight = isMobile ? 45 : 50;
    const treeLayout = d3.tree().nodeSize([nodeWidth + 12, nodeHeight + 60]);

    treeLayout(root);

    // ১. সোজা দাগ আঁকা (Straight Orthogonal Lines)
    g.selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "#0284c7")
        .attr("stroke-width", 2)
        .attr("d", drawOrthogonalLink);

    // ২. নোড তৈরি
    const node = g.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.x - nodeWidth / 2},${d.y - nodeHeight / 2})`);

    // নোড বক্স
    node.append("rect")
        .attr("width", nodeWidth)
        .attr("height", d => hasChildren(d.data.id) ? nodeHeight + 18 : nodeHeight)
        .attr("rx", 6)
        .attr("fill", "#ffffff")
        .attr("stroke", d => d.data.gender === "male" ? "#2563eb" : "#ec4899")
        .attr("stroke-width", 2)
        .attr("class", "cursor-pointer")
        .on("click", (event, d) => openProfileModal(d.data.id));

    // বাংলা নাম (কম্প্যাক্ট ফন্ট)
    node.append("text")
        .attr("x", nodeWidth / 2)
        .attr("y", 18)
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("font-size", isMobile ? "10px" : "11px")
        .attr("fill", "#1e293b")
        .attr("class", "cursor-pointer")
        .on("click", (event, d) => openProfileModal(d.data.id))
        .text(d => d.data.name);

    // ইংরেজি নাম
    node.append("text")
        .attr("x", nodeWidth / 2)
        .attr("y", 32)
        .attr("text-anchor", "middle")
        .attr("font-size", isMobile ? "8px" : "9px")
        .attr("fill", "#64748b")
        .text(d => d.data.nameEn || (d.data.isDeceased ? "(মৃত)" : ""));

    // বংশধারা নেভিগেশন বাটন
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
                .attr("x", 4)
                .attr("y", nodeHeight - 2)
                .attr("width", nodeWidth - 8)
                .attr("height", 16)
                .attr("rx", 3)
                .attr("fill", "#0284c7");

            btnGroup.append("text")
                .attr("x", nodeWidth / 2)
                .attr("y", nodeHeight + 9)
                .attr("text-anchor", "middle")
                .attr("font-size", "8px")
                .attr("fill", "#ffffff")
                .attr("font-weight", "bold")
                .text("বংশধারা ➔");
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
            return `<span class="font-bold text-blue-900 dark:text-blue-300">${item.name}</span>`;
        }
        return `<span class="cursor-pointer hover:underline text-blue-600 font-semibold" onclick="navigateTo('${item.id}')">${item.name}</span> ➔ `;
    }).join("");
}

function navigateTo(id) {
    currentRootId = id;
    renderTree();
}

// স্ক্রিনে পারফেক্টলি ফিট করার জুম
function resetZoom() {
    const width = window.innerWidth;
    const scale = width < 640 ? 0.8 : 1.0;
    svg.transition().duration(400).call(
        zoomHandler.transform,
        d3.zoomIdentity.translate(width / 2, 60).scale(scale)
    );
}

// ==========================================
// বিস্তারিত প্রোফাইল কার্ড ও গ্যালারি
// ==========================================

function openProfileModal(id) {
    const m = familyData.find(item => item.id === id);
    if (!m) return;

    // নাম ও ছবি
    const nameEl = document.getElementById("modalName");
    if (nameEl) nameEl.innerText = `${m.name} (${m.nameEn || ''})`;

    const photoEl = document.getElementById("modalPhoto");
    if (photoEl) photoEl.src = getCustomAvatar(m);

    // স্ট্যাটাস
    const statusEl = document.getElementById("modalStatus");
    if (statusEl) {
        statusEl.innerText = m.isDeceased ? "মৃত" : "জীবিত";
        statusEl.className = m.isDeceased ? "text-red-500 font-bold" : "text-green-600 font-bold";
    }

    // পিতামাতা
    const father = familyData.find(f => f.id === m.fatherId);
    const mother = familyData.find(f => f.id === m.motherId);
    if (document.getElementById("modalFather")) document.getElementById("modalFather").innerText = father ? father.name : "-";
    if (document.getElementById("modalMother")) document.getElementById("modalMother").innerText = mother ? mother.name : "-";

    // অতিরিক্ত নতুন ফিল্ডসমূহ
    if (document.getElementById("modalDob")) document.getElementById("modalDob").innerText = m.dob || "-";
    if (document.getElementById("modalDod")) document.getElementById("modalDod").innerText = m.isDeceased ? (m.dod || "অজানা") : "N/A (জীবিত)";
    if (document.getElementById("modalBlood")) document.getElementById("modalBlood").innerText = m.bloodGroup || "-";
    if (document.getElementById("modalAddress")) document.getElementById("modalAddress").innerText = m.address || "-";
    if (document.getElementById("modalOccupation")) document.getElementById("modalOccupation").innerText = m.occupation || "-";
    if (document.getElementById("modalEducation")) document.getElementById("modalEducation").innerText = m.education || "-";
    if (document.getElementById("modalBio")) document.getElementById("modalBio").innerText = m.bio || "কোন সংক্ষিপ্ত তথ্য নেই।";

    // সন্তানসন্ততির হিসেব
    const children = familyData.filter(c => c.fatherId === m.id || c.motherId === m.id);
    const sonsCount = children.filter(c => c.gender === "male").length;
    const daughtersCount = children.filter(c => c.gender === "female").length;
    if (document.getElementById("modalChildren")) {
        document.getElementById("modalChildren").innerText = children.length > 0 
            ? `মোট ${children.length} জন (ছেলে: ${sonsCount}, মেয়ে: ${daughtersCount})`
            : "কোন তথ্য নেই/সন্তান নেই";
    }

    // গ্যালারি সেকশন
    const galleryContainer = document.getElementById("modalGallery");
    if (galleryContainer) {
        galleryContainer.innerHTML = "";
        if (m.gallery && m.gallery.length > 0) {
            m.gallery.forEach(imgUrl => {
                const img = document.createElement("img");
                img.src = imgUrl;
                img.className = "w-16 h-16 object-cover rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:opacity-80";
                img.onclick = () => window.open(imgUrl, '_blank');
                galleryContainer.appendChild(img);
            });
        } else {
            galleryContainer.innerHTML = `<span class="text-xs text-gray-400 italic">গ্যালারিতে কোনো ছবি যুক্ত করা হয়নি</span>`;
        }
    }

    // বাটন ইভেন্ট
    const viewSubtreeBtn = document.getElementById("viewSubtreeBtn");
    if (viewSubtreeBtn) {
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

    document.getElementById("profileModal").classList.remove("hidden");
}

// এডমিন লগইন লজিক
function loginAdmin() {
    const inputPass = prompt("এডমিন পাসওয়ার্ড লিখুন:");
    if (inputPass === ADMIN_PASSWORD) {
        isAdminLoggedIn = true;
        alert("লগইন সফল হয়েছে! এখন আপনি তথ্য সংযোজন ও সংশোধন করতে পারবেন।");
        document.getElementById("adminDrawer").classList.remove("hidden");
        populateFormOptions();
    } else if (inputPass !== null) {
        alert("ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।");
    }
}

// এডিট ফর্মে ডেটা পপুলট করা
function openEditForm(member) {
    document.getElementById("adminDrawer").classList.remove("hidden");
    document.getElementById("formMemberId").value = member.id;
    document.getElementById("formName").value = member.name;
    document.getElementById("formNameEn").value = member.nameEn || "";
    document.getElementById("formGender").value = member.gender;
    document.getElementById("formFather").value = member.fatherId || "";
    document.getElementById("formMother").value = member.motherId || "";
    document.getElementById("formDeceased").checked = member.isDeceased || false;
    document.getElementById("formPhoto").value = member.photo || "";

    // নতুন ফিল্ডগুলো ফর্ম থেকে নেওয়া
    if (document.getElementById("formDob")) document.getElementById("formDob").value = member.dob || "";
    if (document.getElementById("formDod")) document.getElementById("formDod").value = member.dod || "";
    if (document.getElementById("formBlood")) document.getElementById("formBlood").value = member.bloodGroup || "";
    if (document.getElementById("formAddress")) document.getElementById("formAddress").value = member.address || "";
    if (document.getElementById("formOccupation")) document.getElementById("formOccupation").value = member.occupation || "";
    if (document.getElementById("formEducation")) document.getElementById("formEducation").value = member.education || "";
    if (document.getElementById("formBio")) document.getElementById("formBio").value = member.bio || "";
    if (document.getElementById("formGallery")) document.getElementById("formGallery").value = member.gallery ? member.gallery.join(",") : "";
}

// নতুন সদস্য যোগ / আপডেট সেভ করা
function saveMemberForm(event) {
    if (event) event.preventDefault();

    const id = document.getElementById("formMemberId").value;
    const name = document.getElementById("formName").value.trim();
    const nameEn = document.getElementById("formNameEn").value.trim();
    const gender = document.getElementById("formGender").value;
    const fatherId = document.getElementById("formFather").value || null;
    const motherId = document.getElementById("formMother") ? (document.getElementById("formMother").value || null) : null;
    const isDeceased = document.getElementById("formDeceased").checked;
    const photo = document.getElementById("formPhoto").value.trim();

    const dob = document.getElementById("formDob") ? document.getElementById("formDob").value : "";
    const dod = document.getElementById("formDod") ? document.getElementById("formDod").value : "";
    const bloodGroup = document.getElementById("formBlood") ? document.getElementById("formBlood").value : "";
    const address = document.getElementById("formAddress") ? document.getElementById("formAddress").value : "";
    const occupation = document.getElementById("formOccupation") ? document.getElementById("formOccupation").value : "";
    const education = document.getElementById("formEducation") ? document.getElementById("formEducation").value : "";
    const bio = document.getElementById("formBio") ? document.getElementById("formBio").value : "";
    
    const galleryInput = document.getElementById("formGallery") ? document.getElementById("formGallery").value : "";
    const gallery = galleryInput ? galleryInput.split(",").map(url => url.trim()).filter(url => url !== "") : [];

    if (!name) {
        alert("সদস্যের নাম দেওয়া আবশ্যক!");
        return;
    }

    const memberPayload = {
        name, nameEn, gender, fatherId, motherId, isDeceased, photo,
        dob, dod, bloodGroup, address, occupation, education, bio, gallery
    };

    if (id) {
        const index = familyData.findIndex(m => m.id === id);
        if (index !== -1) {
            familyData[index] = { ...familyData[index], ...memberPayload };
        }
    } else {
        const newId = (familyData.length + 1).toString();
        familyData.push({ id: newId, ...memberPayload });
    }

    saveFamilyData();
    closeAllModals();
    alert("তথ্য সফলভাবে সেভ হয়েছে!");
}

function closeAllModals() {
    ["profileModal", "adminDrawer"].forEach(id => {
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
    const closeProfile = document.getElementById("closeProfileBtn");
    if (closeProfile) closeProfile.onclick = closeAllModals;

    const closeAdmin = document.getElementById("closeAdminBtn");
    if (closeAdmin) closeAdmin.onclick = closeAllModals;

    const resetZoomBtn = document.getElementById("resetZoomBtn");
    if (resetZoomBtn) resetZoomBtn.onclick = resetZoom;

    const adminBtn = document.getElementById("adminDrawerBtn");
    if (adminBtn) {
        adminBtn.onclick = () => {
            if (!isAdminLoggedIn) {
                loginAdmin();
            } else {
                document.getElementById("adminDrawer").classList.remove("hidden");
            }
        };
    }

    const memberForm = document.getElementById("memberForm");
    if (memberForm) {
        memberForm.onsubmit = saveMemberForm;
    }
}

// ==========================================
// সার্চ ইঞ্জিন ও সার্চ হিস্ট্রি
// ==========================================
function setupSearchEngine() {
    const searchInput = document.getElementById("searchInput");
    const suggestionBox = document.getElementById("searchSuggestionBox");

    if (!searchInput || !suggestionBox) return;

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query === "") {
            showHistory(suggestionBox);
            return;
        }

        const filtered = familyData.filter(m => 
            (m.name && m.name.toLowerCase().includes(query)) || 
            (m.nameEn && m.nameEn.toLowerCase().includes(query))
        );
        
        renderList(filtered, suggestionBox, searchInput, false);
    });

    searchInput.addEventListener("focus", () => {
        if (searchInput.value.trim() === "") {
            showHistory(suggestionBox);
        }
    });

    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !suggestionBox.contains(e.target)) {
            suggestionBox.classList.add("hidden");
        }
    });
}

function showHistory(box) {
    let recentSearches = JSON.parse(localStorage.getItem("sardarRecentSearches")) || [];
    if (recentSearches.length === 0) {
        box.classList.add("hidden");
        return;
    }
    const historyMembers = familyData.filter(m => recentSearches.includes(m.id));
    renderList(historyMembers, box, null, true);
}

function renderList(items, box, inputElement, isHistory) {
    if (items.length === 0) {
        box.classList.add("hidden");
        return;
    }

    box.innerHTML = isHistory 
        ? `<div class="px-3 py-1.5 text-[10px] font-bold text-gray-400 bg-gray-50 dark:bg-gray-700/50 border-b dark:border-gray-700">🕒 সাম্প্রতিক সার্চসমূহ</div>` 
        : "";

    items.slice(0, 8).forEach(m => {
        const row = document.createElement("div");
        row.className = "px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-700/50 flex justify-between items-center text-xs text-gray-700 dark:text-gray-200";
        row.innerHTML = `
            <div>
                <span class="font-medium">${m.name}</span>
                ${m.nameEn ? `<span class="text-[10px] text-gray-400 ml-1">(${m.nameEn})</span>` : ''}
            </div>
            <span class="text-[10px] px-1.5 py-0.5 rounded ${m.gender === 'male' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'}">${m.gender === "male" ? "পুরুষ" : "নারী"}</span>
        `;

        row.addEventListener("click", () => {
            saveHistory(m.id);
            if (inputElement) inputElement.value = m.name;
            box.classList.add("hidden");

            currentRootId = m.fatherId ? m.fatherId : m.id;
            renderTree();
        });

        box.appendChild(row);
    });

    box.classList.remove("hidden");
}

function saveHistory(id) {
    let recentSearches = JSON.parse(localStorage.getItem("sardarRecentSearches")) || [];
    recentSearches = recentSearches.filter(item => item !== id);
    recentSearches.unshift(id);
    if (recentSearches.length > 5) recentSearches.pop();
    localStorage.setItem("sardarRecentSearches", JSON.stringify(recentSearches));
}
// ==========================================
// AUTO-FIT TREE LOGIC (এক স্ক্রিনে মানিয়ে নেওয়ার জন্য)
// ==========================================
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

// ==========================================
// UPDATED PROFILE MODAL DISPLAY
// ==========================================
function openProfileModal(id) {
    const m = familyData.find(item => item.id === id);
    if (!m) return;

    const nameEl = document.getElementById("modalName");
    if (nameEl) nameEl.innerText = m.name;

    const photoEl = document.getElementById("modalPhoto");
    if (photoEl) photoEl.src = m.photo || (m.gender === "female" ? DEFAULT_FEMALE_AVATAR : DEFAULT_MALE_AVATAR);

    const statusEl = document.getElementById("modalStatus");
    if (statusEl) statusEl.innerText = m.isDeceased ? "মৃত" : "জীবিত";

    const father = familyData.find(f => f.id === m.fatherId);
    const fatherEl = document.getElementById("modalFather");
    if (fatherEl) fatherEl.innerText = father ? father.name : "-";

    // অতিরিক্ত তথ্য (পেশা, মোবাইল, ঠিকানা)
    const occEl = document.getElementById("modalOccupation");
    if (occEl) occEl.innerText = m.occupation || "তথ্য নেই";

    const phoneEl = document.getElementById("modalPhone");
    if (phoneEl) phoneEl.innerText = m.phone || "তথ্য নেই";

    const addrEl = document.getElementById("modalAddress");
    if (addrEl) addrEl.innerText = m.address || "তথ্য নেই";

    // বাটন ইভেন্ট
    const viewSubtreeBtn = document.getElementById("viewSubtreeBtn");
    if (viewSubtreeBtn) {
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
    if (modal) modal.classList.remove("hidden");
}

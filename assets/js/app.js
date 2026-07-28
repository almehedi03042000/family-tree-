// ==========================================
// শেঁকড় - বংশবৃক্ষ (Sardar Family Tree Engine)
// ==========================================

let familyData = [];
let currentRootId = "1"; // ডিফল্ট পদ্মাশী সর্দার
let svg, g, zoomHandler;
let isAdminLoggedIn = false;
const ADMIN_PASSWORD = "admin"; // ডিফল্ট পাসওয়ার্ড (এটি পরিবর্তন করতে পারেন)

const DEFAULT_MALE_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=SardarMaleAvatar&backgroundColor=b6e3f4";
const DEFAULT_FEMALE_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=SardarFemaleAvatar&backgroundColor=ffdfbf";

// ১৮৬ জন সদস্যের সম্পূর্ণ ডাটাবেজ (সকল সদস্যের ইংরেজি নামসহ)
const fullSardarData = [
    { id: "1", name: "পদ্মাশী সর্দার", nameEn: "Padmashi Sardar", gender: "male", fatherId: null, motherId: null },
    { id: "2", name: "আকালি সর্দার", nameEn: "Akali Sardar", gender: "male", fatherId: "1", motherId: null },
    { id: "3", name: "ইসু সর্দার", nameEn: "Isu Sardar", gender: "male", fatherId: "2", motherId: null },
    { id: "4", name: "দোশর সর্দার", nameEn: "Doshor Sardar", gender: "male", fatherId: "3", motherId: null },
    { id: "5", name: "বানেজ সর্দার", nameEn: "Banej Sardar", gender: "male", fatherId: "4", motherId: null },
    { id: "6", name: "মহাসিন সর্দার", nameEn: "Mohasin Sardar", gender: "male", fatherId: "5", motherId: null },
    { id: "7", name: "আবুল সর্দার", nameEn: "Abul Sardar", gender: "male", fatherId: "5", motherId: null },
    { id: "8", name: "আমজাদ সর্দার", nameEn: "Amjad Sardar", gender: "male", fatherId: "5", motherId: null },
    { id: "9", name: "রেজিয়া", nameEn: "Rezia", gender: "female", fatherId: "5", motherId: null },
    { id: "10", name: "হাফিয়া", nameEn: "Hafia", gender: "female", fatherId: "5", motherId: null },
    { id: "11", name: "রইলা", nameEn: "Roila", gender: "female", fatherId: "5", motherId: null },
    { id: "12", name: "বুলু", nameEn: "Bulu", gender: "female", fatherId: "5", motherId: null },
    { id: "13", name: "রাশু", nameEn: "Rashu", gender: "female", fatherId: "5", motherId: null },
    { id: "14", name: "ফজিলা", nameEn: "Fojila", gender: "female", fatherId: "5", motherId: null },
    { id: "15", name: "মকবুল সর্দার", nameEn: "Mokbul Sardar", gender: "male", fatherId: "4", motherId: null },
    { id: "16", name: "মৃত আলতাফ সর্দার", nameEn: "Late Altaf Sardar", gender: "male", fatherId: "15", motherId: null, isDeceased: true },
    { id: "17", name: "রবিউল সর্দার", nameEn: "Robiul Sardar", gender: "male", fatherId: "15", motherId: null },
    { id: "18", name: "রশিদ সর্দার", nameEn: "Rashid Sardar", gender: "male", fatherId: "15", motherId: null },
    { id: "19", name: "মনোয়ার", nameEn: "Monowar", gender: "male", fatherId: "15", motherId: null },
    { id: "20", name: "আম্বিয়া", nameEn: "Ambia", gender: "female", fatherId: "15", motherId: null },
    { id: "21", name: "হাশেরা", nameEn: "Hashera", gender: "female", fatherId: "15", motherId: null },
    { id: "22", name: "রেকেনা", nameEn: "Rekena", gender: "female", fatherId: "15", motherId: null },
    { id: "23", name: "রুশিয়া", nameEn: "Rushia", gender: "female", fatherId: "15", motherId: null },
    { id: "24", name: "জাইমন", nameEn: "Jaimon", gender: "female", fatherId: "4", motherId: null },
    { id: "25", name: "হারিজা", nameEn: "Harija", gender: "female", fatherId: "4", motherId: null },
    { id: "26", name: "হাইতন", nameEn: "Haitan", gender: "female", fatherId: "4", motherId: null },
    { id: "27", name: "পেয়ার সর্দার", nameEn: "Peyar Sardar", gender: "male", fatherId: "3", motherId: null },
    { id: "28", name: "জানু সর্দার", nameEn: "Janu Sardar", gender: "male", fatherId: "27", motherId: null },
    { id: "29", name: "জামশেদ সর্দার", nameEn: "Jamshed Sardar", gender: "male", fatherId: "28", motherId: null },
    { id: "30", name: "ফুলু জান", nameEn: "Fulu Jan", gender: "female", fatherId: "28", motherId: null },
    { id: "31", name: "মাজেদা খাতুন", nameEn: "Majeda Khatun", gender: "female", fatherId: "28", motherId: null },
    { id: "32", name: "লুলু জান", nameEn: "Lulu Jan", gender: "female", fatherId: "28", motherId: null },
    { id: "33", name: "খদিজান", nameEn: "Khodijan", gender: "female", fatherId: "28", motherId: null },
    { id: "34", name: "হারান সর্দার", nameEn: "Haran Sardar", gender: "male", fatherId: "27", motherId: null },
    { id: "35", name: "ঝন্টু সর্দার", nameEn: "Jhontu Sardar", gender: "male", fatherId: "34", motherId: null },
    { id: "36", name: "সিদ্দিক সর্দার", nameEn: "Siddique Sardar", gender: "male", fatherId: "34", motherId: null },
    { id: "37", name: "জাহাঙ্গীর সর্দার", nameEn: "Jahangir Sardar", gender: "male", fatherId: "34", motherId: null },
    { id: "38", name: "কমেজান", nameEn: "Komejan", gender: "female", fatherId: "34", motherId: null },
    { id: "39", name: "মিষ্টুজান", nameEn: "Mishtujan", gender: "female", fatherId: "34", motherId: null },
    { id: "40", name: "বালীজান", nameEn: "Balijan", gender: "female", fatherId: "34", motherId: null },
    { id: "41", name: "জাহের সর্দার", nameEn: "Jaher Sardar", gender: "male", fatherId: "27", motherId: null },
    { id: "42", name: "সাধু সর্দার", nameEn: "Sadhu Sardar", gender: "male", fatherId: "41", motherId: null },
    { id: "43", name: "মধু সর্দার", nameEn: "Modhu Sardar", gender: "male", fatherId: "41", motherId: null },
    { id: "44", name: "জাদু সর্দার", nameEn: "Jadu Sardar", gender: "male", fatherId: "41", motherId: null },
    { id: "45", name: "মদিনা", nameEn: "Modina", gender: "female", fatherId: "41", motherId: null },
    { id: "46", name: "মরজিনা", nameEn: "Morjina", gender: "female", fatherId: "41", motherId: null },
    { id: "47", name: "করিমন নেছা", nameEn: "Korimon Nesa", gender: "female", fatherId: "41", motherId: null },
    { id: "48", name: "তারাজাম", nameEn: "Tarajam", gender: "female", fatherId: "41", motherId: null },
    { id: "49", name: "ভাষা সর্দার", nameEn: "Bhasha Sardar", gender: "male", fatherId: "27", motherId: null },
    { id: "50", name: "মোজা সর্দার", nameEn: "Moja Sardar", gender: "male", fatherId: "49", motherId: null },
    { id: "51", name: "মৃত মইনুদ্দিন সর্দার", nameEn: "Late Moinuddin Sardar", gender: "male", fatherId: "49", motherId: null, isDeceased: true },
    { id: "52", name: "জিয়ারুল সর্দার", nameEn: "Jiyarul Sardar", gender: "male", fatherId: "49", motherId: null },
    { id: "53", name: "সামিয়ন", nameEn: "Samiyon", gender: "female", fatherId: "49", motherId: null },
    { id: "54", name: "রমেসা", nameEn: "Romesa", gender: "female", fatherId: "27", motherId: null },
    { id: "55", name: "ফকির সর্দার", nameEn: "Fokir Sardar", gender: "male", fatherId: "3", motherId: null },
    { id: "56", name: "আজিম সর্দার", nameEn: "Ajim Sardar", gender: "male", fatherId: "55", motherId: null },
    { id: "57", name: "জালাল সর্দার", nameEn: "Jalal Sardar", gender: "male", fatherId: "56", motherId: null },
    { id: "58", name: "জিয়া সর্দার", nameEn: "Jiya Sardar", gender: "male", fatherId: "56", motherId: null },
    { id: "59", name: "রতন সর্দার", nameEn: "Ratan Sardar", gender: "male", fatherId: "56", motherId: null },
    { id: "60", name: "ইয়াতন", nameEn: "Yatan", gender: "female", fatherId: "56", motherId: null },
    { id: "61", name: "ফুকন", nameEn: "Fukon", gender: "female", fatherId: "56", motherId: null },
    { id: "62", name: "মৃত টুকলিমা", nameEn: "Late Tuklima", gender: "female", fatherId: "56", motherId: null, isDeceased: true },
    { id: "63", name: "লায়েব সর্দার", nameEn: "Layeb Sardar", gender: "male", fatherId: "55", motherId: null },
    { id: "64", name: "মৃত দুলাল সর্দার", nameEn: "Late Dulal Sardar", gender: "male", fatherId: "63", motherId: null, isDeceased: true },
    { id: "65", name: "আলাল সর্দার", nameEn: "Alal Sardar", gender: "male", fatherId: "63", motherId: null },
    { id: "66", name: "হেলাল সর্দার", nameEn: "Helal Sardar", gender: "male", fatherId: "63", motherId: null },
    { id: "67", name: "ফুনকা", nameEn: "Funka", gender: "female", fatherId: "63", motherId: null },
    { id: "68", name: "ফিরোজা", nameEn: "Firoza", gender: "female", fatherId: "63", motherId: null },
    { id: "69", name: "আবেদা খাতুন", nameEn: "Abeda Khatun", gender: "female", fatherId: "3", motherId: null },
    { id: "70", name: "কেসু সর্দার", nameEn: "Kesu Sardar", gender: "male", fatherId: "2", motherId: null },
    { id: "71", name: "ভুগল সর্দার", nameEn: "Bhugal Sardar", gender: "male", fatherId: "70", motherId: null },
    { id: "72", name: "সুবল সর্দার", nameEn: "Subal Sardar", gender: "male", fatherId: "71", motherId: null },
    { id: "73", name: "ময়লাল সর্দার", nameEn: "Moylall Sardar", gender: "male", fatherId: "72", motherId: null },
    { id: "74", name: "হবিবার সর্দার", nameEn: "Hobibar Sardar", gender: "male", fatherId: "72", motherId: null },
    { id: "75", name: "মতালি সর্দার", nameEn: "Motali Sardar", gender: "male", fatherId: "72", motherId: null },
    { id: "76", name: "লতা জান", nameEn: "Lota Jan", gender: "female", fatherId: "72", motherId: null },
    { id: "77", name: "খরকি", nameEn: "Khorki", gender: "female", fatherId: "72", motherId: null },
    { id: "78", name: "সহুরা", nameEn: "Sohura", gender: "female", fatherId: "72", motherId: null },
    { id: "79", name: "মজিবর সর্দার", nameEn: "Mojibor Sardar", gender: "male", fatherId: "71", motherId: null },
    { id: "80", name: "নজরুল সর্দার", nameEn: "Nojrul Sardar", gender: "male", fatherId: "79", motherId: null },
    { id: "81", name: "জালাল সর্দার", nameEn: "Jalal Sardar", gender: "male", fatherId: "79", motherId: null },
    { id: "82", name: "কামাল সর্দার", nameEn: "Kamal Sardar", gender: "male", fatherId: "79", motherId: null },
    { id: "83", name: "আহাদ সর্দার", nameEn: "Ahad Sardar", gender: "male", fatherId: "79", motherId: null },
    { id: "84", name: "মনোয়ারা", nameEn: "Monowara", gender: "female", fatherId: "79", motherId: null },
    { id: "85", name: "তসলিমা", nameEn: "Toslima", gender: "female", fatherId: "79", motherId: null },
    { id: "86", name: "স্বাধীনা", nameEn: "Swadhina", gender: "female", fatherId: "79", motherId: null },
    { id: "87", name: "মকলেস সর্দার", nameEn: "Mokles Sardar", gender: "male", fatherId: "71", motherId: null },
    { id: "88", name: "আকমান সর্দার", nameEn: "Akman Sardar", gender: "male", fatherId: "87", motherId: null },
    { id: "89", name: "ইংরাজ সর্দার", nameEn: "Ingraj Sardar", gender: "male", fatherId: "87", motherId: null },
    { id: "90", name: "ইয়াকুব সর্দার", nameEn: "Yakub Sardar", gender: "male", fatherId: "87", motherId: null },
    { id: "91", name: "আনারুল সর্দার", nameEn: "Anarul Sardar", gender: "male", fatherId: "87", motherId: null },
    { id: "92", name: "রেসে", nameEn: "Rese", gender: "female", fatherId: "87", motherId: null },
    { id: "93", name: "রুশি", nameEn: "Rushi", gender: "female", fatherId: "87", motherId: null },
    { id: "94", name: "মৃত ফরিদা", nameEn: "Late Forida", gender: "female", fatherId: "87", motherId: null, isDeceased: true },
    { id: "95", name: "ফিরো", nameEn: "Firo", gender: "female", fatherId: "87", motherId: null },
    { id: "96", name: "সারু সর্দার", nameEn: "Saru Sardar", gender: "male", fatherId: "71", motherId: null },
    { id: "97", name: "ইয়াদুল সর্দার", nameEn: "Yadul Sardar", gender: "male", fatherId: "96", motherId: null },
    { id: "98", name: "ইউনুস সর্দার", nameEn: "Yunus Sardar", gender: "male", fatherId: "96", motherId: null },
    { id: "99", name: "মৃত বেনেয়ামিন", nameEn: "Late Beneyamin", gender: "male", fatherId: "96", motherId: null, isDeceased: true },
    { id: "100", name: "রঞ্জনা", nameEn: "Ranjana", gender: "female", fatherId: "96", motherId: null },
    { id: "101", name: "মেরিনা", nameEn: "Merina", gender: "female", fatherId: "96", motherId: null },
    { id: "102", name: "রহিমা", nameEn: "Rohima", gender: "female", fatherId: "71", motherId: null },
    { id: "103", name: "জায়েদা", nameEn: "Jayeda", gender: "female", fatherId: "71", motherId: null },
    { id: "104", name: "জয়গন নেসা", nameEn: "Joygon Nesa", gender: "female", fatherId: "71", motherId: null },
    { id: "105", name: "কসের সর্দার", nameEn: "Koser Sardar", gender: "male", fatherId: "70", motherId: null },
    { id: "106", name: "খলিল সর্দার", nameEn: "Kholil Sardar", gender: "male", fatherId: "105", motherId: null },
    { id: "107", name: "রেফেজ সর্দার", nameEn: "Refej Sardar", gender: "male", fatherId: "106", motherId: null },
    { id: "108", name: "কুবির সর্দার", nameEn: "Kubir Sardar", gender: "male", fatherId: "106", motherId: null },
    { id: "109", name: "জুমির সর্দার", nameEn: "Jumir Sardar", gender: "male", fatherId: "106", motherId: null },
    { id: "110", name: "শাইজুদ্দি সর্দার", nameEn: "Shaijuddi Sardar", gender: "male", fatherId: "106", motherId: null },
    { id: "111", name: "মৃত রাজিয়া", nameEn: "Late Rajia", gender: "female", fatherId: "106", motherId: null, isDeceased: true },
    { id: "112", name: "নুরল সর্দার", nameEn: "Nurol Sardar", gender: "male", fatherId: "105", motherId: null },
    { id: "113", name: "ওয়ারিস সর্দার", nameEn: "Waris Sardar", gender: "male", fatherId: "112", motherId: null },
    { id: "114", name: "ইদ্রিস সর্দার", nameEn: "Idris Sardar", gender: "male", fatherId: "112", motherId: null },
    { id: "115", name: "আপিল সর্দার", nameEn: "Apil Sardar", gender: "male", fatherId: "112", motherId: null },
    { id: "116", name: "নিহারুল সর্দার", nameEn: "Niharul Sardar", gender: "male", fatherId: "112", motherId: null },
    { id: "117", name: "আলিম সর্দার", nameEn: "Alim Sardar", gender: "male", fatherId: "105", motherId: null },
    { id: "118", name: "উজ্জ্বল সর্দার", nameEn: "Ujjwal Sardar", gender: "male", fatherId: "117", motherId: null },
    { id: "119", name: "রফিকুল সর্দার", nameEn: "Rofikul Sardar", gender: "male", fatherId: "117", motherId: null },
    { id: "120", name: "হিসাব সর্দার", nameEn: "Hisab Sardar", gender: "male", fatherId: "117", motherId: null },
    { id: "121", name: "তফেজ্জল সর্দার", nameEn: "Tofejjol Sardar", gender: "male", fatherId: "105", motherId: null },
    { id: "122", name: "মহন সর্দার", nameEn: "Mohon Sardar", gender: "male", fatherId: "121", motherId: null },
    { id: "123", name: "করণ সর্দার", nameEn: "Koron Sardar", gender: "male", fatherId: "121", motherId: null },
    { id: "124", name: "রফিয়া", nameEn: "Rofia", gender: "female", fatherId: "121", motherId: null },
    { id: "125", name: "তহুরা", nameEn: "Tohura", gender: "female", fatherId: "121", motherId: null },
    { id: "126", name: "তাহেরা", nameEn: "Tahera", gender: "female", fatherId: "121", motherId: null },
    { id: "127", name: "সুলতানা", nameEn: "Sultana", gender: "female", fatherId: "121", motherId: null },
    { id: "128", name: "রমেলা খাতুন", nameEn: "Romela Khatun", gender: "female", fatherId: "105", motherId: null },
    { id: "129", name: "ইমান আলী সর্দার", nameEn: "Iman Ali Sardar", gender: "male", fatherId: "70", motherId: null },
    { id: "130", name: "সলেমান সর্দার", nameEn: "Soleman Sardar", gender: "male", fatherId: "129", motherId: null },
    { id: "131", name: "পেন্টু সর্দার", nameEn: "Pentu Sardar", gender: "male", fatherId: "130", motherId: null },
    { id: "132", name: "সেন্টু সর্দার", nameEn: "Sentu Sardar", gender: "male", fatherId: "130", motherId: null },
    { id: "133", name: "আসাদ সর্দার", nameEn: "Asad Sardar", gender: "male", fatherId: "130", motherId: null },
    { id: "134", name: "জুয়েল সর্দার", nameEn: "Juwel Sardar", gender: "male", fatherId: "130", motherId: null },
    { id: "135", name: "সোহেল সর্দার", nameEn: "Sohel Sardar", gender: "male", fatherId: "130", motherId: null },
    { id: "136", name: "রিংকু সর্দার", nameEn: "Rinku Sardar", gender: "male", fatherId: "130", motherId: null },
    { id: "137", name: "বেলি", nameEn: "Beli", gender: "female", fatherId: "130", motherId: null },
    { id: "138", name: "সেলিনা", nameEn: "Selina", gender: "female", fatherId: "130", motherId: null },
    { id: "139", name: "লাভলি", nameEn: "Lavlai", gender: "female", fatherId: "130", motherId: null },
    { id: "140", name: "রিক্তা", nameEn: "Rikta", gender: "female", fatherId: "130", motherId: null },
    { id: "141", name: "পিস্তা", nameEn: "Pista", gender: "female", fatherId: "130", motherId: null },
    { id: "142", name: "আব্দুস সামাদ সর্দার", nameEn: "Abdus Samad Sardar", gender: "male", fatherId: "129", motherId: null },
    { id: "143", name: "রোকনুজ্জামান রানা", nameEn: "Roknuzzaman Rana", gender: "male", fatherId: "142", motherId: null },
    { id: "144", name: "হাসানুজ্জামান রাজা", nameEn: "Hasanuzzaman Raja", gender: "male", fatherId: "142", motherId: null },
    { id: "145", name: "মৃত তানিম হাসান রাঙ্গা", nameEn: "Late Tanim Hasan Ranga", gender: "male", fatherId: "142", motherId: null, isDeceased: true },
    { id: "146", name: "সুমন সর্দার", nameEn: "Sumon Sardar", gender: "male", fatherId: "142", motherId: null },
    { id: "147", name: "রীনা", nameEn: "Rina", gender: "female", fatherId: "142", motherId: null },
    { id: "148", name: "বিনা", nameEn: "Bina", gender: "female", fatherId: "142", motherId: null },
    { id: "149", name: "টিনা", nameEn: "Tina", gender: "female", fatherId: "142", motherId: null },
    { id: "150", name: "জামাল সর্দার", nameEn: "Jamal Sardar", gender: "male", fatherId: "129", motherId: null },
    { id: "151", name: "মামুন সর্দার", nameEn: "Mamun Sardar", gender: "male", fatherId: "150", motherId: null },
    { id: "152", name: "মাসুম সর্দার", nameEn: "Masum Sardar", gender: "male", fatherId: "150", motherId: null },
    { id: "153", name: "মৌসুম সর্দার", nameEn: "Mousum Sardar", gender: "male", fatherId: "150", motherId: null },
    { id: "154", name: "কুসুম সর্দার", nameEn: "Kusum Sardar", gender: "male", fatherId: "150", motherId: null },
    { id: "155", name: "পান্না সর্দার", nameEn: "Panna Sardar", gender: "male", fatherId: "150", motherId: null },
    { id: "156", name: "নান্টু সর্দার", nameEn: "Nantu Sardar", gender: "male", fatherId: "150", motherId: null },
    { id: "157", name: "মিঠন সর্দার", nameEn: "Mithon Sardar", gender: "male", fatherId: "150", motherId: null },
    { id: "158", name: "টুটন সর্দার", nameEn: "Tuton Sardar", gender: "male", fatherId: "150", motherId: null },
    { id: "159", name: "ছোটন সর্দার", nameEn: "Choton Sardar", gender: "male", fatherId: "150", motherId: null },
    { id: "160", name: "জাহানারা", nameEn: "Jahanara", gender: "female", fatherId: "150", motherId: null },
    { id: "161", name: "সাথি", nameEn: "Sathi", gender: "female", fatherId: "150", motherId: null },
    { id: "162", name: "রুস্তম সর্দার", nameEn: "Rustom Sardar", gender: "male", fatherId: "129", motherId: null },
    { id: "163", name: "রেজাউল সর্দার", nameEn: "Rejaul Sardar", gender: "male", fatherId: "162", motherId: null },
    { id: "164", name: "মানিক সর্দার", nameEn: "Manik Sardar", gender: "male", fatherId: "162", motherId: null },
    { id: "165", name: "আরিফ সর্দার", nameEn: "Arif Sardar", gender: "male", fatherId: "162", motherId: null },
    { id: "166", name: "রিপন সর্দার", nameEn: "Ripon Sardar", gender: "male", fatherId: "162", motherId: null },
    { id: "167", name: "রোজিনা", nameEn: "Rojina", gender: "female", fatherId: "162", motherId: null },
    { id: "168", name: "রুমা", nameEn: "Ruma", gender: "female", fatherId: "162", motherId: null },
    { id: "169", name: "আকবর সর্দার", nameEn: "Akbor Sardar", gender: "male", fatherId: "129", motherId: null },
    { id: "170", name: "শুভ্র", nameEn: "Shuvro", gender: "male", fatherId: "169", motherId: null },
    { id: "171", name: "অন্ত", nameEn: "Anto", gender: "male", fatherId: "169", motherId: null },
    { id: "172", name: "আফিফা", nameEn: "Afifa", gender: "female", fatherId: "169", motherId: null },
    { id: "173", name: "মাহাতাব উদ্দিন সর্দার", nameEn: "Mahatab Uddin Sardar", gender: "male", fatherId: "129", motherId: null },
    { id: "174", name: "আল-মেহেদী", nameEn: "Al-Mehedi", gender: "male", fatherId: "173", motherId: null },
    { id: "175", name: "আবু সাঈদ", nameEn: "Abu Sayed", gender: "male", fatherId: "173", motherId: null },
    { id: "176", name: "মরিয়ম খাতুন", nameEn: "Moriyom Khatun", gender: "female", fatherId: "173", motherId: null },
    { id: "177", name: "মৃত পপি", nameEn: "Late Popi", gender: "female", fatherId: "173", motherId: null, isDeceased: true },
    { id: "178", name: "মেরিনা খাতুন", nameEn: "Merina Khatun", gender: "female", fatherId: "173", motherId: null },
    { id: "179", name: "কোকন সর্দার", nameEn: "Kokon Sardar", gender: "male", fatherId: "129", motherId: null },
    { id: "180", name: "মঞ্জুরা", nameEn: "Monjura", gender: "female", fatherId: "179", motherId: null },
    { id: "181", name: "নেহার", nameEn: "Nehar", gender: "female", fatherId: "129", motherId: null },
    { id: "182", name: "সকিনা", nameEn: "Sokina", gender: "female", fatherId: "129", motherId: null },
    { id: "183", name: "শহিদা", nameEn: "Shohida", gender: "female", fatherId: "129", motherId: null },
    { id: "184", name: "শাহানূর", nameEn: "Shahanur", gender: "female", fatherId: "129", motherId: null },
    { id: "185", name: "কাজল", nameEn: "Kajol", gender: "female", fatherId: "129", motherId: null },
    { id: "186", name: "সালেজান", nameEn: "Salejan", gender: "female", fatherId: "70", motherId: null }
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
        .scaleExtent([0.3, 2.5])
        .on("zoom", (event) => g.attr("transform", event.transform));

    svg.call(zoomHandler);
}

// ==========================================
// হায়ারার্কি তৈরি (১ম পেজে ৩ প্রজন্ম, বাকিগুলোতে ২ প্রজন্ম)
// ==========================================
function buildHierarchy(rootId) {
    const rootItem = familyData.find(item => item.id === rootId);
    if (!rootItem) return null;

    let rootNode = { ...rootItem, children: [] };

    // ১ম পেজে (পদ্মাশী সর্দার - Root ID "1") ৩টি প্রজন্ম
    if (rootId === "1") {
        const gen2 = familyData.filter(item => item.fatherId === rootId); // আকালি ও কেসু
        gen2.forEach(child2 => {
            let node2 = { ...child2, children: [] };
            const gen3 = familyData.filter(item => item.fatherId === child2.id); // ইসু সর্দার ও অন্যান্য
            gen3.forEach(child3 => {
                node2.children.push({ ...child3, children: [] });
            });
            rootNode.children.push(node2);
        });
    } else {
        // অন্যান্য পেজে ২ প্রজন্ম (পিতা ও সন্তানাদি)
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

    const root = buildHierarchy(currentRootId);
    if (!root) return;

    const treeLayout = d3.tree().nodeSize([160, 130]);
    treeLayout(root);

    g.selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "#0284c7")
        .attr("stroke-width", 2)
        .attr("d", d3.linkVertical().x(d => d.x).y(d => d.y));

    const node = g.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.x - 65},${d.y - 35})`);

    node.append("rect")
        .attr("width", 130)
        .attr("height", d => hasChildren(d.data.id) ? 72 : 50)
        .attr("rx", 8)
        .attr("fill", "#ffffff")
        .attr("stroke", d => d.data.gender === "male" ? "#2563eb" : "#ec4899")
        .attr("stroke-width", 2)
        .attr("class", "cursor-pointer")
        .on("click", (event, d) => openProfileModal(d.data.id));

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

    node.append("text")
        .attr("x", 65)
        .attr("y", 37)
        .attr("text-anchor", "middle")
        .attr("font-size", "9px")
        .attr("fill", "#64748b")
        .text(d => d.data.nameEn || (d.data.isDeceased ? "(মৃত)" : ""));

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

function resetZoom() {
    const width = window.innerWidth;
    svg.transition().duration(400).call(
        zoomHandler.transform,
        d3.zoomIdentity.translate(width / 2, 80).scale(1)
    );
}

// ==========================================
// প্রোফাইল, এডমিন ও ডাটা আপডেট সিস্টেম
// ==========================================

function openProfileModal(id) {
    const m = familyData.find(item => item.id === id);
    if (!m) return;

    document.getElementById("modalName").innerText = m.name;
    document.getElementById("modalPhoto").src = m.photo || (m.gender === "female" ? DEFAULT_FEMALE_AVATAR : DEFAULT_MALE_AVATAR);
    document.getElementById("modalStatus").innerText = m.isDeceased ? "মৃত" : "জীবিত";

    const father = familyData.find(f => f.id === m.fatherId);
    document.getElementById("modalFather").innerText = father ? father.name : "-";

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

    document.getElementById("profileModal").classList.remove("hidden");
}

// এডমিন লগইন লজিক
function loginAdmin() {
    const inputPass = prompt("এডমিন পাসওয়ার্ড লিখুন:");
    if (inputPass === ADMIN_PASSWORD) {
        isAdminLoggedIn = true;
        alert("লগইন সফল হয়েছে! এখন আপনি নতুন সদস্য যোগ ও তথ্য পরিবর্তন করতে পারবেন।");
        document.getElementById("adminDrawer").classList.remove("hidden");
        populateFormOptions();
    } else if (inputPass !== null) {
        alert("ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।");
    }
}

// এডিট ফর্ম ওপেন করা
function openEditForm(member) {
    document.getElementById("adminDrawer").classList.remove("hidden");
    document.getElementById("formMemberId").value = member.id;
    document.getElementById("formName").value = member.name;
    document.getElementById("formNameEn").value = member.nameEn || "";
    document.getElementById("formGender").value = member.gender;
    document.getElementById("formFather").value = member.fatherId || "";
    document.getElementById("formDeceased").checked = member.isDeceased || false;
    document.getElementById("formPhoto").value = member.photo || "";
}

// নতুন সদস্য যোগ / আপডেট সেভ করা
function saveMemberForm(event) {
    if (event) event.preventDefault();

    const id = document.getElementById("formMemberId").value;
    const name = document.getElementById("formName").value.trim();
    const nameEn = document.getElementById("formNameEn").value.trim();
    const gender = document.getElementById("formGender").value;
    const fatherId = document.getElementById("formFather").value || null;
    const isDeceased = document.getElementById("formDeceased").checked;
    const photo = document.getElementById("formPhoto").value.trim();

    if (!name) {
        alert("সদস্যের নাম দেওয়া আবশ্যক!");
        return;
    }

    if (id) {
        // আপডেট (Edit Existing Member)
        const index = familyData.findIndex(m => m.id === id);
        if (index !== -1) {
            familyData[index] = { ...familyData[index], name, nameEn, gender, fatherId, isDeceased, photo };
        }
    } else {
        // নতুন সদস্য যোগ (Add New Member)
        const newId = (familyData.length + 1).toString();
        familyData.push({ id: newId, name, nameEn, gender, fatherId, isDeceased, photo });
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
    if (fatherSelect) {
        fatherSelect.innerHTML = `<option value="">পিতা নির্বাচন করুন</option>`;
        familyData.forEach(m => {
            if (m.gender === "male") fatherSelect.innerHTML += `<option value="${m.id}">${m.name} (${m.id})</option>`;
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

    // এডমিন বাটন ইভেন্ট
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
// সার্চ ইঞ্জিন ও হিস্ট্রি
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

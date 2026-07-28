let familyData = [];
let currentRootId = "1"; 
let rootHistory = []; 
let svg, g, zoomHandler;
let isAdminLoggedIn = false;
const ADMIN_PASSWORD = "ampmhd@@@03042000"; 

// ১৮৬ জনের সম্পূর্ণ ডেটা সেট (ইংরেজি নাম এবং পূর্ণাঙ্গ তথ্য সহ)
const fullSardarData = [
  // ================= মূল মূলধারা =================
  { id: "1", name: "পদ্মাশী সর্দার", nameEn: "Padmashi Sardar", gender: "male", fatherId: null },
  { id: "2", name: "আকালি সর্দার", nameEn: "Akali Sardar", gender: "male", fatherId: "1" },

  // আকালি সর্দারের ২ ছেলে
  { id: "3", name: "ইসু সর্দার", nameEn: "Isu Sardar", gender: "male", fatherId: "2" },
  { id: "4", name: "কেসু সর্দার", nameEn: "Kesu Sardar", gender: "male", fatherId: "2" },

  // ================= ইসু সর্দারের শাখা =================
  { id: "5", name: "দোশর সর্দার", nameEn: "Doshor Sardar", gender: "male", fatherId: "3" },
  { id: "6", name: "পেয়ার সর্দার", nameEn: "Peyar Sardar", gender: "male", fatherId: "3" },
  { id: "7", name: "ফকির সর্দার", nameEn: "Fokir Sardar", gender: "male", fatherId: "3" },
  { id: "8", name: "আবেদা খাতুন", nameEn: "Abeda Khatun", gender: "female", fatherId: "3" },

  // ---------- দোশর সর্দারের সন্তানরা ----------
  { id: "9", name: "বানেজ সর্দার", nameEn: "Banej Sardar", gender: "male", fatherId: "5" },
  { id: "10", name: "মকবুল সর্দার", nameEn: "Mokbul Sardar", gender: "male", fatherId: "5" },
  { id: "11", name: "জাইমন", nameEn: "Jaimon", gender: "female", fatherId: "5" },
  { id: "12", name: "হারিজা", nameEn: "Harija", gender: "female", fatherId: "5" },
  { id: "13", name: "হাইতন", nameEn: "Haitan", gender: "female", fatherId: "5" },

  // বানেজ সর্দারের সন্তানরা
  { id: "14", name: "মহাসিন সর্দার", nameEn: "Mohasin Sardar", gender: "male", fatherId: "9" },
  { id: "15", name: "আবুল সর্দার", nameEn: "Abul Sardar", gender: "male", fatherId: "9" },
  { id: "16", name: "আমজাদ সর্দার", nameEn: "Amjad Sardar", gender: "male", fatherId: "9" },
  { id: "17", name: "রেজিয়া", nameEn: "Rejiya", gender: "female", fatherId: "9" },
  { id: "18", name: "হাফিয়া", nameEn: "Hafiya", gender: "female", fatherId: "9" },
  { id: "19", name: "বুলু", nameEn: "Bulu", gender: "female", fatherId: "9" },
  { id: "20", name: "রাশু", nameEn: "Rashu", gender: "female", fatherId: "9" },
  { id: "21", name: "ফজিলা", nameEn: "Fojila", gender: "female", fatherId: "9" },

  // মকবুল সর্দারের সন্তানরা
  { id: "22", name: "মৃত আলতাফ সর্দার", nameEn: "Late Altaf Sardar", gender: "male", fatherId: "10" },
  { id: "23", name: "রবিউল সর্দার", nameEn: "Robiul Sardar", gender: "male", fatherId: "10" },
  { id: "24", name: "রশিদ সর্দার", nameEn: "Roshid Sardar", gender: "male", fatherId: "10" },
  { id: "25", name: "মনোয়ার", nameEn: "Monowar", gender: "female", fatherId: "10" },
  { id: "26", name: "আম্বিয়া", nameEn: "Ambiya", gender: "female", fatherId: "10" },
  { id: "27", name: "হাশেরা", nameEn: "Hashera", gender: "female", fatherId: "10" },
  { id: "28", name: "রেকেনা", nameEn: "Rekena", gender: "female", fatherId: "10" },
  { id: "29", name: "রুশিয়া", nameEn: "Rushiya", gender: "female", fatherId: "10" },

  // ---------- পেয়ার সর্দারের সন্তানরা ----------
  { id: "30", name: "জানু সর্দার", nameEn: "Janu Sardar", gender: "male", fatherId: "6" },
  { id: "31", name: "হারান সর্দার", nameEn: "Haran Sardar", gender: "male", fatherId: "6" },
  { id: "32", name: "জাহের সর্দার", nameEn: "Jaher Sardar", gender: "male", fatherId: "6" },
  { id: "33", name: "ভাষা সর্দার", nameEn: "Bhasha Sardar", gender: "male", fatherId: "6" },

  // জানু সর্দারের সন্তানরা
  { id: "34", name: "জামশেদ সর্দার", nameEn: "Jamshed Sardar", gender: "male", fatherId: "30" },
  { id: "35", name: "ফুলু জান", nameEn: "Fulu Jan", gender: "female", fatherId: "30" },
  { id: "36", name: "মাজেদা খাতুন", nameEn: "Majeda Khatun", gender: "female", fatherId: "30" },
  { id: "37", name: "লুলু জান", nameEn: "Lulu Jan", gender: "female", fatherId: "30" },
  { id: "38", name: "খদিজান", nameEn: "Khodijan", gender: "female", fatherId: "30" },

  // হারান সর্দারের সন্তানরা
  { id: "39", name: "ঝন্টু সর্দার", nameEn: "Jhontu Sardar", gender: "male", fatherId: "31" },
  { id: "40", name: "সিদ্দিক সর্দার", nameEn: "Siddique Sardar", gender: "male", fatherId: "31" },
  { id: "41", name: "জাহাঙ্গীর সর্দার", nameEn: "Jahangir Sardar", gender: "male", fatherId: "31" },
  { id: "42", name: "কমেজান", nameEn: "Komejan", gender: "female", fatherId: "31" },
  { id: "43", name: "মিষ্টুজান", nameEn: "Mishtujan", gender: "female", fatherId: "31" },
  { id: "44", name: "বালীজান", nameEn: "Balijan", gender: "female", fatherId: "31" },

  // জাহের সর্দারের সন্তানরা
  { id: "45", name: "সাধু সর্দার", nameEn: "Sadhu Sardar", gender: "male", fatherId: "32" },
  { id: "46", name: "মধু সর্দার", nameEn: "Modhu Sardar", gender: "male", fatherId: "32" },
  { id: "47", name: "জাদু সর্দার", nameEn: "Jadu Sardar", gender: "male", fatherId: "32" },
  { id: "48", name: "মদিনা", nameEn: "Modina", gender: "female", fatherId: "32" },
  { id: "49", name: "মরজিনা", nameEn: "Morjina", gender: "female", fatherId: "32" },
  { id: "50", name: "করিমন নেছা", nameEn: "Korimon Nesa", gender: "female", fatherId: "32" },
  { id: "51", name: "তারাজাম", nameEn: "Tarajam", gender: "female", fatherId: "32" },

  // ভাষা সর্দারের সন্তানরা
  { id: "52", name: "মোজা সর্দার", nameEn: "Moja Sardar", gender: "male", fatherId: "33" },
  { id: "53", name: "মৃত মইনুদ্দিন সর্দার", nameEn: "Late Moinuddin Sardar", gender: "male", fatherId: "33" },
  { id: "54", name: "জিয়ারুল সর্দার", nameEn: "Jiyarul Sardar", gender: "male", fatherId: "33" },
  { id: "55", name: "সামিয়ন", nameEn: "Samiyon", gender: "female", fatherId: "33" },

  // ---------- ফকির সর্দারের সন্তানরা ----------
  { id: "56", name: "আজিম সর্দার", nameEn: "Ajim Sardar", gender: "male", fatherId: "7" },
  { id: "57", name: "লায়েব সর্দার", nameEn: "Layeb Sardar", gender: "male", fatherId: "7" },

  // আজিম সর্দারের সন্তানরা
  { id: "58", name: "জালাল সর্দার", nameEn: "Jalal Sardar", gender: "male", fatherId: "56" },
  { id: "59", name: "জিয়া সর্দার", nameEn: "Jiya Sardar", gender: "male", fatherId: "56" },
  { id: "60", name: "রতন সর্দার", nameEn: "Roton Sardar", gender: "male", fatherId: "56" },
  { id: "61", name: "ইয়াতন", nameEn: "Yatan", gender: "female", fatherId: "56" },
  { id: "62", name: "ফুকন", nameEn: "Fukon", gender: "female", fatherId: "56" },
  { id: "63", name: "মৃত টুকলিমা", nameEn: "Late Tuklima", gender: "female", fatherId: "56" },

  // লায়েব সর্দারের সন্তানরা
  { id: "64", name: "মৃত দুলাল সর্দার", nameEn: "Late Dulal Sardar", gender: "male", fatherId: "57" },
  { id: "65", name: "আলাল সর্দার", nameEn: "Alal Sardar", gender: "male", fatherId: "57" },
  { id: "66", name: "হেলাল সর্দার", nameEn: "Helal Sardar", gender: "male", fatherId: "57" },
  { id: "67", name: "ফুনকা", nameEn: "Funka", gender: "female", fatherId: "57" },
  { id: "68", name: "ফিরোজা", nameEn: "Firoza", gender: "female", fatherId: "57" },

  // ================= কেসু সর্দারের শাখা =================
  { id: "69", name: "আশারত সর্দার", nameEn: "Asharat Sardar", gender: "male", fatherId: "4" },
  { id: "70", name: "বসারত সর্দার", nameEn: "Basharat Sardar", gender: "male", fatherId: "4" },
  { id: "71", name: "ভুগল সর্দার", nameEn: "Bhhugal Sardar", gender: "male", fatherId: "4" },
  { id: "72", name: "কসের সর্দার", nameEn: "Koser Sardar", gender: "male", fatherId: "4" },
  { id: "73", name: "ইমান আলী সর্দার", nameEn: "Iman Ali Sardar", gender: "male", fatherId: "4" },
  { id: "74", name: "সালেজান", nameEn: "Salejan", gender: "female", fatherId: "4" },

  // ---------- আশারত সর্দারের সন্তানরা ----------
  { id: "75", name: "কুকন সর্দার", nameEn: "Kukon Sardar", gender: "male", fatherId: "69" },
  { id: "76", name: "এলাহী সর্দার", nameEn: "Elahi Sardar", gender: "male", fatherId: "69" },

  // ---------- বসারত সর্দারের সন্তানরা ----------
  { id: "77", name: "শুকোট সর্দার", nameEn: "Shukot Sardar", gender: "male", fatherId: "70" },
  { id: "78", name: "জলিল সর্দার", nameEn: "Jalil Sardar", gender: "male", fatherId: "70" },
  { id: "79", name: "মহীর উদ্দিন সর্দার", nameEn: "Mohir Uddin Sardar", gender: "male", fatherId: "70" },
  { id: "80", name: "পরিজান", nameEn: "Porijan", gender: "female", fatherId: "70" },
  { id: "81", name: "জমেলা", nameEn: "Jomela", gender: "female", fatherId: "70" },

  // ---------- ভুগল সর্দারের সন্তানরা ----------
  { id: "82", name: "সুবল সর্দার", nameEn: "Subol Sardar", gender: "male", fatherId: "71" },
  { id: "83", name: "মজিবর সর্দার", nameEn: "Mojibor Sardar", gender: "male", fatherId: "71" },
  { id: "84", name: "মকলেস সর্দার", nameEn: "Mokles Sardar", gender: "male", fatherId: "71" },
  { id: "85", name: "সারু সর্দার", nameEn: "Saru Sardar", gender: "male", fatherId: "71" },
  { id: "86", name: "রহিমা", nameEn: "Rohima", gender: "female", fatherId: "71" },
  { id: "87", name: "জায়েদা", nameEn: "Jayeda", gender: "female", fatherId: "71" },
  { id: "88", name: "জয়গন নেসা", nameEn: "Joygon Nesa", gender: "female", fatherId: "71" },

  // সুবল সর্দারের সন্তানরা
  { id: "89", name: "ময়লাল সর্দার", nameEn: "Moylal Sardar", gender: "male", fatherId: "82" },
  { id: "90", name: "হবিবার সর্দার", nameEn: "Hobibar Sardar", gender: "male", fatherId: "82" },
  { id: "91", name: "মতালি সর্দার", nameEn: "Motali Sardar", gender: "male", fatherId: "82" },
  { id: "92", name: "লতা জান", nameEn: "Lota Jan", gender: "female", fatherId: "82" },
  { id: "93", name: "খরকি", nameEn: "Khorki", gender: "female", fatherId: "82" },
  { id: "94", name: "সহুরা", nameEn: "Sohura", gender: "female", fatherId: "82" },

  // মজিবর সর্দারের সন্তানরা
  { id: "95", name: "নজরুল সর্দার", nameEn: "Nojrul Sardar", gender: "male", fatherId: "83" },
  { id: "96", name: "জালাল সর্দার", nameEn: "Jalal Sardar", gender: "male", fatherId: "83" },
  { id: "97", name: "কামাল সর্দার", nameEn: "Kamal Sardar", gender: "male", fatherId: "83" },
  { id: "98", name: "আহাদ সর্দার", nameEn: "Ahad Sardar", gender: "male", fatherId: "83" },
  { id: "99", name: "মনোয়ারা", nameEn: "Monowara", gender: "female", fatherId: "83" },
  { id: "100", name: "তসলিমা", nameEn: "Toslima", gender: "female", fatherId: "83" },
  { id: "101", name: "স্বাধীনা", nameEn: "Swodhina", gender: "female", fatherId: "83" },

  // মকলেস সর্দারের সন্তানরা
  { id: "102", name: "আকমান সর্দার", nameEn: "Akman Sardar", gender: "male", fatherId: "84" },
  { id: "103", name: "ইংরাজ সর্দার", nameEn: "Ingraj Sardar", gender: "male", fatherId: "84" },
  { id: "104", name: "ইয়াকুব সর্দার", nameEn: "Yakub Sardar", gender: "male", fatherId: "84" },
  { id: "105", name: "আনারুল সর্দার", nameEn: "Anarul Sardar", gender: "male", fatherId: "84" },
  { id: "106", name: "রেসে", nameEn: "Rese", gender: "female", fatherId: "84" },
  { id: "107", name: "রুশি", nameEn: "Rushi", gender: "female", fatherId: "84" },
  { id: "108", name: "মৃত ফরিদা", nameEn: "Late Forida", gender: "female", fatherId: "84" },
  { id: "109", name: "ফিরো", nameEn: "Firo", gender: "female", fatherId: "84" },

  // সারু সর্দারের সন্তানরা
  { id: "110", name: "ইয়াদুল সর্দার", nameEn: "Yadul Sardar", gender: "male", fatherId: "85" },
  { id: "111", name: "ইউনুস সর্দার", nameEn: "Yunus Sardar", gender: "male", fatherId: "85" },
  { id: "112", name: "মৃত বেনেয়ামিন", nameEn: "Late Beneyamin", gender: "male", fatherId: "85" },
  { id: "113", name: "রঞ্জনা", nameEn: "Ronjona", gender: "female", fatherId: "85" },
  { id: "114", name: "মেরিনা", nameEn: "Merina", gender: "female", fatherId: "85" },

  // ---------- কসের সর্দারের সন্তানরা ----------
  { id: "115", name: "খলিল সর্দার", nameEn: "Kholil Sardar", gender: "male", fatherId: "72" },
  { id: "116", name: "নুরল সর্দার", nameEn: "Nurol Sardar", gender: "male", fatherId: "72" },
  { id: "117", name: "আলিম সর্দার", nameEn: "Alim Sardar", gender: "male", fatherId: "72" },
  { id: "118", name: "তফেজ্জল সর্দার", nameEn: "Tofejjol Sardar", gender: "male", fatherId: "72" },
  { id: "119", name: "রমেলা খাতুন", nameEn: "Romela Khatun", gender: "female", fatherId: "72" },

  // খলিল সর্দারের সন্তানরা
  { id: "120", name: "রেফেজ সর্দার", nameEn: "Refej Sardar", gender: "male", fatherId: "115" },
  { id: "121", name: "কুবির সর্দার", nameEn: "Kubir Sardar", gender: "male", fatherId: "115" },
  { id: "122", name: "জুমির সর্দার", nameEn: "Jumir Sardar", gender: "male", fatherId: "115" },
  { id: "123", name: "শাইজুদ্দি সর্দার", nameEn: "Shaijuddi Sardar", gender: "male", fatherId: "115" },
  { id: "124", name: "মৃত রাজিয়া", nameEn: "Late Rajiya", gender: "female", fatherId: "115" },

  // নুরল সর্দারের সন্তানরা
  { id: "125", name: "ওয়ারিস সর্দার", nameEn: "Waris Sardar", gender: "male", fatherId: "116" },
  { id: "126", name: "ইদ্রিস সর্দার", nameEn: "Idris Sardar", gender: "male", fatherId: "116" },
  { id: "127", name: "আপিল সর্দার", nameEn: "Apil Sardar", gender: "male", fatherId: "116" },
  { id: "128", name: "নিহারুল সর্দার", nameEn: "Niharul Sardar", gender: "male", fatherId: "116" },

  // আলিম সর্দারের সন্তানরা
  { id: "129", name: "উজ্জ্বল সর্দার", nameEn: "Ujjwal Sardar", gender: "male", fatherId: "117" },
  { id: "130", name: "রফিকুল সর্দার", nameEn: "Rofikul Sardar", gender: "male", fatherId: "117" },
  { id: "131", name: "হিসাব সর্দার", nameEn: "Hisab Sardar", gender: "male", fatherId: "117" },

  // তফেজ্জল সর্দারের সন্তানরা
  { id: "132", name: "মহন সর্দার", nameEn: "Mohon Sardar", gender: "male", fatherId: "118" },
  { id: "133", name: "করণ সর্দার", nameEn: "Koron Sardar", gender: "male", fatherId: "118" },
  { id: "134", name: "রফিয়া", nameEn: "Rofiya", gender: "female", fatherId: "118" },
  { id: "135", name: "তহুরা", nameEn: "Tohura", gender: "female", fatherId: "118" },
  { id: "136", name: "তাহেরা", nameEn: "Tahera", gender: "female", fatherId: "118" },
  { id: "137", name: "সুলতানা", nameEn: "Sultana", gender: "female", fatherId: "118" },

  // ---------- ইমান আলী সর্দারের সন্তানরা ----------
  { id: "138", name: "সলেমান সর্দার", nameEn: "Soleman Sardar", gender: "male", fatherId: "73" },
  { id: "139", name: "আব্দুস সামাদ সর্দার", nameEn: "Abdus Samad Sardar", gender: "male", fatherId: "73" },
  { id: "140", name: "জামাল সর্দার", nameEn: "Jamal Sardar", gender: "male", fatherId: "73" },
  { id: "141", name: "রুস্তম সর্দার", nameEn: "Rustom Sardar", gender: "male", fatherId: "73" },
  { id: "142", name: "আকবর সর্দার", nameEn: "Akbor Sardar", gender: "male", fatherId: "73" },
  { id: "143", name: "মাহাতাব উদ্দিন সর্দার", nameEn: "Mahatab Uddin Sardar", gender: "male", fatherId: "73" },
  { id: "144", name: "নেহার", nameEn: "Nehar", gender: "female", fatherId: "73" },
  { id: "145", name: "সকিনা", nameEn: "Sokina", gender: "female", fatherId: "73" },
  { id: "146", name: "শহিদা", nameEn: "Shohida", gender: "female", fatherId: "73" },
  { id: "147", name: "শাহানূর", nameEn: "Shahanur", gender: "female", fatherId: "73" },
  { id: "148", name: "কাজল", nameEn: "Kajol", gender: "female", fatherId: "73" },

  // ===== ইমান আলী সর্দারের নতুন যুক্তকৃত সঠিক নাতি-নাতনিরা =====

  // ১. সলেমান সর্দারের সন্তানরা
  { id: "149", name: "পেন্টু সর্দার", nameEn: "Pentu Sardar", gender: "male", fatherId: "138" },
  { id: "150", name: "সেন্টু সর্দার", nameEn: "Sentu Sardar", gender: "male", fatherId: "138" },
  { id: "151", name: "আসাদ সর্দার", nameEn: "Asad Sardar", gender: "male", fatherId: "138" },
  { id: "152", name: "জুয়েল সর্দার", nameEn: "Juwel Sardar", gender: "male", fatherId: "138" },
  { id: "153", name: "সোহেল সর্দার", nameEn: "Sohel Sardar", gender: "male", fatherId: "138" },
  { id: "154", name: "রিংকু সর্দার", nameEn: "Rinku Sardar", gender: "male", fatherId: "138" },
  { id: "155", name: "বেলি", nameEn: "Beli", gender: "female", fatherId: "138" },
  { id: "156", name: "সেলিনা", nameEn: "Selina", gender: "female", fatherId: "138" },
  { id: "157", name: "লাভলি", nameEn: "Lavelly", gender: "female", fatherId: "138" },
  { id: "158", name: "রিক্তা", nameEn: "Rikta", gender: "female", fatherId: "138" },
  { id: "159", name: "পিস্তা", nameEn: "Pista", gender: "female", fatherId: "138" },

  // ২. আব্দুস সামাদ সর্দারের সন্তানরা
  { id: "160", name: "রোকনুজ্জামান রানা", nameEn: "Roknuzzaman Rana", gender: "male", fatherId: "139" },
  { id: "161", name: "হাসানুজ্জামান রাজা", nameEn: "Hasanuzzaman Raja", gender: "male", fatherId: "139" },
  { id: "162", name: "মৃত তানিম হাসান রাঙ্গা", nameEn: "Late Tanim Hasan Ranga", gender: "male", fatherId: "139" },
  { id: "163", name: "সুমন সর্দার", nameEn: "Sumon Sardar", gender: "male", fatherId: "139" },
  { id: "164", name: "রীনা", nameEn: "Rina", gender: "female", fatherId: "139" },
  { id: "165", name: "বিনা", nameEn: "Bina", gender: "female", fatherId: "139" },
  { id: "166", name: "টিনা", nameEn: "Tina", gender: "female", fatherId: "139" },

  // ৩. জামাল সর্দারের সন্তানরা
  { id: "167", name: "মামুন সর্দার", nameEn: "Mamun Sardar", gender: "male", fatherId: "140" },
  { id: "168", name: "মাসুম সর্দার", nameEn: "Masum Sardar", gender: "male", fatherId: "140" },
  { id: "169", name: "মৌসুম সর্দার", nameEn: "Mousum Sardar", gender: "male", fatherId: "140" },
  { id: "170", name: "কুসুম সর্দার", nameEn: "Kusum Sardar", gender: "male", fatherId: "140" },
  { id: "171", name: "পান্না সর্দার", nameEn: "Panna Sardar", gender: "male", fatherId: "140" },
  { id: "172", name: "নান্টু সর্দার", nameEn: "Nantu Sardar", gender: "male", fatherId: "140" },
  { id: "173", name: "মিঠন সর্দার", nameEn: "Mithon Sardar", gender: "male", fatherId: "140" },
  { id: "174", name: "টুটন সর্দার", nameEn: "Tuton Sardar", gender: "male", fatherId: "140" },
  { id: "175", name: "ছোটন সর্দার", nameEn: "Choton Sardar", gender: "male", fatherId: "140" },
  { id: "176", name: "জাহানারা", nameEn: "Jahanara", gender: "female", fatherId: "140" },
  { id: "177", name: "সাথি", nameEn: "Sathi", gender: "female", fatherId: "140" },

  // ৪. রুস্তম সর্দারের সন্তানরা
  { id: "178", name: "রেজাউল সর্দার", nameEn: "Rejaul Sardar", gender: "male", fatherId: "141" },
  { id: "179", name: "মানিক সর্দার", nameEn: "Manik Sardar", gender: "male", fatherId: "141" },
  { id: "180", name: "আরিফ সর্দার", nameEn: "Arif Sardar", gender: "male", fatherId: "141" },
  { id: "181", name: "রিপন সর্দার", nameEn: "Ripon Sardar", gender: "male", fatherId: "141" },
  { id: "182", name: "রোজিনা", nameEn: "Rojina", gender: "female", fatherId: "141" },
  { id: "183", name: "রুমা", nameEn: "Ruma", gender: "female", fatherId: "141" },

  // ৫. আকবর সর্দারের সন্তানরা
  { id: "184", name: "শুভ্র", nameEn: "Shubhro", gender: "male", fatherId: "142" },
  { id: "185", name: "অন্ত", nameEn: "Anto", gender: "male", fatherId: "142" },
  { id: "186", name: "আফিফা", nameEn: "Afifa", gender: "female", fatherId: "142" },

  // ৬. মাহাতাব উদ্দিন সর্দারের সন্তানরা
  { id: "187", name: "আল-মেহেদী", nameEn: "Al-Mehedi", gender: "male", fatherId: "143" },
  { id: "188", name: "আবু সাঈদ", nameEn: "Abu Sayeed", gender: "male", fatherId: "143" },
  { id: "189", name: "মরিয়ম খাতুন", nameEn: "Moriyom Khatun", gender: "female", fatherId: "143" },
  { id: "190", name: "মৃত পপি", nameEn: "Late Popi", gender: "female", fatherId: "143" },
  { id: "191", name: "মেরিনা খাতুন", nameEn: "Merina Khatun", gender: "female", fatherId: "143" }
];
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

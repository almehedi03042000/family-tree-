const familyData = {
    id: "padmashi", nameBn: "পদ্মাশী সর্দার", nameEn: "Padmashi Sardar", gender: "male", isDeceased: false,
    idNo: "S-001", dob: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা",
    occupation: "কৃষি", education: "অশিক্ষিত", mobile: "N/A", bloodGroup: "N/A",
    maritalStatus: "বিবাহিত", spouse: null, father: null, mother: null, specialNote: "মূল পূর্বপুরুষ",
    profilePhoto: "", gallery: [],
    children: [
        {
            id: "akali", nameBn: "আকালী সর্দার", nameEn: "Akali Sardar", gender: "male", isDeceased: false,
            idNo: "S-002", dob: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা",
            occupation: "কৃষি", education: "অজানা", mobile: "N/A", bloodGroup: "N/A",
            maritalStatus: "বিবাহিত", spouse: null, father: { id: "padmashi", nameBn: "পদ্মাশী সর্দার" }, mother: null, specialNote: "",
            profilePhoto: "", gallery: [],
            children: [
                {
                    id: "isu", nameBn: "ঈসু সর্দার", nameEn: "Isu Sardar", gender: "male", isDeceased: false,
                    idNo: "S-003", dob: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা",
                    occupation: "কৃষি", education: "অজানা", mobile: "N/A", bloodGroup: "N/A",
                    maritalStatus: "বিবাহিত", spouse: null, father: { id: "akali", nameBn: "আকালী সর্দার" }, mother: null, specialNote: "",
                    profilePhoto: "", gallery: [],
                    children: [
                        {
                            id: "doshor", nameBn: "দোশর সর্দার", nameEn: "Doshor Sardar", gender: "male", isDeceased: false,
                            idNo: "S-004", dob: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা",
                            occupation: "কৃষি", education: "অজানা", mobile: "N/A", bloodGroup: "N/A",
                            maritalStatus: "বিবাহিত", spouse: null, father: { id: "isu", nameBn: "ঈসু সর্দার" }, mother: null, specialNote: "",
                            profilePhoto: "", gallery: [],
                            children: [
                                {
                                    id: "banej", nameBn: "বানেজ সর্দার", nameEn: "Banej Sardar", gender: "male", isDeceased: false,
                                    idNo: "S-005", dob: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা",
                                    occupation: "কৃষি", education: "অজানা", mobile: "N/A", bloodGroup: "N/A",
                                    maritalStatus: "বিবাহিত", spouse: null, father: { id: "doshor", nameBn: "দোশর সর্দার" }, mother: null, specialNote: "",
                                    profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "mhasin", nameBn: "মহাসিন সর্দার", nameEn: "Mhasin Sardar", gender: "male", isDeceased: false, idNo: "S-006", dob: "অজানা", father: {id: "banej", nameBn: "বানেজ সর্দার"}},
                                        {id: "abul", nameBn: "আবুল সর্দার", nameEn: "Abul Sardar", gender: "male", isDeceased: false, idNo: "S-007", dob: "অজানা", father: {id: "banej", nameBn: "বানেজ সর্দার"}},
                                        {id: "amzad", nameBn: "আমজাদ সর্দার", nameEn: "Amzad Sardar", gender: "male", isDeceased: false, idNo: "S-008", dob: "অজানা", father: {id: "banej", nameBn: "বানেজ সর্দার"}},
                                        {id: "reziya", nameBn: "রেজিয়া", nameEn: "Reziya", gender: "female", isDeceased: false, idNo: "S-009", dob: "অজানা", father: {id: "banej", nameBn: "বানেজ সর্দার"}},
                                        {id: "hafiya", nameBn: "হাফিয়া", nameEn: "Hafiya", gender: "female", isDeceased: false, idNo: "S-010", dob: "অজানা", father: {id: "banej", nameBn: "বানেজ সর্দার"}},
                                        {id: "bulu", nameBn: "বুলু", nameEn: "Bulu", gender: "female", isDeceased: false, idNo: "S-011", dob: "অজানা", father: {id: "banej", nameBn: "বানেজ সর্দার"}},
                                        {id: "rashu", nameBn: "রাশু", nameEn: "Rashu", gender: "female", isDeceased: false, idNo: "S-012", dob: "অজানা", father: {id: "banej", nameBn: "বানেজ সর্দার"}},
                                        {id: "fojila", nameBn: "ফজিলা", nameEn: "Fojila", gender: "female", isDeceased: false, idNo: "S-013", dob: "অজানা", father: {id: "banej", nameBn: "বানেজ সর্দার"}}
                                    ]
                                },
                                {
                                    id: "mokbul", nameBn: "মকবুল সর্দার", nameEn: "Mokbul Sardar", gender: "male", isDeceased: false,
                                    idNo: "S-014", dob: "অজানা", father: { id: "doshor", nameBn: "দোশর সর্দার" },
                                    children: [
                                        {id: "altaf", nameBn: "আলতাফ সর্দার", nameEn: "Altaf Sardar", gender: "male", isDeceased: true, idNo: "S-015"},
                                        {id: "robiul", nameBn: "রবিউল সর্দার", nameEn: "Robiul Sardar", gender: "male", isDeceased: false, idNo: "S-016"},
                                        {id: "roshid", nameBn: "রশিদ সর্দার", nameEn: "Roshid Sardar", gender: "male", isDeceased: false, idNo: "S-017"},
                                        {id: "monowar", nameBn: "মনোয়ার", nameEn: "Monowar", gender: "male", isDeceased: false, idNo: "S-018"},
                                        {id: "ambiya", nameBn: "আম্বিয়া", nameEn: "Ambiya", gender: "female", isDeceased: false, idNo: "S-019"},
                                        {id: "hashera", nameBn: "হাশেরা", nameEn: "Hashera", gender: "female", isDeceased: false, idNo: "S-020"},
                                        {id: "rekena", nameBn: "রেকেনা", nameEn: "Rekena", gender: "female", isDeceased: false, idNo: "S-021"},
                                        {id: "rushia", nameBn: "রুশিয়া", nameEn: "Rushia", gender: "female", isDeceased: false, idNo: "S-022"},
                                        {id: "lila", nameBn: "লীলা", nameEn: "Lila", gender: "female", isDeceased: false, idNo: "S-023"}
                                    ]
                                },
                                {id: "jaimon", nameBn: "জাইমন", nameEn: "Jaimon", gender: "female", isDeceased: false, idNo: "S-024"},
                                {id: "harija", nameBn: "হারিজা", nameEn: "Harija", gender: "female", isDeceased: false, idNo: "S-025"},
                                {id: "haiton", nameBn: "হাইতন", nameEn: "Haiton", gender: "female", isDeceased: false, idNo: "S-026"}
                            ]
                        },
                        {
                            id: "peyar", nameBn: "পেয়ার সর্দার", nameEn: "Peyar Sardar", gender: "male", isDeceased: false, idNo: "S-027",
                            children: [
                                {
                                    id: "janu", nameBn: "জানু সর্দার", nameEn: "Janu Sardar", gender: "male", isDeceased: false, idNo: "S-028",
                                    children: [
                                        {id: "jamshed", nameBn: "জামশেদ সর্দার", nameEn: "Jamshed Sardar", gender: "male", isDeceased: false, idNo: "S-029"},
                                        {id: "fulu_jan", nameBn: "ফুলু জান", nameEn: "Fulu Jan", gender: "female", isDeceased: false, idNo: "S-030"},
                                        {id: "majeda", nameBn: "মাজেদা খাতুন", nameEn: "Majeda Khatun", gender: "female", isDeceased: false, idNo: "S-031"},
                                        {id: "lulu_jan", nameBn: "লুলু জান", nameEn: "Lulu Jan", gender: "female", isDeceased: false, idNo: "S-032"},
                                        {id: "khodijan", nameBn: "খদিজান", nameEn: "Khodijan", gender: "female", isDeceased: false, idNo: "S-033"}
                                    ]
                                },
                                {
                                    id: "haran", nameBn: "হারান সর্দার", nameEn: "Haran Sardar", gender: "male", isDeceased: false, idNo: "S-034",
                                    children: [
                                        {id: "jhontu", nameBn: "ঝন্টু সর্দার", nameEn: "Jhontu Sardar", gender: "male", isDeceased: false, idNo: "S-035"},
                                        {id: "siddik", nameBn: "সিদ্দিক সর্দার", nameEn: "Siddik Sardar", gender: "male", isDeceased: false, idNo: "S-036"},
                                        {id: "jahangir", nameBn: "জাহাঙ্গীর সর্দার", nameEn: "Jahangir Sardar", gender: "male", isDeceased: false, idNo: "S-037"},
                                        {id: "komejan", nameBn: "কমেজান", nameEn: "Komejan", gender: "female", isDeceased: false, idNo: "S-038"},
                                        {id: "mistujan", nameBn: "মিষ্টুজান", nameEn: "Mistujan", gender: "female", isDeceased: false, idNo: "S-039"},
                                        {id: "balijan", nameBn: "বালীজান", nameEn: "Balijan", gender: "female", isDeceased: false, idNo: "S-040"}
                                    ]
                                },
                                {
                                    id: "jaher", nameBn: "জাহের সর্দার", nameEn: "Jaher Sardar", gender: "male", isDeceased: false, idNo: "S-041",
                                    children: [
                                        {id: "sadhu", nameBn: "সাধু সর্দার", nameEn: "Sadhu Sardar", gender: "male", isDeceased: false, idNo: "S-042"},
                                        {id: "modhu", nameBn: "মধু সর্দার", nameEn: "Modhu Sardar", gender: "male", isDeceased: false, idNo: "S-043"},
                                        {id: "jadu", nameBn: "জাদু সর্দার", nameEn: "Jadu Sardar", gender: "male", isDeceased: false, idNo: "S-044"},
                                        {id: "madina", nameBn: "মদিনা", nameEn: "Madina", gender: "female", isDeceased: false, idNo: "S-045"},
                                        {id: "morjina", nameBn: "মরজিনা", nameEn: "Morjina", gender: "female", isDeceased: false, idNo: "S-046"},
                                        {id: "koriman", nameBn: "করিমন নেছা", nameEn: "Koriman Nesa", gender: "female", isDeceased: false, idNo: "S-047"},
                                        {id: "tarajam", nameBn: "তারাজাম", nameEn: "Tarajam", gender: "female", isDeceased: false, idNo: "S-048"}
                                    ]
                                },
                                {
                                    id: "bhasha", nameBn: "ভাষা সর্দার", nameEn: "Bhasha Sardar", gender: "male", isDeceased: false, idNo: "S-049",
                                    children: [
                                        {id: "moja", nameBn: "মোজা সর্দার", nameEn: "Moja Sardar", gender: "male", isDeceased: false, idNo: "S-050"},
                                        {id: "moynu", nameBn: "মইনুদ্দিন", nameEn: "Moinuddin", gender: "male", isDeceased: true, idNo: "S-051"},
                                        {id: "ziarul", nameBn: "জিয়ারুল সর্দার", nameEn: "Ziarul Sardar", gender: "male", isDeceased: false, idNo: "S-052"},
                                        {id: "samiyon", nameBn: "সামিয়ন", nameEn: "Samiyon", gender: "female", isDeceased: false, idNo: "S-053"}
                                    ]
                                }
                            ]
                        },
                        {
                            id: "fokir", nameBn: "ফকির সর্দার", nameEn: "Fokir Sardar", gender: "male", isDeceased: false, idNo: "S-054",
                            children: [
                                {
                                    id: "ajim", nameBn: "আজিম সর্দার", nameEn: "Ajim Sardar", gender: "male", isDeceased: false, idNo: "S-055",
                                    children: [
                                        {id: "jalal", nameBn: "জালাল সর্দার", nameEn: "Jalal Sardar", gender: "male", isDeceased: false, idNo: "S-056"},
                                        {id: "zia", nameBn: "জিয়া সর্দার", nameEn: "Zia Sardar", gender: "male", isDeceased: false, idNo: "S-057"},
                                        {id: "rotan", nameBn: "রতন সর্দার", nameEn: "Rotan Sardar", gender: "male", isDeceased: false, idNo: "S-058"},
                                        {id: "yatan", nameBn: "ইয়াতন", nameEn: "Yatan", gender: "female", isDeceased: false, idNo: "S-059"},
                                        {id: "fukun", nameBn: "ফুকন", nameEn: "Fukun", gender: "female", isDeceased: false, idNo: "S-060"},
                                        {id: "tuklima", nameBn: "টুকলিমা", nameEn: "Tuklima", gender: "female", isDeceased: true, idNo: "S-061"}
                                    ]
                                },
                                {
                                    id: "layeb", nameBn: "লায়েব সর্দার", nameEn: "Layeb Sardar", gender: "male", isDeceased: false, idNo: "S-062",
                                    children: [
                                        {id: "dulal", nameBn: "দুলাল সর্দার", nameEn: "Dulal Sardar", gender: "male", isDeceased: true, idNo: "S-063"},
                                        {id: "alal", nameBn: "আলাল সর্দার", nameEn: "Alal Sardar", gender: "male", isDeceased: false, idNo: "S-064"},
                                        {id: "helal", nameBn: "হেলাল সর্দার", nameEn: "Helal Sardar", gender: "male", isDeceased: false, idNo: "S-065"},
                                        {id: "funka", nameBn: "ফুনকা", nameEn: "Funka", gender: "female", isDeceased: false, idNo: "S-066"},
                                        {id: "firoza", nameBn: "ফিরোজা", nameEn: "Firoza", gender: "female", isDeceased: false, idNo: "S-067"}
                                    ]
                                }
                            ]
                        },
                        {id: "abeda", nameBn: "আবেদা খাতুন", nameEn: "Abeda Khatun", gender: "female", isDeceased: false, idNo: "S-068"}
                    ]
                },
                {
                    id: "kesu", nameBn: "কেসু সর্দার", nameEn: "Kesu Sardar", gender: "male", isDeceased: false, idNo: "S-069",
                    children: [
                        {
                            id: "asharat", nameBn: "আশারত সর্দার", nameEn: "Asharat Sardar", gender: "male", isDeceased: false, idNo: "S-070",
                            children: [
                                {
                                    id: "kukon", nameBn: "কুকন সর্দার", nameEn: "Kukon Sardar", gender: "male", isDeceased: false, idNo: "S-071",
                                    children: [
                                        {id: "hozrat", nameBn: "হযরত সর্দার", nameEn: "Hozrat Sardar", gender: "male", isDeceased: false, idNo: "S-072"},
                                        {id: "hafez", nameBn: "হাফেজ সর্দার", nameEn: "Hafez Sardar", gender: "male", isDeceased: false, idNo: "S-073"},
                                        {id: "shahbaz", nameBn: "শাহবাজ সর্দার", nameEn: "Shahbaz Sardar", gender: "male", isDeceased: false, idNo: "S-074"},
                                        {id: "sorejan", nameBn: "শরেজান", nameEn: "Sorejan", gender: "female", isDeceased: false, idNo: "S-075"},
                                        {id: "mina", nameBn: "মীনা", nameEn: "Mina", gender: "female", isDeceased: false, idNo: "S-076"},
                                        {id: "foima", nameBn: "ফইমা", nameEn: "Foima", gender: "female", isDeceased: false, idNo: "S-077"},
                                        {id: "sukhejan", nameBn: "সুখেজান", nameEn: "Sukhejan", gender: "female", isDeceased: false, idNo: "S-078"},
                                        {id: "monjura", nameBn: "মঞ্জুরা", nameEn: "Monjura", gender: "female", isDeceased: false, idNo: "S-079"}
                                    ]
                                },
                                {
                                    id: "elahi", nameBn: "এলাহী সর্দার", nameEn: "Elahi Sardar", gender: "male", isDeceased: false, idNo: "S-080",
                                    children: [
                                        {id: "idris", nameBn: "ইদ্রিস সর্দার", nameEn: "Idris Sardar", gender: "male", isDeceased: false, idNo: "S-081"},
                                        {id: "alam", nameBn: "আলম সর্দার", nameEn: "Alam Sardar", gender: "male", isDeceased: false, idNo: "S-082"},
                                        {id: "aulad", nameBn: "আউলাদ সর্দার", nameEn: "Aulad Sardar", gender: "male", isDeceased: false, idNo: "S-083"},
                                        {id: "ilef", nameBn: "ইলেফ সর্দার", nameEn: "Ilef Sardar", gender: "male", isDeceased: false, idNo: "S-084"},
                                        {id: "zaharun", nameBn: "জাহারন", nameEn: "Zaharun", gender: "female", isDeceased: false, idNo: "S-085"},
                                        {id: "tuhura1", nameBn: "তহুরা", nameEn: "Tuhura", gender: "female", isDeceased: false, idNo: "S-086"},
                                        {id: "khaleda", nameBn: "খালেদা", nameEn: "Khaleda", gender: "female", isDeceased: false, idNo: "S-087"}
                                    ]
                                }
                            ]
                        },
                        {
                            id: "bosharat", nameBn: "বসারত সর্দার", nameEn: "Bosharat Sardar", gender: "male", isDeceased: false, idNo: "S-088",
                            children: [
                                {
                                    id: "shukot", nameBn: "শুকট সর্দার", nameEn: "Shukot Sardar", gender: "male", isDeceased: false, idNo: "S-089",
                                    children: [
                                        {id: "habil", nameBn: "হাবিল সর্দার", nameEn: "Habil Sardar", gender: "male", isDeceased: true, idNo: "S-090"},
                                        {id: "hanif", nameBn: "হানিফ সর্দার", nameEn: "Hanif Sardar", gender: "male", isDeceased: true, idNo: "S-091"},
                                        {id: "bojlu", nameBn: "বজলু সর্দার", nameEn: "Bojlu Sardar", gender: "male", isDeceased: false, idNo: "S-092"},
                                        {id: "kabil", nameBn: "কাবিল সর্দার", nameEn: "Kabil Sardar", gender: "male", isDeceased: false, idNo: "S-093"},
                                        {id: "maleka", nameBn: "মালেকা", nameEn: "Maleka", gender: "female", isDeceased: false, idNo: "S-094"},
                                        {id: "hima", nameBn: "হিমা", nameEn: "Hima", gender: "female", isDeceased: false, idNo: "S-095"},
                                        {id: "nima", nameBn: "নিমা", nameEn: "Nima", gender: "female", isDeceased: false, idNo: "S-096"}
                                    ]
                                },
                                {
                                    id: "jolil", nameBn: "জলিল সর্দার", nameEn: "Jolil Sardar", gender: "male", isDeceased: false, idNo: "S-097",
                                    children: [
                                        {id: "mannan", nameBn: "মান্নান সর্দার", nameEn: "Mannan Sardar", gender: "male", isDeceased: false, idNo: "S-098"},
                                        {id: "sadhu2", nameBn: "সাধু সর্দার", nameEn: "Sadhu Sardar", gender: "male", isDeceased: false, idNo: "S-099"},
                                        {id: "modhu2", nameBn: "মধু সর্দার", nameEn: "Modhu Sardar", gender: "male", isDeceased: false, idNo: "S-100"},
                                        {id: "anura", nameBn: "আনুরা", nameEn: "Anura", gender: "female", isDeceased: true, idNo: "S-101"},
                                        {id: "nahera", nameBn: "নাহেরা", nameEn: "Nahera", gender: "female", isDeceased: false, idNo: "S-102"},
                                        {id: "fonuara", nameBn: "ফনুয়ারা", nameEn: "Fonuara", gender: "female", isDeceased: true, idNo: "S-103"}
                                    ]
                                },
                                {
                                      id: "mohir", nameBn: "মহির সর্দার", nameEn: "Mohir Sardar", gender: "male", isDeceased: false, idNo: "S-104",
                                      children: [
                                          {id: "kamruzzaman", nameBn: "কামরুজ্জামান", nameEn: "Kamruzzaman", gender: "male", isDeceased: false, idNo: "S-105"},
                                          {id: "shofikul", nameBn: "শফিকুল সর্দার", nameEn: "Shofikul Sardar", gender: "male", isDeceased: false, idNo: "S-106"},
                                          {id: "nasima", nameBn: "নাসিমা", nameEn: "Nasima", gender: "female", isDeceased: false, idNo: "S-107"},
                                          {id: "modon", nameBn: "মদন", nameEn: "Modon", gender: "female", isDeceased: false, idNo: "S-108"},
                                          {id: "laki", nameBn: "লাকি", nameEn: "Laki", gender: "female", isDeceased: false, idNo: "S-109"},
                                          {id: "roksana", nameBn: "রোকসানা", nameEn: "Roksana", gender: "female", isDeceased: false, idNo: "S-110"}
                                      ]
                                },
                                {id: "parijan", nameBn: "পরিজান", nameEn: "Parijan", gender: "female", isDeceased: false, idNo: "S-111"},
                                {id: "jomela", nameBn: "জমেলা", nameEn: "Jomela", gender: "female", isDeceased: false, idNo: "S-112"}
                            ]
                        },
                        {
                            id: "bhugol", nameBn: "ভুগল সর্দার", nameEn: "Bhugol Sardar", gender: "male", isDeceased: false, idNo: "S-113",
                            children: [
                                {
                                    id: "subol", nameBn: "সুবল সর্দার", nameEn: "Subol Sardar", gender: "male", isDeceased: false, idNo: "S-114",
                                    children: [
                                        {id: "moylal", nameBn: "ময়লাল সর্দার", nameEn: "Moylal Sardar", gender: "male", isDeceased: false, idNo: "S-115"},
                                        {id: "hobibar", nameBn: "হবিবার সর্দার", nameEn: "Hobibar Sardar", gender: "male", isDeceased: false, idNo: "S-116"},
                                        {id: "motali", nameBn: "মতালি সর্দার", nameEn: "Motali Sardar", gender: "male", isDeceased: false, idNo: "S-117"},
                                        {id: "lota", nameBn: "লতা জান", nameEn: "Lota Jan", gender: "female", isDeceased: false, idNo: "S-118"},
                                        {id: "khorki", nameBn: "খরকি", nameEn: "Khorki", gender: "female", isDeceased: false, idNo: "S-119"},
                                        {id: "sohura", nameBn: "সহুরা", nameEn: "Sohura", gender: "female", isDeceased: false, idNo: "S-120"}
                                    ]
                                },
                                {
                                    id: "mojiborr", nameBn: "মজিবর সর্দার", nameEn: "Mojiborr Sardar", gender: "male", isDeceased: false, idNo: "S-121",
                                    children: [
                                        {id: "nazrul", nameBn: "নজরুল সর্দার", nameEn: "Nazrul Sardar", gender: "male", isDeceased: false, idNo: "S-122"},
                                        {id: "jalal2", nameBn: "জালাল সর্দার", nameEn: "Jalal Sardar", gender: "male", isDeceased: false, idNo: "S-123"},
                                        {id: "kamal", nameBn: "কামাল সর্দার", nameEn: "Kamal Sardar", gender: "male", isDeceased: false, idNo: "S-124"},
                                        {id: "ahad", nameBn: "আহাদ সর্দার", nameEn: "Ahad Sardar", gender: "male", isDeceased: false, idNo: "S-125"},
                                        {id: "monowara", nameBn: "মনোয়ারা", nameEn: "Monowara", gender: "female", isDeceased: false, idNo: "S-126"},
                                        {id: "toslima", nameBn: "তসলিমা", nameEn: "Toslima", gender: "female", isDeceased: false, idNo: "S-127"},
                                        {id: "shadhina", nameBn: "স্বাধীনা", nameEn: "Shadhina", gender: "female", isDeceased: false, idNo: "S-128"}
                                    ]
                                },
                                {
                                    id: "mokles", nameBn: "মকলেস সর্দার", nameEn: "Mokles Sardar", gender: "male", isDeceased: false, idNo: "S-129",
                                    children: [
                                        {id: "akman", nameBn: "আকমান সর্দার", nameEn: "Akman Sardar", gender: "male", isDeceased: false, idNo: "S-130"},
                                        {id: "ingraj", nameBn: "ইংরাজ সর্দার", nameEn: "Ingraj Sardar", gender: "male", isDeceased: false, idNo: "S-131"},
                                        {id: "yakub", nameBn: "ইয়াকুব সর্দার", nameEn: "Yakub Sardar", gender: "male", isDeceased: false, idNo: "S-132"},
                                        {id: "anarul", nameBn: "আনারুল সর্দার", nameEn: "Anarul Sardar", gender: "male", isDeceased: false, idNo: "S-133"},
                                        {id: "rese", nameBn: "রেসে", nameEn: "Rese", gender: "female", isDeceased: false, idNo: "S-134"},
                                        {id: "rushy", nameBn: "রুশি", nameEn: "Rushy", gender: "female", isDeceased: false, idNo: "S-135"},
                                        {id: "farida", nameBn: "ফরিদা", nameEn: "Farida", gender: "female", isDeceased: true, idNo: "S-136"},
                                        {id: "firo", nameBn: "ফিরো", nameEn: "Firo", gender: "female", isDeceased: false, idNo: "S-137"}
                                    ]
                                },
                                {
                                    id: "saru", nameBn: "সারু সর্দার", nameEn: "Saru Sardar", gender: "male", isDeceased: false, idNo: "S-138",
                                    children: [
                                        {id: "yadul", nameBn: "ইয়াদুল সর্দার", nameEn: "Yadul Sardar", gender: "male", isDeceased: false, idNo: "S-139"},
                                        {id: "yunus", nameBn: "ইউনুস সর্দার", nameEn: "Yunus Sardar", gender: "male", isDeceased: false, idNo: "S-140"},
                                        {id: "beneyamin", nameBn: "বেনেয়ামিন", nameEn: "Beneyamin", gender: "male", isDeceased: true, idNo: "S-141"},
                                        {id: "ranjana", nameBn: "রঞ্জনা", nameEn: "Ranjana", gender: "female", isDeceased: false, idNo: "S-142"},
                                        {id: "merina", nameBn: "মেরিনা", nameEn: "Merina", gender: "female", isDeceased: false, idNo: "S-143"}
                                    ]
                                },
                                {id: "rohima", nameBn: "রহিমা", nameEn: "Rohima", gender: "female", isDeceased: false, idNo: "S-144"},
                                {id: "zayeda", nameBn: "জায়েদা", nameEn: "Zayeda", gender: "female", isDeceased: false, idNo: "S-145"},
                                {id: "joygon", nameBn: "জয়গন নেসা", nameEn: "Joygon Nesa", gender: "female", isDeceased: false, idNo: "S-146"}
                            ]
                        },
                        {
                            id: "koser", nameBn: "কসের সর্দার", nameEn: "Koser Sardar", gender: "male", isDeceased: false, idNo: "S-147",
                            children: [
                                {
                                    id: "khalil", nameBn: "খলিল সর্দার", nameEn: "Khalil Sardar", gender: "male", isDeceased: false, idNo: "S-148",
                                    children: [
                                        {id: "refej", nameBn: "রেফেজ সর্দার", nameEn: "Refej Sardar", gender: "male", isDeceased: false, idNo: "S-149"},
                                        {id: "kubir", nameBn: "কুবির সর্দার", nameEn: "Kubir Sardar", gender: "male", isDeceased: false, idNo: "S-150"},
                                        {id: "jumir", nameBn: "জুমির সর্দার", nameEn: "Jumir Sardar", gender: "male", isDeceased: false, idNo: "S-151"},
                                        {id: "shajuddi", nameBn: "শাইজুদ্দি", nameEn: "Shajuddi", gender: "male", isDeceased: false, idNo: "S-152"},
                                        {id: "raziya", nameBn: "রাজিয়া", nameEn: "Raziya", gender: "female", isDeceased: true, idNo: "S-153"}
                                    ]
                                },
                                {
                                    id: "nurl", nameBn: "নুরল সর্দার", nameEn: "Nurl Sardar", gender: "male", isDeceased: false, idNo: "S-154",
                                    children: [
                                        {id: "waris", nameBn: "ওয়ারিস সর্দার", nameEn: "Waris Sardar", gender: "male", isDeceased: false, idNo: "S-155"},
                                        {id: "idris2", nameBn: "ইদ্রিস সর্দার", nameEn: "Idris Sardar", gender: "male", isDeceased: false, idNo: "S-156"},
                                        {id: "apil", nameBn: "আপিল সর্দার", nameEn: "Apil Sardar", gender: "male", isDeceased: false, idNo: "S-157"},
                                        {id: "niharul", nameBn: "নিহারুল সর্দার", nameEn: "Niharul Sardar", gender: "male", isDeceased: false, idNo: "S-158"}
                                    ]
                                },
                                {
                                    id: "alim", nameBn: "আলিম সর্দার", nameEn: "Alim Sardar", gender: "male", isDeceased: false, idNo: "S-159",
                                    children: [
                                        {id: "ujjwal", nameBn: "উজ্জ্বল সর্দার", nameEn: "Ujjwal Sardar", gender: "male", isDeceased: false, idNo: "S-160"},
                                        {id: "rofikul", nameBn: "রফিকুল সর্দার", nameEn: "Rofikul Sardar", gender: "male", isDeceased: false, idNo: "S-161"},
                                        {id: "hesab", nameBn: "হিসাব সর্দার", nameEn: "Hesab Sardar", gender: "male", isDeceased: false, idNo: "S-162"}
                                    ]
                                },
                                {
                                    id: "tofezzol", nameBn: "তফেজ্জল সর্দার", nameEn: "Tofezzol Sardar", gender: "male", isDeceased: false, idNo: "S-163",
                                    children: [
                                        {id: "mohon", nameBn: "মহন সর্দার", nameEn: "Mohon Sardar", gender: "male", isDeceased: false, idNo: "S-164"},
                                        {id: "koron", nameBn: "করণ সর্দার", nameEn: "Koron Sardar", gender: "male", isDeceased: false, idNo: "S-165"},
                                        {id: "rofiya", nameBn: "রফিয়া", nameEn: "Rofiya", gender: "female", isDeceased: false, idNo: "S-166"},
                                        {id: "tuhura2", nameBn: "তহুরা", nameEn: "Tuhura", gender: "female", isDeceased: false, idNo: "S-167"},
                                        {id: "tahera", nameBn: "তাহেরা", nameEn: "Tahera", gender: "female", isDeceased: false, idNo: "S-168"},
                                        {id: "sultana", nameBn: "সুলতানা", nameEn: "Sultana", gender: "female", isDeceased: false, idNo: "S-169"}
                                    ]
                                },
                                {id: "romela", nameBn: "রমেলা খাতুন", nameEn: "Romela Khatun", gender: "female", isDeceased: false, idNo: "S-170"}
                            ]
                        },
                        {
                            id: "iman_ali", nameBn: "ইমান আলী সর্দার", nameEn: "Iman Ali Sardar", gender: "male", isDeceased: false, idNo: "S-171",
                            children: [
                                {
                                    id: "soleman", nameBn: "সলেমান সর্দার", nameEn: "Soleman Sardar", gender: "male", isDeceased: false, idNo: "S-172",
                                    children: [
                                        {id: "pentu", nameBn: "পেন্টু সর্দার", nameEn: "Pentu Sardar", gender: "male", isDeceased: false, idNo: "S-173"},
                                        {id: "sentu", nameBn: "সেন্টু সর্দার", nameEn: "Sentu Sardar", gender: "male", isDeceased: false, idNo: "S-174"},
                                        {id: "asad", nameBn: "আসাদ সর্দার", nameEn: "Asad Sardar", gender: "male", isDeceased: false, idNo: "S-175"},
                                        {id: "jewel", nameBn: "জুয়েল সর্দার", nameEn: "Jewel Sardar", gender: "male", isDeceased: false, idNo: "S-176"},
                                        {id: "sohel", nameBn: "সোহেল সর্দার", nameEn: "Sohel Sardar", gender: "male", isDeceased: false, idNo: "S-177"},
                                        {id: "rinku", nameBn: "রিংকু সর্দার", nameEn: "Rinku Sardar", gender: "male", isDeceased: false, idNo: "S-178"},
                                        {id: "beli", nameBn: "বেলি", nameEn: "Beli", gender: "female", isDeceased: false, idNo: "S-179"},
                                        {id: "selina", nameBn: "সেলিনা", nameEn: "Selina", gender: "female", isDeceased: false, idNo: "S-180"},
                                        {id: "lovely", nameBn: "লাভলি", nameEn: "Lovely", gender: "female", isDeceased: false, idNo: "S-181"},
                                        {id: "rikta", nameBn: "রিক্তা", nameEn: "Rikta", gender: "female", isDeceased: false, idNo: "S-182"},
                                        {id: "pista", nameBn: "পিস্তা", nameEn: "Pista", gender: "female", isDeceased: false, idNo: "S-183"}
                                    ]
                                },
                                {
                                    id: "abdus_samad", nameBn: "আব্দুস সামাদ সর্দার", nameEn: "Abdus Samad Sardar", gender: "male", isDeceased: false, idNo: "S-184",
                                    children: [
                                        {id: "roknuzzaman", nameBn: "রোকনুজ্জামান", nameEn: "Roknuzzaman", gender: "male", isDeceased: false, idNo: "S-185"},
                                        {id: "hasanuzzaman", nameBn: "হাসানুজ্জামান", nameEn: "Hasanuzzaman", gender: "male", isDeceased: false, idNo: "S-186"},
                                        {id: "tanim", nameBn: "তানিম", nameEn: "Tanim", gender: "male", isDeceased: true, idNo: "S-187"},
                                        {id: "sumon", nameBn: "সুমন সর্দার", nameEn: "Sumon Sardar", gender: "male", isDeceased: false, idNo: "S-188"},
                                        {id: "reena", nameBn: "রীনা", nameEn: "Reena", gender: "female", isDeceased: false, idNo: "S-189"},
                                        {id: "bina", nameBn: "বিনা", nameEn: "Bina", gender: "female", isDeceased: false, idNo: "S-190"},
                                        {id: "tina", nameBn: "টিনা", nameEn: "Tina", gender: "female", isDeceased: false, idNo: "S-191"}
                                    ]
                                },
                                {
                                    id: "jamal", nameBn: "জামাল সর্দার", nameEn: "Jamal Sardar", gender: "male", isDeceased: false, idNo: "S-192",
                                    children: [
                                        {id: "mamun", nameBn: "মামুন সর্দার", nameEn: "Mamun Sardar", gender: "male", isDeceased: false, idNo: "S-193"},
                                        {id: "masum", nameBn: "মাসুম সর্দার", nameEn: "Masum Sardar", gender: "male", isDeceased: false, idNo: "S-194"},
                                        {id: "mousum", nameBn: "মৌসুম সর্দার", nameEn: "Mousum Sardar", gender: "male", isDeceased: false, idNo: "S-195"},
                                        {id: "kusum", nameBn: "কুসুম সর্দার", nameEn: "Kusum Sardar", gender: "male", isDeceased: false, idNo: "S-196"},
                                        {id: "panna", nameBn: "পান্না সর্দার", nameEn: "Panna Sardar", gender: "male", isDeceased: false, idNo: "S-197"},
                                        {id: "nantu", nameBn: "নান্টু সর্দার", nameEn: "Nantu Sardar", gender: "male", isDeceased: false, idNo: "S-198"},
                                        {id: "mithon", nameBn: "মিঠন সর্দার", nameEn: "Mithon Sardar", gender: "male", isDeceased: false, idNo: "S-199"},
                                        {id: "tuton", nameBn: "টুটন সর্দার", nameEn: "Tuton Sardar", gender: "male", isDeceased: false, idNo: "S-200"},
                                        {id: "choton", nameBn: "ছোটন সর্দার", nameEn: "Choton Sardar", gender: "male", isDeceased: false, idNo: "S-201"},
                                        {id: "jahanara", nameBn: "জাহানারা", nameEn: "Jahanara", gender: "female", isDeceased: false, idNo: "S-202"},
                                        {id: "sathi", nameBn: "সাথি", nameEn: "Sathi", gender: "female", isDeceased: false, idNo: "S-203"}
                                    ]
                                },
                                {
                                    id: "rustom", nameBn: "রুস্তম সর্দার", nameEn: "Rustom Sardar", gender: "male", isDeceased: false, idNo: "S-204",
                                    children: [
                                        {id: "rezaul", nameBn: "রেজাউল সর্দার", nameEn: "Rezaul Sardar", gender: "male", isDeceased: false, idNo: "S-205"},
                                        {id: "manik", nameBn: "মানিক সর্দার", nameEn: "Manik Sardar", gender: "male", isDeceased: false, idNo: "S-206"},
                                        {id: "arif", nameBn: "আরিফ সর্দার", nameEn: "Arif Sardar", gender: "male", isDeceased: false, idNo: "S-207"},
                                        {id: "ripon", nameBn: "রিপন সর্দার", nameEn: "Ripon Sardar", gender: "male", isDeceased: false, idNo: "S-208"},
                                        {id: "rozina", nameBn: "রোজিনা", nameEn: "Rozina", gender: "female", isDeceased: false, idNo: "S-209"},
                                        {id: "ruma", nameBn: "রুমা", nameEn: "Ruma", gender: "female", isDeceased: false, idNo: "S-210"}
                                    ]
                                },
                                {
                                    id: "akbor", nameBn: "আকবর সর্দার", nameEn: "Akbor Sardar", gender: "male", isDeceased: false, idNo: "S-211",
                                    children: [
                                        {id: "shuvro", nameBn: "শুভ্র", nameEn: "Shuvro", gender: "male", isDeceased: false, idNo: "S-212"},
                                        {id: "ontu", nameBn: "অন্ত", nameEn: "Onto", gender: "female", isDeceased: false, idNo: "S-213"},
                                        {id: "afifa", nameBn: "আফিফা", nameEn: "Afifa", gender: "female", isDeceased: false, idNo: "S-214"}
                                    ]
                                },
                                {
                                    id: "mahatab", nameBn: "মাহাতাব উদ্দিন", nameEn: "Mahatab Uddin", gender: "male", isDeceased: false, idNo: "S-215",
                                    children: [
                                        {id: "al_mehedi", nameBn: "আল-মেহেদী", nameEn: "Al-Mehedi", gender: "male", isDeceased: false, idNo: "S-216"},
                                        {id: "abu_sayed", nameBn: "আবু সাঈদ", nameEn: "Abu Sayed", gender: "male", isDeceased: false, idNo: "S-217"},
                                        {id: "moriyom", nameBn: "মরিয়ম খাতুন", nameEn: "Moriyom Khatun", gender: "female", isDeceased: false, idNo: "S-218"},
                                        {id: "popi", nameBn: "পপি", nameEn: "Popi", gender: "female", isDeceased: true, idNo: "S-219"},
                                        {id: "merina2", nameBn: "মেরিনা খাতুন", nameEn: "Merina Khatun", gender: "female", isDeceased: false, idNo: "S-220"}
                                    ]
                                },
                                {id: "nehar", nameBn: "নেহার", nameEn: "Nehar", gender: "female", isDeceased: false, idNo: "S-221"},
                                {id: "sokina", nameBn: "সকিনা", nameEn: "Sokina", gender: "female", isDeceased: false, idNo: "S-222"},
                                {id: "shohida", nameBn: "শহিদা", nameEn: "Shohida", gender: "female", isDeceased: false, idNo: "S-223"},
                                {id: "shahanur", nameBn: "শাহানূর", nameEn: "Shahanur", gender: "female", isDeceased: false, idNo: "S-224"},
                                {id: "kajol", nameBn: "কাজল", nameEn: "Kajol", gender: "female", isDeceased: false, idNo: "S-225"}
                            ]
                        },
                        {id: "salejan", nameBn: "সালেজান", nameEn: "Salejan", gender: "female", isDeceased: false, idNo: "S-226"}
                    ]
                }
            ]
        };

        let historyStack = [familyData];
        let currentRootNode = familyData;
        let currentGalleryImages = [];
        let currentGalleryIndex = 0;

        document.addEventListener('DOMContentLoaded', () => {
            renderCurrentTree();
            setupSearch();
            setupModalEvents();
            setupPannableZoomTree();

            document.getElementById('prevPageBtn').addEventListener('click', () => {
                if (historyStack.length > 1) {
                    historyStack.pop();
                    currentRootNode = historyStack[historyStack.length - 1];
                    renderCurrentTree();
                }
            });

            document.getElementById('homeBtn').addEventListener('click', () => {
                historyStack = [familyData];
                currentRootNode = familyData;
                renderCurrentTree();
            });

            document.getElementById('openZoomTreeBox').addEventListener('click', () => {
                openZoomTreeModal();
            });
        });

        function getCardHTML(node) {
            const deceasedClass = node.isDeceased ? 'deceased' : '';
            const genderClass = node.gender === 'female' ? 'female' : 'male';

            return `
                <div class="member-card ${genderClass} ${deceasedClass}" onclick="onCardClick('${node.id}')">
                    <div class="member-name-bn">${node.nameBn}</div>
                    <div class="member-name-en">${node.nameEn || ''}</div>
                </div>
            `;
        }

        function renderChildrenSmart(childrenList) {
            if (!childrenList || childrenList.length === 0) return '';
            
            const childNodesHTML = childrenList.map(child => {
                const hasGrandChildren = child.children && child.children.length > 0;
                let linkBtn = '';
                
                if (hasGrandChildren) {
                    linkBtn = `<button class="sub-tree-link" onclick="navigateToSubTree('${child.id}', event)">
                        বংশধারা দেখুন
                    </button>`;
                }

                const deceasedClass = child.isDeceased ? 'deceased' : '';
                const genderClass = child.gender === 'female' ? 'female' : 'male';

                return `
                    <li>
                        <div class="member-card ${genderClass} ${deceasedClass}" onclick="onCardClick('${child.id}')">
                            <div class="member-name-bn">${child.nameBn}</div>
                            <div class="member-name-en">${child.nameEn || ''}</div>
                            ${linkBtn}
                        </div>
                    </li>
                `;
            }).join('');

            return `<ul>${childNodesHTML}</ul>`;
        }

        function renderNodeHTML(node) {
            if (!node) return '';
            return `
                <li>
                    <div class="member-card ${node.gender === 'female' ? 'female' : 'male'} ${node.isDeceased ? 'deceased' : ''}" onclick="onCardClick('${node.id}')" style="border-width: 2px;">
                        <div class="member-name-bn" style="font-size: 0.85rem;">${node.nameBn}</div>
                        <div class="member-name-en">${node.nameEn || ''}</div>
                    </div>
                    ${renderChildrenSmart(node.children)}
                </li>
            `;
        }

        function renderHomeLevelHTML() {
            const akaliNode = familyData.children[0];
            const isuNode = akaliNode.children[0];
            const kesuNode = akaliNode.children[1];

            return `
                <li>
                    <div class="member-card male" onclick="onCardClick('${familyData.id}')">
                        <div class="member-name-bn">${familyData.nameBn}</div>
                        <div class="member-name-en">${familyData.nameEn}</div>
                    </div>
                    <ul>
                        <li>
                            <div class="member-card male" onclick="onCardClick('${akaliNode.id}')">
                                <div class="member-name-bn">${akaliNode.nameBn}</div>
                                <div class="member-name-en">${akaliNode.nameEn}</div>
                            </div>
                            <ul>
                                <li>
                                    <div class="member-card male" onclick="onCardClick('${isuNode.id}')">
                                        <div class="member-name-bn">${isuNode.nameBn}</div>
                                        <div class="member-name-en">${isuNode.nameEn}</div>
                                        <button class="sub-tree-link" onclick="navigateToSubTree('${isuNode.id}', event)">বংশধারা দেখুন</button>
                                    </div>
                                </li>
                                <li>
                                    <div class="member-card male" onclick="onCardClick('${kesuNode.id}')">
                                        <div class="member-name-bn">${kesuNode.nameBn}</div>
                                        <div class="member-name-en">${kesuNode.nameEn}</div>
                                        <button class="sub-tree-link" onclick="navigateToSubTree('${kesuNode.id}', event)">বংশধারা দেখুন</button>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            `;
        }

        function renderCurrentTree() {
            const container = document.getElementById('treeContainer');
            const breadcrumb = document.getElementById('breadcrumbText');
            const prevBtn = document.getElementById('prevPageBtn');
            const homeBtn = document.getElementById('homeBtn');

            if (currentRootNode.id === familyData.id) {
                breadcrumb.textContent = '📍 পদ্মাশী সর্দার ➔ আকালী সর্দার ➔ ঈসু ও কেসু সর্দার';
                prevBtn.style.display = 'none';
                homeBtn.style.display = 'none';
                container.innerHTML = `<div class="tf-tree"><ul>${renderHomeLevelHTML()}</ul></div>`;
            } else {
                breadcrumb.textContent = `📍 ${currentRootNode.nameBn}-এর বংশধরগণ`;
                prevBtn.style.display = 'inline-flex';
                homeBtn.style.display = 'inline-flex';
                container.innerHTML = `<div class="tf-tree"><ul>${renderNodeHTML(currentRootNode)}</ul></div>`;
            }
        }

        function navigateToSubTree(id, event) {
            if (event) event.stopPropagation();
            const targetNode = findMemberById(familyData, id);
            if (targetNode) {
                currentRootNode = targetNode;
                historyStack.push(targetNode);
                renderCurrentTree();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function onCardClick(id) {
            const memberObj = findMemberById(familyData, id);
            const parentObj = findParentById(familyData, id);
            if (memberObj) {
                showMemberDetailsModal(memberObj, parentObj);
            }
        }

        function findMemberById(root, id) {
            if (root.id === id) return root;
            if (root.children) {
                for (let child of root.children) {
                    const found = findMemberById(child, id);
                    if (found) return found;
                }
            }
            return null;
        }

        function findParentById(root, id) {
            if (root.children) {
                for (let child of root.children) {
                    if (child.id === id) return root;
                    const found = findParentById(child, id);
                    if (found) return found;
                }
            }
            return null;
        }

        function showMemberDetailsModal(member, parentObj) {
            const modal = document.getElementById('memberModal');
            
            const imgContainer = document.getElementById('modalImgContainer');
            if (member.profilePhoto) {
                imgContainer.innerHTML = `<img src="${member.profilePhoto}" alt="${member.nameBn}" style="cursor: pointer;">`;
                imgContainer.style.cursor = 'pointer';
                imgContainer.onclick = () => {
                    currentGalleryImages = [member.profilePhoto];
                    openLightbox(0);
                };
            } else {
                imgContainer.innerHTML = `<span class="profile-img-placeholder">👤</span>`;
                imgContainer.style.cursor = 'default';
                imgContainer.onclick = null;
            }

            document.getElementById('modalNameBn').textContent = `${member.nameBn} (${member.nameEn || ''})`;

            const badge = document.getElementById('modalStatusBadge');
            badge.textContent = member.isDeceased ? 'মৃত' : 'জীবিত';
            badge.className = member.isDeceased ? 'status-badge deceased' : 'status-badge';

            document.getElementById('modalIdNo').textContent = member.idNo || 'N/A';
            document.getElementById('modalGender').textContent = member.gender === 'female' ? 'নারী' : 'পুরুষ';
            document.getElementById('modalDob').textContent = member.dob || 'N/A';
            
            const dodContainer = document.getElementById('dodContainer');
            if (member.isDeceased) {
                document.getElementById('modalDod').textContent = member.dod || 'প্রযোজ্য নয়';
                dodContainer.style.display = 'block';
            } else {
                dodContainer.style.display = 'none';
            }

            document.getElementById('modalBlood').textContent = member.bloodGroup || 'N/A';
            document.getElementById('modalMobile').textContent = member.mobile || 'N/A';
            document.getElementById('modalOccupation').textContent = member.occupation || 'N/A';
            document.getElementById('modalEducation').textContent = member.education || 'N/A';
            document.getElementById('modalBirthPlace').textContent = member.birthPlace || 'N/A';
            document.getElementById('modalAddress').textContent = member.currentAddress || 'N/A';
            document.getElementById('modalMarital').textContent = member.maritalStatus || 'N/A';

            const spouseElem = document.getElementById('modalSpouse');
            if (member.spouse && member.spouse.id) {
                spouseElem.textContent = member.spouse.nameBn;
                spouseElem.className = "clickable-link";
                spouseElem.onclick = () => {
                    modal.style.display = 'none';
                    onCardClick(member.spouse.id);
                };
            } else {
                spouseElem.textContent = 'নেই';
                spouseElem.className = "";
                spouseElem.onclick = null;
            }

            const fatherElem = document.getElementById('modalFather');
            if (parentObj) {
                fatherElem.textContent = parentObj.nameBn;
                fatherElem.className = "clickable-link";
                fatherElem.onclick = () => {
                    modal.style.display = 'none';
                    onCardClick(parentObj.id);
                };
            } else if (member.father && member.father.id) {
                fatherElem.textContent = member.father.nameBn;
                fatherElem.className = "clickable-link";
                fatherElem.onclick = () => {
                    modal.style.display = 'none';
                    onCardClick(member.father.id);
                };
            } else {
                fatherElem.textContent = 'মূল পূর্বপুরুষ';
                fatherElem.className = "";
                fatherElem.onclick = null;
            }

            const motherElem = document.getElementById('modalMother');
            if (member.mother && member.mother.nameBn) {
                motherElem.textContent = member.mother.nameBn;
                if (member.mother.id) {
                    motherElem.className = "clickable-link";
                    motherElem.onclick = () => {
                        modal.style.display = 'none';
                        onCardClick(member.mother.id);
                    };
                }
            } else {
                motherElem.textContent = 'N/A';
                motherElem.className = "";
                motherElem.onclick = null;
            }

            let totalChildren = 0;
            let sonsCount = 0;
            let daughtersCount = 0;
            if (member.children && member.children.length > 0) {
                totalChildren = member.children.length;
                sonsCount = member.children.filter(c => c.gender === 'male').length;
                daughtersCount = member.children.filter(c => c.gender === 'female').length;
            }
            document.getElementById('modalChildrenSummary').textContent = `${totalChildren} জন (ছেলে: ${sonsCount}, মেয়ে: ${daughtersCount})`;

            const noteContainer = document.getElementById('noteContainer');
            if (member.specialNote) {
                document.getElementById('modalNote').textContent = member.specialNote;
                noteContainer.style.display = 'block';
            } else {
                noteContainer.style.display = 'none';
            }

            const gallerySection = document.getElementById('modalGallerySection');
            const galleryGrid = document.getElementById('modalGalleryGrid');
            if (member.gallery && member.gallery.length > 0) {
                currentGalleryImages = member.gallery;
                galleryGrid.innerHTML = member.gallery.map((imgSrc, idx) => `
                    <img src="${imgSrc}" class="gallery-thumb" onclick="openLightbox(${idx})">
                `).join('');
                gallerySection.style.display = 'block';
            } else {
                gallerySection.style.display = 'none';
            }

            modal.style.display = 'flex';
        }

        function openLightbox(index) {
            currentGalleryIndex = index;
            const lightbox = document.getElementById('lightboxModal');
            const lightboxImg = document.getElementById('lightboxImg');
            lightboxImg.src = currentGalleryImages[currentGalleryIndex];
            lightbox.style.display = 'flex';
        }

        document.getElementById('lightboxClose').addEventListener('click', () => {
            document.getElementById('lightboxModal').style.display = 'none';
        });

        document.getElementById('lightboxNext').addEventListener('click', () => {
            if (currentGalleryImages.length > 0) {
                currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
                document.getElementById('lightboxImg').src = currentGalleryImages[currentGalleryIndex];
            }
        });

        document.getElementById('lightboxPrev').addEventListener('click', () => {
            if (currentGalleryImages.length > 0) {
                currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
                document.getElementById('lightboxImg').src = currentGalleryImages[currentGalleryIndex];
            }
        });

        function renderFullTreeModal(node) {
            if (!node) return '';
            if (node.children && node.children.length > 0) {
                const childItems = node.children.map(child => renderFullTreeModal(child)).join('');
                return `<li>${getCardHTML(node)}<ul>${childItems}</ul></li>`;
            } else {
                return `<li>${getCardHTML(node)}</li>`;
            }
        }

        let zoomScale = 0.2;
        let pointX = 0;
        let pointY = 0;
        let startX = 0;
        let startY = 0;
        let isPanning = false;

        function openZoomTreeModal() {
            const zoomModal = document.getElementById('zoomModal');
            const zoomContent = document.getElementById('zoomContent');
            zoomContent.innerHTML = `<div class="tf-tree"><ul>${renderFullTreeModal(familyData)}</ul></div>`;
            zoomModal.style.display = 'flex';
            
            const viewport = document.getElementById('zoomViewport');
            zoomScale = 0.2; 
            pointX = (viewport.clientWidth - zoomContent.offsetWidth * zoomScale) / 2;
            pointY = 20;
            updateTransform();
        }

        function updateTransform() {
            const zoomContent = document.getElementById('zoomContent');
            zoomContent.style.transform = `translate(${pointX}px, ${pointY}px) scale(${zoomScale})`;
        }

        function setupPannableZoomTree() {
            const zoomViewport = document.getElementById('zoomViewport');
            const zoomModal = document.getElementById('zoomModal');

            document.getElementById('zoomCloseBtn').addEventListener('click', () => zoomModal.style.display = 'none');
            document.getElementById('zoomInBtn').addEventListener('click', () => { zoomScale = Math.min(zoomScale + 0.1, 2.0); updateTransform(); });
            document.getElementById('zoomOutBtn').addEventListener('click', () => { zoomScale = Math.max(zoomScale - 0.05, 0.08); updateTransform(); });
            document.getElementById('zoomResetBtn').addEventListener('click', () => { 
                zoomScale = 0.2; 
                pointX = (zoomViewport.clientWidth - document.getElementById('zoomContent').offsetWidth * zoomScale) / 2;
                pointY = 20; 
                updateTransform(); 
            });

            const startPan = (e) => {
                isPanning = true;
                startX = (e.clientX || e.touches[0].clientX) - pointX;
                startY = (e.clientY || e.touches[0].clientY) - pointY;
            };

            const doPan = (e) => {
                if (!isPanning) return;
                e.preventDefault();
                pointX = (e.clientX || e.touches[0].clientX) - startX;
                pointY = (e.clientY || e.touches[0].clientY) - startY;
                updateTransform();
            };

            const stopPan = () => isPanning = false;

            zoomViewport.addEventListener('mousedown', startPan);
            window.addEventListener('mousemove', doPan);
            window.addEventListener('mouseup', stopPan);

            zoomViewport.addEventListener('touchstart', startPan, { passive: true });
            window.addEventListener('touchmove', doPan, { passive: false });
            window.addEventListener('touchend', stopPan);

            document.getElementById('downloadPdfBtn').addEventListener('click', () => {
                const element = document.getElementById('zoomContent');
                const opt = {
                    margin: 0.2,
                    filename: 'পদ্মাশী_সর্দারের_বংশধারা.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'a3', orientation: 'landscape' }
                };
                html2pdf().set(opt).from(element).save();
            });
        }

        function setupSearch() {
            const searchInput = document.getElementById('searchInput');
            const searchBtn = document.getElementById('searchBtn');
            const searchResults = document.getElementById('searchResults');

            const performSearch = () => {
                const query = searchInput.value.trim().toLowerCase();
                searchResults.innerHTML = '';
                if (!query) { searchResults.style.display = 'none'; return; }

                const matches = [];
                searchMembersRecursive(familyData, query, matches);

                if (matches.length > 0) {
                    searchResults.style.display = 'block';
                    matches.forEach(item => {
                        const div = document.createElement('div');
                        div.className = 'search-result-item';
                        div.innerHTML = `<strong>${item.nameBn}</strong> (${item.nameEn || ''})`;
                        div.addEventListener('click', () => {
                            currentRootNode = item;
                            historyStack.push(item);
                            renderCurrentTree();
                            searchResults.style.display = 'none';
                            searchInput.value = '';
                        });
                        searchResults.appendChild(div);
                    });
                } else {
                    searchResults.style.display = 'block';
                    searchResults.innerHTML = '<div class="search-result-item">কোনো সদস্য পাওয়া যায়নি</div>';
                }
            };

            searchInput.addEventListener('input', performSearch);
            searchBtn.addEventListener('click', performSearch);
        }

        function searchMembersRecursive(node, query, results) {
            if (!node) return;
            if (node.nameBn.toLowerCase().includes(query) || (node.nameEn && node.nameEn.toLowerCase().includes(query))) {
                results.push(node);
            }
            if (node.children) {
                node.children.forEach(child => searchMembersRecursive(child, query, results));
            }
        }

        function setupModalEvents() {
            const modal = document.getElementById('memberModal');
            document.getElementById('modalClose').addEventListener('click', () => modal.style.display = 'none');
            window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
        }

const familyData = {
    id: "padmashi", nameBn: "পদ্মাশী সর্দার", nameEn: "Padmashi Sardar", gender: "male", isDeceased: false,
    idNo: "S-001", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা",
    occupation: "কৃষি", education: "অশিক্ষিত", mobile: "N/A", bloodGroup: "N/A",
    maritalStatus: "বিবাহিত", spouse: null, father: null, mother: null, specialNote: "মূল পূর্বপুরুষ",
    profilePhoto: "", gallery: [],
    children: [
        {
            id: "akali", nameBn: "আকালী সর্দার", nameEn: "Akali Sardar", gender: "male", isDeceased: false,
            idNo: "S-002", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা",
            occupation: "কৃষি", education: "অজানা", mobile: "N/A", bloodGroup: "N/A",
            maritalStatus: "বিবাহিত", spouse: null, father: { id: "padmashi", nameBn: "পদ্মাশী সর্দার" }, mother: null, specialNote: "",
            profilePhoto: "", gallery: [],
            children: [
                {
                    id: "isu", nameBn: "ঈসু সর্দার", nameEn: "Isu Sardar", gender: "male", isDeceased: false,
                    idNo: "S-003", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা",
                    occupation: "কৃষি", education: "অজানা", mobile: "N/A", bloodGroup: "N/A",
                    maritalStatus: "বিবাহিত", spouse: null, father: { id: "akali", nameBn: "আকালী সর্দার" }, mother: null, specialNote: "",
                    profilePhoto: "", gallery: [],
                    children: [
                        {
                            id: "doshor", nameBn: "দোশর সর্দার", nameEn: "Doshor Sardar", gender: "male", isDeceased: false,
                            idNo: "S-004", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা",
                            occupation: "কৃষি", education: "অজানা", mobile: "N/A", bloodGroup: "N/A",
                            maritalStatus: "বিবাহিত", spouse: null, father: { id: "isu", nameBn: "ঈসু সর্দার" }, mother: null, specialNote: "",
                            profilePhoto: "", gallery: [],
                            children: [
                                {
                                    id: "banej", nameBn: "বানেজ সর্দার", nameEn: "Banej Sardar", gender: "male", isDeceased: false,
                                    idNo: "S-005", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা",
                                    occupation: "কৃষি", education: "অজানা", mobile: "N/A", bloodGroup: "N/A",
                                    maritalStatus: "বিবাহিত", spouse: null, father: { id: "doshor", nameBn: "দোশর সর্দার" }, mother: null, specialNote: "",
                                    profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "mhasin", nameBn: "মহাসিন সর্দার", nameEn: "Mhasin Sardar", gender: "male", isDeceased: false, idNo: "S-006", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "banej", nameBn: "বানেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "sapat_mhasin", nameBn: "সাপাত সর্দার", nameEn: "Sapat Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mhasin", nameBn: "মহসিন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "shadhek_mhasin", nameBn: "ছাদেক সর্দার", nameEn: "Shadhek Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mhasin", nameBn: "মহসিন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "moinul_mhasin", nameBn: "মইনুল সর্দার", nameEn: "Moinul Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mhasin", nameBn: "মহসিন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // ৬ জন মেয়ে
        {id: "molejan_mhasin", nameBn: "মলেজান", nameEn: "Molejan", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mhasin", nameBn: "মহসিন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "champa_mhasin", nameBn: "চাম্পা", nameEn: "Champa", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mhasin", nameBn: "মহসিন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "unknown_dau3_mhasin", nameBn: "অজানা", nameEn: "Unknown", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mhasin", nameBn: "মহসিন সর্দার"}, mother: null, specialNote: "৩ নম্বর মেয়ে, নাম পরবর্তীতে যোগ করা হবে", profilePhoto: "", gallery: [], children: []},
        {id: "shiuli_mhasin", nameBn: "শিউলি", nameEn: "Shiuli", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mhasin", nameBn: "মহসিন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "beauty_mhasin", nameBn: "বিউটি", nameEn: "Beauty", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mhasin", nameBn: "মহসিন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "exena_mhasin", nameBn: "এক্সেনা", nameEn: "Exena", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mhasin", nameBn: "মহসিন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "abul", nameBn: "আবুল সর্দার", nameEn: "Abul Sardar", gender: "male", isDeceased: false, idNo: "S-007", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "banej", nameBn: "বানেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "abbas_abul", nameBn: "আব্বাস আলী সর্দার", nameEn: "Abbas Ali Sardar", gender: "male", isDeceased: true, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "abul", nameBn: "আবুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "anar_abul", nameBn: "আনার সর্দার", nameEn: "Anar Sardar", gender: "male", isDeceased: true, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "abul", nameBn: "আবুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "sujon_abul", nameBn: "সুজন সর্দার", nameEn: "Sujon Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "abul", nameBn: "আবুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "ruhul_abul", nameBn: "রুহুল সর্দার", nameEn: "Ruhul Sardar", gender: "male", isDeceased: true, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "abul", nameBn: "আবুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "chumki_abul", nameBn: "চুমকি", nameEn: "Chumki", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "abul", nameBn: "আবুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "amzad", nameBn: "আমজাদ সর্দার", nameEn: "Amzad Sardar", gender: "male", isDeceased: false, idNo: "S-008", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "banej", nameBn: "বানেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814857/amjad.jpg", gallery: [],
                                         children: [{id: "rubel_amzad", nameBn: "রুবেল সর্দার", nameEn: "Rubel Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "amzad", nameBn: "আমজাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "rasel_amzad", nameBn: "রাসেল সর্দার", nameEn: "Rasel Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "amzad", nameBn: "আমজাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "sojol_amzad", nameBn: "সজল সর্দার", nameEn: "Sojol Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "amzad", nameBn: "আমজাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "asma_amzad", nameBn: "আসমা", nameEn: "Asma", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "amzad", nameBn: "আমজাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "shayla_amzad", nameBn: "শায়লা", nameEn: "Shayla", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "amzad", nameBn: "আমজাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "reziya", nameBn: "রেজিয়া", nameEn: "Reziya", gender: "female", isDeceased: false, idNo: "S-009", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "banej", nameBn: "বানেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "hafiya", nameBn: "হাফিয়া", nameEn: "Hafiya", gender: "female", isDeceased: false, idNo: "S-010", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "banej", nameBn: "বানেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "bulu", nameBn: "বুলু", nameEn: "Bulu", gender: "female", isDeceased: false, idNo: "S-011", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "banej", nameBn: "বানেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "rashu", nameBn: "রাশু", nameEn: "Rashu", gender: "female", isDeceased: false, idNo: "S-012", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "banej", nameBn: "বানেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "fojila", nameBn: "ফজিলা", nameEn: "Fojila", gender: "female", isDeceased: false, idNo: "S-013", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "banej", nameBn: "বানেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "mokbul", nameBn: "মকবুল সর্দার", nameEn: "Mokbul Sardar", gender: "male", isDeceased: false,
                                    idNo: "S-014", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: { id: "doshor", nameBn: "দোশর সর্দার" }, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "altaf", nameBn: "আলতাফ সর্দার", nameEn: "Altaf Sardar", gender: "male", isDeceased: true, idNo: "S-015", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "ashik_altaf", nameBn: "আশিক সর্দার", nameEn: "Ashik Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "altaf", nameBn: "আলতাফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "sajiya_altaf", nameBn: "সাজিয়া", nameEn: "Sajiya", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "altaf", nameBn: "আলতাফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "raziya_altaf", nameBn: "রাজিয়া", nameEn: "Raziya", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "altaf", nameBn: "আলতাফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "lipiyara_altaf", nameBn: "লিপিআরা", nameEn: "Lipiyara", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "altaf", nameBn: "আলতাফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "shilpi_altaf", nameBn: "শিল্পী", nameEn: "Shilpi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "altaf", nameBn: "আলতাফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "bithi_altaf", nameBn: "বিথী", nameEn: "Bithi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "altaf", nameBn: "আলতাফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
]},
                                        {id: "robiul", nameBn: "রবিউল সর্দার", nameEn: "Robiul Sardar", gender: "male", isDeceased: false, idNo: "S-016", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "bulbul_robiul", nameBn: "বুলবুল সর্দার", nameEn: "Bulbul Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "robiul", nameBn: "রবিউল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "alamin_robiul", nameBn: "আল-আমিন সর্দার", nameEn: "Al-Amin Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "robiul", nameBn: "রবিউল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "nipa_robiul", nameBn: "নিপা", nameEn: "Nipa", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "robiul", nameBn: "রবিউল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "roshid", nameBn: "রশিদ সর্দার", nameEn: "Roshid Sardar", gender: "male", isDeceased: false, idNo: "S-017", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814885/roshid.jpg", gallery: [], children: [{id: "sukhon_roshid", nameBn: "সুখন সর্দার", nameEn: "Sukhon Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "roshid", nameBn: "রশিদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "jisan_roshid", nameBn: "জিসান সর্দার", nameEn: "Jisan Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "roshid", nameBn: "রশিদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "monowar", nameBn: "মনোয়ার", nameEn: "Monowar", gender: "male", isDeceased: false, idNo: "S-018", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "johani_monowar", nameBn: "জোহানি", nameEn: "Johani", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "monowar", nameBn: "মনোয়ার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "mim_monowar", nameBn: "মিম", nameEn: "Mim", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "monowar", nameBn: "মনোয়ার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "jami_monowar", nameBn: "জ্যামি", nameEn: "Jami", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "monowar", nameBn: "মনোয়ার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "ambiya", nameBn: "আম্বিয়া", nameEn: "Ambiya", gender: "female", isDeceased: false, idNo: "S-019", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "hashera", nameBn: "হাশেরা", nameEn: "Hashera", gender: "female", isDeceased: false, idNo: "S-020", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "rekena", nameBn: "রেকেনা", nameEn: "Rekena", gender: "female", isDeceased: false, idNo: "S-021", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "rushia", nameBn: "রুশিয়া", nameEn: "Rushia", gender: "female", isDeceased: false, idNo: "S-022", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "lila", nameBn: "লীলা", nameEn: "Lila", gender: "female", isDeceased: false, idNo: "S-023", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {id: "jaimon", nameBn: "জাইমন", nameEn: "Jaimon", gender: "female", isDeceased: false, idNo: "S-024", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                {id: "harija", nameBn: "হারিজা", nameEn: "Harija", gender: "female", isDeceased: false, idNo: "S-025", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                {id: "haiton", nameBn: "হাইতন", nameEn: "Haiton", gender: "female", isDeceased: false, idNo: "S-026", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                            ]
                        },
                        {
                            id: "peyar", nameBn: "পেয়ার সর্দার", nameEn: "Peyar Sardar", gender: "male", isDeceased: false, idNo: "S-027", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                            children: [
                                {
                                    id: "janu", nameBn: "জানু সর্দার", nameEn: "Janu Sardar", gender: "male", isDeceased: false, idNo: "S-028", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "jamshed", nameBn: "জামশেদ সর্দার", nameEn: "Jamshed Sardar", gender: "male", isDeceased: false, idNo: "S-029", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "mahabul_jamshed", nameBn: "মাহাবুল সর্দার", nameEn: "Mahabul Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jamshed", nameBn: "জামশেদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "liton_jamshed", nameBn: "লিটন সর্দার", nameEn: "Liton Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jamshed", nameBn: "জামশেদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "milon_jamshed", nameBn: "মিলন সর্দার", nameEn: "Milon Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jamshed", nameBn: "জামশেদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "sujon_jamshed", nameBn: "সুজন সর্দার", nameEn: "Sujon Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jamshed", nameBn: "জামশেদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "tamashi_jamshed", nameBn: "তামাশি", nameEn: "Tamashi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jamshed", nameBn: "জামশেদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "fulu_jan", nameBn: "ফুলু জান", nameEn: "Fulu Jan", gender: "female", isDeceased: false, idNo: "S-030", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "majeda", nameBn: "মাজেদা খাতুন", nameEn: "Majeda Khatun", gender: "female", isDeceased: false, idNo: "S-031", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "lulu_jan", nameBn: "লুলু জান", nameEn: "Lulu Jan", gender: "female", isDeceased: false, idNo: "S-032", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "khodijan", nameBn: "খদিজান", nameEn: "Khodijan", gender: "female", isDeceased: false, idNo: "S-033", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "haran", nameBn: "হারান সর্দার", nameEn: "Haran Sardar", gender: "male", isDeceased: false, idNo: "S-034", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "jhontu", nameBn: "ঝন্টু সর্দার", nameEn: "Jhontu Sardar", gender: "male", isDeceased: false, idNo: "S-035", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "bokul_jhontu", nameBn: "বকুল সর্দার", nameEn: "Bokul Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jhontu", nameBn: "ঝন্টু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "shipon_jhontu", nameBn: "শিপন সর্দার", nameEn: "Shipon Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jhontu", nameBn: "ঝন্টু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "jhumki_jhontu", nameBn: "ঝুমকি", nameEn: "Jhumki", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jhontu", nameBn: "ঝন্টু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "rekha_jhontu", nameBn: "রেখা", nameEn: "Rekha", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jhontu", nameBn: "ঝন্টু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "siddik", nameBn: "সিদ্দিক সর্দার", nameEn: "Siddik Sardar", gender: "male", isDeceased: false, idNo: "S-036", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "foysal_siddik", nameBn: "ফয়সাল সর্দার", nameEn: "Foysal Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "siddik", nameBn: "সিদ্দিক সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "kausar_siddik", nameBn: "কাউসার সর্দার", nameEn: "Kausar Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "siddik", nameBn: "সিদ্দিক সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "kawser_siddik", nameBn: "শুভ", nameEn: "kawser", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "siddik", nameBn: "সিদ্দিক সর্দার"}, mother: null, specialNote: "৩ নম্বর ছেলে, নাম পরবর্তীতে যোগ করা হবে", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "jahangir", nameBn: "জাহাঙ্গীর সর্দার", nameEn: "Jahangir Sardar", gender: "male", isDeceased: false, idNo: "S-037", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "yamin_jahangir", nameBn: "ইয়ামিন সর্দার", nameEn: "Yamin Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jahangir", nameBn: "জাহাঙ্গীর সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "jannati_jahangir", nameBn: "জান্নাতি", nameEn: "jannati", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jahangir", nameBn: "জাহাঙ্গীর সর্দার"}, mother: null, specialNote: "মেয়ে, নাম পরবর্তীতে যোগ করা হবে", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "komejan", nameBn: "কমেজান", nameEn: "Komejan", gender: "female", isDeceased: false, idNo: "S-038", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "mistujan", nameBn: "মিষ্টুজান", nameEn: "Mistujan", gender: "female", isDeceased: false, idNo: "S-039", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "balijan", nameBn: "বালীজান", nameEn: "Balijan", gender: "female", isDeceased: false, idNo: "S-040", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "jaher", nameBn: "জাহের সর্দার", nameEn: "Jaher Sardar", gender: "male", isDeceased: false, idNo: "S-041", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "sadhu", nameBn: "সাধু সর্দার", nameEn: "Sadhu Sardar", gender: "male", isDeceased: false, idNo: "S-042", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "sayet_sadhu", nameBn: "সায়েত সর্দার", nameEn: "Sayet Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sadhu", nameBn: "সাধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "rayet_sadhu", nameBn: "রায়েত সর্দার", nameEn: "Rayet Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sadhu", nameBn: "সাধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "bithi_sadhu", nameBn: "বিথি", nameEn: "Bithi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sadhu", nameBn: "সাধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "modhu", nameBn: "মধু সর্দার", nameEn: "Modhu Sardar", gender: "male", isDeceased: false, idNo: "S-043", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814875/modu.jpg", gallery: [], children: [{id: "sobooj_modhu", nameBn: "সবুজ সর্দার", nameEn: "Sobooj Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "modhu", nameBn: "মধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "sourav_modhu", nameBn: "সৌরভ সর্দার", nameEn: "Sourav Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "modhu", nameBn: "মধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "mim_modhu", nameBn: "মিম", nameEn: "Mim", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "modhu", nameBn: "মধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "jadu", nameBn: "জাদু সর্দার", nameEn: "Jadu Sardar", gender: "male", isDeceased: false, idNo: "S-044", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "madina", nameBn: "মদিনা", nameEn: "Madina", gender: "female", isDeceased: false, idNo: "S-045", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "morjina", nameBn: "মরজিনা", nameEn: "Morjina", gender: "female", isDeceased: false, idNo: "S-046", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "koriman", nameBn: "করিমন নেছা", nameEn: "Koriman Nesa", gender: "female", isDeceased: false, idNo: "S-047", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "tarajam", nameBn: "তারাজাম", nameEn: "Tarajam", gender: "female", isDeceased: false, idNo: "S-048", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "bhasha", nameBn: "ভাষা সর্দার", nameEn: "Bhasha Sardar", gender: "male", isDeceased: false, idNo: "S-049", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "moja", nameBn: "মোজা সর্দার", nameEn: "Moja Sardar", gender: "male", isDeceased: false, idNo: "S-050", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "sagor_moja", nameBn: "সাগর সর্দার", nameEn: "Sagor Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "moja", nameBn: "মোজা সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "sharmin_moja", nameBn: "শারমিন", nameEn: "Sharmin", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "moja", nameBn: "মোজা সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "sagori_moja", nameBn: "সাগরী", nameEn: "Sagori", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "moja", nameBn: "মোজা সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "moynu", nameBn: "মইনুদ্দিন", nameEn: "Moinuddin", gender: "male", isDeceased: true, idNo: "S-051", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "soukhin_moynu", nameBn: "সৌখিন সর্দার", nameEn: "Soukhin Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "moynu", nameBn: "মইনুদ্দিন"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "tarik_moynu", nameBn: "তারিক সর্দার", nameEn: "Tarik Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "moynu", nameBn: "মইনুদ্দিন"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "nahid_moynu", nameBn: "নাহিদ সর্দার", nameEn: "Nahid Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "moynu", nameBn: "মইনুদ্দিন"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "ziarul", nameBn: "জিয়ারুল সর্দার", nameEn: "Ziarul Sardar", gender: "male", isDeceased: false, idNo: "S-052", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "junaid_ziarul", nameBn: "জুনাইদ সর্দার", nameEn: "Junaid Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ziarul", nameBn: "জিয়ারুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "jubaid_ziarul", nameBn: "জুবাইদ সর্দার", nameEn: "Jubaid Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ziarul", nameBn: "জিয়ারুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "samiyon", nameBn: "সামিয়ন", nameEn: "Samiyon", gender: "female", isDeceased: false, idNo: "S-053", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                }
                            ]
                        },
                        {
                            id: "fokir", nameBn: "ফকির সর্দার", nameEn: "Fokir Sardar", gender: "male", isDeceased: false, idNo: "S-054", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                            children: [
                                {
                                    id: "ajim", nameBn: "আজিম সর্দার", nameEn: "Ajim Sardar", gender: "male", isDeceased: false, idNo: "S-055", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "jalal", nameBn: "জালাল সর্দার", nameEn: "Jalal Sardar", gender: "male", isDeceased: false, idNo: "S-056", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "rayhan_jalal", nameBn: "রায়হান সর্দার", nameEn: "Rayhan Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jalal", nameBn: "জালাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "swadhin_jalal", nameBn: "স্বাধীন সর্দার", nameEn: "Swadhin Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jalal", nameBn: "জালাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "ruziyara_jalal", nameBn: "রুজিয়ারা", nameEn: "Ruziyara", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jalal", nameBn: "জালাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "tripti_jalal", nameBn: "তৃপ্তি", nameEn: "Tripti", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jalal", nameBn: "জালাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "shanti_jalal", nameBn: "শান্তি", nameEn: "Shanti", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jalal", nameBn: "জালাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "zia", nameBn: "জিয়া সর্দার", nameEn: "Zia Sardar", gender: "male", isDeceased: false, idNo: "S-057", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814862/jiya.jpg", gallery: [], children: [{id: "jibon_zia", nameBn: "জীবন সর্দার", nameEn: "Jibon Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "zia", nameBn: "জিয়া সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "hasib_zia", nameBn: "হাসিব সর্দার", nameEn: "Hasib Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "zia", nameBn: "জিয়া সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "rotan", nameBn: "রতন সর্দার", nameEn: "Rotan Sardar", gender: "male", isDeceased: false, idNo: "S-058", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814886/roton.jpg", gallery: [], children: [{id: "rabbi_rotan", nameBn: "রাব্বি সর্দার", nameEn: "Rabbi Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "rotan", nameBn: "রতন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "rafia_rotan", nameBn: "রাফিয়া", nameEn: "Rafia", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "rotan", nameBn: "রতন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "yatan", nameBn: "ইয়াতন", nameEn: "Yatan", gender: "female", isDeceased: false, idNo: "S-059", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "fukun", nameBn: "ফুকন", nameEn: "Fukun", gender: "female", isDeceased: false, idNo: "S-060", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "tuklima", nameBn: "টুকলিমা", nameEn: "Tuklima", gender: "female", isDeceased: true, idNo: "S-061", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "layeb", nameBn: "লায়েব সর্দার", nameEn: "Layeb Sardar", gender: "male", isDeceased: false, idNo: "S-062", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "dulal", nameBn: "দুলাল সর্দার", nameEn: "Dulal Sardar", gender: "male", isDeceased: true, idNo: "S-063", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "shakila_dulal", nameBn: "শাকিলা", nameEn: "Shakila", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "dulal", nameBn: "দুলাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "abida_dulal", nameBn: "আবিদা", nameEn: "Abida", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "dulal", nameBn: "দুলাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "tinni_dulal", nameBn: "তিন্নি", nameEn: "Tinni", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "dulal", nameBn: "দুলাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "alal", nameBn: "আলাল সর্দার", nameEn: "Alal Sardar", gender: "male", isDeceased: false, idNo: "S-064", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "noor_alal", nameBn: "নূর সর্দার", nameEn: "Noor Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "alal", nameBn: "আলাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "abir_alal", nameBn: "আবীর সর্দার", nameEn: "Abir Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "alal", nameBn: "আলাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "helal", nameBn: "হেলাল সর্দার", nameEn: "Helal Sardar", gender: "male", isDeceased: false, idNo: "S-065", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814857/helal.jpg", gallery: [],
                                         children: [{id: "hamza_helal", nameBn: "হামজা সর্দার", nameEn: "Hamza Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "helal", nameBn: "হেলাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "unknown_dau1_helal", nameBn: "অজানা", nameEn: "Unknown", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "helal", nameBn: "হেলাল সর্দার"}, mother: null, specialNote: "মেয়ে, নাম পরবর্তীতে যোগ করা হবে", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "funka", nameBn: "ফুনকা", nameEn: "Funka", gender: "female", isDeceased: false, idNo: "S-066", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "firoza", nameBn: "ফিরোজা", nameEn: "Firoza", gender: "female", isDeceased: false, idNo: "S-067", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                }
                            ]
                        },
                        {id: "abeda", nameBn: "আবেদা খাতুন", nameEn: "Abeda Khatun", gender: "female", isDeceased: false, idNo: "S-068", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                    ]
                },
                {
                    id: "kesu", nameBn: "কেসু সর্দার", nameEn: "Kesu Sardar", gender: "male", isDeceased: false, idNo: "S-069", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                    children: [
                        {
                            id: "asharat", nameBn: "আশারত সর্দার", nameEn: "Asharat Sardar", gender: "male", isDeceased: false, idNo: "S-070", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                            children: [
                                {
                                    id: "kukon", nameBn: "কুকন সর্দার", nameEn: "Kukon Sardar", gender: "male", isDeceased: false, idNo: "S-071", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "hozrat", nameBn: "হযরত সর্দার", nameEn: "Hozrat Sardar", gender: "male", isDeceased: false, idNo: "S-072", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "jhorna_hozrat", nameBn: "ঝর্না সর্দার", nameEn: "Jhorna Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hozrat", nameBn: "হযরত সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "ziarul_hozrat", nameBn: "জিয়ারুল সর্দার", nameEn: "Ziarul Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hozrat", nameBn: "হযরত সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "sharif_hozrat", nameBn: "শরীফ সর্দার", nameEn: "Sharif Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hozrat", nameBn: "হযরত সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "liton_hozrat", nameBn: "লিটন সর্দার", nameEn: "Liton Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hozrat", nameBn: "হযরত সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "saddam_hozrat", nameBn: "সাদ্দাম সর্দার", nameEn: "Saddam Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hozrat", nameBn: "হযরত সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "nargis_hozrat", nameBn: "নার্গিস", nameEn: "Nargis", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hozrat", nameBn: "হযরত সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "parula_hozrat", nameBn: "পারুলা", nameEn: "Parula", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hozrat", nameBn: "হযরত সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "unknown_dau1_hozrat", nameBn: "অজানা", nameEn: "Unknown", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hozrat", nameBn: "হযরত সর্দার"}, mother: null, specialNote: "মেয়ে, নাম পরবর্তীতে যোগ করা হবে", profilePhoto: "", gallery: [], children: []},
        {id: "unknown_dau2_hozrat", nameBn: "অজানা", nameEn: "Unknown", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hozrat", nameBn: "হযরত সর্দার"}, mother: null, specialNote: "মেয়ে, নাম পরবর্তীতে যোগ করা হবে", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "hafez", nameBn: "হাফেজ সর্দার", nameEn: "Hafez Sardar", gender: "male", isDeceased: false, idNo: "S-073", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814857/hafej.jpg", gallery: [], children: [{id: "sonman_hafez", nameBn: "সন্মান সর্দার", nameEn: "Sonman Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hafez", nameBn: "হাফেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "molina_hafez", nameBn: "মলিনা", nameEn: "Molina", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hafez", nameBn: "হাফেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "shahbaz", nameBn: "শাহবাজ সর্দার", nameEn: "Shahbaz Sardar", gender: "male", isDeceased: false, idNo: "S-074", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "sunarul_shahbaz", nameBn: "সুনারুল সর্দার", nameEn: "Sunarul Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "shahbaz", nameBn: "শাহবাজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "arif_shahbaz", nameBn: "আরিফ সর্দার", nameEn: "Arif Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "shahbaz", nameBn: "শাহবাজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "shaheen_shahbaz", nameBn: "শাহীন সর্দার", nameEn: "Shaheen Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "shahbaz", nameBn: "শাহবাজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "dipa_shahbaz", nameBn: "দীপা", nameEn: "Dipa", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "shahbaz", nameBn: "শাহবাজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "sorejan", nameBn: "শরেজান", nameEn: "Sorejan", gender: "female", isDeceased: false, idNo: "S-075", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "mina", nameBn: "মীনা", nameEn: "Mina", gender: "female", isDeceased: false, idNo: "S-076", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "foima", nameBn: "ফইমা", nameEn: "Foima", gender: "female", isDeceased: false, idNo: "S-077", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "sukhejan", nameBn: "সুখেজান", nameEn: "Sukhejan", gender: "female", isDeceased: false, idNo: "S-078", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "monjura", nameBn: "মঞ্জুরা", nameEn: "Monjura", gender: "female", isDeceased: false, idNo: "S-079", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "elahi", nameBn: "এলাহী সর্দার", nameEn: "Elahi Sardar", gender: "male", isDeceased: false, idNo: "S-080", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "idris", nameBn: "ইদ্রিস সর্দার", nameEn: "Idris Sardar", gender: "male", isDeceased: false, idNo: "S-081", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "bellal_idris", nameBn: "বেল্লাল সর্দার", nameEn: "Bellal Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "idris", nameBn: "ইদ্রিস সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "setu_idris", nameBn: "সেতু", nameEn: "Setu", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "idris", nameBn: "ইদ্রিস সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "hasi_idris", nameBn: "হাসি", nameEn: "Hasi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "idris", nameBn: "ইদ্রিস সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "khushi_idris", nameBn: "খুশি", nameEn: "Khushi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "idris", nameBn: "ইদ্রিস সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "alam", nameBn: "আলম সর্দার", nameEn: "Alam Sardar", gender: "male", isDeceased: false, idNo: "S-082", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814856/alom.jpg", gallery: [], children: [{id: "shimul_alam", nameBn: "শিমুল সর্দার", nameEn: "Shimul Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "alam", nameBn: "আলম সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "komol_alam", nameBn: "কমল সর্দার", nameEn: "Komol Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "alam", nameBn: "আলম সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "ayesha_alam", nameBn: "আয়েশা", nameEn: "Ayesha", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "alam", nameBn: "আলম সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "aulad", nameBn: "আউলাদ সর্দার", nameEn: "Aulad Sardar", gender: "male", isDeceased: false, idNo: "S-083", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814857/awlad.jpg", gallery: [], children: [{id: "sojol_aulad", nameBn: "সজল সর্দার", nameEn: "Sojol Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "aulad", nameBn: "আউলাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "poli_aulad", nameBn: "পলি", nameEn: "Poli", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "aulad", nameBn: "আউলাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "doli_aulad", nameBn: "ডলি", nameEn: "Doli", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "aulad", nameBn: "আউলাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "sopna_aulad", nameBn: "স্বপ্না", nameEn: "Sopna", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "aulad", nameBn: "আউলাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "ilef", nameBn: "ইলেফ সর্দার", nameEn: "Ilef Sardar", gender: "male", isDeceased: false, idNo: "S-084", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "alamin_ilef", nameBn: "আল আমিন সর্দার", nameEn: "Al Amin Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ilef", nameBn: "ইলেফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "alpona_ilef", nameBn: "আলপনা", nameEn: "Alpona", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ilef", nameBn: "ইলেফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "borsha_ilef", nameBn: "বর্ষা", nameEn: "Borsha", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ilef", nameBn: "ইলেফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "zaharun", nameBn: "জাহারন", nameEn: "Zaharun", gender: "female", isDeceased: false, idNo: "S-085", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "tuhura1", nameBn: "তহুরা", nameEn: "Tuhura", gender: "female", isDeceased: false, idNo: "S-086", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "khaleda", nameBn: "খালেদা", nameEn: "Khaleda", gender: "female", isDeceased: false, idNo: "S-087", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                }
                            ]
                        },
                        {
                            id: "bosharat", nameBn: "বসারত সর্দার", nameEn: "Bosharat Sardar", gender: "male", isDeceased: false, idNo: "S-088", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                            children: [
                                {
                                    id: "shukot", nameBn: "শুকট সর্দার", nameEn: "Shukot Sardar", gender: "male", isDeceased: false, idNo: "S-089", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "habil", nameBn: "হাবিল সর্দার", nameEn: "Habil Sardar", gender: "male", isDeceased: true, idNo: "S-090", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "lalon_habil", nameBn: "লালন সর্দার", nameEn: "Lalon Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "habil", nameBn: "হাবিল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "swapon_habil", nameBn: "স্বপন সর্দার", nameEn: "Swapon Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "habil", nameBn: "হাবিল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "hanif", nameBn: "হানিফ সর্দার", nameEn: "Hanif Sardar", gender: "male", isDeceased: true, idNo: "S-091", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "badal_hanif", nameBn: "বাদল সর্দার", nameEn: "Badal Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hanif", nameBn: "হানিফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "borsha_hanif", nameBn: "বর্ষা", nameEn: "Borsha", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hanif", nameBn: "হানিফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "brishti_hanif", nameBn: "বৃষ্টি", nameEn: "Brishti", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hanif", nameBn: "হানিফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "bojlu", nameBn: "বজলু সর্দার", nameEn: "Bojlu Sardar", gender: "male", isDeceased: false, idNo: "S-092", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "sojib_bojlu", nameBn: "সজীব সর্দার", nameEn: "Sojib Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "bojlu", nameBn: "বজলু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "unknown_dead_dau1_bojlu", nameBn: "অজানা", nameEn: "Unknown", gender: "female", isDeceased: true, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "bojlu", nameBn: "বজলু সর্দার"}, mother: null, specialNote: "মৃত মেয়ে, নাম অজানা", profilePhoto: "", gallery: [], children: []},
        {id: "sania_bojlu", nameBn: "সানিয়া", nameEn: "Sania", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "bojlu", nameBn: "বজলু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "kabil", nameBn: "কাবিল সর্দার", nameEn: "Kabil Sardar", gender: "male", isDeceased: false, idNo: "S-093", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "shipon_kabil", nameBn: "শিপন সর্দার", nameEn: "Shipon Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kabil", nameBn: "কাবিল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "unknown_son1_kabil", nameBn: "অজানা", nameEn: "Unknown", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kabil", nameBn: "কাবিল সর্দার"}, mother: null, specialNote: "ছেলে, নাম পরবর্তীতে যোগ করা হবে", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "maleka", nameBn: "মালেকা", nameEn: "Maleka", gender: "female", isDeceased: false, idNo: "S-094", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "hima", nameBn: "হিমা", nameEn: "Hima", gender: "female", isDeceased: false, idNo: "S-095", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "nima", nameBn: "নিমা", nameEn: "Nima", gender: "female", isDeceased: false, idNo: "S-096", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "jolil", nameBn: "জলিল সর্দার", nameEn: "Jolil Sardar", gender: "male", isDeceased: false, idNo: "S-097", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "mannan", nameBn: "মান্নান সর্দার", nameEn: "Mannan Sardar", gender: "male", isDeceased: false, idNo: "S-098", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "roni_mannan", nameBn: "রনি সর্দার", nameEn: "Roni Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mannan", nameBn: "মান্নান সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "abdur_rahman_mannan", nameBn: "আব্দুর রহমান সর্দার", nameEn: "Abdur Rahman Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mannan", nameBn: "মান্নান সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "azmira_mannan", nameBn: "আজমিরা", nameEn: "Azmira", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mannan", nameBn: "মান্নান সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "shikha_mannan", nameBn: "শিখা", nameEn: "Shikha", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mannan", nameBn: "মান্নান সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "dipa_mannan", nameBn: "দীপা", nameEn: "Dipa", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mannan", nameBn: "মান্নান সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "sadhu2", nameBn: "সাধু সর্দার", nameEn: "Sadhu Sardar", gender: "male", isDeceased: false, idNo: "S-099", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "sahabi_sadhu2", nameBn: "সাহাবি সর্দার", nameEn: "Sahabi Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sadhu2", nameBn: "সাধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "imran_sadhu2", nameBn: "ইমরান সর্দার", nameEn: "Imran Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sadhu2", nameBn: "সাধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "yusuf_sadhu2", nameBn: "ইউসুফ সর্দার", nameEn: "Yusuf Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sadhu2", nameBn: "সাধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "soniyara_sadhu2", nameBn: "ছনিয়ারা", nameEn: "Soniyara", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sadhu2", nameBn: "সাধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "sumi_sadhu2", nameBn: "সুমি", nameEn: "Sumi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sadhu2", nameBn: "সাধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "modhu2", nameBn: "মধু সর্দার", nameEn: "Modhu Sardar", gender: "male", isDeceased: false, idNo: "S-100", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "mustakim_modhu2", nameBn: "মুস্তাকিম সর্দার", nameEn: "Mustakim Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "modhu2", nameBn: "মধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "marium_modhu2", nameBn: "মরিয়ম", nameEn: "Marium", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "modhu2", nameBn: "মধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "tanha_modhu2", nameBn: "তানহা", nameEn: "Tanha", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "modhu2", nameBn: "মধু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "anura", nameBn: "আনুরা", nameEn: "Anura", gender: "female", isDeceased: true, idNo: "S-101", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "nahera", nameBn: "নাহেরা", nameEn: "Nahera", gender: "female", isDeceased: false, idNo: "S-102", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "fonuara", nameBn: "ফনুয়ারা", nameEn: "Fonuara", gender: "female", isDeceased: true, idNo: "S-103", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                      id: "mohir", nameBn: "মহির সর্দার", nameEn: "Mohir Sardar", gender: "male", isDeceased: false, idNo: "S-104", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                      children: [
                                          {id: "kamruzzaman", nameBn: "কামরুজ্জামান", nameEn: "Kamruzzaman", gender: "male", isDeceased: false, idNo: "S-105", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "tuhin_kamruzzaman", nameBn: "তুহিন", nameEn: "Tuhin", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kamruzzaman", nameBn: "কামরুজ্জামান"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "noyon_kamruzzaman", nameBn: "নয়ন", nameEn: "Noyon", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kamruzzaman", nameBn: "কামরুজ্জামান"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "tushar_kamruzzaman", nameBn: "তূষার", nameEn: "Tushar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kamruzzaman", nameBn: "কামরুজ্জামান"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "tonmoy_kamruzzaman", nameBn: "তন্ময়", nameEn: "Tonmoy", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kamruzzaman", nameBn: "কামরুজ্জামান"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                          {id: "shofikul", nameBn: "শফিকুল সর্দার", nameEn: "Shofikul Sardar", gender: "male", isDeceased: false, idNo: "S-106", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "lion_shofikul", nameBn: "লিওন", nameEn: "Lion", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "shofikul", nameBn: "শফিকুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "lithiyara_shofikul", nameBn: "লিথীয়ারা", nameEn: "Lithiyara", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "shofikul", nameBn: "শফিকুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                          {id: "nasima", nameBn: "নাসিমা", nameEn: "Nasima", gender: "female", isDeceased: false, idNo: "S-107", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                          {id: "modon", nameBn: "মদন", nameEn: "Modon", gender: "female", isDeceased: false, idNo: "S-108", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                          {id: "laki", nameBn: "লাকি", nameEn: "Laki", gender: "female", isDeceased: false, idNo: "S-109", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                          {id: "roksana", nameBn: "রোকসানা", nameEn: "Roksana", gender: "female", isDeceased: false, idNo: "S-110", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                      ]
                                },
                                {id: "parijan", nameBn: "পরিজান", nameEn: "Parijan", gender: "female", isDeceased: false, idNo: "S-111", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                {id: "jomela", nameBn: "জমেলা", nameEn: "Jomela", gender: "female", isDeceased: false, idNo: "S-112", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                            ]
                        },
                        {
                            id: "bhugol", nameBn: "ভুগল সর্দার", nameEn: "Bhugol Sardar", gender: "male", isDeceased: false, idNo: "S-113", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                            children: [
                                {
                                    id: "subol", nameBn: "সুবল সর্দার", nameEn: "Subol Sardar", gender: "male", isDeceased: false, idNo: "S-114", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "moylal", nameBn: "ময়লাল সর্দার", nameEn: "Moylal Sardar", gender: "male", isDeceased: false, idNo: "S-115", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814875/moylal.jpg", gallery: [], children: [{id: "ahar_moylal", nameBn: "আহার সর্দার", nameEn: "Ahar Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "moylal", nameBn: "ময়লাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "bahar_moylal", nameBn: "বাহার সর্দার", nameEn: "Bahar Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "moylal", nameBn: "ময়লাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "kamrul_moylal", nameBn: "কামরুল সর্দার", nameEn: "Kamrul Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "moylal", nameBn: "ময়লাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "sohagi_moylal", nameBn: "সহাগী", nameEn: "Sohagi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "moylal", nameBn: "ময়লাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "bedena_moylal", nameBn: "বেদেনা", nameEn: "Bedena", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "moylal", nameBn: "ময়লাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "hobibar", nameBn: "হবিবার সর্দার", nameEn: "Hobibar Sardar", gender: "male", isDeceased: false, idNo: "S-116", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814863/IMG_4113.jpg", gallery: [], children: [{id: "hasan_hobibar", nameBn: "হাসান সর্দার", nameEn: "Hasan Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hobibar", nameBn: "হবিবার সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "hasmat_hobibar", nameBn: "হাসমত সর্দার", nameEn: "Hasmat Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hobibar", nameBn: "হবিবার সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "rojina_hobibar", nameBn: "রজিনা", nameEn: "Rojina", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hobibar", nameBn: "হবিবার সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "arjina_hobibar", nameBn: "আরজিনা", nameEn: "Arjina", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hobibar", nameBn: "হবিবার সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "hosneyara_hobibar", nameBn: "হোসনেয়ারা", nameEn: "Hosneyara", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hobibar", nameBn: "হবিবার সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "motali", nameBn: "মতালি সর্দার", nameEn: "Motali Sardar", gender: "male", isDeceased: false, idNo: "S-117", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814870/motali.jpg", gallery: [], children: [{id: "rajib_motali", nameBn: "রাজিব সর্দার", nameEn: "Rajib Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "motali", nameBn: "মতালি সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "sobuj_motali", nameBn: "সবুজ সর্দার", nameEn: "Sobuj Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "motali", nameBn: "মতালি সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "soyon_motali", nameBn: "সয়ন সর্দার", nameEn: "Soyon Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "motali", nameBn: "মতালি সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "mizanur_motali", nameBn: "মিজানুর সর্দার", nameEn: "Mizanur Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "motali", nameBn: "মতালি সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "lota", nameBn: "লতা জান", nameEn: "Lota Jan", gender: "female", isDeceased: false, idNo: "S-118", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "khorki", nameBn: "খরকি", nameEn: "Khorki", gender: "female", isDeceased: false, idNo: "S-119", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "sohura", nameBn: "সহুরা", nameEn: "Sohura", gender: "female", isDeceased: false, idNo: "S-120", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "mojiborr", nameBn: "মজিবর সর্দার", nameEn: "Mojiborr Sardar", gender: "male", isDeceased: false, idNo: "S-121", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "nazrul", nameBn: "নজরুল সর্দার", nameEn: "Nazrul Sardar", gender: "male", isDeceased: false, idNo: "S-122", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814875/noju.jpg", gallery: [], children: [{id: "ashikul_nazrul", nameBn: "আশিকুল সর্দার", nameEn: "Ashikul Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "nazrul", nameBn: "নজরুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "limon_nazrul", nameBn: "লিমন সর্দার", nameEn: "Limon Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "nazrul", nameBn: "নজরুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "nijhum_nazrul", nameBn: "নিঝুম", nameEn: "Nijhum", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "nazrul", nameBn: "নজরুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "jalal2", nameBn: "জালাল সর্দার", nameEn: "Jalal Sardar", gender: "male", isDeceased: false, idNo: "S-123", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814865/jalal_vt.jpg", gallery: [], children: [{id: "rabbi_jalal2", nameBn: "রাব্বি সর্দার", nameEn: "Rabbi Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jalal2", nameBn: "জালাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "jashiya_jalal2", nameBn: "জাশিয়া", nameEn: "Jashiya", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jalal2", nameBn: "জালাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "jami_jalal2", nameBn: "জ্যামি", nameEn: "Jami", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jalal2", nameBn: "জালাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "kamal", nameBn: "কামাল সর্দার", nameEn: "Kamal Sardar", gender: "male", isDeceased: false, idNo: "S-124", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "nirob_kamal", nameBn: "নিরব সর্দার", nameEn: "Nirob Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kamal", nameBn: "কামাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "tabassum_kamal", nameBn: "তাবাস্সুম", nameEn: "Tabassum", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kamal", nameBn: "কামাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "kaifa_kamal", nameBn: "কাইফা", nameEn: "Kaifa", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kamal", nameBn: "কামাল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "ahad", nameBn: "আহাদ সর্দার", nameEn: "Ahad Sardar", gender: "male", isDeceased: false, idNo: "S-125", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "junaid_ahad", nameBn: "জুনাইদ সর্দার", nameEn: "Junaid Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ahad", nameBn: "আহাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "ayesha_ahad", nameBn: "আয়েশা", nameEn: "Ayesha", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ahad", nameBn: "আহাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [] , children: []}
    ]},
                                        {id: "monowara", nameBn: "মনোয়ারা", nameEn: "Monowara", gender: "female", isDeceased: false, idNo: "S-126", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "toslima", nameBn: "তসলিমা", nameEn: "Toslima", gender: "female", isDeceased: false, idNo: "S-127", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "shadhina", nameBn: "স্বাধীনা", nameEn: "Shadhina", gender: "female", isDeceased: false, idNo: "S-128", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "mokles", nameBn: "মকলেস সর্দার", nameEn: "Mokles Sardar", gender: "male", isDeceased: false, idNo: "S-129", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "akman", nameBn: "আকমান সর্দার", nameEn: "Akman Sardar", gender: "male", isDeceased: false, idNo: "S-130", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814856/akman.jpg", gallery: [], children: [{id: "ismail_akman", nameBn: "ইসমাইল সর্দার", nameEn: "Ismail Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "akman", nameBn: "আকমান সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "luton_akman", nameBn: "লুটন সর্দার", nameEn: "Luton Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "akman", nameBn: "আকমান সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "rokon_akman", nameBn: "রোকন সর্দার", nameEn: "Rokon Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "akman", nameBn: "আকমান সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "ashura_akman", nameBn: "আশুরা", nameEn: "Ashura", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "akman", nameBn: "আকমান সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "ingraj", nameBn: "ইংরাজ সর্দার", nameEn: "Ingraj Sardar", gender: "male", isDeceased: false, idNo: "S-131", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "mirajul_ingraj", nameBn: "মিরাজুল সর্দার", nameEn: "Mirajul Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ingraj", nameBn: "ইংরাজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "machura_ingraj", nameBn: "মাছুরা", nameEn: "Machura", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ingraj", nameBn: "ইংরাজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "yakub", nameBn: "ইয়াকুব সর্দার", nameEn: "Yakub Sardar", gender: "male", isDeceased: false, idNo: "S-132", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "rifat_yakub", nameBn: "রিফাত সর্দার", nameEn: "Rifat Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "yakub", nameBn: "ইয়াকুব সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "rafia_yakub", nameBn: "রাফিয়া", nameEn: "Rafia", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "yakub", nameBn: "ইয়াকুব সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "anarul", nameBn: "আনারুল সর্দার", nameEn: "Anarul Sardar", gender: "male", isDeceased: false, idNo: "S-133", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "anik_anarul", nameBn: "আনিক সর্দার", nameEn: "Anik Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "anarul", nameBn: "আনারুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "ontora_anarul", nameBn: "অন্তরা", nameEn: "Ontora", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "anarul", nameBn: "আনারুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "rese", nameBn: "রেসে", nameEn: "Rese", gender: "female", isDeceased: false, idNo: "S-134", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "rushy", nameBn: "রুশি", nameEn: "Rushy", gender: "female", isDeceased: false, idNo: "S-135", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "farida", nameBn: "ফরিদা", nameEn: "Farida", gender: "female", isDeceased: true, idNo: "S-136", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "firo", nameBn: "ফিরো", nameEn: "Firo", gender: "female", isDeceased: false, idNo: "S-137", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "saru", nameBn: "সারু সর্দার", nameEn: "Saru Sardar", gender: "male", isDeceased: false, idNo: "S-138", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "yadul", nameBn: "ইয়াদুল সর্দার", nameEn: "Yadul Sardar", gender: "male", isDeceased: false, idNo: "S-139", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814861/idul.jpg", gallery: [], children: [{id: "naim_yadul", nameBn: "নাইম সর্দার", nameEn: "Naim Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "yadul", nameBn: "ইয়াদুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "sakib_yadul", nameBn: "সাকিব সর্দার", nameEn: "Sakib Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "yadul", nameBn: "ইয়াদুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "yunus", nameBn: "ইউনুস সর্দার", nameEn: "Yunus Sardar", gender: "male", isDeceased: false, idNo: "S-140", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814883/younus.jpg", gallery: [], children: [{id: "yusuf_yunus", nameBn: "ইউসুফ সর্দার", nameEn: "yusuf Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "yunus", nameBn: "ইউনুস সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "beneyamin", nameBn: "বেনেয়ামিন", nameEn: "Beneyamin", gender: "male", isDeceased: true, idNo: "S-141", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "ranjana", nameBn: "রঞ্জনা", nameEn: "Ranjana", gender: "female", isDeceased: false, idNo: "S-142", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "merina", nameBn: "মেরিনা", nameEn: "Merina", gender: "female", isDeceased: false, idNo: "S-143", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {id: "rohima", nameBn: "রহিমা", nameEn: "Rohima", gender: "female", isDeceased: false, idNo: "S-144", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                {id: "zayeda", nameBn: "জায়েদা", nameEn: "Zayeda", gender: "female", isDeceased: false, idNo: "S-145", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                {id: "joygon", nameBn: "জয়গন নেসা", nameEn: "Joygon Nesa", gender: "female", isDeceased: false, idNo: "S-146", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                            ]
                        },
                        {
                            id: "koser", nameBn: "কসের সর্দার", nameEn: "Koser Sardar", gender: "male", isDeceased: false, idNo: "S-147", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                            children: [
                                {
                                    id: "khalil", nameBn: "খলিল সর্দার", nameEn: "Khalil Sardar", gender: "male", isDeceased: false, idNo: "S-148", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "refej", nameBn: "রেফেজ সর্দার", nameEn: "Refej Sardar", gender: "male", isDeceased: false, idNo: "S-149", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814881/refej.jpg", gallery: [], children: [{id: "atiyar_refej", nameBn: "আতিয়ার সর্দার", nameEn: "Atiyar Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "refej", nameBn: "রেফেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "shanto_refej", nameBn: "শান্ত সর্দার", nameEn: "Shanto Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "refej", nameBn: "রেফেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "shyamoli_refej", nameBn: "শ্যামলি", nameEn: "Shyamoli", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "refej", nameBn: "রেফেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "taniya_refej", nameBn: "তানিয়া", nameEn: "Taniya", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "refej", nameBn: "রেফেজ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "kubir", nameBn: "কুবির সর্দার", nameEn: "Kubir Sardar", gender: "male", isDeceased: false, idNo: "S-150", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "faruk_kubir", nameBn: "ফারুক সর্দার", nameEn: "Faruk Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kubir", nameBn: "কুবির সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "osman_kubir", nameBn: "ওসমান সর্দার", nameEn: "Osman Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kubir", nameBn: "কুবির সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "kaif_kubir", nameBn: "কাইফ সর্দার", nameEn: "Kaif Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kubir", nameBn: "কুবির সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "abu_bakar_kubir", nameBn: "আবু বকর সর্দার", nameEn: "Abu Bakar Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kubir", nameBn: "কুবির সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "jumir", nameBn: "জুমির সর্দার", nameEn: "Jumir Sardar", gender: "male", isDeceased: false, idNo: "S-151", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814868/jumir.jpg", gallery: [], children: [{id: "zahid_jumir", nameBn: "জাহিদ সর্দার", nameEn: "Zahid Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jumir", nameBn: "জুমির সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "nahid_jumir", nameBn: "নাহিদ সর্দার", nameEn: "Nahid Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jumir", nameBn: "জুমির সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "mursalin_jumir", nameBn: "মুরসালিন সর্দার", nameEn: "Mursalin Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jumir", nameBn: "জুমির সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "irfan_jumir", nameBn: "ইরফান সর্দার", nameEn: "Irfan Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jumir", nameBn: "জুমির সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "shajuddi", nameBn: "শাইজুদ্দি", nameEn: "Shajuddi", gender: "male", isDeceased: false, idNo: "S-152", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "nasim_shajuddi", nameBn: "নাসিম সর্দার", nameEn: "Nasim Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "shajuddi", nameBn: "শাইজুদ্দি"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "abu_said_shajuddi", nameBn: "আবু সাঈদ সর্দার", nameEn: "Abu Said Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "shajuddi", nameBn: "শাইজুদ্দি"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "sadiya_shajuddi", nameBn: "সাদিয়া", nameEn: "Sadiya", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "shajuddi", nameBn: "শাইজুদ্দি"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "raziya", nameBn: "রাজিয়া", nameEn: "Raziya", gender: "female", isDeceased: true, idNo: "S-153", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "nurl", nameBn: "নুরল সর্দার", nameEn: "Nurl Sardar", gender: "male", isDeceased: false, idNo: "S-154", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "waris", nameBn: "ওয়ারিস সর্দার", nameEn: "Waris Sardar", gender: "male", isDeceased: false, idNo: "S-155", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "mahirul_waris", nameBn: "মাহিরুল সর্দার", nameEn: "Mahirul Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "waris", nameBn: "ওয়ারিস সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "papiya_waris", nameBn: "পাপিয়া", nameEn: "Papiya", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "waris", nameBn: "ওয়ারিস সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    
]},
                                        {id: "idris2", nameBn: "ইদ্রিস সর্দার", nameEn: "Idris Sardar", gender: "male", isDeceased: false, idNo: "S-156", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814858/idris.jpg", gallery: [], children: [{id: "siddik_idris2", nameBn: "সিদ্দিক সর্দার", nameEn: "Siddik Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "idris2", nameBn: "ইদ্রিস সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "polash_idris2", nameBn: "পলাশ সর্দার", nameEn: "Polash Sardar", gender: "male", isDeceased: true, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "idris2", nameBn: "ইদ্রিস সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "priyanka_idris2", nameBn: "প্রিয়াংকা", nameEn: "Priyanka", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "idris2", nameBn: "ইদ্রিস সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "apil", nameBn: "আপিল সর্দার", nameEn: "Apil Sardar", gender: "male", isDeceased: false, idNo: "S-157", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "muhammad_apil", nameBn: "মুহাম্মাদ সর্দার", nameEn: "Muhammad Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "apil", nameBn: "আপিল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "lija_apil", nameBn: "লিজা", nameEn: "Lija", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "apil", nameBn: "আপিল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "niharul", nameBn: "নিহারুল সর্দার", nameEn: "Niharul Sardar", gender: "male", isDeceased: false, idNo: "S-158", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814874/niharul.jpg", gallery: [], children: [// মেয়েগণ
        {id: "khadija_niharul", nameBn: "খাদিজা", nameEn: "Khadija", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "niharul", nameBn: "নিহারুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "kulsum_niharul", nameBn: "কুলসুম", nameEn: "Kulsum", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "niharul", nameBn: "নিহারুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "samiya_niharul", nameBn: "সামিয়া", nameEn: "Samiya", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "niharul", nameBn: "নিহারুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]}
                                    ]
                                },
                                {
                                    id: "alim", nameBn: "আলিম সর্দার", nameEn: "Alim Sardar", gender: "male", isDeceased: false, idNo: "S-159", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "ujjwal", nameBn: "উজ্জ্বল সর্দার", nameEn: "Ujjwal Sardar", gender: "male", isDeceased: false, idNo: "S-160", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "sakib_ujjwal", nameBn: "সাকিব সর্দার", nameEn: "Sakib Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ujjwal", nameBn: "উজ্জ্বল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "sabit_ujjwal", nameBn: "সাবিত সর্দার", nameEn: "Sabit Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ujjwal", nameBn: "উজ্জ্বল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "ayesha_ujjwal", nameBn: "আয়েশা", nameEn: "Ayesha", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ujjwal", nameBn: "উজ্জ্বল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "rofikul", nameBn: "রফিকুল সর্দার", nameEn: "Rofikul Sardar", gender: "male", isDeceased: false, idNo: "S-161", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814880/rofikul.jpg", gallery: [], children: [{id: "omor_rofikul", nameBn: "ওমর সর্দার", nameEn: "Omor Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "rofikul", nameBn: "রফিকুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "nirob_rofikul", nameBn: "নীরব সর্দার", nameEn: "Nirob Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "rofikul", nameBn: "রফিকুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "rafsan_rofikul", nameBn: "রাফসান সর্দার", nameEn: "Rafsan Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "rofikul", nameBn: "রফিকুল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "hesab", nameBn: "হিসাব সর্দার", nameEn: "Hesab Sardar", gender: "male", isDeceased: false, idNo: "S-162", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814857/hisab.jpg", gallery: [], children: [{id: "nafim_hesab", nameBn: "নাফিম সর্দার", nameEn: "Nafim Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hesab", nameBn: "হিসাব সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "hafsa_hesab", nameBn: "হাফসা", nameEn: "Hafsa", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hesab", nameBn: "হিসাব সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]}
                                    ]
                                },
           {
    id: "tofezzol", 
    nameBn: "তফেজ্জল সর্দার", 
    nameEn: "Tofezzol Sardar", 
    gender: "male", 
    isDeceased: false, 
    idNo: "S-163", 
    dob: "অজানা", 
    dod: "অজানা", 
    birthPlace: "অজানা", 
    currentAddress: "অজানা", 
    occupation: "অজানা", 
    education: "অজানা", 
    mobile: "N/A", 
    bloodGroup: "N/A", 
    maritalStatus: "অজানা", 
    spouse: null, 
    father: null, 
    mother: null, 
    specialNote: "", 
    profilePhoto: "", 
    gallery: [],
    children: [
        {
            id: "mohon", 
            nameBn: "মহন সর্দার", 
            nameEn: "Mohon Sardar", 
            gender: "male", 
            isDeceased: false, 
            idNo: "S-164", 
            dob: "অজানা", 
            dod: "অজানা", 
            birthPlace: "অজানা", 
            currentAddress: "অজানা", 
            occupation: "অজানা", 
            education: "অজানা", 
            mobile: "N/A", 
            bloodGroup: "N/A", 
            maritalStatus: "অজানা", 
            spouse: null, 
            father: {id: "tofezzol", nameBn: "তফেজ্জল সর্দার"}, 
            mother: null, 
            specialNote: "", 
            profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814868/mohon.jpg", 
            gallery: [], 
            children: [
                {id: "maria_mohon", nameBn: "মারিয়া", nameEn: "Maria", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mohon", nameBn: "মহন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                {id: "mahi_mohon", nameBn: "মাহি", nameEn: "Mahi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mohon", nameBn: "মহন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                {id: "maisha_mohon", nameBn: "মাইশা", nameEn: "Maisha", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mohon", nameBn: "মহন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                {id: "masfiya_mohon", nameBn: "মাসফিয়া", nameEn: "Masfiya", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mohon", nameBn: "মহন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
            ]
        },
        {
            id: "koron", 
            nameBn: "করণ সর্দার", 
            nameEn: "Koron Sardar", 
            gender: "male", 
            isDeceased: false, 
            idNo: "S-165", 
            dob: "অজানা", 
            dod: "অজানা", 
            birthPlace: "অজানা", 
            currentAddress: "অজানা", 
            occupation: "অজানা", 
            education: "অজানা", 
            mobile: "N/A", 
            bloodGroup: "N/A", 
            maritalStatus: "অজানা", 
            spouse: null, 
            father: {id: "tofezzol", nameBn: "তফেজ্জল সর্দার"}, 
            mother: null, 
            specialNote: "", 
            profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814866/koron.jpg", 
            gallery: [], 
            children: [
                {id: "abdullah_koron", nameBn: "আব্দুল্লাহ সর্দার", nameEn: "Abdullah Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "koron", nameBn: "করণ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                {id: "humaira_koron", nameBn: "হুমাইরা", nameEn: "Humaira", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "koron", nameBn: "করণ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
            ]
        },
        {id: "rokiya", nameBn: "রফিয়া", nameEn: "Rofiya", gender: "female", isDeceased: false, idNo: "S-166", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "tofezzol", nameBn: "তফেজ্জল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "tuhura2", nameBn: "তহুরা", nameEn: "Tuhura", gender: "female", isDeceased: false, idNo: "S-167", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "tofezzol", nameBn: "তফেজ্জল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "tahera", nameBn: "তাহেরা", nameEn: "Tahera", gender: "female", isDeceased: false, idNo: "S-168", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "tofezzol", nameBn: "তফেজ্জল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "sultana", nameBn: "সুলতানা", nameEn: "Sultana", gender: "female", isDeceased: false, idNo: "S-169", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "tofezzol", nameBn: "তফেজ্জল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]
},                      {id: "romela", nameBn: "রমেলা খাতুন", nameEn: "Romela Khatun", gender: "female", isDeceased: false, idNo: "S-170", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                            ]
                        },
                        {
                            id: "iman_ali", nameBn: "ইমান আলী সর্দার", nameEn: "Iman Ali Sardar", gender: "male", isDeceased: false, idNo: "S-171", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                            children: [
                                {
                                    id: "soleman", nameBn: "সলেমান সর্দার", nameEn: "Soleman Sardar", gender: "male", isDeceased: false, idNo: "S-172", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "pentu", nameBn: "পেন্টু সর্দার", nameEn: "Pentu Sardar", gender: "male", isDeceased: false, idNo: "S-173", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "mustakim_pentu", nameBn: "মুস্তাকিম সর্দার", nameEn: "Mustakim Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "pentu", nameBn: "পেন্টু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "sentu", nameBn: "সেন্টু সর্দার", nameEn: "Sentu Sardar", gender: "male", isDeceased: false, idNo: "S-174", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "saddam_sentu", nameBn: "সাদ্দাম সর্দার", nameEn: "Saddam Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sentu", nameBn: "সেন্টু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "sohan_sentu", nameBn: "সোহান সর্দার", nameEn: "Sohan Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sentu", nameBn: "সেন্টু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "suruj_sentu", nameBn: "সুরুজ সর্দার", nameEn: "Suruj Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sentu", nameBn: "সেন্টু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "bijoy_sentu", nameBn: "বিজয় সর্দার", nameEn: "Bijoy Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sentu", nameBn: "সেন্টু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "asad", nameBn: "আসাদ সর্দার", nameEn: "Asad Sardar", gender: "male", isDeceased: false, idNo: "S-175", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "akash_asad", nameBn: "আকাশ সর্দার", nameEn: "Akash Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "asad", nameBn: "আসাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "mitu_asad", nameBn: "মিতু", nameEn: "Mitu", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "asad", nameBn: "আসাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "ritu_asad", nameBn: "ঋতু", nameEn: "Ritu", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "asad", nameBn: "আসাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "setu_asad", nameBn: "সেতু", nameEn: "Setu", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "N/A", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "asad", nameBn: "আসাদ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "jewel", nameBn: "জুয়েল সর্দার", nameEn: "Jewel Sardar", gender: "male", isDeceased: false, idNo: "S-176", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814863/juel.jpg", gallery: [], children: [{id: "hamim_jewel", nameBn: "হামিম সর্দার", nameEn: "Hamim Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jewel", nameBn: "জুয়েল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "tamim_jewel", nameBn: "তামিম সর্দার", nameEn: "Tamim Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jewel", nameBn: "জুয়েল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "laila_jewel", nameBn: "লাইলা", nameEn: "Laila", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jewel", nameBn: "জুয়েল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "lamia_jewel", nameBn: "লামিয়া", nameEn: "Lamia", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "jewel", nameBn: "জুয়েল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "sohel", nameBn: "সোহেল সর্দার", nameEn: "Sohel Sardar", gender: "male", isDeceased: false, idNo: "S-177", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "sinthia_sohel", nameBn: "সিনথিয়া", nameEn: "Sinthia", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sohel", nameBn: "সোহেল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "rinku", nameBn: "রিংকু সর্দার", nameEn: "Rinku Sardar", gender: "male", isDeceased: false, idNo: "S-178", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "toufiq_rinku", nameBn: "তৌফিক সর্দার", nameEn: "Toufiq Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "rinku", nameBn: "রিংকু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "taniya_rinku", nameBn: "তানিয়া", nameEn: "Taniya", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "rinku", nameBn: "রিংকু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "beli", nameBn: "বেলি", nameEn: "Beli", gender: "female", isDeceased: false, idNo: "S-179", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "selina", nameBn: "সেলিনা", nameEn: "Selina", gender: "female", isDeceased: false, idNo: "S-180", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "lovely", nameBn: "লাভলি", nameEn: "Lovely", gender: "female", isDeceased: false, idNo: "S-181", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "rikta", nameBn: "রিক্তা", nameEn: "Rikta", gender: "female", isDeceased: false, idNo: "S-182", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "pista", nameBn: "পিস্তা", nameEn: "Pista", gender: "female", isDeceased: false, idNo: "S-183", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "abdus_samad", nameBn: "আব্দুস সামাদ সর্দার", nameEn: "Abdus Samad Sardar", gender: "male", isDeceased: false, idNo: "S-184", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "roknuzzaman", nameBn: "রোকনুজ্জামান", nameEn: "Roknuzzaman", gender: "male", isDeceased: false, idNo: "S-185", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "rimi_roknuzzaman", nameBn: "রিমি", nameEn: "Rimi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "roknuzzaman", nameBn: "রোকনুজ্জামান"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "rimpi_roknuzzaman", nameBn: "রিম্পি", nameEn: "Rimpi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "roknuzzaman", nameBn: "রোকনুজ্জামান"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "rushmi_roknuzzaman", nameBn: "রুশমি", nameEn: "Rushmi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "roknuzzaman", nameBn: "রোকনুজ্জামান"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "hasanuzzaman", nameBn: "হাসানুজ্জামান", nameEn: "Hasanuzzaman", gender: "male", isDeceased: false, idNo: "S-186", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "rupom_hasanuzzaman", nameBn: "রুপম", nameEn: "Rupom", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hasanuzzaman", nameBn: "হাসানুজ্জামান"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "ruhi_hasanuzzaman", nameBn: "রুহি", nameEn: "Ruhi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "hasanuzzaman", nameBn: "হাসানুজ্জামান"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "tanim", nameBn: "তানিম", nameEn: "Tanim", gender: "male", isDeceased: true, idNo: "S-187", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "tosin_tanim", nameBn: "তসিন", nameEn: "Tosin", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "tanim", nameBn: "তানিম"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "toma_tanim", nameBn: "তমা", nameEn: "Toma", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "tanim", nameBn: "তানিম"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "sumon", nameBn: "সুমন সর্দার", nameEn: "Sumon Sardar", gender: "male", isDeceased: false, idNo: "S-188", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "supta_sumon", nameBn: "সুপ্তা", nameEn: "Supta", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sumon", nameBn: "সুমন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "gulen_sumon", nameBn: "গুলেন", nameEn: "Gulen", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "sumon", nameBn: "সুমন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "reena", nameBn: "রীনা", nameEn: "Reena", gender: "female", isDeceased: false, idNo: "S-189", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "bina", nameBn: "বিনা", nameEn: "Bina", gender: "female", isDeceased: false, idNo: "S-190", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "tina", nameBn: "টিনা", nameEn: "Tina", gender: "female", isDeceased: false, idNo: "S-191", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "jamal", nameBn: "জামাল সর্দার", nameEn: "Jamal Sardar", gender: "male", isDeceased: false, idNo: "S-192", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "mamun", nameBn: "মামুন সর্দার", nameEn: "Mamun Sardar", gender: "male", isDeceased: false, idNo: "S-193", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "pothik_mamun", nameBn: "পথিক সর্দার", nameEn: "Pothik Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mamun", nameBn: "মামুন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "siam_mamun", nameBn: "সিয়াম সর্দার", nameEn: "Siam Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mamun", nameBn: "মামুন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "minuara_mamun", nameBn: "মিনুয়ারা", nameEn: "Minuara", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mamun", nameBn: "মামুন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "kakoli_mamun", nameBn: "কাকলি", nameEn: "Kakoli", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mamun", nameBn: "মামুন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "masum", nameBn: "মাসুম সর্দার", nameEn: "Masum Sardar", gender: "male", isDeceased: false, idNo: "S-194", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "kuheli_masum", nameBn: "কুহেলি", nameEn: "Kuheli", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "masum", nameBn: "মাসুম সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "tumpa_masum", nameBn: "টুম্পা", nameEn: "Tumpa", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "masum", nameBn: "মাসুম সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "mousum", nameBn: "মৌসুম সর্দার", nameEn: "Mousum Sardar", gender: "male", isDeceased: false, idNo: "S-195", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "husain_mousum", nameBn: "হুসাইন সর্দার", nameEn: "Husain Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mousum", nameBn: "মৌসুম সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "monalisa_mousum", nameBn: "মোনালিসা", nameEn: "Monalisa", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "mousum", nameBn: "মৌসুম সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "kusum", nameBn: "কুসুম সর্দার", nameEn: "Kusum Sardar", gender: "male", isDeceased: false, idNo: "S-196", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "sadiya_kusum", nameBn: "সাদিয়া", nameEn: "Sadiya", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kusum", nameBn: "কুসুম সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "samiya_kusum", nameBn: "সামিয়া", nameEn: "Samiya", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kusum", nameBn: "কুসুম সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "saha_kusum", nameBn: "সাহা", nameEn: "Saha", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "kusum", nameBn: "কুসুম সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "panna", nameBn: "পান্না সর্দার", nameEn: "Panna Sardar", gender: "male", isDeceased: false, idNo: "S-197", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814875/panna.jpg", gallery: [], children: [{id: "annisa_panna", nameBn: "আন-নিসা", nameEn: "An-Nisa", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "panna", nameBn: "পান্না সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "nantu", nameBn: "নান্টু সর্দার", nameEn: "Nantu Sardar", gender: "male", isDeceased: false, idNo: "S-198", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "hamza_nantu", nameBn: "হামজা সর্দার", nameEn: "Hamza Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "nantu", nameBn: "নান্টু সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "mithon", nameBn: "মিঠন সর্দার", nameEn: "Mithon Sardar", gender: "male", isDeceased: false, idNo: "S-199", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "tuton", nameBn: "টুটন সর্দার", nameEn: "Tuton Sardar", gender: "male", isDeceased: false, idNo: "S-200", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814883/tuton.jpg", gallery: [], children: [{id: "adil_tuton", nameBn: "আদিল সর্দার", nameEn: "Adil Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "tuton", nameBn: "টুটন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "choton", nameBn: "ছোটন সর্দার", nameEn: "Choton Sardar", gender: "male", isDeceased: false, idNo: "S-201", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814881/soton.jpg", gallery: [], children: []},
                                        {id: "jahanara", nameBn: "জাহানারা", nameEn: "Jahanara", gender: "female", isDeceased: false, idNo: "S-202", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "sathi", nameBn: "সাথি", nameEn: "Sathi", gender: "female", isDeceased: false, idNo: "S-203", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "rustom", nameBn: "রুস্তম সর্দার", nameEn: "Rustom Sardar", gender: "male", isDeceased: false, idNo: "S-204", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "rezaul", nameBn: "রেজাউল সর্দার", nameEn: "Rezaul Sardar", gender: "male", isDeceased: false, idNo: "S-205", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "ripu_rezaul", nameBn: "রিপু সর্দার", nameEn: "Ripu Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "rezaul", nameBn: "রেজাউল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "himel_rezaul", nameBn: "হিমেল সর্দার", nameEn: "Himel Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "rezaul", nameBn: "রেজাউল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "riya_rezaul", nameBn: "রিয়া", nameEn: "Riya", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "rezaul", nameBn: "রেজাউল সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "manik", nameBn: "মানিক সর্দার", nameEn: "Manik Sardar", gender: "male", isDeceased: false, idNo: "S-206", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: [{id: "rima_manik", nameBn: "রিমা", nameEn: "Rima", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "manik", nameBn: "মানিক সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "bithi_manik", nameBn: "বিথী", nameEn: "Bithi", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "manik", nameBn: "মানিক সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "iti_manik", nameBn: "ইতি", nameEn: "Iti", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "manik", nameBn: "মানিক সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "arif", nameBn: "আরিফ সর্দার", nameEn: "Arif Sardar", gender: "male", isDeceased: false, idNo: "S-207", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814856/arif.jpg", gallery: [], children: [{id: "abdullah_arif", nameBn: "আব্দুল্লাহ সর্দার", nameEn: "Abdullah Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "arif", nameBn: "আরিফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "ariyan_arif", nameBn: "আরিয়ান সর্দার", nameEn: "Ariyan Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "arif", nameBn: "আরিফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়েগণ
        {id: "afsana_arif", nameBn: "আফসানা", nameEn: "Afsana", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "arif", nameBn: "আরিফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        {id: "asiya_arif", nameBn: "আছিয়া", nameEn: "Asiya", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "arif", nameBn: "আরিফ সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "ripon", nameBn: "রিপন সর্দার", nameEn: "Ripon Sardar", gender: "male", isDeceased: false, idNo: "S-208", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814876/ripon.jpg", gallery: [], children: [{id: "mahim_ripon", nameBn: "মাহিম সর্দার", nameEn: "Mahim Sardar", gender: "male", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ripon", nameBn: "রিপন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
        
        // মেয়ে
        {id: "rimpa_ripon", nameBn: "রিম্পা", nameEn: "Rimpa", gender: "female", isDeceased: false, idNo: "", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: {id: "ripon", nameBn: "রিপন সর্দার"}, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
    ]},
                                        {id: "rozina", nameBn: "রোজিনা", nameEn: "Rozina", gender: "female", isDeceased: false, idNo: "S-209", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "ruma", nameBn: "রুমা", nameEn: "Ruma", gender: "female", isDeceased: false, idNo: "S-210", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "akbor", nameBn: "আকবর সর্দার", nameEn: "Akbor Sardar", gender: "male", isDeceased: false, idNo: "S-211", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "https://res.cloudinary.com/nxdybqro/image/upload/v1791814665/akbor.jpg", gallery: [],
                                    children: [
                                        {id: "shuvro", nameBn: "শুভ্র", nameEn: "Shuvro", gender: "male", isDeceased: false, idNo: "S-212", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "ontu", nameBn: "অন্ত", nameEn: "Onto", gender: "female", isDeceased: false, idNo: "S-213", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "afifa", nameBn: "আফিফা", nameEn: "Afifa", gender: "female", isDeceased: false, idNo: "S-214", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {
                                    id: "mahatab", nameBn: "মাহাতাব উদ্দিন", nameEn: "Mahatab Uddin", gender: "male", isDeceased: false, idNo: "S-215", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [],
                                    children: [
                                        {id: "al_mehedi", nameBn: "আল-মেহেদী", nameEn: "Al Mehedi", gender: "male", isDeceased: false, idNo: "S-216", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "abu_sayed", nameBn: "আবু সাঈদ", nameEn: "Abu Sayed", gender: "male", isDeceased: false, idNo: "S-217", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "moriyom", nameBn: "মরিয়ম খাতুন", nameEn: "Moriyom Khatun", gender: "female", isDeceased: false, idNo: "S-218", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "popi", nameBn: "পপি", nameEn: "Popi", gender: "female", isDeceased: true, idNo: "S-219", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                        {id: "merina2", nameBn: "মেরিনা খাতুন", nameEn: "Merina Khatun", gender: "female", isDeceased: false, idNo: "S-220", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                                    ]
                                },
                                {id: "nehar", nameBn: "নেহার", nameEn: "Nehar", gender: "female", isDeceased: false, idNo: "S-221", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                {id: "sokina", nameBn: "সকিনা", nameEn: "Sokina", gender: "female", isDeceased: false, idNo: "S-222", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                {id: "shohida", nameBn: "শহিদা", nameEn: "Shohida", gender: "female", isDeceased: false, idNo: "S-223", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                {id: "shahanur", nameBn: "শাহানূর", nameEn: "Shahanur", gender: "female", isDeceased: false, idNo: "S-224", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []},
                                {id: "kajol", nameBn: "কাজল", nameEn: "Kajol", gender: "female", isDeceased: false, idNo: "S-225", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                            ]
                        },
                        {id: "salejan", nameBn: "সালেজান", nameEn: "Salejan", gender: "female", isDeceased: false, idNo: "S-226", dob: "অজানা", dod: "অজানা", birthPlace: "অজানা", currentAddress: "অজানা", occupation: "অজানা", education: "অজানা", mobile: "N/A", bloodGroup: "N/A", maritalStatus: "অজানা", spouse: null, father: null, mother: null, specialNote: "", profilePhoto: "", gallery: [], children: []}
                    ]
                }
            ]
        }
    ]
};

let historyStack = [familyData];
let currentRootNode = familyData;
let currentGalleryImages = [];
let currentGalleryIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    history.replaceState({ pageIndex: 0 }, "");

    renderCurrentTree();
    setupSearch();
    setupModalEvents();
    setupPannableZoomTree();

    document.getElementById('prevPageBtn').addEventListener('click', () => {
        goBackPage();
    });

    document.getElementById('homeBtn').addEventListener('click', () => {
        historyStack = [familyData];
        currentRootNode = familyData;
        history.pushState({ pageIndex: historyStack.length - 1 }, "");
        renderCurrentTree();
    });

    window.addEventListener('popstate', (event) => {
        const memberModal = document.getElementById('memberModal');
        const zoomModal = document.getElementById('zoomModal');
        const lightboxModal = document.getElementById('lightboxModal');

        if (lightboxModal.style.display === 'flex') {
            lightboxModal.style.display = 'none';
            history.pushState({ pageIndex: historyStack.length - 1 }, "");
            return;
        }
        if (memberModal.style.display === 'flex') {
            memberModal.style.display = 'none';
            history.pushState({ pageIndex: historyStack.length - 1 }, "");
            return;
        }
        if (zoomModal.style.display === 'flex') {
            zoomModal.style.display = 'none';
            history.pushState({ pageIndex: historyStack.length - 1 }, "");
            return;
        }

        if (historyStack.length > 1) {
            historyStack.pop();
            currentRootNode = historyStack[historyStack.length - 1];
            renderCurrentTree();
        } else {
            history.pushState({ pageIndex: 0 }, "");
        }
    });
});

function goBackPage() {
    if (historyStack.length > 1) {
        historyStack.pop();
        currentRootNode = historyStack[historyStack.length - 1];
        renderCurrentTree();
        window.history.back();
    }
}

function getCardHTML(node) {
    const deceasedClass = node.isDeceased ? 'deceased' : '';
    const genderClass = node.gender === 'female' ? 'female' : 'male';
    const photoHTML = node.profilePhoto 
        ? `<div class="card-photo-box"><img src="${node.profilePhoto}" alt="${node.nameBn}" class="card-avatar"></div>`
        : '';

    return `
        <div class="member-card ${genderClass} ${deceasedClass}" onclick="onCardClick('${node.id}')">
            ${photoHTML}
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
        const photoHTML = child.profilePhoto 
            ? `<div class="card-photo-box"><img src="${child.profilePhoto}" alt="${child.nameBn}" class="card-avatar"></div>`
            : '';

        return `
            <li>
                <div class="member-card ${genderClass} ${deceasedClass}" onclick="onCardClick('${child.id}')">
                    ${photoHTML}
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
    const photoHTML = node.profilePhoto 
        ? `<div class="card-photo-box"><img src="${node.profilePhoto}" alt="${node.nameBn}" class="card-avatar"></div>`
        : '';

    return `
        <li>
            <div class="member-card ${node.gender === 'female' ? 'female' : 'male'} ${node.isDeceased ? 'deceased' : ''}" onclick="onCardClick('${node.id}')" style="border-width: 2px;">
                ${photoHTML}
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

    const padmashiPhoto = familyData.profilePhoto 
        ? `<div class="card-photo-box"><img src="${familyData.profilePhoto}" alt="${familyData.nameBn}" class="card-avatar"></div>`
        : '';
    const akaliPhoto = akaliNode.profilePhoto 
        ? `<div class="card-photo-box"><img src="${akaliNode.profilePhoto}" alt="${akaliNode.nameBn}" class="card-avatar"></div>`
        : '';
    const isuPhoto = isuNode.profilePhoto 
        ? `<div class="card-photo-box"><img src="${isuNode.profilePhoto}" alt="${isuNode.nameBn}" class="card-avatar"></div>`
        : '';
    const kesuPhoto = kesuNode.profilePhoto 
        ? `<div class="card-photo-box"><img src="${kesuNode.profilePhoto}" alt="${kesuNode.nameBn}" class="card-avatar"></div>`
        : '';

    return `
        <li>
            <div class="member-card male" onclick="onCardClick('${familyData.id}')">
                ${padmashiPhoto}
                <div class="member-name-bn">${familyData.nameBn}</div>
                <div class="member-name-en">${familyData.nameEn}</div>
            </div>
            <ul>
                <li>
                    <div class="member-card male" onclick="onCardClick('${akaliNode.id}')">
                        ${akaliPhoto}
                        <div class="member-name-bn">${akaliNode.nameBn}</div>
                        <div class="member-name-en">${akaliNode.nameEn}</div>
                    </div>
                    <ul>
                        <li>
                            <div class="member-card male" onclick="onCardClick('${isuNode.id}')">
                                ${isuPhoto}
                                <div class="member-name-bn">${isuNode.nameBn}</div>
                                <div class="member-name-en">${isuNode.nameEn}</div>
                                <button class="sub-tree-link" onclick="navigateToSubTree('${isuNode.id}', event)">বংশধারা দেখুন</button>
                            </div>
                        </li>
                        <li>
                            <div class="member-card male" onclick="onCardClick('${kesuNode.id}')">
                                ${kesuPhoto}
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
        history.pushState({ pageIndex: historyStack.length - 1 }, "");
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
        document.getElementById('modalDod').textContent = member.dod || 'প্রযোজ্য নয়';
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
    } else if (typeof member.spouse === 'string') {
        spouseElem.textContent = member.spouse;
        spouseElem.className = "";
        spouseElem.onclick = null;
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
    } else if (typeof member.mother === 'string') {
        motherElem.textContent = member.mother;
        motherElem.className = "";
        motherElem.onclick = null;
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
    document.getElementById('modalChildrenSummary').textContent = `${totalChildren} জন (ছেলে: ${sonsCount}, মেয়ে: ${daughtersCount})`;

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

function setupModalEvents() {
    const modal = document.getElementById('memberModal');
    const closeBtn = document.getElementById('modalClose');

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

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

function searchMembersRecursive(root, query, matches) {
    if (!root) return;
    const matchBn = root.nameBn && root.nameBn.toLowerCase().includes(query);
    const matchEn = root.nameEn && root.nameEn.toLowerCase().includes(query);
    if (matchBn || matchEn) {
        matches.push(root);
    }
    if (root.children && root.children.length > 0) {
        root.children.forEach(child => searchMembersRecursive(child, query, matches));
    }
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
                    history.pushState({ pageIndex: historyStack.length - 1 }, "");
                    renderCurrentTree();
                    searchResults.style.display = 'none';
                    searchInput.value = '';
                });
                searchResults.appendChild(div);
            });
        } else {
            searchResults.style.display = 'block';
            searchResults.innerHTML = '<div class="search-result-item">কোন তথ্য পাওয়া যায়নি</div>';
        }
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch();
        else performSearch();
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            searchResults.style.display = 'none';
        }
    });
}

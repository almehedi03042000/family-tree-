const FamilyComponents = {
    // মেইন স্ক্রিনের কার্ড (নাম, আইডি, জেন্ডার)
    createCard(member) {
        const genderClass = member.gender === 'পুরুষ' ? 'male' : 'female';
        return `
            <div class="family-card ${genderClass} p-3.5 rounded-2xl cursor-pointer shadow-lg min-w-[200px]"
                 onclick='FamilyApp.showProfile(${JSON.stringify(member)})'>
                <span class="text-[10px] text-blue-400 font-semibold block">${member.id}</span>
                <h4 class="font-bold text-slate-100 text-sm mt-0.5">${member.name}</h4>
                <span class="text-[11px] text-slate-400 mt-1 block">${member.gender}</span>
            </div>
        `;
    },

    // পূর্ণাঙ্গ প্রোফাইল মোডাল (সব তথ্য ও এডিট অপশনসহ)
    renderModal() {
        return `
            <div id="profileModal" class="fixed inset-0 bg-black/80 backdrop-blur-md hidden items-center justify-center z-50 p-4">
                <div class="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
                    <div class="bg-gradient-to-r from-blue-900/60 to-slate-900 p-5 border-b border-slate-800 flex justify-between items-center">
                        <div class="flex items-center gap-3">
                            <div id="modalAvatar" class="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-500/50 flex items-center justify-center font-bold text-lg text-blue-300 overflow-hidden">
                                <!-- ছবি বা প্রথম অক্ষর -->
                            </div>
                            <div>
                                <h3 id="modalName" class="text-lg font-bold text-white"></h3>
                                <p id="modalIdGen" class="text-xs text-blue-400"></p>
                            </div>
                        </div>
                        <button onclick="FamilyApp.closeProfile()" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 flex items-center justify-center transition">&times;</button>
                    </div>
                    
                    <div class="p-5 space-y-3 text-sm text-slate-300 max-h-[70vh] overflow-y-auto">
                        <div class="grid grid-cols-2 gap-3">
                            <div class="bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                                <span class="text-slate-400 text-[10px] block">লিঙ্গ</span>
                                <span id="modalGender" class="text-white font-medium text-xs"></span>
                            </div>
                            <div class="bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                                <span class="text-slate-400 text-[10px] block">পেশা</span>
                                <span id="modalOccupation" class="text-white font-medium text-xs"></span>
                            </div>
                        </div>
                        <div class="bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                            <span class="text-slate-400 text-[10px] block">পারিবারিক সম্পর্ক</span>
                            <span id="modalRelation" class="text-white font-medium text-xs"></span>
                        </div>
                        <div class="bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                            <span class="text-slate-400 text-[10px] block">মোবাইল নম্বর</span>
                            <span id="modalPhone" class="text-white font-medium text-xs"></span>
                        </div>
                        <div class="bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                            <span class="text-slate-400 text-[10px] block">বায়ো / বিবরণ</span>
                            <p id="modalBio" class="text-white text-xs mt-0.5"></p>
                        </div>
                        <div class="bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                            <span class="text-slate-400 text-[10px] block">অতিরিক্ত ডেটা / নোট ও ছবি গ্যালারি</span>
                            <p id="modalExtra" class="text-white text-xs mt-0.5"></p>
                            <div id="modalImages" class="flex gap-2 mt-2 flex-wrap"></div>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-950/60 border-t border-slate-800 flex justify-between items-center">
                        <span class="text-[11px] text-slate-400">তথ্য পরিবর্তন করতে JSON বা এডিট মোড ব্যবহার করুন</span>
                        <button onclick="FamilyApp.closeProfile()" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition">বন্ধ করুন</button>
                    </div>
                </div>
            </div>
        `;
    }
};

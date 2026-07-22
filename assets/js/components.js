const FamilyComponents = {
    // সদস্যের কার্ড (নামে ক্লিক করলে প্রোফাইল, আর নিচে শাখা থাকলে বংশধারা দেখার বাটন)
    createCard(member) {
        const genderClass = member.gender === 'পুরুষ' ? 'male' : 'female';
        const hasChildren = member.children && member.children.length > 0;

        return `
            <div class="family-card ${genderClass} p-4 rounded-2xl shadow-lg w-72 flex flex-col justify-between my-2">
                <div>
                    <div class="flex justify-between items-center text-[11px] text-blue-400 mb-1">
                        <span>${member.id}</span>
                        <span>${member.generation}</span>
                    </div>
                    <!-- নামের ওপর ক্লিক করলে প্রোফাইল ওপেন হবে -->
                    <h3 onclick='FamilyApp.showProfile(${JSON.stringify(member)})' 
                        class="font-bold text-slate-100 text-base cursor-pointer hover:text-blue-400 transition underline decoration-dotted underline-offset-4">
                        ${member.name}
                    </h3>
                    <p class="text-xs text-slate-400 mt-1">সম্পর্ক: ${member.relation || 'প্রযোজ্য নয়'}</p>
                </div>

                ${hasChildren ? `
                    <div class="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
                        <span class="text-[11px] text-slate-400">সন্তানাদি: ${member.children.length} জন</span>
                        <button onclick="FamilyApp.toggleBranch('${member.id}')" 
                            class="px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white text-xs font-semibold rounded-xl border border-blue-500/30 transition">
                            বংশধারা দেখুন
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    },

    // শাখা বা সন্তানাদির কন্টেইনার
    renderBranchContainer(member) {
        if (!member.children || member.children.length === 0) return '';
        
        let html = `<div id="branch-${member.id}" class="hidden pl-6 border-l-2 border-blue-500/20 ml-4 my-3 space-y-3">`;
        member.children.forEach(child => {
            html += `<div class="branch-item" data-id="${child.id}">`;
            html += this.createCard(child);
            if (child.children && child.children.length > 0) {
                html += this.renderBranchContainer(child);
            }
            html += `</div>`;
        });
        html += `</div>`;
        return html;
    },

    // পূর্ণাঙ্গ প্রোফাইল মোডাল (ছবি, পেশা, ফোন, বায়ো ও অতিরিক্ত তথ্যসহ)
    renderModal() {
        return `
            <div id="profileModal" class="fixed inset-0 bg-black/80 backdrop-blur-md hidden items-center justify-center z-50 p-4">
                <div class="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
                    <div class="bg-gradient-to-r from-blue-900/60 to-slate-900 p-5 border-b border-slate-800 flex justify-between items-center">
                        <div class="flex items-center gap-3.5">
                            <div id="modalAvatar" class="w-14 h-14 rounded-2xl bg-blue-600/30 border border-blue-500/50 flex items-center justify-center font-bold text-xl text-blue-300 overflow-hidden">
                                <!-- ছবি বা নামের প্রথম অক্ষর -->
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
                            <span class="text-slate-400 text-[10px] block">অতিরিক্ত ডেটা / নোট ও ছবি রাখার জায়গা</span>
                            <p id="modalExtra" class="text-white text-xs mt-0.5"></p>
                            <div id="modalImages" class="flex gap-2 mt-2 flex-wrap"></div>
                        </div>
                    </div>

                    <div class="p-4 bg-slate-950/60 border-t border-slate-800 flex justify-between items-center">
                        <span class="text-[11px] text-slate-400">প্রোফাইল তথ্য আপডেট করতে JSON ফাইল এডিট করুন</span>
                        <button onclick="FamilyApp.closeProfile()" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition">বন্ধ করুন</button>
                    </div>
                </div>
            </div>
        `;
    }
};

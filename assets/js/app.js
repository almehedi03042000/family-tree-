const FamilyApp = {
    async init() {
        if (!document.getElementById('profileModal')) {
            document.body.insertAdjacentHTML('beforeend', FamilyComponents.renderModal());
        }
        
        try {
            const response = await fetch('../data/family.json');
            const data = await response.json();
            this.renderTree(data);
        } catch (error) {
            console.error('Data load error:', error);
        }
    },

    renderTree(data) {
        const container = document.getElementById('familyTreeContainer');
        if (!container) return;
        
        // মূল পূর্বপুরুষ এবং তার শাখাগুলো রেন্ডার করা
        let html = FamilyComponents.createCard(data);
        html += FamilyComponents.renderBranchContainer(data);
        container.innerHTML = html;
    },

    // "বংশধারা দেখুন" বাটনে ক্লিক করলে সাব-ব্রাঞ্চ ওপেন/ক্লোজ হবে
    toggleBranch(memberId) {
        const branchDiv = document.getElementById(`branch-${memberId}`);
        if (branchDiv) {
            branchDiv.classList.toggle('hidden');
        }
    },

    // নামের ওপর ক্লিক করলে প্রোফাইল মোডাল ওপেন হবে
    showProfile(member) {
        document.getElementById('modalName').innerText = member.name || '';
        document.getElementById('modalIdGen').innerText = `${member.id} • ${member.generation}`;
        document.getElementById('modalGender').innerText = member.gender || '';
        document.getElementById('modalOccupation').innerText = member.occupation ||প্রযোজ্য নয়;
        document.getElementById('modalRelation').innerText = member.relation || '';
        document.getElementById('modalPhone').innerText = member.phone ||সংরক্ষিত নেই;
        document.getElementById('modalBio').innerText = member.bio ||কোনো বিবরণ নেই;
        document.getElementById('modalExtra').innerText = member.extraData ||কোনো অতিরিক্ত তথ্য নেই;
        
        // ছবি বা অবতার সেট করা
        const avatarDiv = document.getElementById('modalAvatar');
        if (member.images && member.images.length > 0) {
            avatarDiv.innerHTML = `<img src="${member.images[0]}" class="w-full h-full object-cover">`;
        } else {
            avatarDiv.innerText = member.name ? member.name.charAt(0) : '';
        }

        const modal = document.getElementById('profileModal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    },

    closeProfile() {
        const modal = document.getElementById('profileModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
};

document.addEventListener('DOMContentLoaded', () => FamilyApp.init());

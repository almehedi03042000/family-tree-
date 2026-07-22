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
        container.innerHTML = FamilyComponents.createCard(data);
    },

    showProfile(member) {
        document.getElementById('modalName').innerText = member.name || '';
        document.getElementById('modalIdGen').innerText = `${member.id} • ${member.generation}`;
        document.getElementById('modalGender').innerText = member.gender || '';
        document.getElementById('modalOccupation').innerText = member.occupation || 'প্রযোজ্য নয়';
        document.getElementById('modalRelation').innerText = member.relation || '';
        document.getElementById('modalPhone').innerText = member.phone || 'সংরক্ষিত নেই';
        document.getElementById('modalBio',).innerText = member.bio || 'কোনো বিবরণ নেই';
        document.getElementById('modalExtra').innerText = member.extraData || 'কোনো অতিরিক্ত তথ্য নেই';
        
        // অবতার বা ছবি সেট করা
        const avatarDiv = document.getElementById('modalAvatar');
        if (member.images && member.images.length > 0 && member.images[0] !== "assets/images/placeholder.jpg") {
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

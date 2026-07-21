/**
 * UI Components Generator for Family Tree
 */

/**
 * বাংলা সংখ্যায় রূপান্তর করার ইউটিলিটি
 */
function toBanglaNumber(num) {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().replace(/\d/g, digit => banglaDigits[digit]);
}

/**
 * একক সদস্য কার্ডের HTML তৈরি করে
 * @param {Object} member - সদস্যের তথ্য
 * @returns {string} HTML String
 */
function createMemberCardHTML(member) {
    const deceasedClass = member.isDeceased ? 'deceased' : '';
    const deceasedBadge = member.isDeceased ? '<span class="deceased-badge">(মৃত)</span>' : '';

    return `
        <div class="member-card ${deceasedClass}" data-id="${member.id}">
            <div class="member-name">${member.name}</div>
            ${deceasedBadge}
        </div>
    `;
}

/**
 * রিকার্সিভলি (Recursively) পুরো ফ্যামিলি ট্রির HTML রেন্ডার করে
 * @param {Object} node - সদস্য অবজেক্ট
 * @returns {string} HTML String (UL/LI hierarchical structure)
 */
function renderTreeHTML(node) {
    if (!node) return '';

    let childrenHTML = '';
    if (node.children && node.children.length > 0) {
        const childrenNodes = node.children.map(child => renderTreeHTML(child)).join('');
        childrenHTML = `<ul>${childrenNodes}</ul>`;
    }

    return `
        <li>
            ${createMemberCardHTML(node)}
            ${childrenHTML}
        </li>
    `;
}

/**
 * মোডালে সদস্যের বিশদ বিবরণ পপুলেট করে
 * @param {Object} member - সদস্যের তথ্য
 * @param {string} parentName - পিতার নাম
 */
function showMemberDetailsModal(member, parentName = 'N/A') {
    const modal = document.getElementById('memberModal');
    const modalName = document.getElementById('modalName');
    const modalStatusBadge = document.getElementById('modalStatusBadge');
    const modalParent = document.getElementById('modalParent');
    const modalGeneration = document.getElementById('modalGeneration');
    const modalChildrenCount = document.getElementById('modalChildrenCount');

    modalName.textContent = member.name;
    
    if (member.isDeceased) {
        modalStatusBadge.textContent = 'মৃত';
        modalStatusBadge.className = 'status-badge deceased';
    } else {
        modalStatusBadge.textContent = 'জীবিত';
        modalStatusBadge.className = 'status-badge';
    }

    modalParent.textContent = parentName;
    modalGeneration.textContent = `${toBanglaNumber(member.generation || 1)}ম প্রজন্ম`;
    
    const childCount = member.children ? member.children.length : 0;
    modalChildrenCount.textContent = `${toBanglaNumber(childCount)} জন`;

    modal.style.display = 'flex';
}

/**
 * Main Application Logic - Family Tree
 */

let globalFamilyData = null;
let currentScale = 1;
let isPanning = false;
let startX = 0, startY = 0;
let translateX = 0, translateY = 0;

// অ্যাপ লোড হওয়ার সাথে সাথে ফেচ করা শুরু করবে
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

async function initApp() {
    try {
        const response = await fetch('./data/family.json');
        if (!response.ok) {
            throw new Error('ডাটা লোড করতে সমস্যা হয়েছে');
        }
        globalFamilyData = await response.json();
        
        // ট্রি রেন্ডার করা
        renderTree();
        
        // ইভেন্ট লিসেনার যুক্ত করা
        setupZoomAndPan();
        setupSearch();
        setupModalEvents();
        
        // কানেকশন লাইন আঁকা
        setTimeout(drawTreeLines, 100);
        window.addEventListener('resize', drawTreeLines);
    } catch (error) {
        console.error('Error loading family tree data:', error);
    }
}

/**
 * ট্রির HTML স্ট্রাকচার ক্যানভাসে বসানো
 */
function renderTree() {
    const treeNodesContainer = document.getElementById('treeNodes');
    if (!globalFamilyData) return;

    const treeHTML = `<div class="tf-tree"><ul>${renderTreeHTML(globalFamilyData)}</ul></div>`;
    treeNodesContainer.innerHTML = treeHTML;

    // প্রতিটি কার্ডে ক্লিক ইভেন্ট সেট করা
    document.querySelectorAll('.member-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            const memberId = card.getAttribute('data-id');
            const memberObj = findMemberById(globalFamilyData, memberId);
            const parentObj = findParentById(globalFamilyData, memberId);
            
            if (memberObj) {
                showMemberDetailsModal(memberObj, parentObj ? parentObj.name : 'মূল পিতা/পূর্বপুরুষ');
            }
        });
    });
}

/**
 * আইডির মাধ্যমে কোনো সদস্যকে খোঁজা
 */
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

/**
 * সদস্যের পিতার তথ্য খোঁজা
 */
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

/**
 * জুম এবং প্যান (Drag & Move) লজিক
 */
function setupZoomAndPan() {
    const viewport = document.getElementById('treeViewport');
    const container = document.getElementById('treeContainer');

    const updateTransform = () => {
        container.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
    };

    // জুম ইন, আউট ও রিসেট বাটন
    document.getElementById('zoomInBtn').addEventListener('click', () => {
        currentScale = Math.min(currentScale + 0.15, 2.5);
        updateTransform();
    });

    document.getElementById('zoomOutBtn').addEventListener('click', () => {
        currentScale = Math.max(currentScale - 0.15, 0.3);
        updateTransform();
    });

    document.getElementById('resetZoomBtn').addEventListener('click', () => {
        currentScale = 1;
        translateX = 0;
        translateY = 0;
        updateTransform();
    });

    // ড্র্যাগ করে ক্যানভাস সরানোর ইভেন্ট
    viewport.addEventListener('mousedown', (e) => {
        if (e.target.closest('.member-card') || e.target.closest('.app-header')) return;
        isPanning = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isPanning) return;
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform();
    });

    window.addEventListener('mouseup', () => {
        isPanning = false;
    });
}

/**
 * ডায়নামিক সার্চ সিস্টেম
 */
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');

    const performSearch = () => {
        const query = searchInput.value.trim();
        searchResults.innerHTML = '';
        
        if (!query) {
            searchResults.style.display = 'none';
            return;
        }

        const matches = [];
        searchMembersRecursive(globalFamilyData, query, matches);

        if (matches.length > 0) {
            searchResults.style.display = 'block';
            matches.forEach(item => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                div.textContent = item.name;
                div.addEventListener('click', () => {
                    highlightAndFocusMember(item.id);
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

    // বাইরে ক্লিক করলে সার্চ ড্রপডাউন বন্ধ হওয়া
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            searchResults.style.display = 'none';
        }
    });
}

function searchMembersRecursive(node, query, results) {
    if (!node) return;
    if (node.name.includes(query)) {
        results.push(node);
    }
    if (node.children) {
        node.children.forEach(child => searchMembersRecursive(child, query, results));
    }
}

/**
 * সার্চকৃত সদস্যকে হাইলাইট করা ও স্ক্রিনের মাঝে আনা
 */
function highlightAndFocusMember(id) {
    document.querySelectorAll('.member-card').forEach(c => c.classList.remove('member-highlight'));
    const targetCard = document.querySelector(`.member-card[data-id="${id}"]`);
    
    if (targetCard) {
        targetCard.classList.add('member-highlight');
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
}

/**
 * মোডাল ক্লোজ করার ইভেন্টসমূহ
 */
function setupModalEvents() {
    const modal = document.getElementById('memberModal');
    const modalClose = document.getElementById('modalClose');

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

/**
 * কানেকশন লাইন (SVG) আঁকার লজিক
 */
function drawTreeLines() {
    const svg = document.getElementById('svgLines');
    if (!svg) return;
    
    // ক্যানভাসের পুরো প্রস্থ ও উচ্চতা অনুযায়ী SVG রিসাইজ করা
    const container = document.getElementById('treeContainer');
    svg.setAttribute('width', container.scrollWidth);
    svg.setAttribute('height', container.scrollHeight);
}

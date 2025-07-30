function moveSidebar(currentIndex, event) {
    const elements = document.getElementsByClassName('sidebarContainer');
    removeSidebar(elements)
    if (currentIndex === undefined) {
        return
    }
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        if (index === currentIndex) {
            element.classList.toggle('moveSidebar');

        }

    }
    event.stopPropagation();
}

function removeSidebar(elements) {
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.classList.remove('moveSidebar');
    }
}

function toggleSidbar(event) {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('sidebarOpenBtn');
    sidebar.classList.toggle('showSidebar');
    openBtn.classList.add('slideSidebarBtn');
    event.stopPropagation();
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('sidebarOpenBtn');
    sidebar.classList.remove('showSidebar');
    openBtn.classList.remove('slideSidebarBtn');
}


window.addEventListener('scroll', () => {
    moveSidebar();
    closeSidebar();
});
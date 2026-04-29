

export function openNavMenu(navMenu, moreLinks){
    navMenu.classList.add('active');
    moreLinks.classList.add('active');
}


export function closeNavMenu(navMenu, moreLinks) {
    navMenu.classList.remove('active');
}
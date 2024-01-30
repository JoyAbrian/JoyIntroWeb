function Menu() {
    let list = document.querySelector('ul');
    let menuIcon = document.getElementById('menuIcon');
    let closeIcon = document.getElementById('closeIcon');

    if (menuIcon.style.display !== 'none') {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';

        list.classList.add('top-[80px]');
        list.classList.add('opacity-100');
    } else {
        menuIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';

        list.classList.remove('top-[80px]');
        list.classList.remove('opacity-100');
    }
}

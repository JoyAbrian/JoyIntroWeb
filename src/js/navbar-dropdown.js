const toggleButton = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

toggleButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});
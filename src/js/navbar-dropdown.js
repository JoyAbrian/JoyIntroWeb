const toggleButton = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

toggleButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

function closeDropdown() {
    dropdownMenu.classList.add('hidden');
}
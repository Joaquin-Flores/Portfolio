// Encontrar todos los colapsables dentro de la página
document.querySelectorAll('.collapse').forEach(function(collapseEl) {
// Buscar el ícono chevron dentro del header relacionado
const chevronIcon = collapseEl.previousElementSibling.querySelector('i.fas');

if (chevronIcon) {
    collapseEl.addEventListener('show.bs.collapse', function () {
    chevronIcon.classList.add('rotate-180');
    });

    collapseEl.addEventListener('hide.bs.collapse', function () {
    chevronIcon.classList.remove('rotate-180');
    });
}
});


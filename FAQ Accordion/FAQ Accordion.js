// script.js
document.querySelectorAll('.question').forEach(button => {
    button.addEventListener('click', function() {
        let answer = this.nextElementSibling;
        let isActive = answer.style.display === 'block';
        document.querySelectorAll('.answer').forEach(a => a.style.display = 'none');
        answer.style.display = isActive ? 'none' : 'block';
    });
});
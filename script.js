const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const themeToggle = document.getElementById('theme-toggle');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number') || button.classList.contains('operator') || button.classList.contains('decimal')) {
            result.value += button.textContent;
        } else if (button.classList.contains('clear')) {
            result.value = '';
        } else if (button.classList.contains('equals')) {
            try {
                result.value = eval(result.value.replace('×', '*').replace('÷', '/'));
            } catch (error) {
                result.value = 'Erreur';
            }
        }
    });
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});

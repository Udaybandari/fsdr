const container = document.getElementById('container');
const text = document.getElementById('text');
const button = document.getElementById('toggleButton');

let toggled = false;

button.addEventListener('click', () => {
    if (!toggled) {
        container.style.backgroundColor = 'lightcoral';
        text.textContent = 'Text Changed!';
        button.textContent = 'Revert';
    } else {
        container.style.backgroundColor = 'lightblue';
        text.textContent = 'Initial Text';
        button.textContent = 'Click Me!';
    }
    toggled = !toggled;
});

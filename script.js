// JavaScript Code
document.getElementById('change-text').addEventListener('click', function() {
    let greeting = document.getElementById('greeting');
    if (greeting.innerText === 'Hello World!') {
        greeting.innerText = 'Welcome!';
    } else {
        greeting.innerText = 'Hello World!';
    }
});

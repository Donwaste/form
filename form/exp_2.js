document.querySelector('.form').addEventListener('submit', function(event) {
    const password = document.querySelectorAll('.input[type="password"]')[0].value;
    const confirmPassword = document.querySelectorAll('.input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        event.preventDefault(); 
        alert('Пароли не совпадают!');
    }
});

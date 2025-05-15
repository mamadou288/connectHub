document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        const res = await fetch('/api/auth/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = document.getElementById('result');
        if (res.ok) {
            result.innerText = "Inscription réussie !";
        } else {
            const error = await res.json();
            result.innerText = "Erreur : " + JSON.stringify(error);
        }
    });
});

const formSignup = document.getElementById('formSignup')
formSignup.addEventListener('submit', async (event) => {
    event.preventDefault()
    const name = document.getElementById('name').value.trim()
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()

    try {
        const user = { name, email, password }
        const response = await fetch('http://localhost:3000/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })

        if (response.ok) {
            const data = await response.json();
            console.log('Cadastro bem sucedido', data);
        } else {
            const error = response.json();
            console.error('Deu bom não ', error);
            alert('Cadastro falhou: ' + (error.message || 'Erro desconhecido'));

        }
    } catch (error) {
        console.error(error)
    }
})
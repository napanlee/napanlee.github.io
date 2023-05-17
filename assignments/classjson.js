fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('list');

        data.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.textContent = item.Name;
            a.href = "https://" + item.Github + ".github.io";

            li.appendChild(a);
            list.appendChild(li);
        });
    })
    .catch(error => console.error(error));
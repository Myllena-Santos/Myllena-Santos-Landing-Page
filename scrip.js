function getProjects() {
    const urlGitHub = 'https://api.github.com/users/Myllena-Santos/repos' // <--- Sugestão: Use /users/nome/repos
    var loadingElement = document.getElementById('loading')

    fetch(urlGitHub, {
        method: 'GET'
    })
        .then((Response) => {
            // Verifica se a resposta HTTP foi bem-sucedida (status 200-299)
            if (!Response.ok) {
                throw new Error(`Erro HTTP! Status: ${Response.status}`)
            }
            return Response.json()
        })
        .then((Response) => {
            // Sucesso: Esconde o loading e mostra os projetos
            loadingElement.style.display = 'none'
            showProjects(Response)
        })
        .catch((e) => {
            // Esconde o loading
            var loadingElement = document.getElementById('loading');
            if (loadingElement) {
                loadingElement.style.display = 'none';
            }

            // Mostra mensagem de erro no elemento da lista (se ele existir)
            var listElement = document.getElementById('my-project-list');

            // 🛑 CHECAGEM DE SEGURANÇA PARA EVITAR O ERRO 'null' 🛑
            if (listElement) {
                listElement.textContent = 'Falha ao carregar os projetos. Tente novamente.';
            }

            console.error("Falha na requisição:", e);
        });
}

function showProjects(data) {
    // 🛑 ESTE NOME DEVE BATER COM O HTML 🛑
    var listElement = document.getElementById('my-project-list');

    // Adicione esta checagem de segurança para ver se o problema é aqui:
    if (!listElement) {
        console.error("ERRO: O elemento 'my-project-list' não foi encontrado.");
        return; // Sai da função se não for encontrado
    }

    // ... restante da função showProjects ...
}

getProjects()

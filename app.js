function searchBusinesses() {
    const keyword = document.getElementById('keyword').value; // Captura o valor digitado

    if (!keyword) {
        alert("Por favor, insira um termo de pesquisa!");
        return;
    }

    // Exemplo de dados (aqui você integraria com a parte de backend)
    const empresas = [
        { nome: "Pizzaria A", telefone: "123456789", avaliacoes: 350 },
        { nome: "Pizzaria B", telefone: "987654321", avaliacoes: 420 },
        { nome: "Pizzaria C", telefone: "555123456", avaliacoes: 200 },
    ];

    // Filtrando as empresas com menos de 500 avaliações
    const resultadoFiltrado = empresas.filter(empresa => empresa.avaliacoes < 500);

    // Exibindo os resultados na página
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ""; // Limpa resultados anteriores

    if (resultadoFiltrado.length > 0) {
        resultadoFiltrado.forEach(empresa => {
            resultsDiv.innerHTML += `
                <div class="result-item">
                    <p><strong>Nome:</strong> ${empresa.nome}</p>
                    <p><strong>Telefone:</strong> ${empresa.telefone}</p>
                    <p><strong>Avaliações:</strong> ${empresa.avaliacoes}</p>
                </div>
            `;
        });
    } else {
        resultsDiv.innerHTML = "<p>Nenhuma empresa encontrada com menos de 500 avaliações.</p>";
    }
}

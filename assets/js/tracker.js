let cepInfo; // Variável global para armazenar informações do CEP

// Botão "buscar"
async function printCEPData() {
    const cep = inputCEP.value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const res = await fetch(url);
    const data = await res.json();

    // Armazena as informações do CEP na variável global
    cepInfo = data;

    // Exibe as informações na página
    parInfo.innerHTML = `
        Localidade: ${data.localidade}<br>
        UF: ${data.uf}<br>
        Logradouro: ${data.logradouro}<br>
        Bairro: ${data.bairro}<br>
        DDD: ${data.ddd}
    `;
}

// Limpa o campo de input de CEP
function clearCEPInput() {
    document.getElementById('inputCEP').value = ''; 
}

// Atualiza a página
function cancelTrack () {
    window.location.reload();
}

// Salva as informações coletadas em um arquivo JSON
function saveData() {
    if (cepInfo) {
        // Solicita um nome para os dados salvos
        const name = prompt('Insira um nome para os dados salvos:', 'CEP');

        if (name) {
            const cepData = {
                nome: name,
                localidade: cepInfo.localidade,
                uf: cepInfo.uf,
                logradouro: cepInfo.logradouro,
                bairro: cepInfo.bairro,
                ddd: cepInfo.ddd
            };

            // Salva os dados no armazenamento local
            localStorage.setItem('cepData', JSON.stringify(cepData));

            // Abre o arquivo JSON em uma nova janela
            const blob = new Blob([JSON.stringify(cepData)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');

            alert('Dados salvos com sucesso!');
        } else {
            alert('Nome inválido. Por favor, insira um nome para os dados salvos.');
        }
    } else {
        alert('Por favor, busque um CEP antes de salvar os dados.');
    }
}

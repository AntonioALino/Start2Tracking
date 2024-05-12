const parInfo = document.getElementById('parInfo');
const inputCEP = document.getElementById('inputCEP');

async function printCEPData() {
    const cep = inputCEP.value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const respostas = await fetch(url);
    const info = await respostas.json();

    parInfo.innerHTML += `Localidade: ${info.localidade}<br>`;
    parInfo.innerHTML += `UF: ${info.uf}<br>`;
    parInfo.innerHTML += `Logradouro: ${info.logradouro}<br>`;
    parInfo.innerHTML += `Bairro: ${info.bairro}<br>`;
    parInfo.innerHTML += `DDD: ${info.ddd}`
}
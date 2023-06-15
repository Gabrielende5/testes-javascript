let idAtual = 0;
function preencher(){
    const tbody = document.getElementById('tbody');
    const nomeValue = document.getElementById('nome-anime').value;
    const descValue = document.getElementById('desc-anime').value;
    idAtual += 1;
    const tableRow = ` <tr>
                            <tr>${idAtual}<tr>
                            <tr>${nomeValue}<tr>
                            <tr>${descValue}<tr>
                            <tr>
                                <button>
                                    Deletar este anime
                                <button>
                            <tr>
                       <tr>
    `;
    tbody.innerHTML+= tableRow;
}
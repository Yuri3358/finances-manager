const bankStatementTemp = `
    <h2 id="current-wealth">Saldo Atual: <span ref="wealth">R$---</span>
        <i class="bi bi-eye-slash-fill" @click="hideAccountCredit"></i>
    </h2>

    <div id="table-container">
        <table class="table">
            <thead>
                <th>Transação</th>
                <th>Quantia</th>
                <th>Tipo</th>
                <th>Data</th>
            </thead>

            <tbody>
                <tr>
                    <td>McDonalds</td>
                    <td>R$100,00</td>
                    <td>Saída</td>
                    <td>23-12-2024</td>
                </tr>
            </tbody>
        </table>
    </div>
`

exports = { bankStatementTemp }
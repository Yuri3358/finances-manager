const bankStatementTemp = `
    <h2 id="current-wealth">Saldo Atual: <span ref="wealth">{{currentWealth}}</span>
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
                <tr v-for="transaction in this.transactionsList.value">
                    <td>{{transaction.transaction}}</td>
                    <td>{{transaction.value.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}}</td>
                    <td>{{transaction.type}}</td>
                    <td>{{transaction.date}}</td>
                </tr>
            </tbody>
        </table>
    </div>
`

exports = { bankStatementTemp }
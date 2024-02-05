const bankStatementTemp = `
    <h2 id="current-wealth">Saldo Atual: <span id="wealth" ref="wealth">{{currentWealth.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}}</span>
        <i class="bi bi-eye-slash-fill" @click="hideAccountCredit"></i>
    </h2>
    <div id="infos-container">
        <div id="table-container">
            <table class="table" id="transaction-table">
                <thead>
                    <th>Transação</th>
                    <th>Quantia</th>
                    <th>Data</th>
                </thead>

                <tbody ref="table">
                    <tr v-for="transaction in this.transactionsList.value" v-show="transaction.transaction">
                        <td>{{transaction.transaction}}</td>
                        <td :style="{color: transaction.value < 0 ? 'red' : 'green'}">{{Number(transaction.value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}}</td>
                        <td>{{new Date(transaction.date).toLocaleString("pt-BR").slice(0, 10)}} <i class="bi bi-x-square" @click="deleteTransaction(transaction.value, transaction.transactionId)"></i></td>
                    </tr>
                </tbody>
                </table>
                <button class="btn btn-success" @click="exportExcel" id="export-excel">Exportar</button>
        </div>
    </div>
`

exports = { bankStatementTemp }
const bankStatementTemp = `
    <h2 id="current-wealth">Saldo Atual: <span id="wealth" ref="wealth">{{currentWealth}}</span>
        <i class="bi bi-eye-slash-fill" @click="hideAccountCredit"></i>
    </h2>
    <div id="infos-container">
        <div id="table-container">
            <table class="table" id="transaction-table">
                <thead>
                    <th>Transação</th>
                    <th>Quantia</th>
                    <th>Tipo</th>
                    <th>Data</th>
                </thead>

                <tbody>
                    <tr v-for="transaction in this.transactionsList.value" v-show="transaction.transaction">
                        <td>{{transaction.transaction}}</td>
                        <td>{{Number(transaction.value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}}</td>
                        <td>{{transaction.type}}</td>
                        <td>{{transaction.date}}</td>
                    </tr>
                </tbody>
                </table>
                <button class="btn btn-success" @click="exportExcel" id="export-excel">Exportar</button>
        </div>
    </div>
`

exports = { bankStatementTemp }
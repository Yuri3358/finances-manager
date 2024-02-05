const bankStatementTemp = `
    <h2 id="current-wealth">Saldo Atual: <span id="wealth" ref="wealth">{{formatToCurrency(currentWealth)}}</span>
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
                        <td :style="{color: transaction.value < 0 ? 'red' : 'green'}">{{formatToCurrency(transaction.value)}}</td>
                        <td>{{formatToDate(transaction.date)}} <i class="bi bi-x-square" @click="deleteTransaction(transaction.value, transaction.transactionId)"></i></td>
                    </tr>
                </tbody>
                </table>
                <button class="btn btn-success" @click="exportExcel" id="export-excel">Exportar</button>
        </div>
    </div>
`

exports = { bankStatementTemp }
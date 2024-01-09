const transactionsTemp = `
        <section id="transactions-container">
        <h2>Gestor de Movimentações</h2>
        <label class="transactions-labels" for="transaction-name">Nome da Movimentação</label>
        <input class="transactions-inputs" id="transaction-name" placeholder="ex.: empréstimo, lanche..." v-model="transaction">

        <label class="transactions-labels" for="transaction-amount">Valor da Movimentação</label>
        <input class="transactions-inputs" id="transaction-amount" placeholder="R$" type="number" v-model="transactionValue">

        <label class="transactions-labels" for="transaction-date">Data da Transação</label>
        <input type="date" class="transactions-inputs" id="transaction-date" v-model="date">

        <label class="transactions-labels" for="transaction-type">Tipo de Movimentação</label>
        <select class="transaction-inputs" id="transaction-type" v-model="transactionType">
            <option>Entrada</option>
            <option>Saída</option>
        </select>
        <br/>
        <label class="transaction-labels">Modificar saldo</label>
        <input class="transaction-inputs" id="change-credit" type="checkbox" v-model="changeCredit">
        <br/>
        <button id="register-transaction" class="btn btn-success" @click="addTransaction">Registrar Movimentação</button>
    </section>
`

exports = { transactionsTemp }
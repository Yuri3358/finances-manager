const transactionsTemp = `
        <section id="transactions-container">
        <h2>Gestor de Movimentações</h2>
        <label class="transactions-labels" for="transaction-name">Nome da Movimentação</label>
        <input class="transactions-inputs" id="transaction-name" placeholder="ex.: empréstimo, lanche...">

        <label class="transactions-labels" for="transaction-amount">Valor da Movimentação</label>
        <input class="transactions-inputs" id="transaction-amount" placeholder="R$">

        <label class="transactions-labels" for="transaction-type">Tipo de Movimentação</label>
        <select class="transaction-inputs" id="transaction-type">
            <option>Entrada</option>
            <option>Saída</option>
        </select>

        <button id="register-transaction" class="btn btn-success">Registrar Movimentação</button>

    </section>
`

exports = { transactionsTemp }
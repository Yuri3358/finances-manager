const creditManagerTemp = `
    <section id="credit-container">
        <h1>Gestor de Saldo</h1>
        <label id="credit-label" for="credit-input">Novo saldo da conta</label>
        <input id="credit-input" placeholder="R$" type="number" v-model="newAmount">

        <button class="btn btn-success" @click="setCredit" id="register-credit">Registrar Saldo</button>

    </section>
`

exports = { creditManagerTemp }
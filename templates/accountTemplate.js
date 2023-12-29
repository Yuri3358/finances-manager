const accountTemp = `
    <section id="account-container">
        <h2>Área da Conta</h2>
        
        <label class="account-labels" for="account-name">Email do Titular</label>
        <input class="account-inputs" id="account-name" v-model="email">

        <label class="account-labels" for="account-amount">Senha</label>
        <input class="account-inputs" id="account-amount" type="password" v-model="password">

        <button id="register-account" class="btn btn-success" @click="accountRegister">Registrar</button>
        <button id="enter-account" class="btn btn-warning" @click="accountLogin">Entrar</button>
    </section>
`

exports = {accountTemp}
const accountTemp = `
    <section id="account-container">
        <h2>Área da Conta</h2>
        <form onsubmit="return false;">
            <label class="account-labels" for="account-name">Email do Titular</label>
            <input class="account-inputs" id="account-name" v-model="email" type="email" required>

            <label class="account-labels" for="account-amount">Senha</label>
            <input class="account-inputs" id="account-amount" type="password" v-model="password" required minlength="6">

            <button id="register-account" class="btn btn-success" @click="accountRegister" type="submit">Registrar</button>
            <button id="enter-account" class="btn btn-warning" @click="accountLogin" type="submit">Entrar</button>
        </form>
    </section>
`

exports = {accountTemp}
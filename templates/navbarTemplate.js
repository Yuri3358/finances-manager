const NavbarTemplate = `
    <header id="header-container">
        <div id="links">
            <ul>
                <h2 id="brand">Finances</h2>

                <p class="links">
                    <a class="anchors btn btn-ouline" href="#/transactions">Gestor de Movimentações</a>
                </p>

                <p class="links">
                    <a class="anchors btn btn-ouline" href="#/statement">Extrato Bancário</a>
                </p>

                <p class="links">
                    <a class="anchors btn btn-ouline" href="#/credit">Gestor de Saldo</a>
                </p>

                <h2 id="account">
                    <a class="anchors btn btn-ouline" href="#/account"><i class="bi bi-person-circle"></i> {{ accountEmail }}</a>
                </h2>
            </ul>
        </div>
    </header>

`

exports = { NavbarTemplate }
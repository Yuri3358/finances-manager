const app = Vue.createApp({})

async function handleNavigation() {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            window.location.href = "#/account"
            return false
        } else {
            return true
        }
    })
}

async function checkLogin() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            window.location.href = "#/user"
        }
    })
}
const routes = [
    {path: "/", component: accountManager},
    {path: "/credit", component: creditManager, beforeEnter: () => handleNavigation()},
    {path: "/transactions", component: transactions, beforeEnter: () => handleNavigation()},
    {path: "/statement", component: bankStatement, beforeEnter: () => handleNavigation()},
    {path: "/account", component: accountManager, beforeEnter: () => checkLogin()},
    {path: "/user", component: userPage, beforeEnter: () => handleNavigation()}
]

const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})

app
.component("credit-manager", creditManager)
.component("transactions-manager", transactions)
.component("bank-statement", bankStatement)
.component("account", accountManager)
.component("Navbar", navBar)
.use(router)

app.mount("#root")
const app = Vue.createApp({})

function handleNavigation() {
    if (!firebase.auth().currentUser) {
        alert("Você precisa estar logado!")
        return false
    } else {
        return true
    }
}
const routes = [
    {path: "/", component: accountManager},
    {path: "/credit", component: creditManager, beforeEnter: () => handleNavigation()},
    {path: "/transactions", component: transactions, beforeEnter: () => handleNavigation()},
    {path: "/statement", component: bankStatement, beforeEnter: () => handleNavigation()},
    {path: "/account", component: accountManager}
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
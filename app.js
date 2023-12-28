const app = Vue.createApp({})

const routes = [
    {path: "/", component: navBar},
    {path: "/credit", component: creditManager },
    {path: "/transactions", component: transactions},
    {path: "/statement", component: bankStatement},
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
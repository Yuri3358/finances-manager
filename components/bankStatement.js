const bankStatement = {
    template: bankStatementTemp,
    data() {
        return {
            isBlurred: false,
            transactionsList: Vue.ref([]),
            currentWealth: 0
        }
    },
    mounted() {
        this.getAccountWealth()
        this.fetchTransactions()
    },
    methods: {
        hideAccountCredit() {
            styleTarget =  this.$refs.wealth.style
            if (this.isBlurred) {
                styleTarget.filter = "blur(0px)"
                this.isBlurred = false
            } else {
                styleTarget.filter = "blur(8px)"
                this.isBlurred = true
            }
        },
        async getAccountWealth() {
            const userID = localStorage.getItem("userId")
            const docData = await colRef.doc(userID).get()
            wealth = docData.data().credit
            this.currentWealth = wealth.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
        },
        async fetchTransactions() {
            bankData = []
            const userID = localStorage.getItem("userId")
            const transactions = await colRef.doc(userID).collection("transactions").get()

            transactions.forEach(doc => bankData.push(doc.data()))

            this.transactionsList.value = bankData
            console.log(this.transactionsList.value)
        }

    }
}

exports = { bankStatement }
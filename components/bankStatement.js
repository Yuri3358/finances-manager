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
        this.hideAccountCredit()
        this.getAccountWealth()
        this.fetchTransactions()
    },
    methods: {
        formatToCurrency(transactionValue) {
            return Number(transactionValue).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
        },
        formatToDate(isoDate) {
            return new Date(isoDate).toLocaleString("pt-BR").slice(0, 10)
        },
        hideAccountCredit() {
            styleWealth = this.$refs.wealth.style
            styleTable = this.$refs.table.style

            if (this.isBlurred) {
                styleWealth.filter = styleTable.filter = "blur(0px)"
                this.isBlurred = false
            } else {
                styleWealth.filter = styleTable.filter = "blur(8px)"
                this.isBlurred = true
            }
        },
        async getAccountWealth() {
            const userID = localStorage.getItem("userId")
            const docData = await colRef.doc(userID).get()
            wealth = docData.data().credit
            this.currentWealth = wealth
            return wealth
        },
        async fetchTransactions() {
            bankData = []
            const userID = localStorage.getItem("userId")
            const transactions = await colRef.doc(userID).collection("transactions").get()

            transactions.forEach(doc => {
                const transactions = doc.data()
                transactions.transactionId = doc.id
                bankData.push(transactions)
                bankData.sort((a, b) => new Date(b.date) - new Date(a.date))
            })
            this.transactionsList.value = bankData
        },
        async deleteTransaction(wealth, transId) {
            const userID = localStorage.getItem("userId")
            const currentWealth = await this.getAccountWealth()

            colRef.doc(userID).collection("transactions").doc(transId).delete().then(() => {
                colRef.doc(userID).update({
                    credit: currentWealth - wealth
                })
            })
            this.fetchTransactions()
            this.getAccountWealth()
        },
        exportExcel(){
            const table = document.getElementById("transaction-table")
            const workbook = XLSX.utils.table_to_book(table)

            XLSX.writeFile(workbook, "transactions.xlsx")
        }
    }
}

exports = { bankStatement }
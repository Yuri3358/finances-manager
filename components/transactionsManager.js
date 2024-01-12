const transactions = {
    template: transactionsTemp,
    data() {
        return {
            transaction: "",
            transactionValue: 0,
            transactionType: "",
            date: "",
            changeCredit: false
        }
    },
    methods: {
        async getCurrentWealth() {
            const userID = localStorage.getItem("userId")
            const docData = await colRef.doc(userID).get()
            currentWealth = docData.data().credit

            return currentWealth
        },
        async addTransaction() {
            const userID = localStorage.getItem("userId")
            
            if (this.transaction && this.transactionValue && this.transactionType) {
                if (!this.date) {
                    this.date = new Date().toISOString().slice(0, 10)
                }
                
                this.transactionType == "Saída" ? this.transactionValue *= (-1) : this.transactionValue
                
                await colRef.doc(userID).collection("transactions").doc().set({
                    transaction: this.transaction,
                    value: this.transactionValue,
                    type: this.transactionType,
                    date: this.date
                })

                const currentWealth = await this.getCurrentWealth()
                
                if (this.changeCredit) {
                    await colRef.doc(userID).update({
                        credit: currentWealth + this.transactionValue
                    })
                }                

                this.transaction = this.transactionValue = this.transactionType = this.date = ""
            } else {
                alert("Verifique as Informações!")
            }
        }
    }
}

exports = { transactions }
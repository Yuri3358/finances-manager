const creditManager = {
    template: creditManagerTemp,
    data() {
        return {
            newAmount: 0
        }
    }, 
    methods: {
        async setCredit() {
            if (this.newAmount) {
                const userID = localStorage.getItem("userId")
                await colRef.doc(userID).update({
                    credit: this.newAmount
                })
                this.newAmount = 0
                alert("Quantia Registrada!")
            } else {
                alert("Quantia Inválida!")
            }
        }
    }
}
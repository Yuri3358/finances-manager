const bankStatement = {
    template: bankStatementTemp,
    data() {
        return {
            isBlurred: false
        }
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
        }
    }
}

exports = { bankStatement }
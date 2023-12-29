const accountManager = {
    template: accountTemp,
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async accountRegister() {
            if (this.email && this.password) {
                const credentials = await autho.createUserWithEmailAndPassword(this.email, this.password)
                await colRef.doc(credentials.user.uid).set({
                    credit: 0
                })

                await colRef.doc(credentials.user.uid).collection("transactions").add({})

            } else {
                alert("Verifique as informações!")
            }
        },
        async accountLogin() {
            if (this.email && this.password) {
                const loginData = await autho.signInWithEmailAndPassword(this.email, this.password)
                localStorage.setItem("userId",loginData.user.uid)
                
                window.location.href = "#/credit"
            } else {
                alert("Verifique as informações!")
            }
        }
    }
}

exports = { accountManager }
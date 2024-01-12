const userPage = {
    template: userPageTemplate,
    data() {
        return {
            showDangerZone: false,
            showPasswordForm: false,
            newPassword: "",
            currentPassword: ""
        }
    },
    methods: {
        toggleDisplayDangerZone() {
            this.showDangerZone = !this.showDangerZone
        },
        toggleDisplayPasswordForm() {
            this.showPasswordForm = !this.showPasswordForm
        },
        async reauthenticateUser() {
            user = firebase.auth().currentUser
            await autho.signInWithEmailAndPassword(user.email, this.currentPassword)
        },
        updatePassword() {
            this.reauthenticateUser()
            user = firebase.auth().currentUser
            user.updatePassword(this.newPassword)
        },
        deleteAccount() {
            this.reauthenticateUser()
            user = firebase.auth().currentUser
            userId = localStorage.getItem("userId")
            colRef.doc(userId).delete().then(() => {
                user.delete().then(() => {
                    localStorage.removeItem("userEmail")
                    localStorage.removeItem("userId")
                    window.location.reload()
                    alert("Usuário excluído com sucesso!")
                })
            })
        },
        signOutAccount(){
            autho.signOut().then(() => {
                localStorage.removeItem("userEmail")
                localStorage.removeItem("userId")
                alert("Conta desconectada")
                window.location.reload()
            })
        }
    }
}

exports = { userPage }
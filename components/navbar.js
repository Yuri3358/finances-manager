const navBar = {
    template: NavbarTemplate,
    data() {
        return {
            accountEmail: localStorage.getItem("userEmail")
        }
    }
}

exports = { navBar }
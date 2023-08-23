function checkLogin() {
    return localStorage.getItem('loggedInUser') ? true : false
}

export default checkLogin;

class User {
  constructor(username, password, age) {

    return {
      'username': username,
      'password': password,
      'age': age,
      'loggedIn': false,
      'login': this.login,
      'logout': this.logout,
    }
  }

  login(password) {
    if (password === this.password) {
      //Log user in
      return true
    }
    else {
      throw new Error("Incorrect password")
    }
  }
  logout(username) {
    if (username === this.username) {
      console.log(`user is logged out`)
      return true
    }
    else {
      throw new Error("Incorrect password")
    }
  }
}

module.exports = User

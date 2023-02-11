
class User {
  constructor(username, password, age) {

    return {
      'username': username,
      'password': password,
      'age': age,
      'login': this.login,
      'loggedIn': false
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
}

module.exports = User

const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {

  station = []
  registeredUsers = {}

  registerUser(username, password, age) {
    if (Object.keys(this.registeredUsers).includes(username)) throw new Error('Already registered')
    if (age < 18) throw new Error('Too young to register')

    const newUser = new User(username, password, age)
    this.registeredUsers[username] = newUser;

    console.log('User has been registered')

    return newUser
  }

  loginUser(username, password) {
    if (!Object.keys(this.registeredUsers).includes(username)) throw new Error('Username or password is incorrect')

    const loggedIn = this.registeredUsers[username].login(password)
    if (loggedIn) {
      this.registeredUsers[username]['loggedIn'] = true
    }

  }
}

const user = new ScooterApp()
user.registerUser('mahbub', '1234', 24)
console.log(user.registeredUsers['mahbub'])

const user2 = new ScooterApp()
user2.registerUser('mah', '12345', 22)
console.log(user2.registeredUsers['mah'])


user.loginUser('mahbub', '1234')
console.log(user.registeredUsers['mahbub'])

module.exports = ScooterApp

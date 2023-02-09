const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(station, registeredUsers) {
    this.station = station;
    this.registeredUsers = registeredUsers;
  }
}

module.exports = ScooterApp

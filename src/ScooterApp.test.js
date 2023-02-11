const ScooterApp = require('./ScooterApp')

describe('Scooter App Method Tests', () => {
    test('Should return a user object', () => {
        const user = new ScooterApp()

        expect(typeof user.registerUser('mohammad', '12345', 25).toBe('object')
        )
    })
})
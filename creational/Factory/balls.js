'use strict';

class BallFactory {

    createBall(type) {
        let ball;
        if (type === 'football' || type === 'soccer') {
            ball = new Football();
        }
        else if (type === 'basketball') {
            ball = new Basketball();
        }
        ball.roll = () => `The ${ball._type} is rolling.`;
        return ball;
    }
}

class Football {
    constructor() {
        this._type = 'football';
    }

    kick() {
        return 'You kicked the football.';
    }
}

class Basketball {
    constructor() {
        this._type = 'basketball';
    }

    bounce() {
        return 'You bounced the basketball.';
    }
}

// creating objects
const factory = new BallFactory();
const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');
console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.
console.log(myFootball.kick()); // You kicked the football.
console.log(myBasketball.bounce()); // You bounced the basketball.

class Car {
    #brand;
    #model;
    speed;
    trunk;

    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
        this.speed = 0;
        this.trunk = false;
    }

    displayInfo() {
        console.log(`${this.#brand}`, `${this.#model}`, `Speed: ${this.speed} km/h`, `Trunk is ${!this.trunk ? 'close' : 'open'}`);
    }

    go() {
        if (this.speed > 200) {
            this.speed = 200;
        }
        if (!this.trunk) {
            this.speed += 5;
        }
    }

    break() {
        if (this.speed < 0) {
            this.speed = 0;
        }
        this.speed -= 5;
    }

    openTrunk() {
        if (this.speed === 0) {
            this.trunk = true;
        }
    }

    closeTrunk() {
        this.trunk = false;
    }
}

const toyota = new Car({
    brand: 'Toyota',
    model: 'Corolla'
});

const tesla = new Car({
    brand: 'Tesla',
    model: 'Model 3'
});

toyota.displayInfo();
toyota.go();
toyota.openTrunk();
toyota.displayInfo();

tesla.displayInfo();
tesla.go();
tesla.go();
tesla.openTrunk();
tesla.displayInfo();
tesla.closeTrunk();
tesla.break();
tesla.displayInfo();

class RaceCar extends Car {
    acceleration;

    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go() {
        this.speed += this.acceleration;

        if (this.speed > 300) {
            this.speed = 300;
        }
    }

    openTrunk() {
        return console.log('Race Car do not have a trunk');
    }

    closeTrunk() {
        return console.log('Race Car do not have a trunk');
    }
}

const mclaren = new RaceCar({
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20
});

mclaren.displayInfo();
mclaren.openTrunk();
mclaren.displayInfo();
mclaren.go();
mclaren.displayInfo();
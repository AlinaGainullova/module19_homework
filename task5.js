class Appliances
{
    constructor(type, model, power) {
    this.type = type,
    this.model = model,
    this.power = power,
    this.isOnOff = false;
    }

    on() {
        console.log(`Прибор ${this.type} ${this.model} включен`);
        this.isOnOff = true;
    }

    off() {
        console.log(`Прибор ${this.type} ${this.model} выключен`);
        this.isOnOff = false;
    }

    totalPower() {
    if (this.isOnOff) return this.power;
    else return 0;
    }
}

const tv = new Appliances('Телевизор', 'Samsung', 1500);
const fridge = new Appliances('холодильник', 'lG', 2000);
const cleaner = new Appliances('Пылесос', 'Redmond', 2500);
const kettle = new Appliances('Чайник', 'Tefal', 1400);

tv.on();
fridge.on();
cleaner.off();
kettle.on();

console.log(`Потребляемая мощность работающих приборов = 
${tv.totalPower() + fridge.totalPower() + fridge.totalPower() + kettle.totalPower()} Вт`);
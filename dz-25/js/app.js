class Human {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    get info() {
      console.log(`HUMAN: ${this.name} ${this.age}`)
    }
  }
  
  class Car {
    constructor(brand, model, year, regnum) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.regnum = regnum;
    }
  
    owner(owner) {
      if (owner.age < 18) {
        console.log('ACHTUNG: You are too young')
      } else { // Присваиваем владельца
        this.ownerName = owner;
      }
    }
  
    get carInfo() {
      console.log(`CAR: ${this.brand} ${this.model} ${this.year} ${this.regnum}`);
      // т.к. this.ownerName это экземпляр класса Human
      // то нам доступны все его методы, вызываем .info(Предварительно проверив)
      this.ownerName ? this.ownerName.info : console.log(`У ${this.brand}-${this.model} владельца нет`);
    }
  }
  
  const vasya = new Human('Vasia', 20);
  const petya = new Human('Petya', 17);
  const masha = new Human('Masha', 22);
  vasya.info;
  petya.info;
  const volvo = new Car('volvo', 'xc', 2020, 'q234er');
  const vaz = new Car('VAZ', 'granta', 2022, 'a567df');
  const gaz = new Car('GAZ', 'BB', 2021, 'm555kd');
  
  volvo.owner(vasya);
  vaz.owner(petya);
  vaz.owner(masha);
  
  volvo.carInfo;
  vaz.carInfo;
  gaz.carInfo;
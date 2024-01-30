class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Достигнуто максимальное количество квартир в доме.");
        }
    }
}

// Демонстрация использования классов:

// Создаем несколько экземпляров класса Person
const person1 = new Person("Иван", "Мужской");
const person2 = new Person("Мария", "Женский");


// Создаем несколько экземпляров класса Apartment
const apartment1 = new Apartment();
const apartment2 = new Apartment();

// Добавляем экземпляры класса Person к экземплярам класса Apartment
apartment1.addResident(person1);
apartment2.addResident(person2);

// Создаем экземпляр класса House с максимальным количеством квартир, например, 3
const house = new House(3);

// Добавляем экземпляры класса Apartment к экземплярам класса House
house.addApartment(apartment1);
house.addApartment(apartment2);

// Попытка добавить еще одну квартиру (превысим максимальное количество)
const apartment3 = new Apartment();
house.addApartment(apartment3); // Выведет сообщение об ошибке в консоль


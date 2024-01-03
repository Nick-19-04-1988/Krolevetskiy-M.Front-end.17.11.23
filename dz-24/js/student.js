/*
class Student {
    constructor(firstName, lastName, birthDay, marks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.marks = marks;
        this.absence = new Array(25);
        this.absenceIndex = 0;
        this.age = this.getAge(birthDay);
        this.averageMark = this.marks.reduce((r, m) => r + m) / this.marks.length;
        this.presenceFactor = 0.9;
        this.goodMarksMin = 90;
        this.results = {
            BAD: "Редиска!",
            NORMAL: "Норм, но можно лучше",
            GOOD: "Ути какой молодчинка!"
        };
    }

    absent() {
        if (this.absence.length > this.absenceIndex) {
            this.absence[this.absenceIndex] = false;
            this.absenceIndex++;
        }
    };

    present() {
        if (this.absence.length > this.absenceIndex) {
            this.absence[this.absenceIndex] = true;
            this.absenceIndex++;
        }
    };

    get avaragePresence() {
        var precenceCount = this.absence.slice(0, this.absenceIndex).filter(x => x).length;
        return precenceCount / this.absenceIndex;
    }    

    getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    summary() {
        if (this.averageMark < this.goodMarksMin && this.avaragePresence < this.presenceFactor) {
            console.log(this.results.BAD);
        } else if (this.averageMark < this.goodMarksMin || this.avaragePresence < this.presenceFactor)
            console.log(this.results.NORMAL);
        else
            console.log(this.results.GOOD);
    }
}
*/
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.marks = [];
        // Приватное свойство выделим подчеркиванием.
        this._presence = new Array(25);
        this._current = 0;
    }

    get age() {
        return new Date().getFullYear() - this.year;
    }

    get averageMark() {
        let count = 0,
            sum = this.marks.reduce((a, b) => { ++count; return a + b; }, 0);
        return count ? sum / count : 0;
    }

    present(mark) {
        if (this._current === this._presence.length)
            throw new RangeError(`${this.firstName} ${this.lastName} уже закончил сессию.`);
        this.marks[this._current] = mark;
        this._presence[this._current++] = true;
    }
    absent() {
        if (this._current === this._presence.length)
            throw new RangeError(`${this.firstName} ${this.lastName} уже закончил сессию.`)
        this._presence[this._current++] = false;
    }
}

let student = new Student("Иван", "Иванов", 1998);
console.log(student.age);

student.present(4);
student.present(5);
student.absent();
student.present(4);
student.present(5);
//student.absent(); // Раскомментировать для проверки ошибки

console.log(student.averageMark.toFixed(1));
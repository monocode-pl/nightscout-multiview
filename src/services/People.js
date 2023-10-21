import {Person} from "../Person";

export class People {
    static create(numberOfPeople, firstId = 0) {
        return Array(numberOfPeople).fill(null).map((n, index) => new Person(firstId + index))
    }
}
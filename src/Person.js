export class Person {
    constructor(id) {
        this.id = id;
        this.label = `Osoba ${id + 1}`;
        this.url = null;
        this.withClock = false;
    }

    get frameUrl() {
        if (!this.url) {
            return this.url;
        }

        if (!this.withClock) {
            return this.url;
        }

        return new URL('/clock/cy10-sg50-nl-ar20-dt20', this.url).toString();
    }
}

import i18next from "i18next";

export class Monitor {
    constructor(id) {
        this.id = id;
        this.label = i18next.t('Person {{id}}', {id: id + 1});
        this.url = null;
        this.withClock = false;
        this.token = null;
    }
    get frameUrl() {
        if (!this.url) {
            return this.url;
        }

        const baseUrl = new URL(this.url);
        let frameUrl = baseUrl;

        if (this.withClock) {
            frameUrl = new URL('/clock/cy10-sg50-nl-ar20-dt20', baseUrl);

            // Creating a relative url wipes out all search params. We need to restore them.
            [...baseUrl.searchParams.entries()].forEach(([key, val]) => {
                frameUrl.searchParams.append(key, val);
            });
        }

        if (this.token) {
            frameUrl.searchParams.set('token', this.token);
        }

        return frameUrl.toString();
    }
}

export class Monitors {
    static create(numberOfMonitors, firstId = 0) {
        return Array(numberOfMonitors).fill(null).map((n, index) => new Monitor(firstId + index))
    }
}
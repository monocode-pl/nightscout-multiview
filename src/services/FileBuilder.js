import PanelTemplate from './PanelTemplate';

export class FileBuilder {
    _monitors = null;
    _rows = null;
    _cols = null;
    monitors(val) {
        this._monitors = val;

        return this;
    }

    rows(val) {
        this._rows = val;

        return this;
    }

    cols(val) {
        this._cols = val;

        return this;
    }

    build(filename) {
        const context = {
            monitors: this._monitors,
            rows: this._rows,
            cols: this._cols
        }

        const htmlStr = PanelTemplate(context);
        const blob = new Blob([htmlStr]);

        return new File([blob], filename);
    }
}
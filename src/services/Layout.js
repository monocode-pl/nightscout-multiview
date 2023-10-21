export const LAYOUT_ORIENTATION = {
    HORIZONTAL: 'HORIZONTAL',
    VERTICAL: 'VERTICAL',
    GRID: 'GRID',
}

export function computeLayout(numberOfPeople, orientation) {
    let numberOfRows, numberOfCols;

    if (orientation === LAYOUT_ORIENTATION.VERTICAL) {
        numberOfRows = numberOfPeople;
        numberOfCols = 1;
    } else if (orientation === LAYOUT_ORIENTATION.HORIZONTAL) {
        numberOfRows = 1;
        numberOfCols = numberOfPeople;
    } else {
        numberOfRows = Math.round(Math.sqrt(numberOfPeople));
        numberOfCols = Math.ceil(numberOfPeople / numberOfRows);
    }

    return [numberOfRows, numberOfCols];
}
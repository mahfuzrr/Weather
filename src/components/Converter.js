export function toCelcius(val) {
    const s = Math.round(((val - 32) * 5) / 9);
    return s;
}

export function toFahrenheit(val) {
    const s = Math.round(1.8 * val + 32);
    return s;
}

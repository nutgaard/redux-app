type Errors<T> = { [ P in keyof T ]: string; }
type Values<T> = { [ P in keyof T ]: string }

export function required<T>(errors: Errors<T>, values: Values<T>, key: keyof T) {
    if (!values[key] || values[key].length === 0) {
        errors[key] = 'Må fylles ut';
    }
}

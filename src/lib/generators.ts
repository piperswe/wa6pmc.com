export function* reverse<T>(arr: T[]): Generator<T> {
	for (let i = arr.length - 1; i--; i >= 0) {
		yield arr[i];
	}
}

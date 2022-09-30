{
	function checkNotNullBad(arg: number | null): number {
		if (arg == null) {
			throw new Error('not valid number!');
		}
		return arg;
	}
	function checkNotNullAnyBad(arg: any | null): any {
		if (arg == null) {
			throw new Error('not valid value!');
		}
		return arg;
	}

	// any가 아닌, 제네릭으로 타입의 유연성을 제공할 수 있다.
	function checkNotNull<T>(arg: T | null): T {
		if (arg == null) {
			throw new Error('not valid value!');
		}
		return arg;
	}
	const number = checkNotNull(123);
	const bool: boolean = checkNotNull(true);
}

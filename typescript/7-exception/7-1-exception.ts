// Java: Exception
// JavaScript: Error

// Error(Exception) Handling: try -> catch -> finally
function readFile(fileName: string): string {
	if (fileName === 'not exist!') {
		throw new Error(`file not exist! ${fileName}`);
	}

	return 'file contents';
}

function closeFile(fileName: string) {}

function run() {
	const fileName = 'not exist!';
	try {
		// throw로 에러를 던지는 구문이 있는 부분은 try로 감싼다.
		console.log(readFile(fileName));
	} catch (err) {
		// throw로 에러를 던지는 부분을 만나는 순간, 이 부분으로 빠진다.
		console.log(`catched!!`);
		return;
	} finally {
		// 위의 catch 안에서 return을 통해 함수 종료를 했음에도
		// finally 안의 구문은 항상 실행된다.
		closeFile(fileName);
		console.log(`closed!!`);
	}

	console.log('!!!');
}

run();

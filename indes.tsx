
import * as JSX from './jsx';

class Test extends JSX.ViewController<{a: number; b: string}, {a: number}> {
	state = {a:100, b: 200};
	test() {
		this.state.a = 100;
	}
}

class Test2 extends JSX.ViewController<{c?: number}> {
}

export default function () {
	return (
		<Test a={100} b={'200'}>
			<Test2 />
			<Test2 c={2} />
			<Test2 c={3} />
		</Test>
	);
}

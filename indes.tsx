
import * as JSX from './jsx';

class Test extends JSX.ViewController<{a: number; b: string}> {
	private _state = this.props;
	test() {
		var test = import('./test');
		console.log(test);
		console.log(this._state);
	}
}

class Test2 extends JSX.ViewController<{c: number}> {
	private _c = this.props.c;
	test() {
		console.log(this.props.c, this._c);
	}
}

export default function() {
	return (
		<Test a={100} b={'200'}>
			<Test2 c={1} />
			<Test2 c={2} />
			<Test2 c={3} />
		</Test>
	);
}

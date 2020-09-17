
import * as JSX from './jsx';

class Test extends JSX.ViewController<{a: number; b: string}> {

	state = this.props;

	test() {

		var test = import('./test');

		console.log(test);

		console.log(this.props);
	}
}

class Test2 extends JSX.ViewController<{c: number}> {

	_state_c = this.props.c;

	test() {
		console.log(this.props.c);
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


import * as React from './jsx2';

class Test extends React.ViewController {
	// private _state = this.props;

	a = 0;
	b = '';

	test() {
		var test = import('./test');
		console.log(test);
		// console.log(this._state);
	}
}

export default function() {
	return (
		<Test a={100} b={'200'} />
	);
}

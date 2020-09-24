
import * as React from './jsx2';

class Test extends React.ViewController {
	a = 100;
	b = '100';
}

export default function() {
	return (
		<Test props={{a:100, b:''}}>
		</Test>
	);
}
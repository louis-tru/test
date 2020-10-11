
import * as React from './jsx2';

class Test {
	a = 100;
	b = '100';
	// constructor(props: Partial<Test>) {}
}

// type Test2 = Test; // React.ViewController<Test>;

// declare function Test(props: Partial<Test_>): void; // extends React.ViewController<Test> {}

// type Test2 = React.ViewController<Test>;

export default function() {
	return (
		<Test a={100}>
		</Test>
	);
}
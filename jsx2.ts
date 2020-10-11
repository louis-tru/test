
export class ViewController {
	constructor(props: any) {
		
	}
}

// type ClassType<T extends ViewController> = (new () => T);

interface ViewControllerConstructor<T extends ViewController> {
	new(props: Partial<T>): T;
}

export function createElement<T extends ViewController>(
	type: ViewControllerConstructor<T>,
	props: Partial<T>,
	...children: any[]
) {
	return {};
}

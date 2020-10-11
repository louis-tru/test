
<<<<<<< HEAD
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
=======
interface ReactElement {
}

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | boolean | null | undefined;

export class ViewController<T> {
	// protected readonly props: Readonly<P> = {} as P;
	constructor(props: Partial<T>) {
		// this.props = props;
	}
}

type Key = string | number;

interface Attributes {
	key?: Key | null;
}

interface RefObject<T> {
	readonly current: T | null;
}
type RefCallback<T> = { bivarianceHack(instance: T | null): void }["bivarianceHack"];
type Ref<T> = RefCallback<T> | RefObject<T> | null;
type LegacyRef<T> = string | Ref<T>;

// type Partial<T> = {
// 	[P in keyof T]?: T[P];
// };

interface ClassAttributes<T> {
	// [P in keyof T]?: T[P];
	// ref?: LegacyRef<T>;
	// [P in keyof T]: T[P];
	// [key: string]: T[keyof T];
}

interface ViewControllerConstructor<T> {
	new(): T;
}

export function createElement<T>(
	type: ViewControllerConstructor<ViewController<T>>,
	props?: Partial<T> | null,
	...children: ReactNode[]
) {
	return {};
}

declare global {
	namespace JSX {

		// // tslint:disable-next-line:no-empty-interface
		// interface Element extends React.ReactElement<any, any> {}
		// interface ElementClass extends React.Component<any> {
		// 		render(): React.ReactNode;
		// }
		// interface ElementAttributesProperty { props: {}; }
		// interface ElementChildrenAttribute { children: {}; }

		// // We can't recurse forever because `type` can't be self-referential;
		// // let's assume it's reasonable to do a single React.lazy() around a single React.memo() / vice-versa
		// type LibraryManagedAttributes<C, P> = C extends React.MemoExoticComponent<infer T> | React.LazyExoticComponent<infer T>
		// 		? T extends React.MemoExoticComponent<infer U> | React.LazyExoticComponent<infer U>
		// 				? ReactManagedAttributes<U, P>
		// 				: ReactManagedAttributes<T, P>
		// 		: ReactManagedAttributes<C, P>;

		// tslint:disable-next-line:no-empty-interface
		// interface IntrinsicAttributes extends React.Attributes {}
		// tslint:disable-next-line:no-empty-interface

		interface IntrinsicClassAttributes<T> {
			// [P in keyof T]: T[P];
			a: number;
		}

		// type IntrinsicClassAttributes<T extends ViewController> = {
		// 	[P in keyof T]: T[P];
		// };

		// type IntrinsicClassAttributes<T> = Props<T>;
	}
}
>>>>>>> fdb43f0d2cdc36fb30c4d327674322d4b09fcbab

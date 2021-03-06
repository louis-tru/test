
interface ReactElement {
}

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | boolean | null | undefined;

export class ViewController<P = {}> {

	protected readonly props: Readonly<P>;

	constructor(props: Readonly<P>) {
		this.props = props;
	}

}

type ClassType<P, T extends ViewController<P>> = (new (props: P) => T);

export function createElement<P extends {}, T extends ViewController<P>>(
	type: ClassType<P, T>,
	props: P,
	...children: ReactNode[]
) {
	return {};
}

// export function jsxFactory() {
// 	return {} as any;
// }


interface ReactElement {
}

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | boolean | null | undefined;

export class ViewController<P = {}, S = {}> {

	protected readonly props: Readonly<P>;
	protected readonly state: Readonly<S>;

	constructor(props: Readonly<P>) {
		this.props = props;
		this.state = {} as S;
	}

}

type ClassType<P, T extends ViewController<P>> = (new (props: P) => T);

export function jsxFactory<P extends {}, T extends ViewController<P>>(
	type: ClassType<P, T>,
	props: P,
	...children: ReactNode[]
) {
	return {};
}
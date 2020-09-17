
interface Fish {
	fish: string
}
interface Water {
	water: string
}
interface Bird {
	bird: string
}
interface Sky {
	sky: string
}
//naked type
type Condition<T> = T extends Fish ? Water : Sky;

let condition1: Condition<Fish | Bird> = { water: '水' };
let condition2: Condition<Fish | Bird> = { sky: '天空' };

// type Partial<T> = {
// 	[P in keyof T]?: T[P];
// };
var pa: Partial<{a:number; b: string}> = { b: '0' };

// type Required<T> = {
// 	[P in keyof T]-?: T[P];
// };
var re: Required<{a:number; b?: string}> = { a: 100, b: '0' };

// type Pick<T, K extends keyof T> = {
// 	[P in K]: T[P];
// };
var p: Pick<{a:number; b: string; c: number}, 'a'|'b'> = { a: 100, b: '' };

// type Record<K extends keyof any, T> = {
// 	[P in K]: T;
// };
var r: Record<'a'|'b', number> = { a: 100, b: 20 };

// type Exclude<T, U> = T extends U ? never : T;
var ex:  Exclude<{a: number, b: string}, {a: number}> = {a: 100, b: ''} as never;
var ex2: Exclude<'a'|'b'|'c', 'a'|'b'>;

// type Extract<T, U> = T extends U ? T : never;
var ext:  Extract<{a: number, b: string}, {a: number}> = {a: 100, b: ''};
type Extract2<T, U> = T extends U ? T : never;
var ext2: Extract2<'a'|'b'|'c', 'a'|'b'>;

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
var om: Omit<{a: number; b: string; c: number}, 'a'|'b'> = {c: 100};

export default { a: 100 };
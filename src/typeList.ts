/* eslint-disable @typescript-eslint/no-unused-vars */
/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// 数値
let num: number = 0;

// string 文字
let str: string = "あああ";

// Array　配列
let arr1: Array<number> = [0, 1, 2, 3];
let arr2: number[] = [0, 1, 2, 3];

// tuple
let tuple: [number, string] = [0, "A"];

// any
// どの型でも入る(なるべく使わないように)
let any1: any = false;

//void
//何も返却しない型
const funcA = (): void => {
  const test = "Test";
};

// null
let null1: null = null;

//undefinded
let undefined1: undefined = undefined;

// object
let object1: object = {};
let object2: { id: number; name: string } = { id: 0, name: "A" };

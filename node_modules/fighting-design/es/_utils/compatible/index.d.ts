/**
 * 将对象自身可枚举属性的键值对数组
 *
 * 该方法针对 `Object.entries()` 方法做的进一步浏览器兼容适配处理
 *
 * @see Object.entries() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *
 * `Object.entries()` 方法兼容性一般
 *
 * @see Object.entries() https://caniuse.com/?search=Object.entries()
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } obj 需要处理的对象
 * @returns { Array } 给定对象自身可枚举属性的键值对数组
 */
export declare const objectEntries: <T extends object>(obj: T) => [keyof T, T[keyof T]][];

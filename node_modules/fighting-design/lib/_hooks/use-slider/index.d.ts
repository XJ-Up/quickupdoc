import type { Ref } from 'vue';
/** useSlider 返回值类型接口 */
export type UseSliderReturn = () => void;
/**
 * callback 参数类型
 *
 * @param { number } num 滑动距离
 */
export type UseSliderCallback = (num: number) => void;
/**
 * slider 组件滑动方法
 *
 * @param { Object } el 滑块元素节点
 * @param { Function } callback 回调方法
 * @param { number } left 距离左侧的偏移量
 * @returns { Function } 开始监听滚动的方法
 */
export declare const useSlider: (el: HTMLElement, left: Ref<number>, callback: UseSliderCallback) => void;

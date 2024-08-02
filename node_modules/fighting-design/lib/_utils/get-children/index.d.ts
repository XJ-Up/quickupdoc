import type { VNode } from 'vue';
/**
 * 寻找所需的子元素列表
 *
 * @param { Object } children 孩子节点
 * @param { string } componentName 子元素的名字
 * @returns { Array } 所需要的所有孩子节点列表
 */
export declare const getChildren: (children: VNode[], componentName: string) => VNode[];

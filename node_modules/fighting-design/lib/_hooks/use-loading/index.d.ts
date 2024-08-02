import type { Directive, ComponentPublicInstance, App } from 'vue';
/**
 * FLoading 元素节点类型接口
 *
 * @param { Object } vm
 * @param { Object | null } loadingInstance
 * @param { string } originalPosition
 * @param { Object } style
 */
export interface LoadingElInterface extends HTMLElement {
    vm: ComponentPublicInstance;
    loadingInstance: App | null;
    originalPosition: string;
    style: CSSStyleDeclaration;
}
export declare const useLoading: () => Directive;

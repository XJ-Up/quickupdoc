/**
 * useAlertList 返回值类型接口
 *
 * @param { Function } startMove 开始触发滚动
 */
export type UseAlertListReturn = (duration?: number) => void;
/**
 * 处理 alert 组件滚动列表方法
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } node 滚动节点
 * @returns { Object }
 */
export declare const useAlertList: (node: HTMLElement) => UseAlertListReturn;

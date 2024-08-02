import type { CSSProperties, ComputedRef } from 'vue';
import type { ClassList } from '../../_interface';
import type { FilterParams } from '..';
/**
 * useList 返回值类型接口
 *
 * @param { Function } classes 类名列表
 * @param { Function } styles 样式列表
 */
export interface UseListReturn {
    classes: (list: FilterParams, className?: string) => ComputedRef<ClassList>;
    styles: (list: FilterParams, pixel?: boolean | string | string[]) => ComputedRef<CSSProperties>;
}
/**
 * 自动计算组件所需要的类名列表和样式列表
 *
 * 类名和样式首先通过传入属性列表数组，使用过滤 hook 进行过滤
 *
 * 过滤后的 prop 对象再进行样式或者类名处理
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop prop 列表
 * @param { string } name 组件名
 * @returns { Object } 类名列表和样式列表方法，可解构出 classes styles
 */
export declare const useList: <T extends object>(prop: T, name: string) => UseListReturn;

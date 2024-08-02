/**
 * useColor 返回值类型接口
 *
 * @param { Function } getDark 加深方法
 * @param { Function } getLight 减淡方法
 */
export interface UseColorReturn {
    getDark: (level?: number) => string;
    getLight: (level?: number) => string;
}
/**
 * 根据传入的 hex 计算出加深或减淡的颜色
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { string } color 需要计算的颜色，必须是 16 进制色号
 * @returns { Object } 加深原色 减淡颜色
 */
export declare const useColor: (color: string) => UseColorReturn;

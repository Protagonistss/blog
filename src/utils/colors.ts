/**
 * 标签颜色主题配置 - 现代极客版
 * 统一使用 Indigo 色系，既有色彩又不杂乱
 */
export const tagColorThemes = [
  { 
    bg: 'bg-blue-50 dark:bg-blue-900/30', 
    border: 'border-blue-100 dark:border-blue-800', 
    text: 'text-blue-600 dark:text-blue-300', 
    hover: 'hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-700 dark:hover:text-blue-200', 
    countBg: 'from-blue-500 to-blue-600' 
  }
] as const;

/**
 * 标签云颜色配置 - 现代极客版
 */
export const tagCloudColors = [
  'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-800 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 border border-blue-100 dark:border-blue-800'
] as const;

/**
 * 获取标签颜色主题
 * @param index 索引
 * @returns 颜色主题对象
 */
export function getTagColorTheme(index: number) {
  // 极简模式下，所有标签使用相同的主题，不再轮询
  return tagColorThemes[0];
}

/**
 * 获取标签云颜色
 * @param index 索引
 * @returns 颜色类名
 */
export function getTagCloudColor(index: number): string {
  return tagCloudColors[0];
}

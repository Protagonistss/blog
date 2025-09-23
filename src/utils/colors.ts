/**
 * 标签颜色主题配置
 */
export const tagColorThemes = [
  { 
    bg: 'bg-blue-50', 
    border: 'border-blue-200', 
    text: 'text-blue-700', 
    hover: 'hover:bg-blue-500', 
    countBg: 'from-blue-500 to-blue-600' 
  },
  { 
    bg: 'bg-green-50', 
    border: 'border-green-200', 
    text: 'text-green-700', 
    hover: 'hover:bg-green-500', 
    countBg: 'from-green-500 to-green-600' 
  },
  { 
    bg: 'bg-purple-50', 
    border: 'border-purple-200', 
    text: 'text-purple-700', 
    hover: 'hover:bg-purple-500', 
    countBg: 'from-purple-500 to-purple-600' 
  },
  { 
    bg: 'bg-pink-50', 
    border: 'border-pink-200', 
    text: 'text-pink-700', 
    hover: 'hover:bg-pink-500', 
    countBg: 'from-pink-500 to-pink-600' 
  },
  { 
    bg: 'bg-yellow-50', 
    border: 'border-yellow-200', 
    text: 'text-yellow-700', 
    hover: 'hover:bg-yellow-500', 
    countBg: 'from-yellow-500 to-yellow-600' 
  },
  { 
    bg: 'bg-indigo-50', 
    border: 'border-indigo-200', 
    text: 'text-indigo-700', 
    hover: 'hover:bg-indigo-500', 
    countBg: 'from-indigo-500 to-indigo-600' 
  }
] as const;

/**
 * 标签云颜色配置
 */
export const tagCloudColors = [
  'bg-blue-100 hover:bg-blue-500 text-blue-700 hover:text-white',
  'bg-green-100 hover:bg-green-500 text-green-700 hover:text-white',
  'bg-purple-100 hover:bg-purple-500 text-purple-700 hover:text-white',
  'bg-pink-100 hover:bg-pink-500 text-pink-700 hover:text-white',
  'bg-yellow-100 hover:bg-yellow-500 text-yellow-700 hover:text-white',
  'bg-indigo-100 hover:bg-indigo-500 text-indigo-700 hover:text-white',
  'bg-red-100 hover:bg-red-500 text-red-700 hover:text-white',
  'bg-teal-100 hover:bg-teal-500 text-teal-700 hover:text-white'
] as const;

/**
 * 获取标签颜色主题
 * @param index 索引
 * @returns 颜色主题对象
 */
export function getTagColorTheme(index: number) {
  return tagColorThemes[index % tagColorThemes.length];
}

/**
 * 获取标签云颜色
 * @param index 索引
 * @returns 颜色类名
 */
export function getTagCloudColor(index: number): string {
  return tagCloudColors[index % tagCloudColors.length];
}

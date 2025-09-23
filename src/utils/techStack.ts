/**
 * 技术栈图标映射
 */
export const techStackIcons = {
  'CSS': '🎨',
  'Webpack': '📦',
  'Vue.js': '💚',
  'JavaScript': '⚡',
  'Node.js': '🟢',
  'Python': '🐍',
  'Rust': '🦀',
  'Java': '☕',
  'Linux': '🐧',
  'Nginx': '🌐',
  'Git': '📝',
  'Docker': '🐳',
  'Database': '🗄️',
  'Deployment': '🚀',
  'Tools': '🔧',
  'Other': '📄'
} as const;

/**
 * 技术栈颜色映射
 */
export const techStackColors = {
  'CSS': 'from-pink-500 to-rose-500',
  'Webpack': 'from-yellow-500 to-orange-500',
  'Vue.js': 'from-green-500 to-emerald-500',
  'JavaScript': 'from-yellow-400 to-yellow-600',
  'Node.js': 'from-green-600 to-green-800',
  'Python': 'from-blue-500 to-indigo-500',
  'Rust': 'from-orange-600 to-red-600',
  'Java': 'from-red-500 to-red-700',
  'Linux': 'from-gray-600 to-gray-800',
  'Nginx': 'from-green-600 to-green-800',
  'Git': 'from-orange-500 to-red-500',
  'Docker': 'from-blue-500 to-cyan-500',
  'Database': 'from-purple-500 to-pink-500',
  'Deployment': 'from-indigo-500 to-purple-500',
  'Tools': 'from-gray-500 to-gray-700',
  'Other': 'from-gray-400 to-gray-600'
} as const;

/**
 * 获取技术栈图标
 * @param techStack 技术栈名称
 * @returns 图标emoji
 */
export function getTechStackIcon(techStack: string): string {
  return techStackIcons[techStack as keyof typeof techStackIcons] || techStackIcons.Other;
}

/**
 * 获取技术栈颜色
 * @param techStack 技术栈名称
 * @returns 颜色类名
 */
export function getTechStackColor(techStack: string): string {
  return techStackColors[techStack as keyof typeof techStackColors] || techStackColors.Other;
}

/**
 * 工具函数统一导出
 */

// 阅读时间计算
export { calculateReadingTime } from './readingTime';

// 技术栈相关
export { 
  techStackIcons, 
  techStackColors, 
  getTechStackIcon, 
  getTechStackColor 
} from './techStack';

// 日期格式化
export { 
  formatDate, 
  formatDateISO, 
  getRelativeTime 
} from './date';

// 颜色主题
export { 
  tagColorThemes, 
  tagCloudColors, 
  getTagColorTheme, 
  getTagCloudColor 
} from './colors';

// 文章处理
export { 
  groupPostsByTechStack, 
  groupPostsByCategory, 
  groupPostsByTag, 
  getTagStats, 
  getCategoryStats, 
  getRelatedPosts 
} from './posts';

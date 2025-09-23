/**
 * 格式化日期为中文格式
 * @param date 日期对象
 * @returns 格式化后的日期字符串
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('zh-CN');
}

/**
 * 格式化日期为ISO字符串
 * @param date 日期对象
 * @returns ISO格式的日期字符串
 */
export function formatDateISO(date: Date): string {
  return date.toISOString();
}

/**
 * 获取相对时间描述
 * @param date 日期对象
 * @returns 相对时间字符串
 */
export function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) {
    return '今天';
  } else if (diffInDays === 1) {
    return '昨天';
  } else if (diffInDays < 7) {
    return `${diffInDays}天前`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks}周前`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return `${months}个月前`;
  } else {
    const years = Math.floor(diffInDays / 365);
    return `${years}年前`;
  }
}

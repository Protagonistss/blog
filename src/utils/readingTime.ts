/**
 * 计算阅读时间（基于中文阅读速度）
 * @param content 文章内容
 * @returns 阅读时间（分钟）
 */
export function calculateReadingTime(content: string): number {
  // 移除HTML标签和Markdown语法
  const text = content
    .replace(/<[^>]*>/g, '') // 移除HTML标签
    .replace(/[#*`_~\[\]()]/g, '') // 移除Markdown语法
    .replace(/\s+/g, ' ') // 合并多个空格
    .trim();
  
  // 中文字符数
  const chineseChars = (text.match(/[\u4e00-\u9fff]/g) || []).length;
  // 英文单词数（按空格分割）
  const englishWords = text.split(/\s+/).filter(word => /[a-zA-Z]/.test(word)).length;
  
  // 中文阅读速度：300字/分钟，英文阅读速度：200词/分钟
  const chineseTime = chineseChars / 300;
  const englishTime = englishWords / 200;
  
  return Math.ceil(chineseTime + englishTime);
}

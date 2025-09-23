import fs from 'fs';

/**
 * 文章日期工具函数
 * 用于读取文章的文件系统时间信息
 */

/**
 * 获取文章的发布时间和最后修改时间
 * @param filePath 文章文件路径
 * @returns 包含 pubDate 和 updatedDate 的对象
 */
export function getArticleDates(filePath: string): {
  pubDate: Date | null;
  updatedDate: Date | null;
  fileModifiedTime: Date | null;
} {
  // 检查文件是否存在
  if (!fs.existsSync(filePath)) {
    console.warn(`文件不存在: ${filePath}`);
    return {
      pubDate: null,
      updatedDate: null,
      fileModifiedTime: null
    };
  }
  
  const stats = fs.statSync(filePath);
  const fileModifiedTime = stats.mtime;
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    
    if (!frontmatterMatch) {
      return {
        pubDate: null,
        updatedDate: null,
        fileModifiedTime
      };
    }
    
    const frontmatterContent = frontmatterMatch[1];
    
    // 提取 pubDate
    const pubDateMatch = frontmatterContent.match(/pubDate:\s*["']?([^"'\n]+)["']?/);
    const pubDate = pubDateMatch ? new Date(pubDateMatch[1]) : null;
    
    // 提取 updatedDate
    const updatedDateMatch = frontmatterContent.match(/updatedDate:\s*["']?([^"'\n]+)["']?/);
    const updatedDate = updatedDateMatch ? new Date(updatedDateMatch[1]) : null;
    
    return {
      pubDate,
      updatedDate,
      fileModifiedTime
    };
  } catch (error) {
    console.error(`❌ 读取文件失败 ${filePath}:`, error);
    return {
      pubDate: null,
      updatedDate: null,
      fileModifiedTime
    };
  }
}

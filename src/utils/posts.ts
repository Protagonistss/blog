import type { CollectionEntry } from 'astro:content';

/**
 * 按技术栈分组文章
 * @param posts 文章列表
 * @returns 按技术栈分组的文章对象
 */
export function groupPostsByTechStack(posts: CollectionEntry<'posts'>[]) {
  return posts.reduce((acc, post) => {
    const techStack = post.data.techStack || 'Other';
    if (!acc[techStack]) {
      acc[techStack] = [];
    }
    acc[techStack].push(post);
    return acc;
  }, {} as Record<string, CollectionEntry<'posts'>[]>);
}

/**
 * 按分类分组文章
 * @param posts 文章列表
 * @returns 按分类分组的文章对象
 */
export function groupPostsByCategory(posts: CollectionEntry<'posts'>[]) {
  return posts.reduce((acc, post) => {
    post.data.categories.forEach(category => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(post);
    });
    return acc;
  }, {} as Record<string, CollectionEntry<'posts'>[]>);
}

/**
 * 按标签分组文章
 * @param posts 文章列表
 * @returns 按标签分组的文章对象
 */
export function groupPostsByTag(posts: CollectionEntry<'posts'>[]) {
  return posts.reduce((acc, post) => {
    post.data.tags.forEach(tag => {
      if (!acc[tag]) {
        acc[tag] = [];
      }
      acc[tag].push(post);
    });
    return acc;
  }, {} as Record<string, CollectionEntry<'posts'>[]>);
}

/**
 * 获取标签统计信息
 * @param posts 文章列表
 * @returns 标签统计数组
 */
export function getTagStats(posts: CollectionEntry<'posts'>[]) {
  const tagCounts: Record<string, number> = {};
  
  posts.forEach(post => {
    post.data.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * 获取分类统计信息
 * @param posts 文章列表
 * @returns 分类统计数组
 */
export function getCategoryStats(posts: CollectionEntry<'posts'>[]) {
  const categoryCounts: Record<string, number> = {};
  
  posts.forEach(post => {
    post.data.categories.forEach(category => {
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });
  });
  
  return Object.entries(categoryCounts)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * 获取相关文章
 * @param currentPost 当前文章
 * @param allPosts 所有文章
 * @param limit 限制数量
 * @returns 相关文章列表
 */
export function getRelatedPosts(
  currentPost: CollectionEntry<'posts'>, 
  allPosts: CollectionEntry<'posts'>[], 
  limit: number = 3
): CollectionEntry<'posts'>[] {
  return allPosts
    .filter(post => 
      post.slug !== currentPost.slug &&
      (post.data.categories.some(cat => currentPost.data.categories?.includes(cat)) ||
       post.data.tags.some(tag => currentPost.data.tags?.includes(tag)))
    )
    .slice(0, limit);
}

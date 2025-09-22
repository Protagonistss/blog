import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  try {
    const posts = await getCollection('posts');
    
    // 转换为搜索友好的格式
    const searchData = posts
      .filter(post => !post.data.draft)
      .map(post => ({
        title: post.data.title,
        slug: post.slug,
        description: post.data.description || '',
        tags: post.data.tags || [],
        categories: post.data.categories || [],
        pubDate: post.data.pubDate.toISOString(),
        url: `/posts/${post.slug}`
      }))
      .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
    
    return new Response(JSON.stringify(searchData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // 缓存1小时
      }
    });
  } catch (error) {
    console.error('Error generating posts data:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate posts data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

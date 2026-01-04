import { getCollection } from 'astro:content';

export async function GET() {
  const allPosts = await getCollection('posts');
  
  // 过滤掉草稿，并只保留必要的搜索字段以减小体积
  const searchIndex = allPosts
    .filter(post => !post.data.draft)
    .map(post => ({
      title: post.data.title,
      description: post.data.description || '',
      pubDate: post.data.pubDate,
      tags: post.data.tags,
      categories: post.data.categories,
      slug: post.slug,
      // 如果需要搜索正文，可以使用 post.body (注意会显著增加文件体积)
      // body: post.body 
    }))
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return new Response(JSON.stringify(searchIndex), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

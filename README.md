# protagonistss 个人博客

一个基于 Astro 构建的现代化个人技术博客，专注于分享技术文章和开发经验。

## ✨ 特性

- 🚀 **现代化技术栈**: Astro + TypeScript + Tailwind CSS
- 📱 **响应式设计**: 完美适配桌面端和移动端
- 🌙 **暗色模式**: 自动适配系统主题偏好
- ⚡ **极速加载**: 静态生成，SEO 友好
- 🎨 **现代 UI**: 精心设计的用户界面和交互效果
- 📝 **内容管理**: 基于 Markdown 的内容集合
- 🔍 **搜索功能**: 快速查找文章内容
- 📊 **统计分析**: 文章分类和标签管理

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build/) 4.x
- **语言**: TypeScript
- **样式**: Tailwind CSS + 自定义 CSS
- **内容**: Markdown + Astro Content Collections
- **部署**: GitHub Pages + GitHub Actions
- **包管理**: pnpm
- **Node.js**: v20.18.3

## 📦 项目结构

```
myblog/
├── src/
│   ├── content/          # 内容集合
│   │   ├── config.ts     # 内容配置
│   │   └── posts/        # 博客文章
│   ├── layouts/          # 页面布局
│   ├── pages/            # 页面路由
│   ├── styles/           # 全局样式
│   └── components/       # 组件
├── public/               # 静态资源
├── .github/workflows/    # GitHub Actions
└── astro.config.mjs      # Astro 配置
```

## 🚀 快速开始

### 环境要求

- Node.js >= 20.18.3
- pnpm (推荐) 或 npm

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

### 开发模式

```bash
# 启动开发服务器
pnpm dev

# 或
npm run dev
```

访问 http://localhost:4321 查看博客

### 构建生产版本

```bash
# 构建静态文件
pnpm build

# 预览构建结果
pnpm preview
```

## 📝 内容管理

### 添加新文章

1. 在 `src/content/posts/` 目录下创建 Markdown 文件
2. 添加 frontmatter 元数据：

```yaml
---
title: "文章标题"
description: "文章描述"
pubDate: 2024-01-01
tags: ["标签1", "标签2"]
categories: ["分类1"]
draft: false
---

文章内容...
```

### 文章元数据

- `title`: 文章标题
- `description`: 文章描述（可选）
- `pubDate`: 发布日期
- `updatedDate`: 更新日期（可选）
- `tags`: 标签数组
- `categories`: 分类数组
- `draft`: 是否为草稿（默认 false）

## 🎨 自定义主题

### 颜色配置

在 `tailwind.config.mjs` 中修改主题颜色：

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... 更多颜色
  }
}
```

### 样式定制

在 `src/styles/global.css` 中添加自定义样式。

## 🚀 部署

### GitHub Pages

1. 推送代码到 GitHub 仓库
2. GitHub Actions 会自动构建和部署
3. 访问 `https://yourusername.github.io/repository-name`

### 其他平台

- **Vercel**: 连接 GitHub 仓库即可自动部署
- **Netlify**: 拖拽 `dist` 文件夹或连接 Git 仓库
- **Cloudflare Pages**: 连接 GitHub 仓库

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- 博客: [https://protagonistss.github.io](https://protagonistss.github.io)
- GitHub: [@Protagonistss](https://github.com/Protagonistss)

---

> 不迁怒，不二过。 - 分享技术，记录成长
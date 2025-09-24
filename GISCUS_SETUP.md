# Giscus Q&A 配置说明

## 概述
本项目已集成 Giscus 评论系统作为 Q&A 功能，用户可以通过 GitHub 账号参与技术问答讨论。

## 配置步骤

### 1. 获取仓库信息
1. 访问 [Giscus 配置页面](https://giscus.app/zh-CN)
2. 输入你的 GitHub 仓库：`Protagonistss/myblog`
3. 选择分类：`Q&A`（如果不存在，需要先在 GitHub 仓库中创建）

### 2. 获取配置参数
从 Giscus 配置页面获取以下参数：
- `data-repo-id`: 仓库的 ID
- `data-category-id`: Q&A 分类的 ID

### 3. 更新配置
在 `src/pages/tools/qa.astro` 文件中更新以下配置：

```javascript
const giscusConfig = {
  "data-repo-id": "R_kgDOKQZQJQ", // 替换为实际的仓库ID
  "data-category-id": "DIC_kwDOKQZQJc4Cb8hJ", // 替换为实际的分类ID
  // ... 其他配置保持不变
};
```

### 4. 创建 GitHub 分类（可选）
如果还没有 Q&A 分类，需要在 GitHub 仓库中创建：
1. 进入仓库的 Discussions 页面
2. 点击 "New category"
3. 创建名为 "Q&A" 的分类
4. 设置合适的描述和图标

## 功能特性

### 问题分类
- 支持使用标签分类问题（#JavaScript, #Vue, #React 等）
- 自动识别技术栈相关的问题
- 便于用户快速找到相关讨论

### 交互功能
- GitHub 账号登录
- Markdown 格式支持
- 代码高亮
- 表情反应
- @用户提及
- 问题投票和排序

### 页面集成
- 首页 Q&A 组件快速访问
- 工具页面统一入口
- 响应式设计，支持移动端

## 使用说明

### 提问
1. 访问 `/tools/qa` 页面
2. 使用 GitHub 账号登录
3. 在评论区发布问题
4. 使用合适的标签分类（如 #JavaScript）

### 回答
1. 浏览现有问题
2. 回复评论提供解答
3. 使用 @用户名 提及提问者
4. 提供代码示例和详细解释

### 管理
- 问题会自动同步到 GitHub Discussions
- 支持在 GitHub 上进行更详细的管理
- 可以设置讨论的可见性和权限

## 注意事项

1. **首次配置**：需要先在 Giscus 配置页面获取正确的仓库和分类 ID
2. **权限设置**：确保仓库的 Discussions 功能已启用
3. **分类管理**：建议在 GitHub 仓库中创建专门的 Q&A 分类
4. **内容审核**：可以设置讨论的审核规则和权限

## 自定义样式

Q&A 页面使用了与博客一致的设计风格：
- 深色/浅色主题支持
- 响应式布局
- 渐变色彩搭配
- 现代化的卡片设计

如需自定义样式，可以修改 `src/pages/tools/qa.astro` 和 `src/components/QAWidget.astro` 文件中的 CSS 类。

---
title: "Git Commit 规范"
description: "规范commit信息，可用于提交规范和命令"
pubDate: "2025-11-03 15:31:18"
tags: ["prompts"]
categories: ["AI"]
draft: false
techStack: "AI"
---

# Git Commit 规范

## 规范概述

良好的 commit 信息是团队协作和项目维护的基础。本规范定义了标准的 commit 信息格式，帮助团队保持一致的代码提交风格。

## Commit 格式

### 基本格式
```
<type>(<scope>): <subject>

<body>

<footer>
```

### 详细格式说明
```
feat(user): 添加用户注册功能

实现完整的用户注册流程，包括：
- 邮箱验证功能
- 密码强度校验
- 注册成功后自动登录

Closes #123
BREAKING CHANGE: 重构了用户认证接口
```

## Commit 类型 (Type)

| 类型 | 说明 | 示例 |
|------|------|------|
| `feat` | 新功能 | `feat: 添加用户头像上传功能` |
| `fix` | 修复bug | `fix: 修复登录页面崩溃问题` |
| `docs` | 文档修改 | `docs: 更新API使用说明` |
| `style` | 代码格式修改 | `style: 统一代码缩进为4个空格` |
| `refactor` | 代码重构 | `refactor: 重构用户管理模块` |
| `perf` | 性能优化 | `perf: 优化首页加载速度` |
| `test` | 测试相关 | `test: 添加用户接口单元测试` |
| `chore` | 构建工具或辅助功能 | `chore: 更新webpack配置` |
| `ci` | CI配置修改 | `ci: 添加自动化部署脚本` |
| `revert` | 回滚某个commit | `revert: 回滚用户认证功能` |

## Scope 范围 (可选)

Scope 用于指定本次提交影响的范围：

- **组件级别**: `button`, `modal`, `form`
- **功能模块**: `auth`, `user`, `payment`
- **文件类型**: `config`, `style`, `api`
- **特定位置**: `header`, `footer`, `sidebar`

**示例:**
- `feat(auth): 添加JWT认证`
- `fix(button): 修复点击事件`
- `style(header): 调整导航栏样式`

## Subject 主题

### 要求
- 长度限制：50字符以内
- 使用祈使句语气 (Add, Fix, Update)
- 首字母大写
- 结尾不加句号

### 示例
✅ **正确:**
- `Add user registration feature`
- `Fix memory leak in data loader`
- `Update dependencies to latest versions`

❌ **错误:**
- `added user registration feature` (小写开头)
- `Fix memory leak in data loader.` (句号结尾)
- `This commit adds user registration feature` (过于冗长)

## Body 正文 (可选)

### 何时使用
- 当修改内容较为复杂时
- 需要详细说明修改原因和影响时
- 团队协作需要更多上下文时

### 格式要求
- 每行不超过72字符
- 使用空行分隔段落
- 详细描述修改内容、原因和影响

### 示例
```
修复登录页面在移动端的显示问题

问题描述：
- 在iPhone X上登录按钮被刘海遮挡
- Android设备上表单输入框过小

解决方案：
- 添加安全区域适配
- 调整按钮尺寸和间距
- 优化表单布局

影响范围：所有移动端用户
测试设备：iPhone 8/11/13, Android 9.0+
```

## Footer 页脚 (可选)

### 破坏性变更 (BREAKING CHANGE)
```
BREAKING CHANGE: 重构了用户API接口

原接口：
POST /api/user/create

新接口：
POST /api/users
```

### 问题关联
```
Closes #123
Fixes #456
Related to #789
```

### 评审信息
```
Reviewed-by: 张三 <zhangsan@example.com>
Co-authored-by: 李四 <lisi@example.com>
```

## 最佳实践

### 长度控制
- **标题行**: ≤50字符
- **正文行**: ≤72字符
- **页脚行**: ≤72字符

### 内容质量
- **具体性**: 说明具体修改了什么
- **原因性**: 解释为什么要修改
- **影响性**: 描述修改的影响范围

### 信息层次
1. **标题**: 快速了解修改类型和内容
2. **正文**: 详细说明修改细节
3. **页脚**: 关联信息和特殊标记

## 实际应用示例

### 新功能开发
```
feat(user): 实现用户个人资料编辑功能

新增用户资料管理页面，支持：
- 头像上传和裁剪
- 基本信息修改
- 隐私设置配置

技术实现：
- 使用 react-dropzone 处理文件上传
- 集成阿里云OSS存储
- 添加表单验证和错误处理

Closes #234
```

### Bug修复
```
fix(auth): 修复token过期自动刷新失败问题

问题根因：
- axios拦截器中token刷新逻辑有竞态条件
- 多个并发请求同时触发token刷新

解决方案：
- 实现token刷新队列机制
- 添加请求重试逻辑
- 优化错误处理流程

影响用户：所有已登录用户
测试覆盖：添加集成测试用例
```

### 性能优化
```
perf(list): 优化长列表虚拟滚动性能

性能提升：
- 渲染节点减少80%
- 首屏加载时间减少50%
- 滚动帧率稳定在60fps

技术方案：
- 实现虚拟滚动组件
- 添加列表项缓存机制
- 优化大数据量处理逻辑

基准测试结果：
- 1000条数据：从2.3s降至0.8s
- 内存占用减少60%
```

### 重构改进
```
refactor(utils): 重构工具函数模块结构

重构内容：
- 将工具函数按功能分类组织
- 统一函数命名规范
- 添加完整的TypeScript类型定义
- 补充单元测试覆盖

不影响现有功能接口，向后兼容

代码质量提升：
- 可维护性 +30%
- 可读性 +25%
- 测试覆盖率 95%
```

## 检查清单

提交前请确认：
- [ ] 类型是否正确 (feat, fix, docs, etc.)
- [ ] 主题是否简洁明了 (≤50字符)
- [ ] 是否需要添加详细说明
- [ ] 是否有关联的问题ID
- [ ] 是否有破坏性变更需要标记
- [ ] 代码是否经过测试
- [ ] 提交信息是否符合团队规范

---

**遵循此规范，让我们的提交历史更加清晰可读，为团队协作奠定良好基础！** 

## 常见问题

**Q: 什么时候需要写正文？**
A: 当修改较为复杂或需要详细说明时。简单修改可以只写标题。

**Q: 如何处理多人协作的提交？**
A: 使用 `Co-authored-by:` 标记合作者。

**Q: 发现提交信息写错了怎么办？**
A: 使用 `git commit --amend` 修改最后一次提交。

**Q: 团队已有其他规范怎么办？**
A: 可以基于此规范调整，保持团队一致性最重要。

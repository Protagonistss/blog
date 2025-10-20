---
title: "Gitee 双因素认证配置手册"
description: "双因素认证配置手册"
tags: ["windows"]
categories: ["windows"]
draft: false
techStack: "shell"
pubDate: "2025-10-20T10:31:42.000Z"
---

# Gitee 双因素认证配置手册

## 问题描述
当 Gitee 账号开启双因素认证 (2FA) 后，使用 HTTPS 推拉代码时会提示：
```
Two-factor authentication (2FA) is enabled for your account. To use HTTPS-based password authentication, please use a personal access token instead of your password.
```

## 解决方案

### 1. 生成个人访问令牌

1. 登录 Gitee，点击右上角头像 → 设置
2. 在左侧菜单选择"私人令牌"
3. 点击"生成新令牌"，设置名称和权限范围
4. 复制生成的令牌（只显示一次，务必保存好）

### 2. 全局配置 Git 凭据管理

#### 步骤 1：配置凭据管理器
```bash
git config --global credential.helper manager-core
```

#### 步骤 2：为 Gitee 设置用户名
```bash
git config --global credential.https://gitee.com.username 你的用户名
```

#### 步骤 3：添加凭据到 Windows 凭据管理器
```bash
cmdkey /generic:git:https://gitee.com /user:你的用户名 /pass:你的私人令牌
```

#### 步骤 4：验证配置
```bash
git config --global --list | findstr credential
```

### 3. 单个仓库配置（可选）

如果只需要为特定仓库配置，可以直接修改远程 URL：
```bash
git remote set-url origin https://用户名:令牌@gitee.com/用户名/仓库名.git
```

### 4. 配置验证

运行以下命令验证配置是否生效：
```bash
git fetch
```

如果没有提示输入密码，说明配置成功。

## 配置效果

全局配置完成后：
- ✅ 克隆任何 Gitee 仓库时自动认证
- ✅ 推送到任何 Gitee 仓库时自动使用令牌
- ✅ 无需为每个仓库单独配置
- ✅ 支持所有 Git 操作（fetch、pull、push 等）

## 注意事项

1. **令牌安全**：私人令牌具有与密码相同的权限，请妥善保管
2. **令牌有效期**：根据设置的有效期，需要定期更新令牌
3. **权限范围**：生成令牌时根据需要选择合适的权限范围
4. **备份恢复代码**：开启 2FA 时会生成恢复代码，请务必保存

## 常见问题

### Q1: 提示 "fatal: Authentication failed"
**A:** 检查用户名和令牌是否正确，或令牌是否过期。

### Q2: 配置后仍然提示输入密码
**A:** 清除旧的凭据缓存：
```bash
git config --global --unset credential.helper
git config --global credential.helper manager-core
```

### Q3: 如何查看已保存的凭据
**A:** 打开 Windows 凭据管理器，查看"Windows 凭据"部分。

### Q4: 如何删除已保存的凭据
**A:** 使用命令：
```bash
cmdkey /delete:git:https://gitee.com
```

## 相关命令参考

```bash
# 查看全局配置
git config --global --list

# 查看特定配置
git config --global credential.helper

# 查看远程地址
git remote -v

# 测试连接
git ls-remote origin

# 清除凭据缓存
git credential-manager-core erase
```

---

**配置日期：** 2025-10-20  
**适用平台：** Windows  
**Git 版本：** 适用于所有版本
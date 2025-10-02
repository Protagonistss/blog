---
title: "Windows操作手册"
description: "查看端口占用查看与进程"
tags: ["windows"]
categories: ["windows"]
draft: false
techStack: "shell"
pubDate: "2025-10-02T10:31:06.000Z"
---

# Windows 端口占用查看与进程终止手册

## 目录
1. [查看端口占用](#查看端口占用)
2. [终止占用端口的进程](#终止占用端口的进程)
3. [常用命令组合](#常用命令组合)
4. [实用技巧](#实用技巧)

---

## 查看端口占用

### 方法一：使用 netstat 命令

#### 查看所有端口占用情况
```powershell
netstat -ano
```
- `-a`: 显示所有连接和侦听端口
- `-n`: 以数字形式显示地址和端口号
- `-o`: 显示拥有的进程 ID (PID)

#### 查看指定端口占用（例如：8080）
```powershell
netstat -ano | findstr :8080
```

#### 查看 TCP 连接
```powershell
netstat -ano -p tcp
```

#### 查看 UDP 连接
```powershell
netstat -ano -p udp
```

#### 查看正在监听的端口
```powershell
netstat -ano | findstr LISTENING
```

### 方法二：使用 Get-NetTCPConnection (PowerShell)

#### 查看所有 TCP 连接
```powershell
Get-NetTCPConnection
```

#### 查看指定端口（例如：8080）
```powershell
Get-NetTCPConnection -LocalPort 8080
```

#### 查看指定端口并显示进程信息
```powershell
Get-NetTCPConnection -LocalPort 8080 | Select-Object LocalAddress, LocalPort, RemoteAddress, RemotePort, State, OwningProcess
```

---

## 终止占用端口的进程

### 方法一：使用 taskkill 命令

#### 根据 PID 终止进程
```powershell
taskkill /PID 进程ID /F
```
- `/PID`: 指定进程ID
- `/F`: 强制终止进程

**示例：**
```powershell
taskkill /PID 12345 /F
```

#### 根据进程名称终止进程
```powershell
taskkill /IM 进程名.exe /F
```

**示例：**
```powershell
taskkill /IM java.exe /F
taskkill /IM node.exe /F
```

#### 终止多个进程
```powershell
taskkill /PID 1234 /PID 5678 /F
```

### 方法二：使用 Stop-Process (PowerShell)

#### 根据 PID 终止进程
```powershell
Stop-Process -Id 进程ID -Force
```

**示例：**
```powershell
Stop-Process -Id 12345 -Force
```

#### 根据进程名称终止进程
```powershell
Stop-Process -Name 进程名 -Force
```

**示例：**
```powershell
Stop-Process -Name java -Force
```

---

## 常用命令组合

### 一键查看端口并获取进程详细信息

#### CMD / PowerShell
```powershell
# 查看端口 8080 的占用情况
netstat -ano | findstr :8080

# 根据 PID 查看进程详细信息
tasklist | findstr 进程ID
```

#### PowerShell 完整示例
```powershell
# 查看端口 8080 并显示进程名称
$port = 8080
$connection = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
if ($connection) {
    $process = Get-Process -Id $connection.OwningProcess
    Write-Host "端口 $port 被进程占用："
    Write-Host "进程名称: $($process.ProcessName)"
    Write-Host "进程 ID: $($process.Id)"
    Write-Host "进程路径: $($process.Path)"
} else {
    Write-Host "端口 $port 未被占用"
}
```

### 一键查找并终止占用指定端口的进程

#### PowerShell 脚本
```powershell
# 终止占用端口 8080 的进程
$port = 8080
$connection = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
if ($connection) {
    $pid = $connection.OwningProcess
    $process = Get-Process -Id $pid
    Write-Host "正在终止进程: $($process.ProcessName) (PID: $pid)"
    Stop-Process -Id $pid -Force
    Write-Host "进程已终止"
} else {
    Write-Host "端口 $port 未被占用"
}
```

#### CMD 命令组合
```cmd
REM 查找占用端口 8080 的进程并终止
for /f "tokens=5" %a in ('netstat -ano ^| findstr :8080') do taskkill /PID %a /F
```

---

## 实用技巧

### 1. 批量查看多个端口
```powershell
# PowerShell
$ports = @(8080, 3000, 5000, 9000)
foreach ($port in $ports) {
    $connection = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    if ($connection) {
        $process = Get-Process -Id $connection.OwningProcess
        Write-Host "端口 $port : $($process.ProcessName) (PID: $($process.Id))"
    } else {
        Write-Host "端口 $port : 未占用"
    }
}
```

### 2. 查看进程完整信息
```powershell
# 根据 PID 查看进程详细信息
tasklist /FI "PID eq 进程ID" /V

# 查看所有 Java 进程
tasklist /FI "IMAGENAME eq java.exe" /V
```

### 3. 导出端口占用信息到文件
```powershell
# 导出所有端口占用情况
netstat -ano > C:\Users\Administrator\Desktop\端口占用情况.txt

# 导出特定端口信息
netstat -ano | findstr :8080 > C:\Users\Administrator\Desktop\8080端口占用.txt
```

### 4. 查看进程启动时间和资源占用
```powershell
Get-Process | Select-Object Name, Id, StartTime, CPU, WorkingSet | Format-Table -AutoSize
```

### 5. 安全终止进程前确认
```powershell
# 查看进程信息后再决定是否终止
$pid = 12345
Get-Process -Id $pid | Format-List *
# 确认后执行
# Stop-Process -Id $pid -Force
```

---

## 常见端口参考

| 端口号 | 服务 |
|--------|------|
| 80 | HTTP |
| 443 | HTTPS |
| 3000 | Node.js / React 开发服务器 |
| 3306 | MySQL |
| 5432 | PostgreSQL |
| 6379 | Redis |
| 8080 | Tomcat / 常用开发端口 |
| 8081 | 备用开发端口 |
| 9000 | PHP-FPM |
| 27017 | MongoDB |

---

## 注意事项

⚠️ **重要提示：**

1. **管理员权限**：某些进程可能需要管理员权限才能终止
   - 右键点击 PowerShell 或 CMD，选择"以管理员身份运行"

2. **系统进程**：谨慎终止系统关键进程，可能导致系统不稳定

3. **强制终止**：使用 `/F` 或 `-Force` 参数会强制终止，可能导致数据丢失

4. **确认进程**：终止前确认是正确的进程，避免误杀其他重要程序

5. **端口释放**：进程终止后，端口可能需要几秒钟才能完全释放

---

## 快速参考卡片

### 最常用的三个命令

```powershell
# 1. 查看指定端口占用
netstat -ano | findstr :端口号

# 2. 查看进程信息
tasklist | findstr 进程ID

# 3. 终止进程
taskkill /PID 进程ID /F
```

### 完整流程示例（以端口 8080 为例）

```powershell
# 步骤 1: 查看端口占用
netstat -ano | findstr :8080
# 输出示例: TCP    0.0.0.0:8080    0.0.0.0:0    LISTENING    12345

# 步骤 2: 查看进程详情（PID 为 12345）
tasklist | findstr 12345
# 输出示例: java.exe    12345 Console    1    256,789 K

# 步骤 3: 终止进程
taskkill /PID 12345 /F
# 输出: 成功: 已终止 PID 为 12345 的进程。
```

---

**文档创建日期**: 2025-10-02  
**适用系统**: Windows 10 / Windows 11 / Windows Server  
**适用 Shell**: CMD / PowerShell

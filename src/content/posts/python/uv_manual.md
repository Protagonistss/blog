# uv 使用手册（Windows）

`uv` 是一个基于 Rust 构建的超高速 Python 工具链，集成了以下功能：

- Python 版本管理（替代 pyenv / pyenv-win）
- 虚拟环境管理（替代 venv）
- 包管理（替代 pip）
- 全局工具管理（替代 pipx）
- 项目依赖管理（部分替代 poetry / pdm）
- 依赖锁定（替代 pip-tools）

并支持全局 Python 版本固定（--global）。

---

## uv 安装

```powershell
pip install uv
uv --version
```

---

## Python 版本管理

```powershell
uv python find
uv python install 3.12
uv python list
uv python uninstall 3.10
```

---

## 设置全局 Python 版本（global pin）

```powershell
uv python pin --global 3.11
```

全局文件位置：

```
%APPDATA%\uv\.python-version
```

优先级：

```
项目级 > 全局级 > 系统 Python
```

---

## 虚拟环境管理

```powershell
uv venv
uv venv --python 3.12
```

激活（Windows）：

```powershell
.\.venv\Scripts\activate
```

---

## 依赖管理

```powershell
uv add requests
uv remove requests
uv pip install numpy
uv pip list
```

---

## 锁定依赖

```powershell
uv lock
uv lock --update
```

生成 `uv.lock`。

---

## 全局工具管理（pipx 替代）

```powershell
uv tool install ruff
uv tool upgrade ruff
uv tool uninstall ruff
uv tool run ruff .
```

---

## 项目初始化

```powershell
uv init
uv add fastapi uvicorn
uv lock
```

项目结构：

```
pyproject.toml
uv.lock
src/
tests/
```

---

## 命令速查表

### Python

| 操作 | 命令 |
|------|------|
| 安装版本 | `uv python install 3.11` |
| 全局 pin | `uv python pin --global 3.11` |
| 项目 pin | `uv python pin 3.12` |

### 虚拟环境

| 操作 | 命令 |
|------|------|
| 创建 venv | `uv venv` |
| 指定版本 | `uv venv --python 3.12` |

### 依赖管理

| 操作 | 命令 |
|------|------|
| 添加 | `uv add xxx` |
| 删除 | `uv remove xxx` |
| 锁文件 | `uv lock` |

### 工具

| 操作 | 命令 |
|------|------|
| 安装 | `uv tool install xxx` |
| 升级 | `uv tool upgrade xxx` |
| 卸载 | `uv tool uninstall xxx` |

---

## 最佳实践（Windows）

```powershell
scoop install python
pip install uv

uv python install 3.11
uv python pin --global 3.11

mkdir my-app
cd my-app

uv python pin 3.11
uv venv
uv add fastapi uvicorn
uv lock
```

---

## 注意事项

- `uv python pin --global` 为最新版本功能
- 建议与 Scoop Python 共存
- 不建议手动编辑 PATH
- VSCode 会自动识别 `.venv`

---

## 总结

`uv` 是 Windows 下 Python 最快、最现代、最干净的环境解决方案：

- 全局 Python → `uv python pin --global`
- 项目 Python → `uv python pin`
- 虚拟环境 → `uv venv`
- 依赖管理 → `uv add/remove`
- 锁文件 → `uv lock`
- 工具管理 → `uv tool`

强烈推荐在 Windows 开发环境使用它。

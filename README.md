# live2d-desktop-pet

一个可深度定制的 Windows Live2D 桌宠。以「不打扰的陪伴」为核心，同时给愿意折腾的用户提供自由的角色配置能力。

本仓库只包含程序代码。**Live2D 模型、贴图、动作与音频不随仓库分发**，请自行准备拥有合法授权的模型。

## 当前状态

M0 技术验证阶段：已完成桌面应用骨架，可启动空白窗口。角色渲染与桌面窗口能力将按里程碑逐步接入。

## 环境要求

- Windows 10 / 11
- Node.js `^20.19.0` 或 `>=22.12.0`
- npm 10 及以上

## 常用命令

```bash
npm install      # 安装依赖
npm run dev      # 启动开发环境
npm run build    # 类型检查并构建
npm start        # 预览构建产物
npm run typecheck # 仅执行类型检查
```

## 目录结构

```text
src/
  main/       Electron 主进程，负责窗口与系统能力
  preload/    预加载脚本，通过 contextBridge 暴露受限 API
  renderer/   渲染进程，负责界面与后续的角色渲染
```

## 技术选型

Electron + Vite + TypeScript + PixiJS + pixi-live2d-display。决策记录见 Issue #1 的 ADR-0001。

## 许可证

项目代码采用 [MIT License](./LICENSE)。

该许可证仅覆盖本仓库中的代码，不覆盖 Live2D Cubism SDK/Core，也不覆盖任何第三方模型、贴图、动作与音频素材。

# Yuxin Chen — Personal Website

## 1. 修改网站文字

打开 `content.js`。

所有文字都在这个文件里，例如：

```js
brandName: "Yuxin Chen",
heroIntro: "I explore how strategy, marketing, AI and human behaviour shape the brands people choose.",
marquee: ["Yuxin Chen", "Strategy", "Marketing", "AI", "Human"],
```

只修改引号 `" "` 里面的内容，不要删除逗号、引号和括号。
保存后刷新网页即可看到变化。

## 2. 修改颜色

打开 `styles.css`，修改最上面的颜色：

```css
--blue: #003e74;
--blue-bright: #0070b9;
```

`--blue` 是主蓝色，`--blue-bright` 是较亮的点缀蓝色。

## 3. 修改人物照片

把新的透明背景 PNG 放到：

```text
assets/images/yuxin-portrait-transparent.png
```

如果文件名不同，就到 `content.js` 里修改：

```js
portraitSrc: "assets/images/你的文件名.png",
```

## 4. 文件说明

- `index.html` — 网页结构
- `content.js` — 所有可修改文字
- `styles.css` — 颜色、排版、动画
- `main.js` — 交互和动画逻辑
- `assets/images/` — 图片素材

## 5. 预览方式

直接打开 `index.html`，或者在文件夹里运行：

```bash
python3 -m http.server 4173
```

然后访问 `http://127.0.0.1:4173/`。

## 6. 首页卡片流

首页向下滚动后的 Education、Research & Projects、Internship Experience、Skills 和 Beyond the CV 卡片都在 `content.js` 的：

```js
feedSections: [
  {
    id: "education",
    title: "Education",
    intro: "...",
    cards: [
      {
        title: "...",
        subtitle: "...",
        summary: "...",
        image: "assets/images/projects/example.jpg",
        tags: ["..."],
        details: ["..."],
        documents: [
          { label: "Download PDF", href: "assets/docs/example.pdf" }
        ]
      }
    ]
  }
]
```

- `image` 留空时，会自动显示蓝色文字封面。
- `details` 里是点击卡片后弹出的介绍。
- `documents` 里可以放 PDF 下载。
- 图片统一放在 `assets/images/projects/`，文档放在 `assets/docs/`。

## 7. 首屏文字效果

首页底部滚动文字目前是 100% 透明背景，没有白色 glow、blur 或渐变遮罩。相关样式在 `styles.css`：

```css
.hero-marquee
.marquee-track
```

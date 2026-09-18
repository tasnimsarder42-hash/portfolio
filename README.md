# Md. Tasnim Sarder Niloy — Portfolio

Personal portfolio website for Md. Tasnim Sarder Niloy, a Client Relationship & Data Operations professional based in Dhaka, Bangladesh.

**Live site:** https://tasnimsarder42-hash.github.io/portfolio/

## Overview

A single-page portfolio built with plain HTML, CSS, and JavaScript — no framework, no build step, no dependencies to install. All page content (experience, skills, projects, education, etc.) lives in one data file, so the site can be updated without touching any markup.

## Tech Stack

- HTML5 & CSS3 (custom properties for theming)
- Vanilla JavaScript — no framework
- [Font Awesome 6](https://fontawesome.com/) for icons
- Google Fonts — Barlow Condensed & DM Sans
- Hosted on [GitHub Pages](https://pages.github.com/)

## Project Structure

```
portfolio/
├── index.html        # The site itself — renders content from data.js
├── data.js           # All site content in one object: PORTFOLIO_DATA
├── admin.html         # Local, no-backend editor for data.js (see below)
├── CV/
│   └── Tasnim-Sarder-Niloy-CV.pdf
└── Image/
    ├── portfolio-picture.jpg
    ├── icon-logo.png
    ├── og-preview.jpg
    └── work-0X.jpg
```

## Updating Content

All text on the site — name, experience, skills, projects, education, contact links, even theme colors — lives in `data.js` as a single `PORTFOLIO_DATA` object. `index.html` reads from it at load time, so content and layout stay separate.

Two ways to edit it:

1. **Directly** — open `data.js` in any text editor and change the values.
2. **With the admin panel** — open `admin.html` in a browser. It loads the current data into a form, organized by tab (Personal Info, Experience, Skills, Portfolio, Education, and so on). Click **Save & Download data.js** to generate an updated file, then replace the old `data.js` with the downloaded one and commit.

`admin.html` runs entirely in the browser. It doesn't read from or write to GitHub — it only generates a new `data.js` file for you to download and commit yourself.

## Running Locally

No install or server needed. Clone the repo and open `index.html` directly in a browser:

```bash
git clone https://github.com/tasnimsarder42-hash/portfolio.git
cd portfolio
```

Then double-click `index.html`, or open it from your browser with **File → Open**.

## Deployment

The site is served with GitHub Pages from the `main` branch. Any commit to `main` updates the live site within a minute or two — no separate build or deploy step required.

## Connect

- Email: [tasnimsarder42@gmail.com](mailto:tasnimsarder42@gmail.com)
- LinkedIn: [linkedin.com/in/tasnimsarder42](https://linkedin.com/in/tasnimsarder42)
- GitHub: [@tasnimsarder42-hash](https://github.com/tasnimsarder42-hash)
- Behance: [behance.net/tasnimniloy42](https://www.behance.net/tasnimniloy42)

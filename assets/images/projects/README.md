# Project images

Each project lives in its own folder, named after its `id` in `assets/js/projects.js`:

```
projects/
├── smart-torch/                     → cover.jpeg, screenshot-01.jpeg
├── solarwindlass/                   → cover.svg
├── shot-exploder/                   → cover.svg
├── construction-material-from-waste/ → cover.svg
├── solar-water-recycling/           → cover.svg
├── rock-support-device/             → cover.svg
└── smart-ventilation-system/        → cover.jpeg, screenshot-01.jpeg
```

## How to add screenshots

1. Create a new folder for a new project (e.g. `project-008/`) with a `cover` and any number of `screenshot-XX` files.
2. Use **JPG**, **PNG** or **WebP** at roughly 1200 px wide for the cover and screenshots.
3. Update the matching project object in `assets/js/projects.js` so `coverImage` and `gallery` point at your new files.

The gallery and lightbox are generated automatically from the `gallery` array — you only add the files and update the data.


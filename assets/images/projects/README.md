# Project images

Each project lives in its own folder, named after its `id` in `assets/js/projects.js`:

```
projects/
├── project-001/
│   ├── cover.svg          → main card / detail cover image
│   ├── screenshot-01.svg  → gallery image 1
│   ├── screenshot-02.svg  → gallery image 2
│   └── screenshot-03.svg  → gallery image 3
├── project-002/
│   ├── cover.svg
│   └── screenshot-01.svg
└── project-003/
    └── cover.svg
```

## How to add screenshots

1. Create a new folder for a new project (e.g. `project-004/`) with a `cover` and any number of `screenshot-XX` files.
2. Use **JPG**, **PNG** or **WebP** at roughly 1200 px wide for the cover and screenshots.
3. Update the matching project object in `assets/js/projects.js` so `coverImage` and `gallery` point at your new files.

The gallery and lightbox are generated automatically from the `gallery` array — you only add the files and update the data.

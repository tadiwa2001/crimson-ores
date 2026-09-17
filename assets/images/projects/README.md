# Project images

Each project lives in its own folder, named after its `id` in `assets/js/projects.js`:

```
projects/
├── project-001/   → cover.jpeg, screenshot-01.jpeg   (Smart Ventilation System)
├── project-002/   → cover.jpeg, screenshot-01.jpeg   (Smart Torch)
├── project-003/   → cover.svg                        (Solar Windlass)
├── project-004/   → cover.svg                        (Solar Powered Water Recycling System)
├── project-005/   → cover.svg                        (Shot Exploder)
├── project-006/   → cover.svg                        (Construction Material from Waste)
└── project-007/   → cover.svg                        (Rock Support Device)
```

## How to add screenshots

1. Create a new folder for a new project (e.g. `project-008/`) with a `cover` and any number of `screenshot-XX` files.
2. Use **JPG**, **PNG** or **WebP** at roughly 1200 px wide for the cover and screenshots.
3. Update the matching project object in `assets/js/projects.js` so `coverImage` and `gallery` point at your new files.

The gallery and lightbox are generated automatically from the `gallery` array — you only add the files and update the data.


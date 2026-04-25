# Dino Run

A single-file HTML game built with [Three.js](https://threejs.org/): a 3D
low-poly interpretation of the Google Chrome dinosaur endless runner.

- **Procedural low-poly desert** with rolling dunes, cacti, rocks, grass
  tufts, distant mountains and drifting clouds.
- **Auto-running low-poly T-Rex** built from basic boxes/cylinders with a
  running gait, tail wag and small T-Rex arms.
- **Spacebar / tap to jump.** Generous timing and a forgiving double-jump.
- **Speed ramps up** as you survive longer; score in the corner with a
  persistent best score in `localStorage`.
- **Vibrant stylized palette** with soft hemisphere + directional lighting,
  ACES tone mapping and a gradient sky.
- **Window-resize aware** and runs on mobile (tap to jump).
- Whole game is a **single HTML file** (`game.html`) with the Three.js
  library loaded via CDN.

## Play

Just open [`game.html`](./game.html) in any modern browser. No build step,
no server required (a local file:// open works fine, but any static host
will do).

```bash
# optional: serve locally
python3 -m http.server 8000
# then visit http://localhost:8000/game.html
```

## Controls

| Action | Keyboard | Touch / Mouse |
| ------ | -------- | ------------- |
| Start / Restart | `Space` | Tap / Click |
| Jump | `Space` or `↑` | Tap / Click |

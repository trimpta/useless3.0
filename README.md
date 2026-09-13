<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />



# Mine your way ⛏️


## Basic Details
### Team Name: [tunajuice]


### Team Members
- Team Lead: [Shreevardhan T V](https://github.com/trimpta) - [SCTCE Trivandrum]
- Member 2: [Bhama SS](https://github.com/bhama2006/) - [SCTCE Trivandrum]

### Project Description
Ever gotten tired of Google Maps refusing to tell you how to get to the other side of the world? Mine your way fixes that. It shows you the most straightforward way to get from point A to point B, no matter what happens to be in the way.

### The Problem (that doesn't exist)
Open Google Maps, set your destination to somewhere far enough away (say, straight through to the opposite side of the planet), and you get nothing — "we could not calculate directions." And even when it *does* find you a route, it insists on giving you the *road* route, wasting your time with silly things like turns, terrain, and oceans, when all you really wanted was the straightforward path.

### The Solution (that nobody asked for)
Mine your way gives you the most straightforward path there is — a straight line from A to B — and actually helps you achieve it. If your destination is on the other side of the Earth, we tell you exactly which angle to start digging at (pickaxe not included). You get an interactive compass guide showing which direction to point as you dig, a 3D map preview of the route you're about to tunnel, and smart alerts along the way — like a heads-up to bring heat protection before you hit the Earth's core.

## Technical Details
### Technologies/Components Used
For Software:
- **Languages:** HTML, CSS, JavaScript
- **Libraries:** [Leaflet.js](https://leafletjs.com/) (interactive map), [Three.js](https://threejs.org/) (3D globe & tunnel cross-section preview)
- **APIs:** Esri World Imagery (satellite map tiles), [Photon](https://photon.komoot.io/) (place search), Nominatim (reverse geocoding), [Open-Meteo](https://open-meteo.com/) (weather)
- **Browser tech:** Service Worker + Cache Storage API (offline tile caching), Geolocation API, DeviceOrientationEvent (compass), getUserMedia (camera for the AR dig view)
- **Tools:** GitHub Actions (CI/CD), GitHub Pages (hosting)


### Implementation
For Software:
# Installation
```bash
git clone https://github.com/trimpta/useless3.0.git
cd useless3.0
```

# Run
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser. (A static server is required, not a plain `file://` open — the tile caching and camera/compass features need it.)

### Project Documentation
For Software:

# Screenshots (Add at least 3)
![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*

# Diagrams
![Workflow](Add your workflow/architecture diagram here)
*Add caption explaining your workflow*


### Project Demo
# Video
[Add your demo video link here]
*Explain what the video demonstrates*

# Additional Demos
[Add any extra demo materials/links]

## Team Contributions
- [Shreevardhan T V](https://github.com/trimpta) & [Bhama SS](https://github.com/bhama2006/): Idea and implementation, built together end-to-end.

---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)

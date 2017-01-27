# PortfolioElectron
###electron app with my projects
```
npm install
npm install -g  electron --save
electron main.js
```
###create relises
```
electron-packager ./ --all --out=dist --prune
electron-packager ./ --platform=win32 --out=dist --prune
electron-packager ./ --platform=linux --out=dist --prune
"electron-prebuilt": "1.2.1",
"electron-rebuild": "1.2.1",
```

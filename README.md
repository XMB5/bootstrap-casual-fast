# Business Casual Fast
Modified version of [startbootstrap-business-casual](https://github.com/StartBootstrap/startbootstrap-business-casual)
that integrates well with GitHub Pages.

## Advantages
- Structured for GitHub Pages
  - Builds to `docs` folder
  - Keeps `CNAME` and `.nojekyll` files
- Uses [Parcel](https://parceljs.org/) for building
  - Minimal configuration

## Disadvantages
- 398 MiB `node_modules` folder with 1054 dependencies

## Commands
- `npm run build`
  - Creates production bundle of site in `docs` folder
- `npm run dev`
  - Runs development server
  - Watches for changes and reloads browser
  - Includes [Browsersync](https://browsersync.io/)
- `npm run devshare`
  - Runs development server like `npm run dev`
  - Creates publically-accessible URL with [localtunnel](https://theboroer.github.io/localtunnel-www/)
    - Example: `https://warm-sloth-17.loca.lt`

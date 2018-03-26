# PUG + SASS WebPack DevServer Configuration

This is a boilerplate `webpack.config.js` processing [pug](https://pugjs.org), css and [sass](http://sass-lang.com/). 


## How to use

- `npm i`
- Place your pug templates and corresponding style files (sass or css) in src subdir. 
- `npm run dev`
- Run browser and open http://localhost:8080.

You can navigate to any page corresponding to your pug-templates in `src`, i.e. http://localhost:8080/page.html. Also style files with same name as pug-template are attached to produced html file. Each page opens with [HMR feature](https://webpack.js.org/concepts/hot-module-replacement/), so you can edit your sources and after saving browser reloads your changes.


## Other questions

### How to save pug entry as html?

A very common scenario is exporting the HTML into their own .html file, to serve them directly instead of injecting with javascript. This can be achieved with a combination of 3 loaders:

- file-loader
- extract-loader
- html-loader

[source](https://github.com/webpack-contrib/html-loader#export-into-html-files)


Sample rule:

    {
      test: /\.pug$/,
      use: [
        "file-loader?name=[path][name].html",
        "extract-loader",
        "html-loader",
        "pug-html-loader"
      ]
    }

[source](https://stackoverflow.com/questions/44792582/how-to-output-html-files-from-pug-templates-with-webpack)
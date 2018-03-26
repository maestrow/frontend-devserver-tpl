# 

### How to save pug entry as html?

A very common scenario is exporting the HTML into their own .html file, to serve them directly instead of injecting with javascript. This can be achieved with a combination of 3 loaders:

- file-loader
- extract-loader
- html-loader

source: https://github.com/webpack-contrib/html-loader#export-into-html-files


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

source: https://stackoverflow.com/questions/44792582/how-to-output-html-files-from-pug-templates-with-webpack
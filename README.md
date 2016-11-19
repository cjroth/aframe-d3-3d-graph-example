# An example of a 3D weighted graph using D3.js and Aframe.

![Screenshot](/screenshot.png "An example of a 3D weighted graph using D3.js and Aframe.")

This is a demo of [Aframe](https://aframe.io/) and [D3](https://d3js.org/) together to render a 3D connected graph visualization. To make this work I've used [Geoffrey Gaillard](https://github.com/ggeoffrey)'s `d3.layout.force3D` project which depends on D3 v3 which itself was borrowed from [Chris Lu](kalenedrael)'s project. It would be great to get this working with D3 v4 and publish a CommonJS compatible version.

# Install

Use `npm install` or `yarn install` which will install all dependencies and
run `browserify main.js > main.combined.js` to build the project.

# Run

Use [Jekyll](https://jekyllrb.com/) or your preferred static file host to serve the files. Then
navigate to `http://localhost:4000` (or wherever you have your files hosted). If
you try to load index.html directly, you will likely see an error.

# Notes

- The performance is a bit slow and it seems that refreshing the page crashes WebGL. I'm not sure why this is. Adding more than about 50 links on my MacBook Air seems to be more than it can handle.

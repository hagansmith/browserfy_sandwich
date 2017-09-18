# Browserify Sandwich Project
## Syopsis:
The browserify sandwich project is an individual  project working with [Browserify](http://browserify.org/), Grunt, JSON, and XHR.
## What to expect:
Make a series of selections to build your perfect sandwich and show the selections and a final price based on the selections.

![DEMO](https://github.com/hagansmith/browserfy_sandwich/blob/master/browserSandwich.gif)

## Requirements:

1. Convert your [Sandwich Maker]( https://github.com/hagansmith/sandwic) code to use CommonJS module pattern instead of the IIFE pattern and have a Grunt task for compiling your modules.
1. Use XHR to load JSON files for each type of topping/bread.

### How to run (Node must be installed on your machine):
1. Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
2. Navigate to the project folder in command line interface and type: `http-server -p 8080`  
3. This will show at: `http://localhost:8080` in your internet browser.

```
git clone git@github.com:hagansmith/browserfy_sandwich.git
cd browserfy_sandwich
npm install http-server -g
hs -c-1
cd browserfy_sandwich/lib
npm install
```
Navigate to: http://localhost:8080

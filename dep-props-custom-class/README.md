## dep-props-custom-class

The web part shows example of creating Property Pane Field that consists of two dependent dropdowns:
one for lists
one for views of a selected view

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* commonjs components - this allows this package to be reused from other packages.
* dist/* - a single bundle containing the components used for uploading to a cdn pointing a registered Sharepoint webpart library to.

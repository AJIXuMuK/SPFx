## dep-props-custom-class

The web part shows example of creating Property Pane Field that consists of two dependent dropdowns:<br />
one for lists<br />
one for views of a selected view<br />

### Building the code

```bash
git clone https://github.com/AJIXuMuK/SPFx.git
cd /SPFx/dep-props-custom-class/
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* commonjs components - this allows this package to be reused from other packages.
* dist/* - a single bundle containing the components used for uploading to a cdn pointing a registered Sharepoint webpart library to.

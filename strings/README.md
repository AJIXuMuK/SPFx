## Strings

### Description
The solution shows how to logically structure localizable strings in SPFx projects.
There are two options:
- use nested object in a single `strings` file, for example, `AboutDialog: { [key: string]: string}`
- use multiple `strings` files

### Howtos
#### Nested objects in a single strings file
This option allows you to use single file for all the strings. Disadvantage of the approach is that TypeScript compiler will not check second level properties' names and won't inform about misspelling. It may lead to `undefined` texts in the solution.

To use nested objects do the following:
- in the strings `d.ts` file add property declaration with `object` type:
```typescript
AboutDialog: { [key: string]: string };
```
- in strings locale `.js` file describe all the properties for the object:
```javascript
"AboutDialog": {
    "Title": "About",
    "Edition": "Enterprise"
}
```
- use strings in the code:
```typescript
<Dialog
    title={strings.AboutDialog['Title']}>
    <span>{strings.AboutDialog['Edition']}</span>
</Dialog>
```

#### Multiple strings files
This option requires to create separate files for different logical parts of the solutions. The good thing is that developer doesn't loose intellisense and misspelling errors notifications. The downside is necessity to make separate request for each file in runtime.

To use multiple `strings` files:
- Add as much `d.ts` and locale `.js` files as needed. For example, `aboutDialog.d.ts` and `aboutDialog.en-us.js`
- Add strings to the files in the same manner as it is done for the default `strings` file in the project. Don't forget to use unique interface and module name:
```typescript
// d.ts
declare interface IAboutDialogStrings {
    Title: string;
    Edition: string;
  }
  
  declare module 'AboutDialogStrings' {
    const strings: IAboutDialogStrings;
    export = strings;
  }

  // en-us.js
  define([], function () {
    return {
        "Title": "About",
        "Edition": "Enterprise"
    }
});
  
```

- Reference new `strings` file in `config.json`:
```json
"localizedResources": {
    "AboutDialogStrings": "lib/webparts/yourwebpart/loc/aboutDialog.{locale}.js"
  }
```

- Use strings in the code:
```typescript
import * as aboutStrings from 'AboutDialogStrigs';
// ...
<Dialog
    title={aboutStrigs.Title}>
    <span>{aboutStrings.Edition}</span>
</Dialog>
```

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

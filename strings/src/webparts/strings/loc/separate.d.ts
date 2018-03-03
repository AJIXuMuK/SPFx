declare interface IStringsWebPartSeparateStrings {
    Title: string;
    Description: string;
  }
  
  declare module 'StringsWebPartSeparateStrings' {
    const strings: IStringsWebPartSeparateStrings;
    export = strings;
  }
  
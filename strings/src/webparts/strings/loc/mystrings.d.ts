declare interface IStringsWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  SimpleString: string;
  FirstBlock: { [key: string]: string };
  SecondBlock: { [key: string]: string };
}

declare module 'StringsWebPartStrings' {
  const strings: IStringsWebPartStrings;
  export = strings;
}

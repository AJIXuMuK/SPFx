declare interface ITasksTemplatesWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  ComponentIdFieldLabel: string;
  Id: string;
  Title: string;
  Description: string;
  Status: string;
  Estimate: string;
  SpentTime: string;
  DueDate: string;
  AssignedTo: string;
  NA: string;
  Overdue: string;
  TaskDetails: string;
}

declare module 'TasksTemplatesWebPartStrings' {
  const strings: ITasksTemplatesWebPartStrings;
  export = strings;
}

import { IItem } from "./IItem";

export interface INode extends IItem {
  items?: IItem[];
  children?: INode[];
}

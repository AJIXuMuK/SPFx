import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'OuifrGroupedDetailsListWebPartStrings';
import OuifrGroupedDetailsList from './components/OuifrGroupedDetailsList';
import { IOuifrGroupedDetailsListProps } from './components/IOuifrGroupedDetailsListProps';
import { INode } from './model/INode';

export interface IOuifrGroupedDetailsListWebPartProps {
  description: string;
}

export default class OuifrGroupedDetailsListWebPart extends BaseClientSideWebPart<IOuifrGroupedDetailsListWebPartProps> {

  private readonly _nodes: INode[] = [{
    key: 'code',
    title: 'code',
    items: [{
      key: 'index',
      title: 'index.ts'
    }],
    children: [{
      key: 'components',
      title: 'components',
      items: [{
        key: 'component',
        title: 'Component.tsx'
      }]
    }, {
      key: 'webparts',
      title: 'webparts',
      items: [{
        key: 'scss',
        title: 'WebPart.module.scss'
      }, {
        key: 'ts',
        title: 'WebPart.ts'
      }]
  }]
}];

  public render(): void {
  const element: React.ReactElement < IOuifrGroupedDetailsListProps > = React.createElement(
    OuifrGroupedDetailsList,
    {
      nodes: this._nodes
    }
  );

  ReactDom.render(element, this.domElement);
}

  protected onDispose(): void {
  ReactDom.unmountComponentAtNode(this.domElement);
}

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('description', {
                label: strings.DescriptionFieldLabel
              })
            ]
          }
        ]
      }
    ]
  };
}
}

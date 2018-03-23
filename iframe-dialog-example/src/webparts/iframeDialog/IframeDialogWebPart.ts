import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'IframeDialogWebPartStrings';
import IframeDialog from './components/IframeDialog';
import { IIframeDialogProps } from './components/IIframeDialogProps';

export interface IIframeDialogWebPartProps {
  description: string;
}

export default class IframeDialogWebPart extends BaseClientSideWebPart<IIframeDialogWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IIframeDialogProps > = React.createElement(
      IframeDialog,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
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

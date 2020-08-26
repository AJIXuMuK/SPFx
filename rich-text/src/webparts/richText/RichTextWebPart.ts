import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'RichTextWebPartStrings';
import RichText from './components/RichText';
import { IRichTextProps } from './components/IRichTextProps';

export interface IRichTextWebPartProps {
  description: string;
}

export default class RichTextWebPart extends BaseClientSideWebPart<IRichTextWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IRichTextProps> = React.createElement(
      RichText,
      {
        description: this.properties.description,
        displayMode: this.displayMode
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

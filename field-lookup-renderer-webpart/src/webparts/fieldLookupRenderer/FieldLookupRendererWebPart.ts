import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';

import * as strings from 'FieldLookupRendererWebPartStrings';
import FieldLookupRenderer from './components/FieldLookupRenderer';
import { IFieldLookupRendererProps } from './components/IFieldLookupRendererProps';

export interface IFieldLookupRendererWebPartProps {
  useCustomOnClick: boolean;
  dispFormUrl: string;
  lookupId: string;
  lookupValue: string;
}

export default class FieldLookupRendererWebPart extends BaseClientSideWebPart<IFieldLookupRendererWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IFieldLookupRendererProps> = React.createElement(
      FieldLookupRenderer,
      this.properties
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
    const groupFields: any[] = [];
    groupFields.push(PropertyPaneToggle('useCustomOnClick', {
      label: strings.UseCustomOnClickLabel,
      onText: strings.Yes,
      offText: strings.No
    }));
    if (!this.properties.useCustomOnClick) {
      groupFields.push(PropertyPaneTextField('dispFormUrl', {
        label: strings.DispFormUrlFieldLabel
      }));
    }
    groupFields.push(PropertyPaneTextField('lookupId', {
      label: strings.LookupId
    }));
    groupFields.push(PropertyPaneTextField('lookupValue', {
      label: strings.LookupValue
    }));
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: groupFields
            }
          ]
        }
      ]
    };
  }
}

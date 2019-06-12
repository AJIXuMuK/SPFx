import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'TasksTemplatesWebPartStrings';
import TasksTemplates from './components/tasksTemplates/TasksTemplates';
import { ITasksTemplatesProps } from './components/tasksTemplates/ITasksTemplatesProps';
import { TemplateFactoryLoader } from './TemplateFactoryLoader';
import { ITask, TaskStatus } from './common/CommonTypes';

/**
 * web part props
 */
export interface ITasksTemplatesWebPartProps {
  /**
   * The id of Library Component SPFx component
   */
  componentId: string;
}

export default class TasksTemplatesWebPart extends BaseClientSideWebPart<ITasksTemplatesWebPartProps> {
  /**
   * Mock tasks
   */
  private readonly _tasks: ITask[] = [{
    id: '1',
    title: 'Implement Common Types',
    description: 'Common types are the ones to be used in web part as well as in the library',
    status: TaskStatus.Closed,
    spentTime: 4,
    estimate: 8,
    dueDate: new Date(2019, 5, 7),
    assignedTo: 'Alex Terentiev'
  }, {
    id: '2',
    title: 'Implement Template Library',
    description: 'Template library contains needed components\' templates to be loaded dynamically',
    status: TaskStatus.Resolved,
    spentTime: 16,
    estimate: 12,
    dueDate: new Date(2019, 5, 13),
    assignedTo: 'Alex Terentiev'
  }, {
    id: '3',
    title: 'Implement Tasks Web Part',
    description: 'The web part should demostrate usage of the template library',
    status: TaskStatus.NotStarted,
    spentTime: 0,
    estimate: 16,
    dueDate: new Date(2019, 5, 19)
  }];

  public async render(): Promise<void> {
    // getting template factory based on selected componentId
    const templateFactory = await TemplateFactoryLoader.loadTemplateFactory(this.properties.componentId);
    const element: React.ReactElement<ITasksTemplatesProps > = React.createElement(
      TasksTemplates,
      {
        tasks: this._tasks,
        templateFactory: templateFactory
      }
    );

    ReactDom.render(element, this.domElement);
    this.renderCompleted();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get isRenderAsync(): boolean {
    return true;
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
                PropertyPaneTextField('componentId', {
                  label: strings.ComponentIdFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

import * as React from 'react';
import { ITemplateFactory, TemplateType, TaskStatus } from './common/CommonTypes';
import { Task } from './components/task/Task';
import { TaskDetails } from './components/taskDetails/TaskDetails';
import { TaskList } from './components/taskList/TaskList';

/**
 * Default export from the SPFx Library Component is a template factory
 */
export default class TemplatesLibrary implements ITemplateFactory {
  public getTemplateComponent(templateType: TemplateType): React.ComponentClass<any> | null {
    switch (templateType) {
      case 'task':
        return Task;
      case 'task-details':
        return TaskDetails;
      case 'task-list':
        return TaskList;
    }
  }
}

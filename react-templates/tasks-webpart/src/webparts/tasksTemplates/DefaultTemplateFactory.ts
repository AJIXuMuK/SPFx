import * as React from 'react';
import { ITemplateFactory, TemplateType } from './common/CommonTypes';
import { Task } from './components/task/Task';
import { TaskDetails } from './components/taskDetails/TaskDetails';
import { TaskList } from './components/taskList/TaskList';

/**
 * Default template factory
 */
export class DefaultTemplateFactory implements ITemplateFactory {
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

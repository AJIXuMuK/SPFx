import * as React from 'react';
import styles from './TasksTemplates.module.scss';
import { ITasksTemplatesProps } from './ITasksTemplatesProps';
import { ITaskListProps, ITask, ITaskDetailsProps, ITaskProps } from '../../common/CommonTypes';
import * as strings from 'TasksTemplatesWebPartStrings';

export interface ITaskTemplatesState {
  selectedTask?: ITask;
}

/**
 * Main component of the web part
 */
export default class TasksTemplates extends React.Component<ITasksTemplatesProps, ITaskTemplatesState> {

  constructor(props: ITasksTemplatesProps) {
    super(props);

    this.state = {};

  }

  public render(): React.ReactElement<ITasksTemplatesProps> {
    const {
      tasks,
      templateFactory
    } = this.props;

    const {
      selectedTask
    } = this.state;

    //
    // Any uppercased variable can be used as a React component in .tsx (.jsx) files.
    // We're getting the templates (React components) from template factory to use them in the markup
    //
    const TaskList = templateFactory.getTemplateComponent('task-list') as React.ComponentClass<ITaskListProps>;
    const Task = templateFactory.getTemplateComponent('task') as React.ComponentClass<ITaskProps>;
    const TaskDetails = templateFactory.getTemplateComponent('task-details') as React.ComponentClass<ITaskDetailsProps>;

    return (
      <div className={styles.tasksTemplates}>
        <TaskList strings={strings} tasks={tasks} taskTemplate={Task} onTaskSelected={task => {
          this.setState({
            selectedTask: task
          });
        }} />
        {selectedTask && <TaskDetails {...selectedTask} strings={strings} />}
      </div>
    );
  }
}

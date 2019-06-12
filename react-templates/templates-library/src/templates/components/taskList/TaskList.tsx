import * as React from 'react';
import { ITaskListProps } from '../../common/CommonTypes';
import styles from './TaskList.module.scss';

/**
 * TaskList component state
 */
export interface ITaskListState { }

/**
 * TaskList component
 */
export class TaskList extends React.Component<ITaskListProps, ITaskListState> {
  public render(): React.ReactElement<ITaskListProps> {
    const {
      tasks,
      taskTemplate,
      onTaskSelected,
      strings
    } = this.props;

    const TaskTemplate = taskTemplate;

    return (
      <div>
        {tasks.map(t => {
          return <TaskTemplate {...t} strings={strings} onSelected={() => { onTaskSelected(t); }} />;
        })}
      </div>
    );
  }
}

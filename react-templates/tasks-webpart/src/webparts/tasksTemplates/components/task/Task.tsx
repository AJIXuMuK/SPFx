import * as React from 'react';
import { ITaskProps } from '../../common/CommonTypes';
import styles from './Task.module.scss';

/**
 * Task component state
 */
export interface ITaskState {}

/**
 * Simple Task component - renders title and description of the task
 */
export class Task extends React.Component<ITaskProps, ITaskState> {
  public render(): React.ReactElement<ITaskProps> {
    const {
      title,
      description,
      onSelected
    } = this.props;
    return (
      <div className={styles.task} onClick={() => { onSelected(); }}>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    );
  }
}

import * as React from 'react';
import { ITaskProps } from '../../common/CommonTypes';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import styles from './Task.module.scss';

/**
 * Task component state
 */
export interface ITaskState { }

/**
 * Task component to render task as a list row
 */
export class Task extends React.Component<ITaskProps, ITaskState> {
  public render(): React.ReactElement<ITaskProps> {
    const {
      title,
      dueDate,
      assignedTo,
      onSelected,
      strings
    } = this.props;

    const currDate = new Date();

    return (
      <div className={styles.task} onClick={() => { onSelected(); }}>
        <div className={styles.title}>{title}</div>
        <div className={styles.assignedTo} title={assignedTo}>{this._getAssigneeInitials()}</div>
        <div className={styles.iconContainer} title={strings.Overdue}>
          { dueDate < currDate && <Icon className={styles.warning} iconName={'Warning'} />}
        </div>
      </div>
    );
  }

  private _getAssigneeInitials(): string {
    const {
      assignedTo,
      strings
    } = this.props;

    if (!assignedTo) {
      return strings.NA;
    }
    return assignedTo.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '').toUpperCase();
  }
}

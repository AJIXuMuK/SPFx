import * as React from 'react';
import { ITaskDetailsProps } from '../../common/CommonTypes';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import styles from './TaskDetails.module.scss';

/**
 * TaskDetails component state
 */
export interface ITaskDetailsState { }

/**
 * TaskDetails component to render task details as a side panel
 */
export class TaskDetails extends React.Component<ITaskDetailsProps, ITaskDetailsState> {
  public render(): React.ReactElement<ITaskDetailsProps> {
    const {
      id,
      title,
      description,
      status,
      estimate,
      spentTime,
      dueDate,
      assignedTo,
      strings
    } = this.props;
    return (
      <Panel
        isOpen={true}
        isLightDismiss={false}
        isBlocking={false}
        hasCloseButton={false}
        headerText={strings.TaskDetails}>
        <div className={styles.taskDetails}>
          <div className={styles.row}>
            <div className={styles.title}>{strings.Id}</div>
            <div className={styles.value}>{id}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>{strings.Title}</div>
            <div className={styles.value}>{title}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>{strings.Description}</div>
            <div className={styles.value}>{description}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>{strings.Status}</div>
            <div className={styles.value}>{status}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>{strings.AssignedTo}</div>
            <div className={styles.value}>{assignedTo}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>{strings.Estimate}</div>
            <div className={styles.value}>{estimate}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>{strings.SpentTime}</div>
            <div className={styles.value}>{spentTime}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>{strings.DueDate}</div>
            <div className={styles.value}>{dueDate.toDateString()}</div>
          </div>
        </div>
      </Panel>
    );
  }
}

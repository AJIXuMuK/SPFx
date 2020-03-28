import * as React from 'react';
import styles from './FirstComponent.module.scss';
import { Panel } from 'office-ui-fabric-react/lib/components/Panel';

export interface IFirstComponentProps {}

export interface IFirstComponentState {}

export class FirstComponent extends React.Component<IFirstComponentProps, IFirstComponentState> {
  public render(): React.ReactElement<IFirstComponentProps> {
    return (
      <div className={styles.firstComponent}>
        <p>This is the first component</p>
        <button className={styles.button}>Click me</button>
        <Panel
        headerText={'Panel Title'}
        isOpen={true}>
          <div>
            Panel content
          </div>
        </Panel>
      </div>
    );
  }
}

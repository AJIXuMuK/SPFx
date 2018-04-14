import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';
import { Icon } from 'office-ui-fabric-react';

import styles from './Demo.module.scss';

export interface IDemoProps {
  text: string;
}

const LOG_SOURCE: string = 'Demo';

export default class Demo extends React.Component<IDemoProps, {}> {
  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: Demo mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: Demo unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
    let iconName: string = 'Sunny';
    switch (this.props.text) {
      case 'Rainy':
        iconName = 'Rain';
        break;
      case 'PartlyCloudy':
        iconName = 'PartlyCloudyDay';
        break;
    }
    return (
      <div className={styles.cell}>
        <Icon iconName={iconName} style={{ fontSize: '20px' }} />
      </div>
    );
  }
}

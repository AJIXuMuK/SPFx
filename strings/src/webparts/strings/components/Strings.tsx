import * as React from 'react';
import styles from './Strings.module.scss';
import { IStringsProps } from './IStringsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as defStrings from 'StringsWebPartStrings';
import * as sepStrings from 'StringsWebPartSeparateStrings';

export default class Strings extends React.Component<IStringsProps, {}> {
  public render(): React.ReactElement<IStringsProps> {
    return (
      <div className={ styles.strings }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span>{defStrings.SimpleString}</span>
            </div>
          </div>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span>{defStrings.FirstBlock['Title']}</span><br/>
              <span>{defStrings.FirstBlock['Description']}</span>
            </div>
          </div>
          <div className={ styles.row }>
            <div className={ styles.column }>
            <span>{defStrings.SecondBlock['Title']}</span><br/>
              <span>{defStrings.SecondBlock['Description']}</span>
            </div>
          </div>
          <div className={ styles.row }>
            <div className={ styles.column }>
            <span>{sepStrings.Title}</span><br/>
              <span>{sepStrings.Description}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import * as React from 'react';
import styles from './RichText.module.scss';
import { IRichTextProps } from './IRichTextProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { RichText as PnPRichText } from '@pnp/spfx-controls-react/lib/RichText';
import { DisplayMode } from '@microsoft/sp-core-library';

export interface IRichTextState {
  richTextValue?: string;
}

export default class RichText extends React.Component<IRichTextProps, IRichTextState> {

  constructor(props: IRichTextProps) {
    super(props);

    this.state = {};
  }

  public render(): React.ReactElement<IRichTextProps> {
    return (
      <div className={ styles.richText }>
        <PnPRichText isEditMode={this.props.displayMode === DisplayMode.Edit} />
        <input type="text" />
      </div>
    );
  }
}

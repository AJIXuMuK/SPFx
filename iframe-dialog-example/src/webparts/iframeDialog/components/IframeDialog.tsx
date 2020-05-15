import * as React from 'react';
import styles from './IframeDialog.module.scss';
import { IIframeDialogProps } from './IIframeDialogProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton, DialogType, TextField, ITextField } from 'office-ui-fabric-react';
import { IFrameDialog } from "@pnp/spfx-controls-react/lib/controls/IFrameDialog/IFrameDialog";

export interface IIframeDialogState {
  isDlgOpen?: boolean;
}

export default class IframeDialog extends React.Component<IIframeDialogProps, IIframeDialogState> {
  private _urlTextFieldRef: ITextField | undefined;

  public constructor(props: IIframeDialogProps) {
    super(props);

    this.state = {
      isDlgOpen: false
    };
  }
  public render(): React.ReactElement<IIframeDialogProps> {
    return (
      <div className={styles.iframeDialog}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <TextField label='Enter URL to open' componentRef={ref => { this._urlTextFieldRef = ref; }} />
              <PrimaryButton text={'Open Dialog'} onClick={this._onClick.bind(this)} />
              {this.state.isDlgOpen && <IFrameDialog
                url={this._urlTextFieldRef && this._urlTextFieldRef.value ? this._urlTextFieldRef.value : '/temp/workbench.html'}
                iframeOnLoad={this._onDlgLoaded.bind(this)}
                hidden={false}
                onDismiss={this._onDlgDismiss.bind(this)}
                modalProps={{
                  isBlocking: true
                }}
                dialogContentProps={{
                  type: DialogType.close,
                  showCloseButton: true
                }}
                width={'570px'}
                height={'315px'} />}
            </div>
          </div>
        </div>
      </div>
    );
  }

  private _onClick(): void {
    this.setState({
      isDlgOpen: true
    });
  }

  private _onDlgDismiss(): void {
    this.setState({
      isDlgOpen: false
    });
  }

  private _onDlgLoaded(): void {
    console.log('dlg is loaeded');
  }
}

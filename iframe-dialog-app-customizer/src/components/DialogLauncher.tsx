import * as React from 'react';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { IFrameDialog } from '@pnp/spfx-controls-react/lib/IFrameDialog';
import { DialogType } from 'office-ui-fabric-react/lib/Dialog';
//import styles from './DialogLauncher.module.scss';

export interface IDialogLauncherProps {
  url: string;
}

export interface IDialogLauncherState {
  isDlgOpen?: boolean;
}

export class DialogLauncher extends React.Component<IDialogLauncherProps, IDialogLauncherState> {
  constructor(props: IDialogLauncherProps) {
    super(props);

    this.state = {
      isDlgOpen: false
    };
  }

  public render(): React.ReactElement<IDialogLauncherProps> {
    return (
      <div>
        <PrimaryButton text="Click me, please!" onClick={() => { this.onButtonClick(); }} />
        <DefaultButton text="Close iframe!" onClick={() => { this.onCloseClick(); }} />
        {this.state.isDlgOpen &&
          <IFrameDialog
            url={this.props.url}
            hidden={!this.state.isDlgOpen}
            width={'800px'}
            height={'800px'}
            modalProps={{
              isBlocking: true
            }}
            iframeOnLoad={iframe => {
              const windowClose = iframe.contentWindow.close;
              const windowClosingEvent = new Event('closeWindow');

              iframe.addEventListener('closeWindow', () => {
                this.setState({
                  isDlgOpen: false
                });
              });

              iframe.contentWindow.close = () => {
                iframe.dispatchEvent(windowClosingEvent);
                windowClose();
              };
            }}
            dialogContentProps={{
              type: DialogType.close,
              showCloseButton: true
            }}
            /*scrolling={'no'}
            seamless={false}
            allowFullScreen={true}
            name={'docFrame'}*/
            onDismiss={() => { this.onDlgDismiss(); }}
          />}
      </div>
    );
  }

  private onButtonClick = () => {
    this.setState({
      isDlgOpen: true
    });
  };

  private onCloseClick = () => {
    if (window.parent !== window) {
      window.close();
    }
  };

  private onDlgDismiss = () => {
    this.setState({
      isDlgOpen: false
    });
  };
}

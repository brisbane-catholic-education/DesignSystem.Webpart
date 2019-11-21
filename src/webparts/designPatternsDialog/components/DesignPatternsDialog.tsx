import * as React from 'react';
import styles from './DesignPatternsDialog.module.scss';
import { IDesignPatternsDialogProps } from './IDesignPatternsDialogProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, IconButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';

export default class DesignPatternsDialog extends React.Component<IDesignPatternsDialogProps, {}> {
  public state: IDesignPatternsDialogProps = { hideDialog: true };
  public render(): React.ReactElement<IDesignPatternsDialogProps> {
    return (
      <div className={styles.designPatternsDialog + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">Dialogs are temporary, modal UI overlays that generally provide contextual app
              information or require user confirmation/ input. In most cases, Dialogs block
              interactions with the web page or application until being explicitly dismissed,
              and often request action from the user. They are primarily used for lightweight
            creation or edit tasks, and simple management tasks. </p>
            <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsDialog" target="_blank" title="BCE Github - Button">
              BCE Github - Dialog  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/dialog" target="_blank" title="BCE Github - Button">
              UI Fabric - Button  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <span className="bce-design-system-sectionTitle bce-design-system-border-bottom">Default example</span>
            <Dialog
              hidden={this.state.hideDialog}
              onDismiss={this._closeDialog}
              dialogContentProps={{
                type: DialogType.close,
                title: 'All emails together',
                subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
              }}
              modalProps={{
                isBlocking: false
              }}
            >
              <DialogFooter>
                <PrimaryButton onClick={this._closeDialog} text="Save" />
                <DefaultButton onClick={this._closeDialog} text="Cancel" />
              </DialogFooter>
            </Dialog>
            <PrimaryButton onClick={this._showDialog} text="Open Dialog" />
            <br /><br />
            <span className="bce-design-system-sectionTitle bce-design-system-border-bottom">Default example</span>
            <img src={require('../../../assets/dialog.png')} alt="test" />
            <br /><br />
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p>use Dialog for quick, actionable interactions, such as making a choice or needing the user to provide
information. </p>
            <p>When possble, try a non-blocking Dialog before resorting to a blocking Dialog. </p>
            <p>Only include information needed to help users make a decision. </p>
            <p>Button text should reflect the actions available to the user (eg save. delete). </p>
            <p>Validate that the user's entries are acceptable before closing the D'alog. Show an inline validation error
near the field they must correct. </p>
          </div>
        </div>
      </div >
    );
  }
  private _showDialog = (): void => {
    this.setState({ hideDialog: false });
  }
  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  }
}

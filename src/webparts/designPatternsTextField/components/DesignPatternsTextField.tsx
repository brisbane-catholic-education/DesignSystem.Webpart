import * as React from 'react';
import styles from './DesignPatternsTextField.module.scss';
import { IDesignPatternsTextFieldProps } from './IDesignPatternsTextFieldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { TextField, MaskedTextField, ITextFieldProps } from 'office-ui-fabric-react/lib/TextField';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

export default class DesignPatternsTextField extends React.Component<IDesignPatternsTextFieldProps, {}> {
  public render(): React.ReactElement<IDesignPatternsTextFieldProps> {
    return (
      <div className={styles.designPatternsTextField + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Brand strategy overview</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">The TextFieId component enables a user to type text into an app. It's typically
            used to capture a single line of text, but can be configured to capture multiple
          lines of text The text displays on the screen in a simple, uniform format. </p>
            <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsTextFields" target="_blank" title="BCE Github - TextField">
              BCE Github - TextField  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/textfield" target="_blank" title="BCE Github - TextField">
              UI Fabric - TextField <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          </div>
        </div>
        <div className={styles.textField + " ms-Grid-row bce-design-system-row"}>
          <h3 className="bce-design-system-subsectionTitle2 bce-design-system-border-bottom">Variants</h3>
          <span className="bce-design-system-sectionTitle2">Default TextField with Label</span>
          <p>The default text field is most common y used to accept data input on a form. </p>
          <div className="bce-design-system-box">
            <div className='ms-Grid-row bce-design-system-row ms-Grid'>
              <div className='ms-Grid-col ms-sm12 ms-lg5' >
                <div className='ms-Grid-row  bce-design-system-row'>
                  <span className="bce-design-system-sectionTitle2">Samples</span>
                </div>
                <div className='ms-Grid-row  bce-design-system-row'>
                  <TextField label="Standard" placeholder="placeholder" />
                </div>
                <div className='ms-Grid-row  bce-design-system-row'>
                  <TextField label="Disabled" disabled />
                </div>
                <div className='ms-Grid-row  bce-design-system-row'>
                  <TextField label="Required text" required placeholder="placeholder" />
                </div>
                <div className='ms-Grid-row  bce-design-system-row'>
                  <TextField label="With error message" errorMessage="Error message" />
                </div>
                <div className='ms-Grid-row  bce-design-system-row'>
                  <TextField label="With placeholder" placeholder="Please enter text here" />
                </div>
                <div className='ms-Grid-row bce-design-system-row'>
                  <TextField label="Standard multiline" multiline rows={3} placeholder="Multiline follows same state matrix as single line" />
                </div>
              </div>

              <div className='ms-Grid-col ms-sm12 ms-lg7' >
                <div className='ms-Grid-row  bce-design-system-row'>
                  <span className="bce-design-system-subsectionTitle2">State matrix</span>
                </div>
                <div className='ms-Grid-row  bce-design-system-row'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Rest</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Label" placeholder="Text entry" />
                  </div>
                </div>
                <div className='ms-Grid-row bce-design-system-row hover' >
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Hover</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Label" placeholder="Text entry" />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row selected' >
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Selected / Focus</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Label" placeholder="Text entry" />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row disabled' >
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Disabled</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Label" disabled placeholder="Text entry" />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row required' >
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Required</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Required text" />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row error' >
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Error</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Label" placeholder="Text entry" errorMessage="Error message" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.underline + " ms-Grid-row bce-design-system-row"}>
          <span className="bce-design-system-sectionTitle">Underlined TextField</span>
          <p>The underlined TextField is typically used to capture a single line of text, but can be configured to capture
          multiple lines of text. </p>
          <div className="bce-design-system-box">
            <div className='ms-Grid-row bce-design-system-row ms-Grid'>
              <div className='ms-Grid-col ms-sm12 ms-lg6' >
                <div className='ms-Grid-row  bce-design-system-row heading'>
                <div className='ms-Grid-col ms-sm12  ms-md12 ms-lg3' >
                  <span className="bce-design-system-subsectionTitle2">Samples</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-md12  ms-lg9' >
                  <span> Underline with label, grey background</span>
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Rest</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Resources" borderless placeholder="Enter an email, address or more" />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Populated</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Resources" borderless defaultValue="Laura Smith" />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row hover focus' >
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Focus / Hover</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Resources" borderless placeholder="Enter an email, address or more" />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row selected'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Focus / Pressed</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Resources" borderless placeholder="Enter an email, address or more" />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row selected'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Focus / Pressed</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Resources" borderless defaultValue="Keith" />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row saving selected' >
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Saving</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Resources" borderless defaultValue="Keith" description="Saving" onRenderDescription={this._onRenderSavingDescription} />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row saved'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Saved</span>
                    </div>
                    <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Resources" borderless defaultValue="Keith" description="Saved" onRenderDescription={this._onRenderDescription} />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row required'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Required</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Resources" borderless required placeholder="Enter an email, address or more" />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row error required'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Error</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Resources" borderless className="textField-cssStyled" required placeholder="Enter an email, address or more" />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row error selected'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Error</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Resources" borderless defaultValue="" errorMessage="Error message" />
                  </div>
                </div>
              </div>
              <div className='ms-Grid-col ms-sm12 ms-lg6 title' >
                <div className='ms-Grid-row  bce-design-system-row heading'>
                  <span className="bce-design-system-subsectionTitle2">State matrix</span>
                </div>
                <div className='ms-Grid-row  bce-design-system-row'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Rest</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Label:" underlined />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row hover'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Hover</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Label:" underlined />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row selected'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Selected / Focus</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Label:" underlined />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row disabled'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Disabled</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Label:" underlined disabled />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row required'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Required</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Label:" underlined required />
                  </div>
                </div>
                <div className='ms-Grid-row  bce-design-system-row error'>
                  <div className='ms-Grid-col ms-sm12 ms-lg4' >
                    <span>Error</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg6' >
                    <TextField label="Label:" underlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-strong-black">If unsure, use labels</p>
            <p>Without labels, users cannot check their work before submitting a form.</p><br />
            <p className="bce-design-system-p-strong-black">Don't rely on placehoder text, and use largely as a hint</p>
            <p>Placeholder text within a form field makes it difficult for people ro remember what information belongs in a field,
              and to check for and fix error.
          </p>
            <p>Placeholder text within fields can make fields less noticeable</p>
          </div>
        </div>
      </div>
    );
  }
  private _onRenderDescription = (props: ITextFieldProps): JSX.Element => {
    return (
      <span className="ms-TextField-description"><IconButton iconProps={{ iconName: 'CheckMark' }} title='Saved'></IconButton> {props.description}</span>
    );
  };
  private _onRenderSavingDescription = (props: ITextFieldProps): JSX.Element => {
    return (
      <span className="ms-TextField-description"><Spinner size={SpinnerSize.xSmall} /> {props.description}</span>
    );
  };
}

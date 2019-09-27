import * as React from 'react';
import styles from './DesignPatternsLabel.module.scss';
import { IDesignPatternsLabelProps } from './IDesignPatternsLabelProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { getId } from 'office-ui-fabric-react/lib/Utilities';

export default class DesignPatternsLabel extends React.Component<IDesignPatternsLabelProps, {}> {
  public render(): React.ReactElement<IDesignPatternsLabelProps> {
    const textFieldId = getId('anInput');
    return (
      <div className={styles.designPatternsLabel + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">Labels give a name or title to a component or group of components. Labels
         should be in close proximity to the component Or group they are paved with.
         Some components, such as TextField, Dropdown, or Toggle, already have
         Labels incorporated. but other components may optionally add a Label if it
       helps inform the user Of the component's purpose. </p>
            <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsLabel" target="_blank" title="BCE Github - Button">
              BCE Github - Label  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/label" target="_blank" title="BCE Github - Button">
              UI Fabric - Label  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <br /><br />
          </div>
          <div className="bce-design-system-box">
            <Label>I'm a Label</Label><br />
            <Label disabled={true}>I'm a disabled Label</Label><br />
            <Label required={true}>I'm a required Label</Label><br />
            <Label htmlFor={textFieldId}>A Label for An Input</Label>
            <TextField id={textFieldId} placeholder="placeholder" /><br />
          </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <p>use sentence casing. e.g. "First name"  </p>
          <p>Be short concise.  </p>
          <p>When adding a Label to components. use the text as a noun or short noun phrase. </p>
        </div>
      </div >
    );
  }
}

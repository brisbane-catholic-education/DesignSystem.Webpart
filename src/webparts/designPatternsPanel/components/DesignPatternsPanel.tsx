import * as React from 'react';
import styles from './DesignPatternsPanel.module.scss';
import { IDesignPatternsPanelProps } from './IDesignPatternsPanelProps';
import { DefaultButton, PrimaryButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
const panel: any = require('../assets/panel.png');


export default class DesignPatternsPanel extends React.Component<IDesignPatternsPanelProps, {}> {
  public state = {
    showPanel: false
  };

  public render(): React.ReactElement<IDesignPatternsPanelProps> {
    return (
      <div className={styles.designPatternsPanel + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">Panels are modal UI overlay that provide contextual app information. They often
              request some kind of creation or management action from the user. Panels are
              paired with the Overlay component, also known as a Light Dismiss. The Overlay
              blocks interactions with the app view until dismissed either through clicking or
              tapping on the Overlay or by selecting a close or completion action within the
            Panel </p>
            <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsPanel" target="_blank" >
              BCE Github - Panel  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/panel" target="_blank" >
              Fluent UI - Panel  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <span className="bce-design-system-sectionTitle  bce-design-system-border-bottom">Panel - Small Panel, Anchored Right, Fixed Width</span>
            <PrimaryButton secondaryText="Opens the Sample Panel" onClick={this._showPanel} text="Open Panel" />
            <Panel
              isOpen={this.state.showPanel}
              type={PanelType.smallFixedFar}
              onDismiss={this._hidePanel}
              headerText="Panel - Small, right-aligned, fixed, with footer"
              closeButtonAriaLabel="Close"
              onRenderFooterContent={this._onRenderFooterContent}
            >
              <ChoiceGroup
                options={[
                  {
                    key: 'A',
                    text: 'Option A'
                  },
                  {
                    key: 'B',
                    text: 'Option B',
                    checked: true
                  },
                  {
                    key: 'C',
                    text: 'Option C',
                    disabled: true
                  },
                  {
                    key: 'D',
                    text: 'Option D',
                    checked: true,
                    disabled: true
                  }
                ]}
                label="Pick one"
                required={true}
              />
            </Panel>
            <br /><br />

            <span className="bce-design-system-subsectionTitleMedium">Calendar example</span>
            <br />
            <img src={require('../../../assets/CaelndarExample.png')} width="250px" height="100%" alt="Calendar" />
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p>Use for self-contained experiences where the user does not need to interact with the app view tocomplete the task. </p>
            <p>Use for complex creation, edit or management experiences </p>
            <p>Consider how the panel and its contained contents will scale across Fabric's responsive web breakpoints. </p>
            <p>Make sure to have a minimum width of 340px for the Panel component </p>
          </div>
        </div>
      </div>
    );
  }

  private _onRenderFooterContent = () => {
    return (
      <div>
        <PrimaryButton onClick={this._hidePanel} style={{ marginRight: '8px' }}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={this._showPanel}>Cancel</DefaultButton>
      </div>
    );
  }

  private _showPanel = () => {
    this.setState({ showPanel: true });
  }

  private _hidePanel = () => {
    this.setState({ showPanel: false });
  }
}

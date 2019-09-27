import * as React from 'react';
import styles from './DesignPatternsCallout.module.scss';
import { IDesignPatternsCalloutProps } from './IDesignPatternsCalloutProps';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { DefaultButton, IconButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { getTheme, FontWeights, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { ICommandBarItemProps, CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

export default class DesignPatternsCallout extends React.Component<IDesignPatternsCalloutProps, {}> {
  private _labelId: string = getId('callout-label');
  private _descriptionId: string = getId('callout-description');
  public state: IDesignPatternsCalloutProps = {
    isCalloutVisible: [false, false, false, false, false, false]
  };
  public render(): React.ReactElement<IDesignPatternsCalloutProps> {
    return (
      <div className={styles.designPatternsCallout + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <p className="bce-design-system-p-l">Callouts are a powerful way to simplify a user interface. They host tips and other information users need when they need it, with minimal effort on their part. However, poorly designed Callouts can be annoying, distracting, unhelpful, overwhelming, or in the way.</p>
          <DefaultButton className="bce-design-system-buttom" href="http://bing.com" target="_blank" title="BCE Github - Button">
            BCE GitHub - Callout  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          <DefaultButton className="bce-design-system-buttom" href="http://bing.com" target="_blank" title="BCE Github - Button">
            UI Fabric - Callout  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <span className="bce-design-system-subsectionTitle bce-design-system-border-bottom">Default example</span>
            <PrimaryButton id="bce-design-system-calloutButton0" onClick={() => this._onShowMenuClicked(0)} text={this.state.isCalloutVisible[0] ? 'Hide callout' : 'Show callout'} />
            {this._createCallout(DirectionalHint.bottomAutoEdge, "bce-design-system-callout-default", 0)}
            <br /><br />
            <span className="bce-design-system-subsectionTitle bce-design-system-border-bottom">Example variants</span>
              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-lg6' >
                  <span className="bce-design-system-subsectionTitle">Callout</span>
                  <PrimaryButton id="bce-design-system-calloutButton1" onClick={() => this._onShowMenuClicked(1)} text={this.state.isCalloutVisible[1] ? 'Hide callout' : 'Show callout'} />
                  {this._createCallout(DirectionalHint.bottomLeftEdge, "bce-design-system-callout-default", 1)}
                  <br /><br />
                  <span className="bce-design-system-subsectionTitle">Callout w/ Close</span>
                  <PrimaryButton id="bce-design-system-calloutButton2" onClick={() => this._onShowMenuClicked(2)} text={this.state.isCalloutVisible[2] ? 'Hide callout' : 'Show callout'} />
                  {this._createCallout(DirectionalHint.bottomLeftEdge, "bce-design-system-callout-default", 2)}
                  <br /><br />
                  <span className="bce-design-system-subsectionTitle">Callout w/ Quick Actions</span>
                  <PrimaryButton id="bce-design-system-calloutButton3" onClick={() => this._onShowMenuClicked(3)} text={this.state.isCalloutVisible[3] ? 'Hide callout' : 'Show callout'} />
                  {this._createCallout(DirectionalHint.bottomLeftEdge, "bce-design-system-callout-default", 3)}
                </div>
                <div className='ms-Grid-col ms-sm12 ms-lg6' >
                  <span className="bce-design-system-subsectionTitle">Tooltip</span>
                  <DefaultButton id="bce-design-system-calloutButton4" onClick={() => { this._onShowMenuClicked(4) }} text={this.state.isCalloutVisible[4] ? 'Hide callout' : 'Show callout'} />
                  {this._createCallout(DirectionalHint.topLeftEdge, "bce-design-system-callout-singleLine", 4)}
                  <br /><br />
                  <DefaultButton id="bce-design-system-calloutButton5" onClick={() => { this._onShowMenuClicked(5) }} text={this.state.isCalloutVisible[5] ? 'Hide callout' : 'Show callout'} />
                  {this._createCallout(DirectionalHint.topLeftEdge, "bce-design-system-callout-multiLine", 5)}
                </div>
              </div>
          </div>
        </div>
      </div >
    );
  }

  private _createCallout(direction: number, className: string, index: number): React.ReactElement<IDesignPatternsCalloutProps> {
    return (
      <Callout
        className={className}
        ariaLabelledBy={this._labelId}
        ariaDescribedBy={this._descriptionId}
        directionalHint={direction}
        role="alertdialog"
        gapSpace={0}
        target={document.getElementById('bce-design-system-calloutButton' + index)}
        onDismiss={() => this._onCalloutDismiss(index)}
        setInitialFocus={true}
        hidden={!this.state.isCalloutVisible[index]}>
        {(index === 4 || index === 5) ? <div className="bce-design-system-callout-container">
          <span>This is a multiple line tooltip with wrapping text that is 80 characters long et</span>
          <IconButton onClick={() => this._onCalloutDismiss(index)} className="bce-design-system-callout-close" iconProps={{ iconName: 'Cancel' }} title='Close'></IconButton>
        </div> :
          <div className="bce-design-system-callout-container">
            <div className="bce-design-system-callout-header">
              <p className="bce-design-system-callout-title" id={this._labelId}>
                All of your favorite people
          </p>
            </div>
            <div className="bce-design-system-callout-inner">
              <div className="bce-design-system-callout-content">
                <p className="bce-design-system-callout-subText" id={this._descriptionId}>
                  Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.
          </p>
              </div>
              <IconButton onClick={() => this._onCalloutDismiss(index)} className="bce-design-system-callout-close" iconProps={{ iconName: 'Cancel' }} title='Close'></IconButton>
              <div className="bce-design-system-callout-actions">
                {index !== 3 ? <Link className="bce-design-system-callout-link" href="http://microsoft.com" target="_blank"> Learn More</Link> :
                  <CommandBar items={this.items}  farItems={this.farItems} />}
              </div>
            </div>
          </div>
        }
      </Callout>
    )
  }
  private farItems: ICommandBarItemProps[] = [
    { key: 'LearnMore', iconOnly: false, name: 'Learn more', href: 'https://dev.office.com/fabric' }
  ];
  private items: ICommandBarItemProps[] = [
    { key: 'CheckMark', iconOnly: true, iconProps: { iconName: 'CheckMark' } },
    { key: 'Help', iconOnly: true, iconProps: { iconName: 'Help' } },
    { key: 'Cancel', iconOnly: true, iconProps: { iconName: 'Cancel' } },
    { key: 'Clock', iconOnly: true, iconProps: { iconName: 'Clock' } }
  ];

  private _onShowMenuClicked = (index: number): void => {
    this.state.isCalloutVisible[index] = !this.state.isCalloutVisible[index];
    this.setState({
      isCalloutVisible: this.state.isCalloutVisible
    });
  };

  private _onCalloutDismiss = (index: number): void => {
    this.state.isCalloutVisible[index] = false;
    this.setState({
      isCalloutVisible: this.state.isCalloutVisible
    });
  };
}


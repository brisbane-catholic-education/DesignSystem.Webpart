import * as React from 'react';
import styles from './DesignPatternsButton.module.scss';
import { IDesignPatternsButtonProps } from './IDesignPatternsButtonProps';
import { DefaultButton, IconButton, PrimaryButton, CompoundButton, CommandBarButton } from 'office-ui-fabric-react/lib/Button';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { Link } from 'office-ui-fabric-react/lib/Link';

export default class DesignPatternsButton extends React.Component<IDesignPatternsButtonProps, {}> {
  public render(): React.ReactElement<IDesignPatternsButtonProps> {
    return (
      <div className={styles.designPatternsButton + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className='ms-Grid-col ms-xxl9' >
            <p className="bce-design-system-p-l">Buttons are best used to enable a user to commit a change or complete steps in
              a task. They are typically found inside forms, dialogs, panels or pages. </p>
            <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsButton" target="_blank" title="Sketch file">
              BCE Github - Button  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/button" target="_blank" title="More at Fluent UI - Button">
              Fluent UI - Button <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          </div>
        </div>
        
        <div className={styles.defaultButton + " ms-Grid-row bce-design-system-row"}>
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Variants</h3>
          <span className="bce-design-system-subsectionTitle">Default Button</span>
          <div className='ms-Grid-col ms-xxl9' >
            <p>Used most in the user interface. Only use another style if a button is required to support a specific design
            pattern. such as a navigational command bar. Standard and primary colours are dependant on the
            website/application primary colour theme. </p>
          </div>
          <div className="bce-design-system-box">
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm6 ms-md6 ms-lg3' >
                <span className='bce-design-system-subsectionTitleMedium'>Standard Grey</span>
              </div>
              <div className='ms-Grid-col ms-sm6 ms-md6 ms-lg3' >
                <span className='bce-design-system-subsectionTitleMedium'>Primary - Link Blue</span>
              </div>
            </div>
            <br />
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm6 ms-md6 ms-lg3' >
                <DefaultButton data-automation-id="test" disabled={false} checked={false} text="Button" />
              </div>
              <div className='ms-Grid-col ms-sm6 ms-md6 ms-lg3' >
                <PrimaryButton data-automation-id="primaryButton" disabled={false} checked={false} text="Button" />
              </div>
            </div>

            <div className='ms-Grid-row bce-design-system-row'>
              <p className='bce-design-system-subsectionTitleMedium bce-design-system-border-bottom'>State matrix</p>
            </div>

            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3' >
                <span className='bce-design-system-subsectionTitleMedium'>State</span>
              </div>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3' >
                <span className='bce-design-system-subsectionTitleMedium'>Standard Grey</span>
              </div>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3' >
                <span className='bce-design-system-subsectionTitleMedium'>Primary - Link Blue</span>
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3' >
                <span>Rest</span>
              </div>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3' >
                <DefaultButton data-automation-id="test" disabled={false} checked={false} text="Rest" />
              </div>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3' >
                <PrimaryButton data-automation-id="primaryButton" disabled={false} checked={false} text="Rest" />
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3' >
                <span>Hover</span>
              </div>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 hover' >
                <DefaultButton data-automation-id="test" disabled={false} checked={false} text="Hover" />
              </div>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 hover' >
                <PrimaryButton data-automation-id="primaryButton" disabled={false} checked={false} text="Hover" />
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3' >
                <span>Focus</span>
              </div>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 focus' >
                <DefaultButton data-automation-id="test" disabled={false} checked={false} text="Focus" />
              </div>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 focus' >
                <PrimaryButton data-automation-id="primaryButton" disabled={false} checked={false} text="Focus" />
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3' >
                <span>Pressed/Selected</span>
              </div>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 press' >
                <DefaultButton data-automation-id="test" disabled={false} checked={true} text="Pressed" />
              </div>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 press' >
                <PrimaryButton data-automation-id="primaryButton" disabled={false} checked={true} text="Pressed" />
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3' >
                <span>Disabled</span>
              </div>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 disabled' >
                <DefaultButton data-automation-id="test" disabled={true} checked={false} text="Disabled" />
              </div>
              <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 disabled' >
                <PrimaryButton data-automation-id="primaryButton" disabled={true} checked={false} text="Disabled" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.compoundButton + " ms-Grid-row bce-design-system-row"}>
          <span className="bce-design-system-subsectionTitle">Compound Button</span>
          <div className='ms-Grid-col ms-xxl9' >
            <p>Use when secondary discription is required, State matrix and colour rules as pre default button.</p>
          </div>
          <div className="bce-design-system-box">
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg6 ma-xl5' >
                <span className="bce-design-system-subsectionTitleMedium">Standard Grey</span><br /><br />
                <CompoundButton primary={false} secondaryText="Secondary description of action" disabled={false} checked={false}>
                  Button
                      </CompoundButton>
              </div>
              <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg6 ms-xl5' >
                <span className="bce-design-system-subsectionTitleMedium">Primary - Link Blue</span><br /><br />
                <CompoundButton primary={true} secondaryText="Secondary description of action." disabled={false} checked={false}>
                  Button
                      </CompoundButton>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.commandBar + " ms-Grid-row bce-design-system-row"}>
          <span className="bce-design-system-subsectionTitle">CommandBar Button</span>
          <div className='ms-Grid-col ms-xxl9' >
            <p>CommandBar is a surface that houses commands that operate on the content of the window. <br />
              The CommandBar Button is specified for this surface. </p>
          </div>
          <div className="bce-design-system-box">
            <div className='ms-Grid-row bce-design-system-row ms-Grid'>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12' >
                  <span className="bce-design-system-subsectionTitleMedium">CommandBar Sample</span><br /><br />
                  <div className="left">
                    <SearchBox
                      placeholder="Search"
                      onFocus={() => console.log('onFocus called')}
                      onBlur={() => console.log('onBlur called')}
                      underlined={true}
                    /></div>
                  <div className="right"><CommandBar
                    items={this.getItems()}
                    overflowItems={this.getOverlflowItems()}
                  /></div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Colours</h3>
          <div className='ms-Grid-col ms-xxl9' >
            <p>Standard and primary colours are dependant on the website/application primary colour theme.<br />
              Website/application base colours for tints and shades start with the <Link href="https://developer.microsoft.com/en-us/fabric#/styles/web/colors/products"> foundational colours. </Link> </p>
          </div>
        </div>

        <div className={styles.iconsAndLabels + " ms-Grid-row bce-design-system-row"}>
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Icons and labels</h3>
          <div className='ms-Grid-col ms-xxl9' >
            <p>Icons must first and foremost communicate meaning in a graphical user interface. <br />
              Text labels are necessary to communicate the meaning and reduce ambiguity, with exceptions for small mobile screens and established universal icons (such as a search magnifying glass). </p>
            <p><Link disabled={false} href="https://developer.microsoft.com/en-us/fabric#/styles/web/icons"> Read more in Foundations -Icons </Link></p>
          </div>
          <br />
          <div className='bce-design-system-box'>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12' >
                <span className='bce-design-system-subsectionTitleMedium'>Padding and placement</span>
                <p>Include a minimum padding of 8px between icon and label. and 8px between buttons. </p>
                <br />
                {/* <DefaultButton  text="Create account" iconProps={{ iconName: 'Add' }}></DefaultButton>
                      <DefaultButton  text="Create account" iconProps={{ iconName: 'Add' }}></DefaultButton> */}
                <br />
                <img src={require('../../../assets/buttonpadding1.png')} alt="test" />
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row' >
              <p>If buttons are stacked with names of different lengths. use the longest word to inform the column padding. </p>
              <br />
              {/* <DefaultButton text="Create account" iconProps={{ iconName: 'Add' }}></DefaultButton><br />
                <DefaultButton text="Share" iconProps={{ iconName: 'Share' }}></DefaultButton><br /> */}
              <img src={require('../../../assets/buttonpadding2.png')} alt="test" />
            </div>
            <div className='ms-Grid-row bce-design-system-row' >
              <span className='bce-design-system-subsectionTitleMedium'>Icon and label conventions</span>
              <div className='ms-Grid-col ms-xxl9' >
                <p>Icons are to be placed left of the action label unless used to signify affordance. as demonstrated in <a href="/SitePages/Dropdown.aspx">Dropdown buttons</a>. <br />
                  Icons should appear next to their respective labels. and be sized in harmony with typography. <br />
                  Users become accustomed to recognising an icon as meaning something. altering the action behind that icon is <br />
                  extremely confusing. </p>
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row' >
              <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg3' >
                <span className='bce-design-system-subsectionTitleMedium'>Do</span>
                <p>Icon match action label</p>
                <DefaultButton text="Share" iconProps={{ iconName: 'Share' }}></DefaultButton>
              </div>
              <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg5' >
                <span className='bce-design-system-subsectionTitleMedium'>Don't</span>
                <p>Icon does not match action label</p>
                <DefaultButton text="Follow" iconProps={{ iconName: 'Share' }}></DefaultButton>
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row' >
              <p>Read more in  <Link disabled={false} href="https://developer.microsoft.com/en-us/fabric#/styles/web/icons"> Foundations -Icons </Link></p>
            </div>
          </div>
        </div>
      </div>

    );
  }
  private getItems = () => {
    return [
      {
        key: 'createAccount',
        name: 'Create account',
        iconProps: {
          iconName: 'Add'
        },
        ariaLabel: 'Create',
      },
      {
        key: 'createAccount2',
        name: 'Create account',
        iconProps: {
          iconName: 'Add'
        },
        ariaLabel: 'Create',
      },
      {
        key: 'send',
        name: 'Send mail',
        iconProps: {
          iconName: 'Share'
        },
        onClick: () => console.log('Send Mail')
      }
    ];
  }

  private getOverlflowItems = () => {
    return [
      {
        key: 'move',
        name: 'Move to...',
        onClick: () => console.log('Move to'),
        iconProps: {
          iconName: 'MoveToFolder'
        }
      },
      {
        key: 'copy',
        name: 'Copy to...',
        onClick: () => console.log('Copy to'),
        iconProps: {
          iconName: 'Copy'
        }
      },
      {
        key: 'rename',
        name: 'Rename...',
        onClick: () => console.log('Rename'),
        iconProps: {
          iconName: 'Edit'
        }
      }
    ];
  }

}

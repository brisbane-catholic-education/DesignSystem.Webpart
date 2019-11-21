import * as React from 'react';
import styles from './DesignPatternsCommandBar.module.scss';
import { IDesignPatternsCommandBarProps } from './IDesignPatternsCommandBarProps';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

export default class DesignPatternsCommandBar extends React.Component<IDesignPatternsCommandBarProps, {}> {
  public render(): React.ReactElement<IDesignPatternsCommandBarProps> {
    return (
      <div className={styles.designPatternsCommandBar + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">CommandBar is a surface that houses commands that operate on the content of the window, panel, or parent region it resides above. They are one of the most visible and recognisable ways to surface commands, and can be an intuitive method for interacting with content on the page. </p>
            <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsCommandBar" target="_blank" title="BCE Github - Button">
              BCE GitHub - CommandBar  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/commandbar" target="_blank" title="BCE Github - Button">
              UI Fabric - CommandBar  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <span className="bce-design-system-subsectionTitle">Default CommandBar</span>
            <div className={styles.defaultCommandBar}>
              <SearchBox underlined={true} placeholder="Search" className={styles.searchBox} />
              <CommandBar items={this.getItems()} overflowItems={this.getOverlflowItems()} farItems={this.getFarItems()} />
            </div>
            <br /><br />
            <span className="bce-design-system-subsectionTitle">Default CommandBar</span>
            <div className={styles.defaultCommandBar}>
              <div><IconButton className={styles.leftButton} iconProps={{ iconName: 'GlobalNavButton' }} title='GlobalNavButton'></IconButton>
                <SearchBox underlined={true} placeholder="Search" className={styles.searchBox} /></div>
              <CommandBar items={this.getNavBarItems()} farItems={this.getNavBarFarItems()} /></div>
            <br /><br />
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p>CommandBars work best when they display no more than 5-7 commands.</p>
            <p>Sort commands in order of importance from left to right or right to left depending on the culture.</p>
            <p>Use overflow to house less frequently-used commands.</p>
          </div>
          <div className="bce-design-system-box">
            <span className="bce-design-system-subsectionTitle">In situ sample</span>
            <div className='ms-Grid'>
              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-lg8' >
                  <img src={require('../../../assets/commandBar.png')} alt="test" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div >
    );
  }

  private getNavBarItems = () => {
    return [
      {
        key: 'allphoto',
        name: 'All Photos',
        ariaLabel: 'All Photos'
      },
      {
        key: 'albums',
        name: 'Albums',
        ariaLabel: 'Albums'
      },
      {
        key: 'tags',
        name: 'Tags',
        ariaLabel: 'Tags'
      },
      {
        key: 'places',
        name: 'Places',
        ariaLabel: 'Places'
      }
    ];
  }

  private getNavBarFarItems = () => {
    return [
      {
        key: 'showPhoto',
        name: 'Show photos from',
        ariaLabel: 'Show photos from',
        iconProps: {
          iconName: 'Settings'
        },
      },
      {
        key: 'info',
        name: 'Info',
        iconProps: {
          iconName: 'Info'
        },
        iconOnly: true,
      }
    ];
  }

  private getItems = () => {
    return [
      {
        key: 'Command1',
        name: 'Command',
        iconProps: {
          iconName: 'StatusCircleRing'
        },
        ariaLabel: 'Command1'
      },
      {
        key: 'Command2',
        name: 'Command',
        iconProps: {
          iconName: 'StatusCircleRing'
        },
        ariaLabel: 'Command2'
      },
      {
        key: 'Command3',
        name: 'Command',
        iconProps: {
          iconName: 'StatusCircleRing'
        },
        ariaLabel: 'Command3'
      },
      {
        key: 'Command4',
        name: 'Command',
        iconProps: {
          iconName: 'StatusCircleRing'
        },
        ariaLabel: 'Command4',
        subMenuProps: {
          items: [
            {
              key: 'Command5',
              name: 'Command',
              iconProps: {
                iconName: 'StatusCircleRing'
              }
            },
            {
              key: 'Command6',
              name: 'Command',
              iconProps: {
                iconName: 'StatusCircleRing'
              }
            }
          ]
        }
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

  private getFarItems = () => {
    return [
      {
        key: 'Command7',
        name: 'Command',
        ariaLabel: 'Command',
        iconProps: {
          iconName: 'StatusCircleRing'
        },
        iconOnly: true,
      },
      {
        key: 'Command8',
        name: 'Command',
        iconProps: {
          iconName: 'StatusCircleRing'
        },
        iconOnly: true,
      },
      {
        key: 'Command9',
        name: 'Command',
        ariaLabel: 'Command',
        iconProps: {
          iconName: 'StatusCircleRing'
        },
        iconOnly: true
      }
    ];
  }
}

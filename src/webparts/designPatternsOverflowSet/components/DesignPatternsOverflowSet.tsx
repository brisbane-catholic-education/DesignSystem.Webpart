import * as React from 'react';
import styles from './DesignPatternsOverflowSet.module.scss';
import { IDesignPatternsOverflowSetProps } from './IDesignPatternsOverflowSetProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, IconButton, IButtonStyles, CommandBarButton } from 'office-ui-fabric-react/lib/Button';
import { OverflowSet, IOverflowSetItemProps } from 'office-ui-fabric-react/lib/OverflowSet';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';

export default class DesignPatternsOverflowSet extends React.Component<IDesignPatternsOverflowSetProps, {}> {
  public render(): React.ReactElement<IDesignPatternsOverflowSetProps> {
    return (
      <div className={styles.designPatternsOverflowSet + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">The OverflowSet is a flexible container component that is useful for displaying a 
              primary set of content with additional content in an overflow callout. Note that 
              the example below is only an example of how to render the component, not a 
              specific use case. </p>
            <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsOverflowSet" target="_blank" >
              BCE Github - OverflowSet  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/overflowset" target="_blank" >
              Fluent UI - OverflowSet  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">Basic example</span>
            <OverflowSet className={styles.basicExample}
              items={[
                {
                  key: 'item1',
                  name: 'Link 1',
                },
                {
                  key: 'item2',
                  name: 'Link  2',
                },
                {
                  key: 'item3',
                  name: 'Link  3',
                }
              ]}
              overflowItems={[
                {
                  key: 'item4',
                  name: 'Link 4',
                },
                {
                  key: 'item5',
                  name: 'Link 5',
                }
              ]}
              onRenderOverflowButton={this._onRenderOverflowButton}
              onRenderItem={this._onRenderItem}
            /><br /><br />
            <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">Vertical example</span>
            <OverflowSet
              vertical
              items={[
                {
                  key: 'item1',
                  icon: 'Share',
                  ariaLabel: 'New. Use left and right arrow keys to navigate',
                },
                {
                  key: 'item2',
                  icon: 'Add',
                }
              ]}
              overflowItems={[
                {
                  key: 'item4',
                  icon: 'Mail',
                  name: 'Overflow Link 1',
                },
                {
                  key: 'item5',
                  icon: 'Calendar',
                  name: 'Overflow Link 2',
                }
              ]}
              onRenderOverflowButton={this._onRenderIconOverflowButton}
              onRenderItem={this._onRenderIconItem}
            />
            <br /><br />
            <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">Custom example</span>
            <SearchBox placeholder="Search" className={styles.searchBox} />
            <OverflowSet className={styles.customExample}
              items={[
                {
                  key: 'item1',
                  icon: 'Share',
                  name: 'Link 1',
                  ariaLabel: 'New. Use left and right arrow keys to navigate',
                },
                {
                  key: 'item2',
                  icon: 'Add',
                  name: 'Link 2',
                }
              ]}
              overflowItems={[
                {
                  key: 'item4',
                  icon: 'Mail',
                  name: 'Overflow Link 1',
                },
                {
                  key: 'item5',
                  icon: 'Calendar',
                  name: 'Overflow Link 2',
                }
              ]}
              onRenderOverflowButton={this._onRenderIconOverflowButton}
              onRenderItem={this._onRenderIconItem}
            />
          </div >
        </div >

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <p>Use overflow to house less frequently-used commands.</p>
          <p>Use overflow to support responsive design.</p>
          <p>Consider whether a command is required prior to placing it within an overflow.</p>
        </div>
      </div >
    );
  }

  private _onRenderIconItem = (item: IOverflowSetItemProps): JSX.Element => {
    return (
      <TooltipHost content={item.name}>
        <CommandBarButton styles={{ root: { padding: '10px' } }} iconProps={{ iconName: item.icon }} />
      </TooltipHost>
    );
  }

  private _onRenderIconOverflowButton = (overflowItems: any[] | undefined): JSX.Element => {
    return (
      <CommandBarButton
        styles={{ root: { padding: '10px' }, menuIcon: { fontSize: '16px' } }}
        menuIconProps={{ iconName: 'More' }}
        menuProps={{ items: overflowItems! }}
      />
    );
  }

  private _onRenderItem = (item: IOverflowSetItemProps): JSX.Element => {
    return (
      <Link>
        {item.name}
      </Link>
    );
  }

  private _onRenderOverflowButton = (overflowItems: any[] | undefined): JSX.Element => {
    const buttonStyles: Partial<IButtonStyles> = {
      root: {
        minWidth: 0,
        padding: '0 4px',
        alignSelf: 'stretch',
        height: 'auto'
      }
    };
    return <IconButton styles={buttonStyles} menuIconProps={{ iconName: 'More' }} menuProps={{ items: overflowItems! }} />;
  }
}

import * as React from 'react';
import styles from './DesignPatternsTopNav.module.scss';
import { IDesignPatternsTopNavProps } from './IDesignPatternsTopNavProps';
import { IOverflowSetItemProps, OverflowSet } from 'office-ui-fabric-react/lib/OverflowSet';
import { DefaultButton, IconButton, IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

export default class DesignPatternsTopNav extends React.Component<IDesignPatternsTopNavProps, {}> {
  public render(): React.ReactElement<IDesignPatternsTopNavProps> {
    return (
      <div className={styles.designPatternsTopNav + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">Top navigation (also called, 'horizontal navigation') is the default navigational 
                  design pattern for responsive websites and intranets. In smaller configurations, 
                  the Nav may collapse and either the overflow button or the menu icon will 
                  display. On tapping either of these, the menu will display either as a drop down 
                  in the case of the overflow, or as a drawer in the case of the menu icon. </p>
                  <p className="bce-design-system-p-l">Note: This is for a bespoke BCE application</p>
          </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Masthead rules</h3>
          <p>The masthead area can be broken into 2 parts </p>
          <ol>
            <li>The BCE Global Nav</li>
            <li>The Header where branding and top navigation sits. </li>
          </ol>
          <img src={require('../../../assets/topNav.png')} alt="test" /><br /><br />
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">Primary navigation bar sample</span>
            <CommandBar  items={[
                {
                  key: 'item1',
                  name: 'Navigation Link 1',
                },
                {
                  key: 'item2',
                  name: 'Navigation Link  2',
                },
                {
                  key: 'item3',
                  name: 'Navigation Link  3',
                },
                {
                  key: 'item4',
                  name: 'Navigation Link  4',
                }
              ]} />
            <br /><br />
            <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">In situ example of a bespoke BCE application</span>
            <img src={require('../../../assets/topNav2.png')} alt="test" />
          </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p>Use top navigation for apps or sites with many top level navigation items that are of a different type and
priority. </p>
            <p>Keep the names of the navigation items brief and clear, rather than trying to be overly specific. </p>
            <p>Use top navigation for an app with a high number of top level views or categories. Larger sites and apps
may benefit from a persistent top navigation bar across all content. </p>
            <p>Top navigation works best when content is hierarchical or contains items with higher priority than others. </p>
            <p>Avoid site-wide navigation in the content area as this is reserved for content specific interaction design
patterns. such as wizards. galleries, and dashboards. </p>
          </div >
        </div >
      </div >
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

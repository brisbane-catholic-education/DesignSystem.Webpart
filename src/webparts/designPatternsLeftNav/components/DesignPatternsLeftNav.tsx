import * as React from 'react';
import styles from './DesignPatternsLeftNav.module.scss';
import { IDesignPatternsLeftNavProps } from './IDesignPatternsLeftNavProps';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';

export default class DesignPatternsLeftNav extends React.Component<IDesignPatternsLeftNavProps, {}> {

  private _clickLearningRecrods() {
    setTimeout(() => {
      const cells = document.querySelectorAll('.bce-design-system-box .ms-Nav .ms-Nav-navItem');
      if (cells.length > 0) {
        const cell3 = cells[3].querySelector('.ms-Button') as HTMLElement;
        cell3.click();
      }
    }, 1000);
  }

  public render(): React.ReactElement<IDesignPatternsLeftNavProps> {
    return (
      <div className={styles.designPatternsLeftNav + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">Navs (also called "left nav" or "navigation pane") provide links to the main areas
              of an app or a site. In larger configurations, the Nav is always on-screen, usually
              on the left of the view. In smaller configurations, the Nav may collapse into a
              skinnier version or be completely hidden until the user taps an icon. </p>
            <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsLeftNav" target="_blank" title="BCE Github - Button">
              BCE Github - Left Nav  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/nav" target="_blank" title="BCE Github - Button">
              Fluent UI - Nav  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">Basic Nav bar sample</span>
            <Nav
              groups={[
                {
                  links: [
                    {
                      name: 'Dashboard',
                      url: 'http://example.com',
                      key: 'key3',
                      icon: 'ViewDashboard',
                      target: '_blank'
                    },
                    {
                      name: 'Create new record',
                      url: 'http://msn.com',
                      key: 'key4',
                      icon: 'Add',
                      target: '_blank'
                    },
                    {
                      name: 'Favourites',
                      url: 'http://msn.com',
                      key: 'key5',
                      icon: 'FavoriteList'
                    },
                    {
                      name: 'Records of achievement',
                      url: '',
                      key: 'key6',
                      target: '_self',
                      icon: 'Trophy'
                    },
                    {
                      name: 'Learning Records',
                      url: 'http://cnn.com',
                      icon: 'Page',
                      key: 'key7',
                      target: '_blank',
                    },
                    {
                      name: 'Manage classes',
                      url: 'http://cnn.com',
                      icon: 'People',
                      key: 'key7',
                      target: '_blank'
                    }
                  ]
                }
              ]}
            />

            <br />     <br />
            <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">Insitu example of a besopke BCE application</span>
            <img src={require('../../../assets/leftNav.png')} alt="test" /><br /><br />
            <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">In situ example of a besopke BCE Application (MSFT Classic SharePoint template)</span>
            <img src={require('../../../assets/leftNav2.png')} alt="test" />
          </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <div className="ms-Grid-col ms-xxl9">
          <p>Use left-hand navigation for apps with many top-level navigation items that are of similar type. </p>
          <p>Keep the names of the navigation items brief and clear, rather than trying to be overly specific. </p>
          use left-hand navigation for an app with a medium to h'gh number of top level views or categories. If your
          <p>App is very simple, you may prefer a simpler hub-and-spoke layout </p>
          <p>Left-hand navigation works at best with strict organisational schemes, such as an A-Z people directory.
          and where diversity in content models is limited</p>
        </div >
      </div >
        { this._clickLearningRecrods() }
      </div >
    );
  }
}

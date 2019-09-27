import * as React from 'react';
import styles from './DesignPatternsBreadcrumb.module.scss';
import { IDesignPatternsBreadcrumbProps } from './IDesignPatternsBreadcrumbProps';
import { Breadcrumb, IBreadcrumbItem, IDividerAsProps } from 'office-ui-fabric-react/lib/Breadcrumb';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';

export default class DesignPatternsBreadcrumb extends React.Component<IDesignPatternsBreadcrumbProps, {}> {
  public render(): React.ReactElement<IDesignPatternsBreadcrumbProps> {
    return (
      <div className={styles.designPatternsBreadcrumb + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
          <p className="bce-design-system-p-l">Breadcrumbs should be used as a navigational aid in your app or site. They
            indicate the current page's location within a hierarchy and help the user
            understand where they are in relation to the rest of that hierarchy. They also
            afford one-click access to higher levels of that hierarchy. </p>
          <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsBreadcrumb" target="_blank" title="BCE Github - Button">
            BCE Github - Breadcrumb  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/breadcrumb" target="_blank" title="BCE Github - Button">
            UI Fabric - Breadcrumb  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
        </div> </div>

        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <span className="bce-design-system-subsectionTitle2">Small</span>
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm12 ms-lg12 ms-xl12 ma-xxl5' >
                  <Breadcrumb className="bce-design-system-breadcrum-small"
                    items={[
                      { text: 'Files', key: 'Files' },
                      { text: 'Warner Project', key: 'f1' },
                      { text: 'Drafts', key: 'f2' }
                    ]}
                    ariaLabel="Breadcrumb with no maxDisplayedItems"
                    overflowAriaLabel="More links"
                  />
                </div>
              </div>
            <br />
            <span className="bce-design-system-subsectionTitle2">Large</span>
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm12 ms-lg12 ms-xl12 ma-xxl9' >
                  <Breadcrumb className="bce-design-system-breadcrum-large"
                    items={[
                      { text: 'Files', key: 'Files' },
                      { text: 'Warner Project', key: 'f1' },
                      { text: 'Drafts', key: 'f2' }
                    ]}
                    ariaLabel="Breadcrumb with no maxDisplayedItems"
                    overflowAriaLabel="More links"
                  />
                </div>
              </div>
            <br />
            <span className="bce-design-system-subsectionTitle2">XX Large</span>
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm12 ms-lg12 ms-xl12 ma-xxl9' >
                  <Breadcrumb className="bce-design-system-breadcrum-xxl"
                    items={[
                      { text: 'Files', key: 'Files' },
                      { text: 'Warner Project', key: 'f1' },
                      { text: 'Drafts', key: 'f2' }
                    ]}
                    ariaLabel="Breadcrumb with no maxDisplayedItems"
                    overflowAriaLabel="More links"
                  />
                </div>
              </div>
            <br />
            <span className="bce-design-system-subsectionTitle2">IA States</span>
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm12 ms-lg12 ms-xl12 ma-xxl9' >
                  <Breadcrumb className="bce-design-system-breadcrum-xxl iastates"
                    items={[
                      { text: 'Files', key: 'Files' },
                      { text: 'CY17', key: 'Files' },
                      { text: 'Proposals', key: 'f1' },
                      { text: 'Warner Project', key: 'f2' }
                    ]}
                    ariaLabel="Breadcrumb with no maxDisplayedItems"
                    overflowAriaLabel="More links"
                    maxDisplayedItems={3}
                  />
                </div>
              </div>
            <br />
            <div className='ms-Grid-row bce-design-system-row'>
              <div className="overflowButton">
                <span className="bce-design-system-subsectionTitle2">Overflow Button</span>
                <div className='ms-Grid-row  bce-design-system-row'>
                  <div className='ms-Grid-col ms-sm3 ms-lg2 ms-xl1 rest' >
                    <Breadcrumb
                      items={[
                        { text: 'Files', key: 'Files' }
                      ]}
                      ariaLabel="Breadcrumb with no maxDisplayedItems"
                      overflowAriaLabel="More links"
                      maxDisplayedItems={0} />
                    <span>Rest</span>
                  </div>
                  <div className='ms-Grid-col ms-sm3 ms-lg2 ms-xl1 hover' >
                    <Breadcrumb
                      items={[
                        { text: 'Files', key: 'Files' }
                      ]}
                      ariaLabel="Breadcrumb with no maxDisplayedItems"
                      overflowAriaLabel="More links"
                      maxDisplayedItems={0} />
                    <span>Hover</span>
                  </div>
                  <div className='ms-Grid-col ms-sm3 ms-lg2 ms-xl1 focus' >
                    <Breadcrumb
                      items={[
                        { text: 'Files', key: 'Files' }
                      ]}
                      ariaLabel="Breadcrumb with no maxDisplayedItems"
                      overflowAriaLabel="More links"
                      maxDisplayedItems={0} />
                    <span>Focus</span>
                  </div>
                  <div className='ms-Grid-col ms-sm3 ms-lg2 ms-xl1 selected' >
                    <Breadcrumb
                      items={[
                        { text: 'Files', key: 'Files' }
                      ]}
                      ariaLabel="Breadcrumb with no maxDisplayedItems "
                      overflowAriaLabel="More links"
                      maxDisplayedItems={0} />
                    <span>Selected</span>
                  </div>
                  <div className='ms-Grid-col ms-sm12 ms-lg2 ms-xl1 selectedfocus' >
                    <Breadcrumb
                      items={[
                        { text: 'Files', key: 'Files' }
                      ]}
                      ariaLabel="Breadcrumb with no maxDisplayedItems"
                      overflowAriaLabel="More links"
                      maxDisplayedItems={0} />
                    <span>Selected Hover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <p>Consider using breadcrumbs when designing websites that are three or more levels deep,  </p>
          <p>Place Breadcrumbs at the top of a page. above a list of items, or above the main content of a page  </p>
          <p>Don't use Breadcrumbs as a primary way to navigate an app or site.  </p>
          <p>Generally, for mobile apps, breadcrumbs are not recommended, </p>
        </div>
      </div >
    );
  }
}

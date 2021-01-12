import * as React from 'react';
import styles from './DesignPatternGlobalNavComponents.module.scss';
import { IDesignPatternGlobalNavComponentsProps } from './IDesignPatternGlobalNavComponentsProps';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { IIconProps } from 'office-ui-fabric-react/lib/Icon';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

export default class DesignPatternGlobalNavComponents extends React.Component<IDesignPatternGlobalNavComponentsProps, {}> {
  public render(): React.ReactElement<IDesignPatternGlobalNavComponentsProps> {
    return (
      <div className={styles.designPatternGlobalNavComponents + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">BCE Global Navigation Component allows signed in users to navigate and search 
              across the whole of Brisbane Catholic Education. <br/>
              The component is positioned top-right of an application shell, and must feature 
              on all authenticated experiences.  </p>
          </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <div className="ms-Grid-row">
              <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">Anatomy</span>
              <div className="ms-Grid-col ms-xxl9">
                <p>The BCE Global Navigation consists of 3 action components. Minimum margin of 8px outside of BCE Global Component</p>
                <img src={require('../../../assets/globalNav1.png')} alt="test" /><br />
              </div>
            </div>
            <div className="ms-Grid-row">
              <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">Sizes</span>
              <div className="ms-Grid-col ms-xxl9">
                <p>The BCE Global Navigation has three sizes to support global breakpoints. and or specific product header rules (such as MSFT Sharepoint Modern UI). </p>
                <div className='ms-Grid-row'>
                  <div className='ms-Grid-col ms-sm4 ms-lg2' >
                    <span className="bce-design-system-subsectionTitleMedium">Small</span>
                  </div>
                  <div className='ms-Grid-col ms-sm8 ms-lg10' >
                    <Link><IconButton iconProps={{ iconName: 'Search' }} title='Search'></IconButton></Link>
                    <Link><IconButton iconProps={{ iconName: 'CompassNW' }} title='CompassNW'></IconButton></Link>
                    <Link><IconButton iconProps={{ iconName: 'AppIconDefault' }} title='AppIconDefaultList'></IconButton></Link>
                  </div>
                </div>
                <div className='ms-Grid-row'>
                  <div className='ms-Grid-col ms-sm4 ms-lg2' >
                    <span className="bce-design-system-subsectionTitleMedium">Medium</span>
                  </div>
                  <div className='ms-Grid-col ms-sm8 ms-lg10' >
                    <Link><IconButton iconProps={{ iconName: 'Search' }} title='Search'></IconButton></Link>
                    <Link><IconButton iconProps={{ iconName: 'CompassNW' }} title='CompassNW'></IconButton></Link>
                    <Link className='bce-design-system-apps'><IconButton iconProps={{ iconName: 'AppIconDefault' }} title='AppIconDefaultList'></IconButton> <span>BCE Apps</span></Link>
                  </div>
                </div>
                <div className='ms-Grid-row'>
                  <div className='ms-Grid-col ms-sm4 ms-lg2' >
                    <span className="bce-design-system-subsectionTitleMedium">Large</span>
                  </div>
                  <div className='ms-Grid-col ms-sm8 ms-lg10' >
                    <SearchBox className='bce-design-system-search' placeholder="Search" />
                    <Link><IconButton iconProps={{ iconName: 'CompassNW' }} title='CompassNW'></IconButton></Link>
                    <Link className='bce-design-system-apps'><IconButton iconProps={{ iconName: 'AppIconDefault' }} title='AppIconDefaultList'></IconButton><span>BCE Apps</span></Link>
                  </div>
                </div>
              </div>
            </div>
            <br /><br />
            <div className="ms-Grid-row">
              <div className="ms-Grid-row">
                <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">In situ example of BCE Global Navigation within a product masthead </span>
                <div className="ms-Grid-col ms-xxl9">
                  <p>Example application is MSFT Sharepoint Communication site, with primary top/horizontal navigation</p>
                </div>     </div>
              <div className='ms-Grid-row'>
                <span className="bce-design-system-subsectionTitleMedium">Small </span>
                <p>MSFT Instance 1: 0px to 479px</p>
                <div className='ms-Grid-col ms-sm12 ms-lg5' >
                  <img src={require('../../../assets/globalNav2.png')} alt="test" />
                </div>
              </div>
              <br />
              <div className='ms-Grid-row'>
                <span className="bce-design-system-subsectionTitleMedium">Large </span>
                <p>MSFT Instance 2: 480px to 768px</p>
                <div className='ms-Grid-col ms-sm12 ms-lg8' >
                  <img src={require('../../../assets/globalNav3.png')} alt="test" />
                </div>
              </div>
              <br />
              <div className='ms-Grid-row'>
                <span className="bce-design-system-subsectionTitleMedium">X Large Plus </span>
                <p>MSFT Instance 1: 769px+</p>
                <div className='ms-Grid-col ms-sm12 ms-lg12' >
                  <img src={require('../../../assets/globalNav4.png')} alt="test" />
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p>The global search pattern must always sit in the top right-hand corner of the global navigation. </p>
            <p>Where ideal placement of the component is limited due to platform constraints (e.g. MSFT Sharepoint
            Global Header is not configurable), adapt to best meet user experience. Play to the strength of the
            platform's interaction patterns. </p>
            <p>The pattern is used to search across the entire BCE application suite. </p>
            <p>The input field placeholder text should read 'search' when not in use. </p>
            <p>Consider usage across responsive design. </p>
          </div >
        </div >
      </div >
    );
  }
}

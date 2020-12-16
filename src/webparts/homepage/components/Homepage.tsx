import * as React from 'react';
import styles from './Homepage.module.scss';
import { IHomepageProps } from './IHomepageProps';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export default class Homepage extends React.Component < IHomepageProps, {} > {
  public render(): React.ReactElement<IHomepageProps> {

    function _navigateToGettingStarted(): void {
      window.open("/SitePages/Overview.aspx", "_self");
    }

    return(
      <div className = { styles.homepage } >
        <div className = { styles.homepage__cover } >
          <div className = { styles.homepage__coverContent } >
            <h1>BCE <strong>Design System</strong></h1>
            <p>Our design system helps us work together to build great digital experience that drive learning outcomes for our aspiring community</p>
            <hr/>
            <p><img src={require('../../../assets/Bris_Cath_Ed_logo_horiz.png')} alt="Brisbane Catholic Education Logo" width="141" height="62" className = { styles.homepage__coverLogo }/></p>
          </div>
          <a href="#homepage__body" className = { styles.goDown }><Icon iconName='ChevronDown' /></a>
        </div>
        <div id="homepage__body">
          <div className={styles.bodyContent}>
            <br/>
            <p>These design guidelines and pattern library have been designed to
            inspire your creativity and allow you to use the components of our
            design system, whatever digtial product or service you are producing.
            </p>
            <p>Please use these guidelines as inspiration to create coherent and
            engaging digital experiences that drive learning outcomes. </p>
            <p>Creativity and common sense are vital in creating digital experiences.
            but we encourage you to incorporate as much consistency in look, feel,
            and usability as possible. Where new components are required, design
            with rigour and for reuse. </p>
          </div>
          <span className="bce-design-system-sectionTitle" >Contents</span>
          <hr/>
          <div className='ms-Grid'>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm6 ms-lg4' >
                <div><a href="/SitePages/Overview.aspx">
                  <span className='bce-design-system-sectionTitle'>
                    Getting started
                  </span></a>
                </div>
                  <p>The Brisbane Catholic Education Design System
                    provides design guidelines and code to help you
                    quickly create exceptional experiences consistent
                    with our products and services.  </p>
              </div>
              <div className='ms-Grid-col ms-sm6 ms-lg4' >
                <div><a href="/SitePages/Layout.aspx">
                  <span className='bce-design-system-sectionTitle'>
                     Foundations
                  </span></a>
                </div>
                  <p>These areas of design are the foundations on
                  which the Brisbane Catholic Education online is
                  built </p>
              </div>
              <div className='ms-Grid-col ms-sm6 ms-lg4' >
                <div><a href="/SitePages/Brand.aspx">
                  <span className='bce-design-system-sectionTitle'>
                   Grid
                  </span></a>
                </div>
                  <p>All the different sizes of screens and their layouts. You can copy a template from here to add to 
                    your project page to help you get your project started.  </p>
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row'>
            <div className='ms-Grid-col ms-sm6 ms-lg4' >
                <div><a href="/SitePages/Button.aspx">
                  <span className='bce-design-system-sectionTitle'>
                   Master Navigation
                  </span></a>
                </div>
                  <p>Two navigation styles are available. These pages g've a detailed guide on how to 
                  use the Master Navigation and their behaviours at dfferent breakpoints.  </p>
              </div>
              <div className='ms-Grid-col ms-sm6 ms-lg4' >
                <div><a href="/SitePages/Button.aspx">
                  <span className='bce-design-system-sectionTitle'>
                   Patterns and Components
                  </span></a>
                </div>
                  <p>Please use these patterns and components to ensure consistent 
                    conventions across all BCE digital applications. Each page has a detailed overview on how to use these 
                    correctly </p>
              </div>
              <div className='ms-Grid-col ms-sm6 ms-lg4' >
                <div><a href="/SitePages/Resources-for-design-and-development.aspx">
                  <span className='bce-design-system-sectionTitle'>
                    Resources
                  </span></a>
                </div>
                  <p>The Brisbane Catholic Education Design System
                  includes assets and resources to help designers
                  and developers get started and create digital
                  solutions. </p>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

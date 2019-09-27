import * as React from 'react';
import styles from './Homepage.module.scss';
import { IHomepageProps } from './IHomepageProps';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export default class Homepage extends React.Component < IHomepageProps, {} > {
  public render(): React.ReactElement<IHomepageProps> {
    return(
      <div className = { styles.homepage } >
        <div className = { styles.homepage__cover } >
          <div className = { styles.homepage__coverContent } >
            <h1>Our <strong>Design System</strong></h1>
            <p>Our design system helps us work together to build great digital experience that drive learning outcomes for our aspiring community</p>
            <p><DefaultButton text="Getting started" /></p>
            <hr/>
            <p><img src="https://via.placeholder.com/282x124" alt="" width="141" height="62" className = { styles.homepage__coverLogo }/></p>
            <div className = { styles.homepage } >
              <IconButton iconProps={{iconName: 'PencilReply'}} title='Designer'></IconButton>
            </div>
          </div>
          <a href="#homepage__body" className = { styles.goDown }><Icon iconName='ChevronDown' /></a>
        </div>
        <div id="homepage__body">
          <div className={styles.bodyContent}>
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
                <div>
                  Placeholder graphic element
                </div>
                <div>
                  <span className='bce-design-system-sectionTitle'>
                    Getting started
                  </span>
                </div>
                  <p>The Brisbane Catholic Education Design System
                    provides design guidelines and code to help you
                    quickly create exceptional experiences consistent
                    with our products and services.  </p>
              </div>
              <div className='ms-Grid-col ms-sm6 ms-lg4' >
                <div>
                  Placeholder graphic element
                </div>
                <div>
                  <span className='bce-design-system-sectionTitle'>
                    Brand
                  </span>
                </div>
                  <p>Our brand strategy defines and informs who we are
                  as Brisbane Catholic Education and communicates
                  what we stand for. how we act. look and speak. </p>
              </div>
              <div className='ms-Grid-col ms-sm6 ms-lg4' >
                <div>
                  Placeholder graphic element
                </div>
                <div>
                  <span className='bce-design-system-sectionTitle'>
                    Foundations
                  </span>
                </div>
                  <p>These areas of design are the foundations on
                  which the Brisbane Catholic Education online is
                  built </p>
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm6 ms-lg4' >
                <div>
                  Placeholder graphic element
                </div>
                <div>
                  <span className='bce-design-system-sectionTitle'>
                    Design Patterns
                  </span>
                </div>
                  <p>Patterns are a simple. reusable solution to a design
                  problem. They help jumpstart your pro ect
                  focusing on solving user problems rather than
                  reinventing interface elements already established </p>
              </div>
              <div className='ms-Grid-col ms-sm6 ms-lg4' >
                <div>
                  Placeholder graphic element
                </div>
                <div>
                  <span className='bce-design-system-sectionTitle'>
                    Resources
                  </span>
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

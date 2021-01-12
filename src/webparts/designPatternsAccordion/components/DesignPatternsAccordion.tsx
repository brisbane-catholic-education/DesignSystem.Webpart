import * as React from 'react';
import styles from './DesignPatternsAccordion.module.scss';
import { IDesignPatternsAccordionProps } from './IDesignPatternsAccordionProps';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { getId } from 'office-ui-fabric-react/lib/Utilities';

export default class DesignPatternsAccordion extends React.Component<IDesignPatternsAccordionProps, {}> {
  public render(): React.ReactElement<IDesignPatternsAccordionProps> {
    const textFieldId = getId('anInput');
    return (
      <div className={styles.designPatternsAccordion + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
          <p className="bce-design-system-p-l">Apply when a user needs to navigate among a website's main sections or inline 
            contetnt, while still being able to quickly browse to the subsection of another.  </p>
          </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <span className="bce-design-system-subsectionTitle">Accordion with content</span>
          <div className="bce-design-system-box">
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-lg8' >
                <p className='bce-design-system-subsectionTitleMedium bce-design-system-border-bottom'>State matrix</p>
                <div className='ms-Grid-col ms-sm12 ms-lg8' >
                  <img src={require('../../../assets/accordion.png')} alt="Accordion" />
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <span className="bce-design-system-subsectionTitle">Accordion with navigation</span>
          <p className="bce-design-system-p">Use when you want the benefits of a normal sidebar menu, but do not have 
              the space to list all options. Limit to two Levels of navigation.  </p>
          <div className="bce-design-system-box-sm">
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-lg6' >
                  <span className="bce-design-system-subsectionTitleMedium">Sample</span>
                  <p>See <b>BCE Master Navigation</b> for <b>left navigation</b> overview.</p>
                </div>
                <div className='ms-Grid-col ms-sm12 ms-lg6' >
                  <img src={require('../../../assets/accordion2.png')} width="100%" alt="Accordion" />
                  </div>
              </div>
            </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">
            For consideration
          </h3>
          <p>Seek to optimise page content to avoid the need for accordians. </p>
          <p>Limit to two levels of nav'gation. </p>
          <p>Use when you have less than 10 main sections. </p>
        </div>
      </div >
    );
  }
}

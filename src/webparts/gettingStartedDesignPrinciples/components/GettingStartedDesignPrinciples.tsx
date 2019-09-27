import * as React from 'react';
import styles from './GettingStartedDesignPrinciples.module.scss';
import { IGettingStartedDesignPrinciplesProps } from './IGettingStartedDesignPrinciplesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IconButton } from 'office-ui-fabric-react/lib/Button';

export default class GettingStartedDesignPrinciples extends React.Component<IGettingStartedDesignPrinciplesProps, {}> {
  public render(): React.ReactElement<IGettingStartedDesignPrinciplesProps> {
    return (
      <div className={styles.gettingStartedDesignPrinciples + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
              <div className="ms-Grid-col ms-xxl9">
                <p className="bce-design-system-p-l">We build digital products and services that enable student learning
                outcomes. We aim to make the education experience better for
                everyone, no matter where they're located or their level of experience. </p>

                <p className="bce-design-system-p-l">Our design principles shape the way we work every day. They help us
                make tough design decisions and distill many iterations into the best
                solution. Each one was chosen to represent the core facets of great
                design and great software. </p>
              </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
            <div className="ms-Grid-col ms-xxl9">
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm2 ms-lg1' >
                  <IconButton iconProps={{ iconName: 'TriggerUser' }} title='TriggerUser'></IconButton>
                </div>
                <div className='ms-Grid-col ms-sm10 ms-lg11' >
                  <span className="xxl Bold dark-navy">Empowered</span>
                  <p>
                    By having clarity on how we make things and supporting our people to deliver
                    products and services that people want to use.
              </p>
                </div>
              </div>
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm2 ms-lg1' >
                  <IconButton iconProps={{ iconName: 'CheckboxComposite' }} title='CheckboxComposite'></IconButton>
                </div>
                <div className='ms-Grid-col ms-sm10 ms-lg11' >
                  <span className="xxl Bold dark-navy">Human-centred</span>
                  <p>
                    By placing learning outcomes at the heart of everything we do.
              </p>
                </div>
              </div>
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm2 ms-lg1' >
                  <IconButton iconProps={{ iconName: 'PieSingle' }} title='PieSingle'></IconButton>
                </div>
                <div className='ms-Grid-col ms-sm10 ms-lg11' >
                  <span className="xxl Bold dark-navy">Recognisable</span>
                  <p>
                    By having a clear identity at every touch point.
              </p>
                </div>
              </div>
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm2 ms-lg1' >
                  <IconButton iconProps={{ iconName: 'Communications' }} title='Communications'></IconButton>
                </div>
                <div className='ms-Grid-col ms-sm10 ms-lg11' >
                  <span className="xxl Bold dark-navy">Universal</span>
                  <p>
                    Through consistent application of design.
              </p>
                </div>
              </div>
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm2 ms-lg1' >
                  <IconButton iconProps={{ iconName: 'SingleColumnEdit' }} title='SingleColumnEdit'></IconButton>
                </div>
                <div className='ms-Grid-col ms-sm10 ms-lg11' >
                  <span className="xxl Bold dark-navy">Simplified</span>
                  <p>
                    Through ease of navigation and user adoption.
              </p>
                </div>
              </div>
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm2 ms-lg1' >
                  <IconButton iconProps={{ iconName: 'SIPMove' }} title='SIPMove'></IconButton>
                </div>
                <div className='ms-Grid-col ms-sm10 ms-lg11' >
                  <span className="xxl Bold dark-navy">Structured</span>
                  <p>
                    Through clarity of focus. our products and services have a considered place
                    within a system.
              </p>
                </div>
              </div>
            </div>
          </div>
      </div >
    );
  }
}

import * as React from 'react';
import styles from './FoundationsIllustration.module.scss';
import { IFoundationsIllustrationProps } from './IFoundationsIllustrationProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class FoundationsIllustration extends React.Component<IFoundationsIllustrationProps, {}> {
  public render(): React.ReactElement<IFoundationsIllustrationProps> {
    return (
      <div className={styles.foundationsIllustration + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">A distinct inline illustration style has been developed for our brand. Illustrations
are to be used to engage viewers.  </p>
            <p className="bce-design-system-p-l">To make sure they remain clear and useful to audiences, please apply only a
single colour from our colour palette to each icon.</p>
            <br />
          </div>
          <span className="bce-design-system-subsectionTitle">Illustration Sample</span><br /><br />
          <div className="bce-design-system-box">
            <img src={require('../../../assets/illustration.png')} alt="test" />
          </div>
          <br />
          <div className='ms-Grid'>
            <div className='ms-Grid-row  bce-design-system-row'>
              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg6' >
                <span className="bce-design-system-subsectionTitleMedium">Do</span>
                <ul>
                  <li>Do use solid fill strokes and outlines to define objects </li>
                  <li>Do use rounded corners </li>
                  <li>Do use the illustration for the background it was designed for </li>
                </ul>
              </div>
              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg6' >
                <span className="bce-design-system-subsectionTitleMedium">Don't</span>
                <ul>
                  <li> Don't overcomplicate with unnecessary details </li>
                  <li>Don't allow illustrations to be confused as UI icons </li>
                  <li>Don't use Fluent UI icons as illustrations </li>
                  <li>Don't use just to create drama, it has to have purpose </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">When to use illustration</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p>Illustration is a powerful communication tool when something needs to be communicated.<br />
              Illustration becomes overwhelming and distracting when it is used as an ornament. and<br />
              ultimately detracts from the overall experience of using the product </p>
            <span className="bce-design-system-subsectionTitle">Common places to use illustration</span>
            <ul>
              <li>Empty states (when a page has no results. or when something goes wrong) </li>
              <li>On-boarding (introducing a new feature. or explaining how to use your product) </li>
              <li>Announcements </li>
              <li>Progress indicators </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

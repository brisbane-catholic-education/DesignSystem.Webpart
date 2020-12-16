import * as React from 'react';
import styles from './GettingStartedOverview.module.scss';
import { IGettingStartedOverviewProps } from './IGettingStartedOverviewProps';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
export default class GettingStartedOverview extends React.Component<IGettingStartedOverviewProps, {}> {
  public render(): React.ReactElement<IGettingStartedOverviewProps> {
    return (
      <div className={styles.gettingStartedOverview + ' ms-Grid'}>
        <div className="ms-Grid-row bce-design-system-row">
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">The Brisbane Catholic Education Design System provides design guidelines and code to
            help you quickly create remarkable experiences that are consistent with our products and services. </p>
            <p className="bce-design-system-p-l">Please use these guidelines as inspiration. This is not a list of prescriptive rules - it is a
            living resource designed to adapt to our evolving design needs and our design and development community. </p>
            <p className="bce-design-system-p-l">Read on to learn how best to use our design system for your role. </p>

            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg6' >
                <div className="bce-design-system-box-sm">
                  <h3>Developers</h3>
                  <IconButton iconProps={{ iconName: 'FileCode' }} title='CalendarSettings'></IconButton></div>
                <p>Get started with our code base one of two ways:
                  downloading the code from- (code sharing to be discussed). </p>
                <ul>
                  <li>Review the Design System Guidelines</li>
                  <li>Get started with our <a href="https://github.com/brisbane-catholic-education">code base</a></li>
                </ul>
              </div>
              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg6' >
                <div className="bce-design-system-box-sm">
                  <h3>Designers</h3>
                  <IconButton iconProps={{ iconName: 'Color' }} title='Designer'></IconButton> </div>
                <p>Whether you're creating simple wireframes or detailed visual design compositions.
                  we've got you covered with the design resources you need. </p>
                <ul>
                  <li> Review the Design System Guidelines </li>
                  <li>Get started with our design toolkit within <a href="/SitePages/Resources-for-design-and-development.aspx">resources</a>. </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import * as React from 'react';
import styles from './DesignPatternsDatePicker.module.scss';
import { IDesignPatternsDatePickerProps } from './IDesignPatternsDatePickerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';

export default class DesignPatternsDatePicker extends React.Component < IDesignPatternsDatePickerProps, {} > {
  public render(): React.ReactElement<IDesignPatternsDatePickerProps> {
    return(
<div className={styles.designPatternsDatePicker + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">The DatePicker component enables a user to pick a date value.</p>
            <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsDatePicker" target="_blank" >
              BCE GitHub - DatePicker  <IconButton iconProps={{ iconName: 'OpenInNewWindow' }} title='OpenInNewWindow'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/datepicker" target="_blank" >
              Fluent UI - DatePicker  <IconButton iconProps={{ iconName: 'OpenInNewWindow' }} title='OpenInNewWindow'></IconButton></DefaultButton>
          </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
        <span className="bce-design-system-subsectionTitleMedium">Sample</span>
          <div className="bce-design-system-box">
            <img src={require('../../../assets/CaelndarExample.png')} width="250px" height="100%" alt="Calendar" />           
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p>Set the default date to the current date unless a specific date is required for 
              context (e.g. the date of the conference). </p>
            <p>Build upon UI Fabric variants and built-in resizing The control is designed to 
            resize relative to available screen width. Allow it to render in either wide or 
            narrow as appropriate. </p>
            <p>Where appropriate. leverage IOS/Android pickers for mobile experiences. </p>
          </div>
        </div>
      </div >
    );
  }
}

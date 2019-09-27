import * as React from 'react';
import styles from './DesignPatternsPivot.module.scss';
import { IDesignPatternsPivotProps } from './IDesignPatternsPivotProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IconButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Pivot, PivotItem, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';
import { Label } from 'office-ui-fabric-react/lib/Label';

export default class DesignPatternsPivot extends React.Component<IDesignPatternsPivotProps, {}> {
  public render(): React.ReactElement<IDesignPatternsPivotProps> {
    return (
      <div className={styles.designPatternsPivot + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
          <p className="bce-design-system-p-l">The Pivot control and related tabs pattern are used for navigating frequently accessed, distinct content categories. Pivots allow for navigation between two or more content views and relies on text headers to articulate the different sections of content.</p>
          <DefaultButton className="bce-design-system-buttom" href="http://bing.com" target="_blank" title="BCE Github - Button">
            BCE GitHub - Pivot  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          <DefaultButton className="bce-design-system-buttom" href="http://bing.com" target="_blank" title="BCE Github - Button">
            UI Fabric - Pivot  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
        </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <span className="bce-design-system-subsectionTitle2 bce-design-system-border-bottom">Default Pivot</span>
            <Pivot className="bce-design-system-pviot">
              <PivotItem headerText="Pivot 1" >
                <Label>Result for Pivot 1</Label>
              </PivotItem>
              <PivotItem headerText="Pivot 2">
                <Label >Result for Pivot 2</Label>
              </PivotItem>
              <PivotItem headerText="Pivot 3">
                <Label>Result for Pivot  3</Label>
              </PivotItem>
            </Pivot>
            <br /> <br />
            <span className="bce-design-system-subsectionTitle2 bce-design-system-border-bottom">Count and icon</span>
            <Pivot className="bce-design-system-pviot">
              <PivotItem headerText="Places" itemCount={20} itemIcon="MapPin">
                <Label>Result for Pivot 1</Label>
              </PivotItem>
              <PivotItem headerText="Recordings" itemCount={1} itemIcon="Microphone">
                <Label>Result for Pivot #2</Label>
              </PivotItem>
              <PivotItem headerText="Footage" itemCount={4} itemIcon="Video">
                <Label>Result for Pivot #3</Label>
              </PivotItem>
            </Pivot>
            <br /> <br />
            <span className="bce-design-system-subsectionTitle2 bce-design-system-border-bottom">Links of tab style</span>
            <Pivot className={styles.tab + " bce-design-system-pviot"} linkFormat={PivotLinkFormat.tabs}>
              <PivotItem headerText="Apple" >
                <Label>Result for Pivot 1</Label>
              </PivotItem>
              <PivotItem headerText="Banna">
                <Label >Result for Pivot 2</Label>
              </PivotItem>
              <PivotItem headerText="Cherry">
                <Label>Result for Pivot  3</Label>
              </PivotItem>
            </Pivot>
            <br />
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <p>Use on content-heavy pages that require a significant amount of scrolling to access the various sections.</p>
          <p>Be concise on the navigation labels, ideally one or two words rather than a phrase.</p>
          <p>Make sure all the children of the Pivot component are of type PivotItem.</p>
        </div>
      </div >
    );
  }
}

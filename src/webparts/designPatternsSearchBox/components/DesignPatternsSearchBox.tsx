import * as React from 'react';
import styles from './DesignPatternsSearchBox.module.scss';
import { IDesignPatternsSearchBoxProps } from './IDesignPatternsSearchBoxProps';
import $ from "jquery";
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

export default class DesignPatternsSearchBox extends React.Component<IDesignPatternsSearchBoxProps, {}> {
  public render(): React.ReactElement<IDesignPatternsSearchBoxProps> {
    return (
      <div className={styles.designPatternsSearchBox + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">SearchBoxes provide an input field for searching through content, allowing users to locate specific items within the website or app.</p>
            <DefaultButton className="bce-design-system-buttom" href="http://bing.com" target="_blank" title="BCE Github - Button">
              BCE GitHub - SearchBox  <IconButton iconProps={{ iconName: 'OpenInNewWindow' }} title='OpenInNewWindow'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="http://bing.com" target="_blank" title="BCE Github - Button">
              UI Fabric - SearchBox  <IconButton iconProps={{ iconName: 'OpenInNewWindow' }} title='OpenInNewWindow'></IconButton></DefaultButton>
          </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <span className="bce-design-system-subsectionTitle2">Default SearchBox</span>
            <SearchBox placeholder="Search" />
            <br /><br />
            <span className="bce-design-system-subsectionTitle2">Underlined SearchBox</span>
            <SearchBox placeholder="Search" underlined={true} />
            <br /><br />
            <span className="bce-design-system-subsectionTitle2">SearchBox with custom icon</span>
            <SearchBox placeholder="Filter" />
            <br /><br />
            <span className="bce-design-system-subsectionTitle2">State matrix</span>
            <div className='ms-Grid'>
              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg6' >
                  <span className="bce-design-system-subsectionTitle2">SearchBox</span>
                  <div className='ms-Grid-row'>
                    <div className='ms-Grid-col ms-sm6 ms-lg5' >
                      <span>Rest</span>
                    </div>
                    <div className='ms-Grid-col ms-sm6 ms-lg7' >
                      <SearchBox placeholder="Search" />
                    </div>
                  </div>
                  <div className='ms-Grid-row'>
                    <div className='ms-Grid-col ms-sm6 ms-lg5' >
                      <span>Hover</span>
                    </div>
                    <div className='ms-Grid-col ms-sm6 ms-lg7 hover' >
                      <SearchBox placeholder="Search" />
                    </div>
                  </div>
                  <div className='ms-Grid-row'>
                    <div className='ms-Grid-col ms-sm6 ms-lg5 ' >
                      <span>Select/Focus</span>
                    </div>
                    <div className='ms-Grid-col ms-sm6 ms-lg7 focus'  >
                      <SearchBox placeholder="Search" />
                    </div>
                  </div>
                  <div className='ms-Grid-row'>
                    <div className='ms-Grid-col ms-sm6 ms-lg5' >
                      <span>Disabled</span>
                    </div>
                    <div className='ms-Grid-col ms-sm6 ms-lg7' >
                      <SearchBox disabled placeholder="Search" />
                    </div>
                  </div>

                </div>
                <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg6' >
                  <span className="bce-design-system-subsectionTitle2">SearchBox Inline (Command Bar)</span>
                  <div className='ms-Grid-row'>
                    <div className='ms-Grid-col ms-sm6 ms-lg5' >
                      <span>Rest</span>
                    </div>
                    <div className='ms-Grid-col ms-sm6 ms-lg7' >
                      <SearchBox underlined={true} placeholder="Search" />
                    </div>
                  </div>
                  <div className='ms-Grid-row'>
                    <div className='ms-Grid-col ms-sm6 ms-lg5 ' >
                      <span>Hover</span>
                    </div>
                    <div className='ms-Grid-col ms-sm6 ms-lg7 hover' >
                      <SearchBox underlined={true} placeholder="Search" />
                    </div>
                  </div>
                  <div className='ms-Grid-row'>
                    <div className='ms-Grid-col ms-sm6 ms-lg5 ' >
                      <span>Select/Focus</span>
                    </div>
                    <div className='ms-Grid-col ms-sm6 ms-lg7 focus' >
                      <SearchBox underlined={true} placeholder="Search" />
                    </div>
                  </div>
                  <div className='ms-Grid-row'>
                    <div className='ms-Grid-col ms-sm6 ms-lg5' >
                      <span>Disabled</span>
                    </div>
                    <div className='ms-Grid-col ms-sm6 ms-lg7' >
                      <SearchBox disabled underlined={true} placeholder="Search" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p>Use placeholder text in the SearchBox to describe what users can search for.</p>
            <p>Provide autocomplete suggestions where there are strong matches to the user's query that the user may want to view immediately.</p>
            <p>Use the Underlined SearchBox for CommandBars.</p>
          </div>
        </div>
      </div >
    );
  }
}

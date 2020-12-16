import * as React from 'react';
import styles from './DesignPatternsDropdown.module.scss';
import { IDesignPatternsDropdownProps } from './IDesignPatternsDropdownProps';
import { Dropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';

export default class DesignPatternsDropdown extends React.Component<IDesignPatternsDropdownProps, {}> {
  private options: IDropdownOption[] = [
    { key: 'Optiona', text: 'Option a' },
    { key: 'optionb', text: 'Option b' },
    { key: 'optionc', text: 'Option c' }
  ];
  private options2: IDropdownOption[] = [
    { key: 'Optiona', text: 'Content' },
    { key: 'optionb', text: 'Content 2' },
    { key: 'optionc', text: 'Content 3' }
  ];
  public render(): React.ReactElement<IDesignPatternsDropdownProps> {
    return (
      <div className={styles.designPatternsDropdown + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9"> 
          <p className="bce-design-system-p-l">A Dropdown is a list in which the selected item is always visible, and the others
          are visible on demand by clicking a drop-down button. They are used to simplify
          the design and make a choice within the UI. When closed, only the selected
          item is visible. When users click the drop-down button, all the options become
          visible. To change the value, users open the list and click another value or use
            the arrow keys (up and down) to select a new value. </p>

          <DefaultButton className="bce-design-system-buttom"  href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsDropdown" target="_blank" title="BCE Github - Dropdown">
            BCE Github - Dropdown  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          <DefaultButton className="bce-design-system-buttom"  href="https://developer.microsoft.com/en-us/fabric#/controls/web/dropdown" target="_blank" title="BCE Github - Button">
            Fluent UI - Dropdown  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
        </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Variants</h3>
          <p>The dropdown is available in standard or underline styles</p>
          <div className="bce-design-system-box">
            <div className='ms-Grid-row bce-design-system-row ms-Grid'>
              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-lg7' >
                  <p className="bce-design-system-subsectionTitleMedium">Basic example standard</p>
                  <Dropdown options={this.options} defaultSelectedKey='Optiona' />
                </div>
                <div className='ms-Grid-col ms-sm12 ms-lg5' >
                  <p className="bce-design-system-subsectionTitleMedium">Basic example underline</p>
                  <Dropdown options={this.options} className="bce-design-system-dropdown-underline" defaultSelectedKey='Optiona' />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">State matix</span>
              </div >
              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm3 ms-lg2' >
                  <span className='bce-design-system-subsectionTitleMedium'>State</span>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5' >
                  <span className='bce-design-system-subsectionTitleMedium'>Standard</span>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5' >
                  <span className='bce-design-system-subsectionTitleMedium'>Underline</span>
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm3 ms-lg2' >
                  <span>Rest</span>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5' >
                  <Dropdown options={this.options2} defaultSelectedKey='Optiona' />
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5' >
                  <Dropdown className="bce-design-system-dropdown-underline" options={this.options2} defaultSelectedKey='Optiona' />
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm3 ms-lg2' >
                  <span>Hover</span>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5 hover' >
                  <Dropdown options={this.options2} defaultSelectedKey='Optiona' />
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5 hover' >
                  <Dropdown className="bce-design-system-dropdown-underline" options={this.options2} defaultSelectedKey='Optiona' />
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm3 ms-lg2' >
                  <span>Selected / Focus</span>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5 selected' >
                  <Dropdown options={this.options2} defaultSelectedKey='Optiona' />
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5 selected' >
                  <Dropdown className="bce-design-system-dropdown-underline" options={this.options2} defaultSelectedKey='Optiona' />
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm3 ms-lg2' >
                  <span>Pressed</span>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5 pressed' >
                  <Dropdown options={this.options2} defaultSelectedKey='Optiona' />
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5 pressed' >
                  <Dropdown className="bce-design-system-dropdown-underline" options={this.options2} defaultSelectedKey='Optiona' />
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm3 ms-lg2' >
                  <span>Disabled</span>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5' >
                  <Dropdown options={this.options2} defaultSelectedKey='Optiona' disabled/>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5' >
                  <Dropdown className="bce-design-system-dropdown-underline" disabled options={this.options2} defaultSelectedKey='Optiona' />
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm3 ms-lg2' >
                  <span>Error</span>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5 error' >
                  <Dropdown options={this.options2} defaultSelectedKey='Optiona' errorMessage={true ? 'error' : ''}/>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5 error' >
                  <Dropdown className="bce-design-system-dropdown-underline" options={this.options2} defaultSelectedKey='Optiona'  errorMessage={true ? 'error' : ''}/>
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm3 ms-lg2' >

                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5' >
                <span className='bce-design-system-subsectionTitleMedium'>Standard with Label</span>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5' >
                <span className='bce-design-system-subsectionTitleMedium'>Underline with label</span>
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm3 ms-lg2' >

                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5' >
                  <Dropdown options={this.options2} defaultSelectedKey='Optiona'  label="Label"/>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-lg5' >
                  <Dropdown className="bce-design-system-dropdown-underline" label="Label" options={this.options2} defaultSelectedKey='Optiona' />
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
        <p>Use a Dropdown when there are multiple choices that can be collapsed under one title. Or if the list of 
          items is long or when space is constrained. </p>
          <p>Use a Dropdown when the selected option is more important than the alternatives (in contrast to Radio 
          Buttons where all the choices are visible putting more emphasis on the other options). </p>
      </div>
      </div >

    );
  }
}

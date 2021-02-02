import * as React from 'react';
import styles from './DesignPatternsChoiceFields.module.scss';
import { IDesignPatternsChoiceFieldsProps } from './IDesignPatternsChoiceFieldsProps';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

export default class DesignPatternsChoiceFields extends React.Component<IDesignPatternsChoiceFieldsProps, {}> {
  public render(): React.ReactElement<IDesignPatternsChoiceFieldsProps> {
    return (
      <div className={styles.designPatternsChoiceFields + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">Checkboxes and Radio Buttons are very similar. They both display a list of
            options which a user can select from. Checkbox fields allow the user to select
            one or more options and boxes can be checked and unchecked. Radio Button
            fields will allow only one option to be selected. A Radio Button cannot be
            unchecked. </p><br />
            <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsChoiceFields" target="_blank">
              BCE Github - Choice Field  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/checkbox" target="_blank">
              Fluent UI - Checkbox <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/choicegroup" target="_blank">
            Fluent UI  - ChoiceGroup <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          </div>
        </div>
        <div className={styles.checkboxSection + " ms-Grid-row bce-design-system-row"}>
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Checkbox</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p">A Checkbox is a UI element that allows users to switch between two mutually exclusive options (checked
              or unchecked, on or off) through a single click or tap. It can also be used to indicate a subordinate setting or
            preference when paired with another control. </p>
          </div>
          <br />

          <div className='bce-design-system-box'>
            <div className="ms-Grid-row bce-design-system-row">
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12' >
                  <span className='bce-design-system-subsectionTitleMedium'>Default Checkbox</span>
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12' >
                  <Checkbox label="Standard checkbox" />
                </div><br />
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12' >
                  <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">State matrix</span>
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span className="bce-design-system-subsectionTitleMedium">State</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4' >
                  <span className="bce-design-system-subsectionTitleMedium">Standard</span>
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Rest</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4' >
                  <Checkbox label="String" />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Hover</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4 hover' >
                  <Checkbox label="String" />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Pressed/Selected</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4 selected' >
                  <Checkbox label="String" defaultChecked={true} />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Selected Hover</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4 selectedHover' >
                  <Checkbox label="String" defaultChecked={true} />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Focus</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4 focus' >
                  <Checkbox label="String" />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Disabled Selected</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4 disabledSelected' >
                  <Checkbox label="String" defaultChecked={true} disabled={true} />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Disabled</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4 disabled' >
                  <Checkbox label="String" disabled={true} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.choiceFieldSection + " ms-Grid-row bce-design-system-row"}>
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">ChoiceGroup/Radio Buttons</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p">The ChoiceGroup component, also known as radio buttons, let users select one option from two or more choices. Each option is represented by one ChoiceGroup button. A user can select only one ChoiceGroup in a button group.</p>
          </div>
          <br />

          <div className='bce-design-system-box '>
            <div className="ms-Grid-row bce-design-system-row">
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12' >
                  <span className='bce-design-system-subsectionTitleMedium'>Default ChoiceGroup</span>
                  <br /><br />
                  <ChoiceGroup
                    className="defaultChoiceGroup"
                    options={[
                      {
                        key: 'A',
                        text: 'Apple'
                      } as IChoiceGroupOption,
                      {
                        key: 'B',
                        text: 'Banana'
                      },
                      {
                        key: 'C',
                        text: 'Carrot'
                      },
                      {
                        key: 'D',
                        text: 'Daikon',
                        disabled: true
                      }
                    ]}
                    label="Select one"
                    required={false}
                  />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12' >
                  <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">State matrix</span>
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span className="bce-design-system-subsectionTitleMedium">State</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4' >
                  <span className="bce-design-system-subsectionTitleMedium">Standard</span>
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Rest</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4' >
                  <ChoiceGroup className="defaultChoiceGroup2"
                    options={[
                      {
                        key: 'A',
                        text: 'String',
                      } as IChoiceGroupOption,
                    ]}
                    required={false}
                  />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Hover</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4 hover' >
                  <ChoiceGroup className="defaultChoiceGroup3"
                    options={[
                      {
                        key: 'A',
                        text: 'String',
                      } as IChoiceGroupOption,
                    ]}
                    required={false}
                  />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Pressed/Selected</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4 selected' >
                  <ChoiceGroup className="defaultChoiceGroup4"
                    defaultSelectedKey="A"
                    options={[
                      {
                        key: 'A',
                        text: 'String',
                      } as IChoiceGroupOption,
                    ]}
                    required={false}
                  />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Selected Hover</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4 hovedSele' >
                  <ChoiceGroup className="defaultChoiceGroup5"
                    defaultSelectedKey="A"
                    options={[
                      {
                        key: 'A',
                        text: 'String',
                      } as IChoiceGroupOption,
                    ]}
                    required={false}
                  />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Focus</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4 focus' >
                  <ChoiceGroup className="defaultChoiceGroup6"
                    options={[
                      {
                        key: 'A',
                        text: 'String',
                      } as IChoiceGroupOption,
                    ]}
                    required={false}
                  />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Disabled Selected</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4 disabledSelected' >
                  <ChoiceGroup className="defaultChoiceGroup7"
                    defaultSelectedKey="A"
                    options={[
                      {
                        key: 'A',
                        text: 'String',
                        disabled: true
                      } as IChoiceGroupOption,
                    ]}
                    required={false}
                  />
                </div>
              </div>
              <div className='ms-Grid-row bce-design-system-row'>
                <div className='ms-Grid-col ms-sm7 ms-md6 ms-lg3' >
                  <span>Disabled</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-md6 ms-lg4 disabled' >
                  <ChoiceGroup className="defaultChoiceGroup2"
                    options={[
                      {
                        key: 'A',
                        text: 'String',
                        disabled: true
                      } as IChoiceGroupOption,
                    ]}
                    required={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p><b>Radio buttons </b>are used when there is a list of two or more options that are mutually exclusive and the user
              must select exactly one choice. In other words. clicking a non-selected radio button will deselect whatever
              other button was previously selected in the list </p>
            <p><b>Checkboxes</b> are used when there are lists of options and the user may select any number of choices,
              including zero. one. or several. In other words, each checkbox is independent of all other checkboxes in
              the list so checking one box doesnt uncheck the others. </p>
            <p><b>A stand-alone checkbox</b> is used for a single option that the user can turn on or off. </p>
          </div>
        </div>
      </div>
    );
  }
}

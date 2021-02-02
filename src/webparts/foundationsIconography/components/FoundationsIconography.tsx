import * as React from 'react';
import styles from './FoundationsIconography.module.scss';
import { IFoundationsIconographyProps } from './IFoundationsIconographyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';

export default class FoundationsIconography extends React.Component<IFoundationsIconographyProps, {}> {
  public render(): React.ReactElement<IFoundationsIconographyProps> {
    return (
      <div className={styles.foundationsIconography + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">Microsoft Fluent UI icons are used for iconography. This creates a consistent
       look across all of our digital platforms, assisting our users to readily understand
our user interface elements. It means they don't have to continually learn anew. </p>
            <br />    <br />
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/styles/web/icons" target="_blank" >
              Fluent UI - Icons, implementation and asset <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <br /><br />
          </div>
          <span className="bce-design-system-subsectionTitle">Fluent UI - Icon sample</span>
          <br /> <br />
          <div className={styles.sample}>
            <div className='ms-Grid'>
              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 ms-xl1' >
                  <IconButton iconProps={{ iconName: 'GlobalNavButton' }}></IconButton>
                  <p>Global Nav Button</p>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 ms-xl1' >
                  <IconButton iconProps={{ iconName: 'Add' }}></IconButton>
                  <p>Add</p>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 ms-xl1' >
                  <IconButton iconProps={{ iconName: 'ChromeClose' }}></IconButton>
                  <p>Chrome Close</p>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 ms-xl1' >
                  <IconButton iconProps={{ iconName: 'Upload' }}></IconButton>
                  <p>Upload</p>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 ms-xl1' >
                  <IconButton iconProps={{ iconName: 'Settings' }}></IconButton>
                  <p>Settings</p>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 ms-xl1' >
                  <IconButton iconProps={{ iconName: 'Mail' }}></IconButton>
                  <p>Mail</p>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 ms-xl1' >
                  <IconButton iconProps={{ iconName: 'Pin' }}></IconButton>
                  <p>Pin</p>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 ms-xl1' >
                  <IconButton iconProps={{ iconName: 'Filter' }}></IconButton>
                  <p>Filter</p>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 ms-xl1' >
                  <IconButton iconProps={{ iconName: 'Share' }}></IconButton>
                  <p>Share</p>
                </div>
                <div className='ms-Grid-col ms-sm4 ms-md4 ms-lg3 ms-xl1' >
                  <IconButton iconProps={{ iconName: 'Print' }}></IconButton>
                  <p>Print</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Where and how to use</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p>Only use icons when there's a clear need for them. For digital platforms and services they
              may be used as part of the user interface to support actions and feedback on status.
              using icons as intended will help to make them more understandable over time. </p>
          </div>
          <div className="bce-design-system-box">
            <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">Sizing</span>
            <div className="ms-Grid-col ms-xxl9"> 
            <p>Icons are predominately in use at 16px, but they can also be sized in relation to the typography underlines. <br/>
            Icons should appear next to their respective labels, and be sized in harmony with typography. </p>
            </div>
            <div className='ms-Grid'>
              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-lg6' >
                  <span className="bce-design-system-subsectionTitleMedium">Inline</span>
                  <p>Label 16px, Icon 18px</p>
                  <p><a href="">Download school photograph (3.1mb)<IconButton iconProps={{ iconName: 'Download' }} title='Download'></IconButton> </a></p>
                </div>
                <div className='ms-Grid-col ms-sm12 ms-lg6' >
                  <span className="bce-design-system-subsectionTitleMedium">Button 40px</span>
                  <p>Icons 16px, Label 14px</p>
                  <DefaultButton
                    iconProps={{ iconName: 'Settings' }}
                    text="Show photos from"
                    menuProps={{
                      items: [
                        {
                          key: 'emailMessage',
                          text: 'Email message',
                          iconProps: { iconName: 'Mail' }
                        },
                        {
                          key: 'calendarEvent',
                          text: 'Calendar event',
                          iconProps: { iconName: 'Calendar' }
                        }
                      ],
                      directionalHintFixed: true
                    }}
                  ></DefaultButton>
                </div>
              </div>
              <div className={styles.scale + ' ms-Grid-row  bce-design-system-row'}>
                <span className="bce-design-system-subsectionTitleMedium">Typographic scale sample</span>
                <div className='ms-Grid-col ms-sm12 ms-lg6' >
                  <img src={require('../../../assets/icongraphy.png')} alt="test" />
                </div>
                <div className='ms-Grid-col ms-sm12 ms-lg6' >
                  <p className="m"><IconButton iconProps={{ iconName: 'Error' }} title='Error'></IconButton> Raleway Regular - 14px</p>
                  <p className="m-plus"><IconButton iconProps={{ iconName: 'Error' }} title='Error'></IconButton> Raleway Regular - 16px</p>
                  <p className="l"><IconButton iconProps={{ iconName: 'Error' }} title='Error'></IconButton> Raleway Regular - 18px</p>
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">Spacing and positioning</span>
                <div className="ms-Grid-col ms-xxl9"> 
                <p>Always allocate the right amount of space around an icon to allow for legibility and touch.
                  Wherever possible, size your spacing in multiples of 4 or 8 pixels. </p>
                  </div>
                <br />
                <div className="ms-Grid-col ms-sm12">
                <img src={require('../../../assets/icongraphy2.png')} alt="test" />
                </div>
               
              </div>


              <div className='ms-Grid-row  bce-design-system-row'>
                <span className="bce-design-system-subsectionTitleMedium bce-design-system-border-bottom">Support conventions</span>
                <div className="ms-Grid-col ms-xxl9"> 
                <p>Users grow accustomed to recognising an icon as meaning something. Altering the action
                  behind that icon is extremely confusing. </p>
                </div>
                <br />
                <div className={styles.howToUse + ' ms-Grid-col ms-sm12 '}>
                      <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg4' >
                        <span className="bce-design-system-subsectionTitleMedium">Do</span>
                        <p>Icon matches action label</p>
                        <p><IconButton iconProps={{ iconName: 'Share' }} title='Share'></IconButton> Share</p>
                      </div>
                      <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg4' >
                        <span className="bce-design-system-subsectionTitleMedium">Don't</span>
                        <p>Icon does not match action label</p>
                        <p><IconButton iconProps={{ iconName: 'Share' }} title='Share'></IconButton> Follow</p>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Fluent UI Icon Font</h3>
          <div className="ms-Grid">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-xxl9">
                <p>Microsoft Fluent UI icons are provided as a custom font. which contains glyphs that you can
                  scale, colour. and style to meet the needs of your website or applications. You can also
                  download and install the icon font to use it with various design apps like Sketch, Figma, or
                  Adobe </p>
                <div className="bce-design-system-box-sm">
                  <p>Microsoft Fluent UI icons and implementation <br/>
                  <a href="https://developer.microsoft.com/en-us/fluentui#/styles/web/icons">https://developer.microsoft.com/en-us/fluentui#/styles/web/icons</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

import * as React from 'react';
import styles from './DesignPatternMessageBar.module.scss';
import { IDesignPatternMessageBarProps } from './IDesignPatternMessageBarProps';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
const log = (text: string): (() => void) => (): void => console.log(text);
export default class DesignPatternMessageBar extends React.Component<IDesignPatternMessageBarProps, {}> {
  public render(): React.ReactElement<IDesignPatternMessageBarProps> {
    return (
      <div className={styles.designPatternMessageBar + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
          <p className="bce-design-system-p-l">A MessageBar is an area at the top of a primary view that displays relevant
          status information. You can use a MessageBar to tell the user about a situation
          that does not require their immediate attention and therefore does not need to
          block other activities. </p>
          <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsMessageBar" target="_blank" title="BCE Github - Button">
            BCE Github - MessageBar  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/messagebar" target="_blank" title="BCE Github - Button">
            UI Fabric - MessageBar  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
        </div>
      </div>
      <div className="ms-Grid-row bce-design-system-row">
        <div className="bce-design-system-box">
          <span className="bce-design-system-subsectionTitle2 bce-design-system-border-bottom">Basic variants</span>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm12 ms-lg8' >
                <span className="bce-design-system-subsectionTitle2 ">Default</span>
                <MessageBar messageBarType={MessageBarType.error} isMultiline={false}>
                  Error Using lots of files in this library?<br />
                  Sync the entire library.
                  </MessageBar>
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm12 ms-lg8' >
                <span className="bce-design-system-subsectionTitle2 ">Dismissable Variant</span>
                <MessageBar onDismiss={log('test')} dismissButtonAriaLabel="Close">
                  Using lots of files in this library?
                  </MessageBar>
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm12 ms-lg8' >
                <span className="bce-design-system-subsectionTitle2 ">Truncated</span>
                <MessageBar overflowButtonAriaLabel="See more" isMultiline={false} truncated={true} onDismiss={log('test')} dismissButtonAriaLabel="Close">
                  <span>Error Using lots of files in this library?  Blocked lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a lobortis tristique, odio augue pharetra
        metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper scelerisque. </span>
                </MessageBar>
              </div>
            </div>
          <br />
          <span className="bce-design-system-subsectionTitle2 bce-design-system-border-bottom">Status example</span>

            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm3 ms-lg2' >
                <span>Info</span>
              </div>
              <div className='ms-Grid-col ms-sm5 ms-lg6' >
                <MessageBar>
                  Using lots of files in this library?
                  </MessageBar>
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm3 ms-lg2' >
                <span>Warning</span>
              </div>
              <div className='ms-Grid-col ms-sm5 ms-lg6' >
                <MessageBar messageBarType={MessageBarType.warning}>
                  Using lots of files in this library?
                  </MessageBar>
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm3 ms-lg2' >
                <span>Error</span>
              </div>
              <div className='ms-Grid-col ms-sm5 ms-lg6' >
                <MessageBar messageBarType={MessageBarType.error}>
                  Using lots of files in this library?
                  </MessageBar>
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm3 ms-lg2' >
                <span>Blocked</span>
              </div>
              <div className='ms-Grid-col ms-sm5 ms-lg6' >
                <MessageBar messageBarType={MessageBarType.blocked}>
                  Using lots of files in this library?
                  </MessageBar>
              </div>
            </div>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm3 ms-lg2' >
                <span>Success</span>
              </div>
              <div className='ms-Grid-col ms-sm5 ms-lg6' >
                <MessageBar messageBarType={MessageBarType.success}>
                  Using lots of files in this library?
                  </MessageBar>
              </div>
            </div>
          </div>
      </div>
      <div className="ms-Grid-row bce-design-system-row">
        <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>

        <p>Place the message bar near the top of the relevant view, in a highly visible but unobtrusive location.  </p>
        <p>Keep the text very brief. Be succinct and your users are more likely to read everything you say.  </p>
        <p>Don't use buttons when a subtler link will suffce. </p>
      </div >
      </div >
    );
  }
}

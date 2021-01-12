import * as React from 'react';
import styles from './DesignPatternsLinks.module.scss';
import { IDesignPatternsLinksProps } from './IDesignPatternsLinksProps';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';

export default class DesignPatternsLinks extends React.Component<IDesignPatternsLinksProps, {}> {
  public render(): React.ReactElement<IDesignPatternsLinksProps> {
    const visitedLinkClass = `${styles.visited} bce-design-system-link-underline`;
    return (
      <div className={styles.designPatternsLinks + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">Links lead users to a different page or further information. It is the lightest weight
clickable control, and is often used to reduce the visual complexity of a design. </p>
            <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsLinks" target="_blank" title="BCE Github - Button">
              BCE Github - Links  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/link" target="_blank" title="BCE Github - Button">
              More at Fluent UI - Link  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <span className="bce-design-system-sectionTitle bce-design-system-border-bottom">Inline links</span>
            <p><Link className="bce-design-system-link-underline" href="/">This</Link> is a text link on a light background.</p>
            <p><Link className="bce-design-system-link-underline" href="/"><span className={styles.visited}>This</span></Link> is a visited link.</p>
            <p>This is a text link that goes to an <Link href="http://google.com">external website</Link></p>
            <div className="background-dark-navy">
              <p className="white"><Link className="blue bce-design-system-link-underline" href="/">This</Link> is a text link on a dark background.</p>
              <p className="white"><Link href="/"><span className={visitedLinkClass}>This</span></Link> is a visited link on a dark backrgound.</p>
            </div>
            <br /> <br />
            <span className="bce-design-system-sectionTitle bce-design-system-border-bottom">State Matrix</span>
            <div className='ms-Grid'>
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm4 ms-lg2' >
                  <span>Rest</span>
                </div>
                <div className='ms-Grid-col ms-sm8 ms-lg10' >
                  <Link className='blue' href="/">Link to document</Link>
                </div>
              </div><br />
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm4 ms-lg2' >
                  <span>Hover</span>
                </div>
                <div className='ms-Grid-col ms-sm8 ms-lg10 hover' >
                  <Link href="/">Link to document</Link>
                </div>
              </div><br />
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm4 ms-lg2' >
                  <span>Focus</span>
                </div>
                <div className='ms-Grid-col ms-sm8 ms-lg10 focus' >
                  <Link className='blue' href="/">Link to document</Link>
                </div>
              </div><br />
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm4 ms-lg2' >
                  <span>Pressed</span>
                </div>
                <div className='ms-Grid-col ms-sm8 ms-lg10 pressed' >
                  <Link href="/">Link to document</Link>
                </div>
              </div><br />
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm4 ms-lg2' >
                  <span>Disabled</span>
                </div>
                <div className='ms-Grid-col ms-sm8 ms-lg10' >
                  <Link className='' disabled href="/">Link to document</Link>
                </div>
              </div>
            </div><br />
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <div className='ms-Grid'>
            <div className='ms-Grid-row '>
              <div className='ms-Grid-col ms-sm12 ms-sm12 ms-md12 ms-lg3' >
                <b>List of links</b>
                <ul>
                  <li><Link href="/">Don't underline lists of links</Link></li>
                  <li><Link href="/">Don't underline lists of links</Link></li>
                  <li><Link href="/">Don't underline lists of links</Link></li>
                </ul>
              </div>
              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg3' >
                <b>Apps and buttons</b>
                <p>Avoid links in mobile apps. Apps should have buttons, not links.</p>
              </div>
              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg3' >
                <b>Reserve underlinks to links</b>
                <p>Don't <Link href="/">underline</Link> any text that's not a link</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

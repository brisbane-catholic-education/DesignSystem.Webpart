import * as React from 'react';
import styles from './FoundationsLayout.module.scss';
import { IFoundationsLayoutProps } from './IFoundationsLayoutProps';
import { Shimmer, ShimmerElementType } from 'office-ui-fabric-react/lib/Shimmer';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';

export default class FoundationsLayout extends React.Component<IFoundationsLayoutProps, {}> {
  private introduction(): React.ReactElement<IFoundationsLayoutProps> {
    return (
      <div className="ms-Grid-row bce-design-system-row">
        <div className="ms-Grid-col ms-xxl9">
          <p className="bce-design-system-p-l">We use a flexible grid with percentage-based columns, fixed margins
            and gutters. The columns are used to adjust the layout, making the
              best use of the space available. </p>
          <DefaultButton className="bce-design-system-buttom" href="" target="_blank" title="BCE Github - Button">
            Download the asset (Sketch File)  <IconButton iconProps={{ iconName: 'Download' }} title='Download'></IconButton></DefaultButton>
          <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/styles/web/layout" target="_blank" title="BCE Github - Button">
            UI Fabric - Layout  <IconButton iconProps={{ iconName: 'OpenInNewWindow' }} title='OpenInNewWindow'></IconButton></DefaultButton>
        </div>
      </div>
    )
  }

  private breakpointSmall(): React.ReactElement<IFoundationsLayoutProps> {
    return (
      <div className={"ms-Grid-row bce-design-system-row"}>
        <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Breakpoints</h3>

        <div className="ms-Grid-col ms-xxl9">
          <p>The grid uses the following common set of six breakpoints.  <br />
            Margin and gutter defaults align to Microsft Modern UI Commmunication design guidelines.  <br />
            However. margins and gutters can be adapted to meet product user experience requirements. </p>
        </div>
        <table className={styles.table}>
          <tr>
            <th><span className="m-plus Bold">Breakpoint</span></th>
            <th><span className="m-plus Bold">Range</span></th>
            <th><span className="m-plus Bold">Default Margins</span></th>
            <th><span className="m-plus Bold">Default Gutters</span></th>
          </tr>
          <tr>
            <th><span className="m Bold dark-navy">Small</span></th>
            <th><span className="m Normal">320px - 479px</span></th>
            <th><span className="m Normal">20</span></th>
            <th><span className="m Normal">Na/16</span></th>
          </tr>
          <tr>
            <th><span className="m Bold dark-navy">Medium</span></th>
            <th><span className="m Normal">320px - 479px</span></th>
            <th><span className="m Normal">32</span></th>
            <th><span className="m Normal">16</span></th>
          </tr>
          <tr>
            <th><span className="m Bold dark-navy">Large</span></th>
            <th><span className="m Normal">320px - 479px</span></th>
            <th><span className="m Normal">32</span></th>
            <th><span className="m Normal">24</span></th>
          </tr>
          <tr>
            <th><span className="m Bold dark-navy">Extra large</span></th>
            <th><span className="m Normal">640px - 1023px</span></th>
            <th><span className="m Normal">32</span></th>
            <th><span className="m Normal">32</span></th>
          </tr>
          <tr>
            <th><span className="m Bold dark-navy">Exta extra large</span></th>
            <th><span className="m Normal">1024px - 1365px</span></th>
            <th><span className="m Normal">32</span></th>
            <th><span className="m Normal">32</span></th>
          </tr>
          <tr>
            <th><span className="m Bold dark-navy">Extra extra extra large</span></th>
            <th><span className="m Normal">1920px and up</span></th>
            <th><span className="m Normal">32</span></th>
            <th><span className="m Normal">32</span></th>
          </tr>
        </table>
      </div>
    )
  }

  private responsiveGrid(): React.ReactElement<IFoundationsLayoutProps> {
    return (
      <div className="ms-Grid-row bce-design-system-row">
        <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Responsive Grid</h3>
        <div className="ms-Grid-col ms-xxl6">
          <p>UI Fabric comes with a mobile-first. 12-column, responsive grid that you can
          use to create flexible layouts for a variety of screen sizes and device types </p>
        </div>
        <div className={styles.layoutGrid + " ms-Grid-col ms-sm12"} aria-label="Example fabric grid where every row has a different number of columns.">
          <div className="ms-Grid-row bce-design-system-row" aria-label="Example of 12 equal columns using the grid">
            <div className="ms-Grid-col ms-sm1 ">
              <div >1</div></div>
            <div className="ms-Grid-col ms-sm1 "><div >1</div></div>
            <div className="ms-Grid-col ms-sm1 "><div >1</div></div>
            <div className="ms-Grid-col ms-sm1 "><div >1</div></div>
            <div className="ms-Grid-col ms-sm1 "><div >1</div></div>
            <div className="ms-Grid-col ms-sm1 "><div >1</div></div>
            <div className="ms-Grid-col ms-sm1 "><div >1</div></div>
            <div className="ms-Grid-col ms-sm1 "><div >1</div></div>
            <div className="ms-Grid-col ms-sm1 "><div >1</div></div>
            <div className="ms-Grid-col ms-sm1 "><div >1</div></div>
            <div className="ms-Grid-col ms-sm1 "><div >1</div></div>
            <div className="ms-Grid-col ms-sm1 "><div >1</div></div>
          </div><div className="ms-Grid-row bce-design-system-row" aria-label="Example of 6 equal columns using the grid">
            <div className="ms-Grid-col ms-sm2 "><div >2</div></div>
            <div className="ms-Grid-col ms-sm2 "><div >2</div></div>
            <div className="ms-Grid-col ms-sm2 "><div >2</div></div>
            <div className="ms-Grid-col ms-sm2 "><div >2</div></div>
            <div className="ms-Grid-col ms-sm2 "><div >2</div></div>
            <div className="ms-Grid-col ms-sm2 "><div >2</div></div>
          </div><div className="ms-Grid-row bce-design-system-row" aria-label="Example of 4 equal columns using the grid">
            <div className="ms-Grid-col ms-sm3 "><div >3</div></div>
            <div className="ms-Grid-col ms-sm3 "><div >3</div></div>
            <div className="ms-Grid-col ms-sm3 "><div >3</div></div>
            <div className="ms-Grid-col ms-sm3 "><div >3</div></div>
          </div><div className="ms-Grid-row bce-design-system-row" aria-label="Example of 3 equal columns using the grid">
            <div className="ms-Grid-col ms-sm4 "><div >4</div></div>
            <div className="ms-Grid-col ms-sm4 "><div >4</div></div>
            <div className="ms-Grid-col ms-sm4 "><div >4</div></div>
          </div><div className="ms-Grid-row bce-design-system-row" aria-label="Example of 2 equal columns using the grid">
            <div className="ms-Grid-col ms-sm6 "><div >6</div></div>
            <div className="ms-Grid-col ms-sm6 "><div >6</div></div>
          </div><div className="ms-Grid-row bce-design-system-row" aria-label="Example of 1 equal column using the grid">
            <div className="ms-Grid-col ms-sm12 "><div >12</div></div></div></div>
      </div>
    )
  }

  private layout(): React.ReactElement<IFoundationsLayoutProps> {
    return (<div className="ms-Grid-row bce-design-system-row">
      <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Layout and spacing</h3>
      <span className="bce-design-system-subsectionTitle">Creating layout</span>
      <div className="ms-Grid-col ms-xxl6">
        <p>A number of columns can be used to suit content and create interesting
        layouts at different widths. Most pages follow a common layout structure that
          can support both navigation and content types.  </p>
        <p>Layout structure begins with selecting the desired primary navigation model.
        This is the starting point of the user experience. and it's very important to select
        the correct model that supports users to find and interact with the content and
          features they're interested in. </p><br />
      </div>

      <div className="bce-design-system-box">
        <span className="bce-design-system-subsectionTitle2 bce-design-system-border-bottom">Top Navigation</span>
        <div className='ms-Grid-row  bce-design-system-row'>
          <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg8' >
            <p>Top navigation (also called. horizontal navigation') is the default navigational
          design pattern for responsive websites and intranets. Avoid site-wide
          navigation in the content area as this is reserved for content specific interaction
        design patterns. such as wizards, galleries, and dashboards </p>

            <div className={styles.topNav}>
              <div className={styles.header}>Global header where required</div>
              <div className={styles.body}><br />
                <strong>App</strong><br />
                <div className={styles.links}>
                  <span>Link 1</span>
                  <span>Link 2</span>
                  <span>Link 3</span>
                  <span>Link 4</span>
                </div>
                <div className={styles.content}>
                  <span>Content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />

        <span className="bce-design-system-subsectionTitle2 bce-design-system-border-bottom">Left Navigation</span>
        <div className='ms-Grid-row  bce-design-system-row'>
          <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg8' >
            <p>Left navigation (also called •vertical navigation'). works well for stand-alone
              task-orientated applications and websites that have end user benefit. This type
              of navigation works best when working with a limited range of content models
                and strict organisational schemes. such as an A-Z people directory. </p>

            <div className={styles.topNav}>
              <div className={styles.header}>Global header where required</div>
              <div className={styles.body}>
                <div className={styles.left}><br />
                  <strong>App</strong><br />
                  <div>
                    <Shimmer
                      shimmerElements={[
                        { type: ShimmerElementType.line, height: 16, width: '16px' },
                        { type: ShimmerElementType.gap, width: '5%', },
                        { type: ShimmerElementType.line, height: 16 },
                      ]}
                    />
                    <Shimmer
                      shimmerElements={[
                        { type: ShimmerElementType.line, height: 16, width: '16px' },
                        { type: ShimmerElementType.gap, width: '5%', },
                        { type: ShimmerElementType.line, height: 16 },
                      ]}
                    />
                    <Shimmer
                      shimmerElements={[
                        { type: ShimmerElementType.line, height: 16, width: '16px' },
                        { type: ShimmerElementType.gap, width: '5%', },
                        { type: ShimmerElementType.line, height: 16 },
                      ]}
                    />
                    <Shimmer
                      shimmerElements={[
                        { type: ShimmerElementType.line, height: 16, width: '16px' },
                        { type: ShimmerElementType.gap, width: '5%', },
                        { type: ShimmerElementType.line, height: 16 },
                      ]}
                    />
                    <Shimmer
                      shimmerElements={[
                        { type: ShimmerElementType.line, height: 16, width: '16px' },
                        { type: ShimmerElementType.gap, width: '5%', },
                        { type: ShimmerElementType.line, height: 16 },
                      ]}
                    />
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.content}>
                    <span>Content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="ms-Grid-row">
        <span className="bce-design-system-subsectionTitle">Baseline grid</span>
        <div className="ms-Grid-col ms-xxl6">
          <p>Use an 8px baseline grid to help with the vertical alignment of page
          components. Strict adherence to the baseline isn't necessary for all typography
          but it does help to create vertical rhythm on the page. </p>
        </div>

        <div className="bce-design-system-box ms-Grid-row">
          <span className="bce-design-system-subsectionTitle2 bce-design-system-border-bottom">8px baseline grid</span>
          <div className="ms-Grid-col ms-xxl9">
            <img src={require('../../../assets/8pxbasedline.png')} alt="test" />
          </div>

        </div>
      </div>
    </div>)
  }

  private considerations(): React.ReactElement<IFoundationsLayoutProps> {
    return (
      <div className="ms-Grid-row bce-design-system-row">
        <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Considerations</h3>
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-xxl6">
              <p>Defining navigational systems on small devices is a challenge when it comes to
              responive design. Having clearly defined user experience and content
            strategies will assist in selecting an appropriate layout and navigational model.</p>
              <p>Design for the smallest sizes and lowest capabilities first Then optimise for
              different screen sizes. Don't make assumptions about the devices that are
            being used. </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  public render(): React.ReactElement<IFoundationsLayoutProps> {
    return (
      <div className={styles.foundationsLayout + ' ms-Grid'} >
        {this.introduction()}
        {this.breakpointSmall()}
        {this.responsiveGrid()}
        {this.layout()}
        {this.considerations()}
      </div>
    );
  }
}

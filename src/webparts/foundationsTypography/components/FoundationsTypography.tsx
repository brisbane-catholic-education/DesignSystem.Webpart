import * as React from 'react';
import styles from './FoundationsTypography.module.scss';
import { IFoundationsTypographyProps } from './IFoundationsTypographyProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class FoundationsTypography extends React.Component<IFoundationsTypographyProps, {}> {
  public render(): React.ReactElement<IFoundationsTypographyProps> {
    return (
      <div className={styles.foundationsTypography + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-xxl9">
              <p className="bce-design-system-p-l">The Brisbane Catholic Education's websites and applications have common
                typographic needs: clear and consistent headings, highly legible body
            paragraphs, clear labels, and easy-to-use input fields. </p>
              <p className="bce-design-system-p-l">The primary font used is Raleway, which is a web ready typeface and is used on
              digital applications. Where Raleway is not available, such as in our Microsoft
            Word and PowerPoint templates, we use a standard typeface - Tahoma. </p>
            </div>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Typefaces</h3>
          <div className='ms-Grid-row bce-design-system-row'>
            <div className='ms-Grid-col ms-sm12 ms-lg6' >
              <span className="Bold su dark-navy">Raleway</span>
            </div>
          </div>
          <div className='ms-Grid-row bce-design-system-row'>
            <div className={styles.leftCol + ' ms-Grid-col ms-sm12 ms-lg6'}>
              <span>Brisbane Catholic Education's corporate typeface is Raleway.  </span><br />
              <span>Raleway is used in all material designed for internal and extemal use.  </span><br />
              <span>Raleway was chosen for its unique character. blending professionalism with joy.  </span><br />
              <span>Raleway Extra Bold and Regular are the main styles used with the introduction
                of italics when needed. </span><br />
            </div>
            <div className='ms-Grid-col ms-sm12 ms-lg6' >
              <div className="bce-design-system-box-sm">
                <span>Please download the Raleway fornt family here: </span>
                <br />
                <a href="https://fonts.google.com/specimen/Raleway">https://fonts.google.com/specimen/Raleway</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.weight + " ms-Grid-row bce-design-system-row"}>
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Weight and characters</h3>
          <div className='ms-Grid-row'>
            <div className='ms-Grid-col ms-sm12 ms-xl6' >
              <p>Deciding on when to use which weight is entirely dependent on what best suits
                your application and audience. Various options can be mixed and matched to
                  help create hierarchy and emphasis on text. </p>
              <p>Please ensure ligatures are turned off. </p>
            </div>
          </div>
          <div className='ms-Grid-row bce-design-system-row'>
            <div className='ms-Grid-col ms-sm12 ms-xxl6' >
              <div className="bce-design-system-box-sm">
                <div className='ms-Grid-row'>
                  <div className='ms-Grid-col ms-sm8' >
                    <p>Recommended<br /> weights</p>
                    <span className="Extrabold xl-plus dark-navy">Raleway Extra Bold</span><br />
                    <span className="Bold xl-plus dark-navy">Raleway Bold</span><br />
                    <span className="Medium xl-plus dark-navy">Raleway Medium</span><br />
                    <span className="Regular xl-plus dark-navy">Raleway Regular</span><br />
                    <span className="Regular Italic xl-plus dark-navy">Raleway Italic</span>
                  </div>
                  <div className='ms-Grid-col ms-sm4' >
                    <p className="">Class<br /><br /></p>
                    <span className="Bold xl-plus dark-navy"><span className="m-plus">Extrabold</span></span><br />
                    <span className="Bold xl-plus dark-navy"><span className="m-plus">Bold</span></span><br />
                    <span className="Bold xl-plus dark-navy"><span className="m-plus">Medium</span></span><br />
                    <span className="Bold xl-plus dark-navy"><span className="m-plus">Regular</span></span><br />
                    <span className="Bold xl-plus dark-navy"><span className="m-plus">Italic</span></span>
                  </div>
                </div>
                <div className='ms-Grid-row bce-design-system-row'>
                  <div className='ms-Grid-col' >
                    <p>Use a size class to set the text size independent of the weight</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='ms-Grid-col ms-sm12 ms-xxl6' >
              <div className="bce-design-system-box-sm">
                <p>Recommended Characters</p>
                <span className="Bold xl-plus dark-navy">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span><br />
                <span className="Bold xl-plus dark-navy">abcdefghijklmnopqrstuvwxyz</span><br />
                <span className="Bold xl-plus dark-navy">123456789()!@#$%^&*</span><br />
                <br /><br />
                <span className="Regular xl-plus dark-navy">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span><br />
                <span className="Regular xl-plus dark-navy">abcdefghijklmnopqrstuvwxyz</span><br />
                <span className="Regular xl-plus dark-navy">123456789()!@#$%^&*</span>
                <br /><br />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.weight + " ms-Grid-row bce-design-system-row"}>
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Type sizes</h3>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-xxl7">
              <span>Digital type sizes have been developed to be suitable for average screen densities and reading comfort
            under typical conditions. </span><br />
              <span>To promote visual design synergy across Brisbane Catholic Education's application ecosystem. class
            naming conventions and type sizes correlate to the MS Offce 131 Fabric. </span><br />
              <span>The following 2 type size classes have been added for greater range and flexibility: </span><br />
              <ul>
                <li>su-plus 54px </li>
                <li>A-plus 34px </li>
              </ul>
              <span>Line height is measured by taking the font size and adding 8px. </span><br /><br /><br />
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">Class</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">Size</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="m-plus Bold dark-navy">Example</span>
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">su-plus</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">54px</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="su-plus">The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">su</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">42px</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="su">The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">xxl-plus</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">34px</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="xxl-plus">The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">xxl</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">28px</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="xxl">The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">xl-plus</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">24px</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="xl-plus">The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">xl</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">20px</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="xl">The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">l</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">18px</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="l">The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">m-plus</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">16px</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="m-plus">The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">m</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">14px</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="m">The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">s-plus</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">13px</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="s-plus">The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">s</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">12px</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="s">The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">xs</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">1px</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="xs">The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className='ms-Grid-row  bce-design-system-border-bottom'>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">mi</span>
            </div>
            <div className='ms-Grid-col ms-sm2 ms-lg2' >
              <span className="m-plus Bold dark-navy">10px</span>
            </div>
            <div className='ms-Grid-col ms-sm8 ms-lg8' >
              <span className="mi">The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

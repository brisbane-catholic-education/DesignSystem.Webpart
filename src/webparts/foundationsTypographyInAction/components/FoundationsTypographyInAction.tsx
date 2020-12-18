import * as React from 'react';
import styles from './FoundationsTypographyInAction.module.scss';
import { IFoundationsTypographyInActionProps } from './IFoundationsTypographyInActionProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class FoundationsTypographyInAction extends React.Component<IFoundationsTypographyInActionProps, {}> {
  public render(): React.ReactElement<IFoundationsTypographyInActionProps> {
    return (
      <div className={styles.foundationsTypographyInAction + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">The typographic scale caters for a wide range of possible use cases across
              diverse websites and applications. Building on these typographic foundations,
            treatment of type is entirely dependent on what best suits the product and audience. </p>
            <p className="bce-design-system-p-l">We have provided some baseline styles as a starting guide. </p>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Typesetting</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p>Readable text allows users to effciently read and take in textual information. Text that is not
              readable is challenging to focus on and turns readers of
            The following guidelines promote good readability. </p>
          </div>

          <div className="bce-design-system-box">
            <span className="bce-design-system-subsectionTitleMedium  bce-design-system-border-bottom">Aligment</span>
            <div className={styles.borderLeft}>
              <span className="bce-design-system-p-strong-black">Heading 5</span><br />
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt</span><br/>
              <span>ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation</span><br/>
              <span>ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </span><br/>
            </div>
            <br /><br />
            <span className="bce-design-system-subsectionTitleMedium  bce-design-system-border-bottom">Line length</span>
            <span className="bce-design-system-p-strong-black">Heading 5 </span><br />
            <span>Lorem ipsum dolor sit amet. consectetur adipisicing elit sed do eiusmod tempor incididunt </span><br/>
            <span>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </span><br/>
            <span className={styles.borderBottom}>ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </span><br/><br/><br/>
            <span>The most useful way to measure line length is by averaging characters per</span><br/>
            <span>line. Aim for an average line length of 45-90 characters, including spaces,</span><br/>
            <span>and evaluate for mobile and desktop experiences. </span><br/>
            <br /><br />
            <span className="bce-design-system-subsectionTitleMedium  bce-design-system-border-bottom">Spacing</span>
            <span className="bce-design-system-pageHeading">Page heading</span>
            <p className="bce-design-system-p-l">Lead paragraph dolor sit amet consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, </p><br />
            <span className="bce-design-system-sectionHeading">Section heading</span>
            <span className="bce-design-system-sectionTitle">Section of the page</span>
            <p>paragraph lorem ipsum dolor sit at-net. consectetur adipisicing elit, sed do
            eiusmod tempor ncididunt ut Labore et dolore magna aliqua ut enim ad minim
            veniam. quis </p>
            <span className="bce-design-system-subsectionTitle">Subsection of the page</span>
            <p>paragraph lorem ipsum dolor sit at-net. consectetur adipisicing elit, sed do
            eiusmod tempor ncididunt ut Labore et dolore magna aliqua ut enim ad minim
            veniam. quis </p>
            <span className="bce-design-system-subsectionTitleMedium">Subsection of the page</span>
            <p>paragraph lorem ipsum dolor sit at-net. consectetur adipisicing elit, sed do
            eiusmod tempor ncididunt ut Labore et dolore magna aliqua ut enim ad minim
            veniam. quis </p>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle  bce-design-system-border-bottom">Links</h3>
          <p>Links lead users to a different page or to further hformation. It is a clickable control with the
        lightest weight. and is often used to reduce the visual complexity of a design </p>
          <div className="bce-design-system-box">
            <div className={styles.right}>
              <p className="m-plus">See more</p>
              <a href="/SitePages/Links.aspx">Patterns and components - Links</a>
            </div>
            <div className={styles.left}>
              <p><a href='#'>This</a> is a text link on a light background</p>
              <p><a href='#' className={styles.visited}>This</a> is a visited link.</p>
              <p>This is a link that goes to an <a>external website</a></p>
              <br />
              <div className={styles.darkBackground}>
                <p><a href='#'>This</a> is a text link on a dark background</p>
                <p><a href='#' className={styles.visited}>This</a> is a visited link on a dark background</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle  bce-design-system-border-bottom">List</h3>
          <p>Lists organise written information for users </p>
          <p>Lists are indented by 8px with an additional 8px between the bullet and content </p>
          <div className="bce-design-system-box">
            <div className='ms-Grid'>
              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg6' >
                  <span className="bce-design-system-subsectionTitleMedium  bce-design-system-border-bottom">Unordered list item</span>
                  <ul>
                    <li>Unordered list item</li>
                    <li>Unordered list item</li>
                    <li>Unordered list item</li>
                  </ul>
                  <p>or</p>
                  <ul>
                    <li>Unordered list item</li>
                    <li>Unordered list item</li>
                    <li>Unordered list item</li>
                  </ul>
                </div>
                <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg6' >
                  <span className="bce-design-system-subsectionTitleMedium  bce-design-system-border-bottom">Ordered list item</span>
                  <ol>
                    <li>Unordered list item</li>
                    <li>Unordered list item</li>
                    <li>Unordered list item</li>
                  </ol>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Blockquote</h3>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-xxl9">
              <p>The blockquote element is used to indicate the quotation of a large section of text. This is generally taken
                from another source. Blockquotes are preceded by a single paragraph break, left margin indented by 32px
          on desktop. Text emphasis such as bold, italic and colour are optional </p>
            </div>
          </div>
          <div className="bce-design-system-box">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-xxl9">
                <p className="bce-design-system-subsectionTitleMedium">Subsection of the page</p>
                <p>Paragraph lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam. quis. </p>
                <blockquote className="bce-design-system-blockquote-regular">
                  <p className="bce-design-system-p-l">Paragraph lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do
                  sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. ut enim ad minim veniam, quis </p>
                </blockquote>
                <p>Paragraph lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam. qułs. </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Tables</h3>
          <p>Tables show tabular data in columns and rows</p>
          <div className={styles.table + " bce-design-system-box"}>
            <span className="mi dark-navy bce-design-system-border-bottom">BORDERED TABLE</span>
            <table className="bce-design-system-table">
              <tr>
                <th className="bce-design-system-p-strong-black">ISBN</th>
                <th className="bce-design-system-p-strong-black">Book title</th>
                <th className="bce-design-system-p-strong-black">Author</th>
              </tr>
              <tr>
                <th>978-0-14-330615-3</th>
                <th>Hairy Maclary from donaldson's dairy</th>
                <th>Dodd, Lynlet</th>
              </tr>
              <tr>
                <th>034553014X</th>
                <th>The Princess Bride: S. Morgenstern's Classic Tale of True Love and High Adventure </th>
                <th>William Goldman</th>
              </tr>
              <tr>
                <th>9780670070367</th>
                <th>Dougal and Bumble and the Long Walk Home</th>
                <th>Btley, Wendy</th>
              </tr>
              <tr>
                <th>9780142410370</th>
                <th>Matilda</th>
                <th>Dahl, Roald</th>
              </tr>
            </table>
            <br /><br />
            <span className="mi dark-navy bce-design-system-border-bottom">BORDERLESS TABLE</span>
            <table className="bce-design-system-table-borderless">
              <tr>
                <th className="bce-design-system-p-strong-black">ISBN</th>
                <th className="bce-design-system-p-strong-black">Book title</th>
                <th className="bce-design-system-p-strong-black">Author</th>
              </tr>
              <tr>
                <th>978-0-14-330615-3</th>
                <th>Hairy Maclary from donaldson's dairy</th>
                <th>Dodd, Lynlet</th>
              </tr>
              <tr>
                <th>034553014X</th>
                <th>The Princess Bride: S. Morgenstern's Classic Tale of True Love and High Adventure </th>
                <th>William Goldman</th>
              </tr>
              <tr>
                <th>9780670070367</th>
                <th>Dougal and Bumble and the Long Walk Home</th>
                <th>Btley, Wendy</th>
              </tr>
            </table>
          </div>
        </div>
      </div >
    );
  }
}

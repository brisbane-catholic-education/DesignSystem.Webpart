import * as React from "react";
import styles from "./FoundationsColours.module.scss";
import { IFoundationsColoursProps } from "./IFoundationsColoursProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class FoundationsColours extends React.Component<
  IFoundationsColoursProps,
  {}
> {
  public render(): React.ReactElement<IFoundationsColoursProps> {
    return (
      <div className={styles.foundationsColours + " ms-Grid"} dir="ltr">
        {this.introduction()}
        {this.primaryColourPalette()}
        {this.systemColourPalette()}
        {this.colorHeirarchy()}
        {this.textAccessibility()}
      </div>
    );
  }

  private introduction(): React.ReactElement<IFoundationsColoursProps> {
    return (
      <div className="ms-Grid-row bce-design-system-row">
        <div className="ms-Grid-col ms-xxl9">
          <p className="bce-design-system-p-l">
            The primary colour palette used by Brisbane Catholic Education is
            based on liturgical colours. The hierarchy of the colour palette is
            very important. White, Black, Dark Navy, Light Blue, Purple, Orange,
            Red, Rose, Green and Gold are our primary brand colours (paired with
            plenty of white space).
          </p>
        </div>
      </div>
    );
  }

  private primaryColourPalette(): React.ReactElement<IFoundationsColoursProps> {
    return (
      <div className="ms-Grid-row bce-design-system-row">
        <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">
          Brand colour palette
        </h3>
        <div className="primaryColourPalette">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-dark-navy bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Dark Navy</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              dark-navy #054166
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-extra-dark-navy bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">
                Extra Dark Navy
              </p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              extra-dark-navy #02273C
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3 ">
              <div className="background-light-blue bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Light Blue</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              light-blue #4fc6e0
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3 ">
              <div className="background-green bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Green</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              green #00ae4d
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-purple  bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Purple</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              purple #8857a4
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-orange bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Orange</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              orange #fb770b
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-red bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Red</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              red #ef404a
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-rose bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Rose</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              rose #ffb4e5
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-gold bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Gold</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              gold #ffcb05
            </div>
          </div>
        </div>

        <div className="primaryColourPalette">
          <h4>Tints</h4>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-tint-light-blue bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">
                Tint - Light Blue
              </p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              tint-light-blue #D6ECF0
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-tint-green bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Tint - Green</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              tint-green #DFF6DD
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-tint-extra-light-blue bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">
                Tint - Extra Light Blue
              </p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              tint-extra-light-blue #F8F9FB
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-tint-gold bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Tint - Gold</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              tint-gold #FFF7DA
            </div>
            57a4
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
            <div className="background-tint-orange bce-design-system-border"></div>
            <p className="bce-design-system-p-strong-black">Tint - Orange</p>
            <span className="bce-design-system-p-strong-black">Class: </span>
            tint-orange #FED9CC
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
            <div className="background-tint-red bce-design-system-border"></div>
            <p className="bce-design-system-p-strong-black">Tint - Red</p>
            <span className="bce-design-system-p-strong-black">Class: </span>
            tint-red #FDE7E9
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
            <div className="background-tint-rose bce-design-system-border"></div>
            <p className="bce-design-system-p-strong-black">Tint - Rose</p>
            <span className="bce-design-system-p-strong-black">Class: </span>
            tint-rose #FFE4F6
          </div>
        </div>
      </div>
    );
  }

  private systemColourPalette(): React.ReactElement<IFoundationsColoursProps> {
    return (
      <div className="ms-Grid-row bce-design-system-row">
        <div className="primaryColourPalette">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">
            System colour for backgrounds and outlines
          </h3>
          <h4>Primary links and CTAs</h4>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-link-blue bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Link Blue</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              link-blue #0979BE
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-hover-blue bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Hover Blue</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              hover-blue #1072AE
            </div>
          </div>
          <h4>User interface palette</h4>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-white bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">White</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              white #ffffff
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-grey-1 bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Grey 1</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              grey-1 #F4F4F4
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-grey-2 bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Grey 2</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              grey-2 #EAEAEA
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-grey-3 bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Grey 3</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              grey-3 #D0D0D0
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-grey-4 bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Grey 4</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              grey-4 #A6A6A6
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-grey-5 bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Grey 5</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              grey-5 #666666
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-grey-6 bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Grey 6</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              grey-6 #33333
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-black bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Black</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              black #000000
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg3">
              <div className="background-alert-red bce-design-system-border"></div>
              <p className="bce-design-system-p-strong-black">Alert Red</p>
              <span className="bce-design-system-p-strong-black">Class: </span>
              alert-red #A80000
            </div>
          </div>
        </div>
      </div>
    );
  }

  private colorHeirarchy(): React.ReactElement<IFoundationsColoursProps> {
    return (
      <div className="ms-Grid-row bce-design-system-row">
        <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Colour heirarchy guide</h3>
        <div className='colorHeirarchy bce-design-system-border'>
          <div className="background-white">
            <span>White space 50%</span>
          </div>
          <div className="background-dark-navy"></div>
          <div className="background-black"></div>
          <div className="background-white"></div>
          <div className="background-light-blue"></div>
          <div className="background-purple"></div>
          <div className="background-orange"></div>
          <div className="background-red"></div>
          <div className="background-rose"></div>
          <div className='background-green'></div>
          <div className="background-gold"></div>
        </div>
      </div>
    );
  }

  private textAccessibility(): React.ReactElement<IFoundationsColoursProps> {
    return (
      <div className="ms-Grid-row bce-design-system-row">
        <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">
          Text accessibility
        </h3>
        <div className="ms-Grid-col ms-xxl9">
          <p className="">
            Web Content Accessibility Guidelines (WCAG) ensures that content is
            accessible by everyone, regardless of disability or user device. To
            meet these standards, text and interactive elements should have a
            colour contrast ratio of at least 4.5:1. This ensures that viewers
            who cannot see the full colour spectrum are able to read the text.
          </p>
          <p className="">
            The options below offer colour palette combinations that fall within
            the range of Section 508 compliant foreground/background color
            contrast ratios. If you choose to customize beyond the palette, the <a href="https://webaim.org/resources/contrastchecker"> WebAIM colour contrast tool 
            </a> is a useful resource for testing the compliance of any colour combination.
          </p>
        </div>
        <p className="bce-design-system-subsectionTitleMedium">
          Example combinations
        </p>
        <div className="exampleCombinations">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
              <span className="background-white bce-design-system-border dark-navy">
                Dark Navy on white
              </span>
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
              <span className="background-dark-navy bce-design-system-border white ">
                White on Dark Navy
              </span>
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className=" ms-Grid-col ms-sm12 ms-md6 ms-lg6">
              <span className="background-white purple bce-design-system-border">
                Purple on white
              </span>
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
              <span className="background-purple white bce-design-system-border ">
                White on Purple
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

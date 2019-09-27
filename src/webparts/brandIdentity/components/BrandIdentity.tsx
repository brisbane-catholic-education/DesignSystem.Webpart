import * as React from 'react';
import styles from './BrandIdentity.module.scss';
import { IBrandIdentityProps } from './IBrandIdentityProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

export default class BrandIdentity extends React.Component<IBrandIdentityProps, {}> {

  public render(): React.ReactElement<IBrandIdentityProps> {
    const red = { color: '#ef404a' };

    return (
      <div className={styles.brandIdentity + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">Your project is part of a broader Brisbane Catholic Education
              experience. Our brand idenity is applied to all design applications, such
              as, letterhead, documents, print and broadcast media among many
              other possible applications. </p>
            <p className="bce-design-system-p-l">Interpretation, creativity and common sense are vital in creating an
              enduring brand identity that engages and communicates. </p>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Core elements</h3>
          <p>See foundations section for digital design applications</p>

          <div className={styles.core}>

            <div className='ms-Grid-col ms-sm12 ms-md12  ms-lg6 ms-xl4' >
              <span className="bce-design-system-subsectionTitle2">Logos</span>
              <img src={require('../../../assets/identity1.png')} alt="test" />
            </div>
            <div className='ms-Grid-col ms-sm12 ms-md12  ms-lg6 ms-xl4' >
              <span className="bce-design-system-subsectionTitle2">Colours</span>
              <img src={require('../../../assets/identity2.png')} alt="test" />
            </div>
            <div className='ms-Grid-col ms-sm12 ms-md12  ms-lg6 ms-xl4' >
              <span className="bce-design-system-subsectionTitle2">Typography</span>
              <div>
                <p className="Extrabold dark-navy ">Raleway Extra Bold</p>
                <p className="Bold dark-navy ">Raleway Bold</p>
                <p className="Medium dark-navy ">Raleway Medium</p>
                <p className="Regular dark-navy ">Raleway Regular </p>
                <p className="Italic Regular dark-navy ">Raleway Italic</p>
              </div>
            </div>
            <div className='ms-Grid-col ms-sm12 ms-md12  ms-lg6 ms-xl4'  >
              <span className="bce-design-system-subsectionTitle2">Photography</span>
              <img src={require('../../../assets/identity3.png')} alt="test" />
            </div>
            <div className='ms-Grid-col ms-sm12 ms-md12  ms-lg6 ms-xl4' >
              <span className="bce-design-system-subsectionTitle2">Graphic Devices</span>
              <img src={require('../../../assets/identity4.png')} alt="test" />
              <strong className={styles.device} style={red}>* Not to be used in any digital products, services or tools.</strong>
              <p className={styles.device}>To be used (sparingly) only by the communications and marketing team, in print documents or marketing initiatives.</p>
            </div>
            <div className='ms-Grid-col ms-sm12 ms-md12  ms-lg6 ms-xl4' >
              <span className="bce-design-system-subsectionTitle2">Language</span>
              <div>
                <p className="Extrabold dark-navy ">Empowering</p>
                <p className="Extrabold dark-navy ">Positive</p>
                <p className="Extrabold dark-navy ">Include</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Brand guidelines</h3>
          <div className={styles.guidelines}>
            <div className="ms-Grid-col ms-xxl9">
              <div className='ms-Grid-col ms-sm12 ms-lg4' >
                <img src={require('../../../assets/identity5.png')} alt="test" />

              </div>
              <div className='ms-Grid-col ms-sm12 ms-lg8' >
                <p>To learn more about Brisbane Catholic Education's visual identity, please download our brand guidelines</p>
                <PrimaryButton href="https://sketch.cloud/s/zbLK4">Download brand guidelines</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

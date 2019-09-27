import * as React from 'react';
import styles from './FoundationsPhotography.module.scss';
import { IFoundationsPhotographyProps } from './IFoundationsPhotographyProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class FoundationsPhotography extends React.Component<IFoundationsPhotographyProps, {}> {
  public render(): React.ReactElement<IFoundationsPhotographyProps> {
    return (
      <div className={styles.foundationsPhotography + ' ms-Grid'} >
        {this.introduction()}
        {this.photographicStyleAndContent()}

      </div>
    );
  }

  private introduction(): React.ReactElement<IFoundationsPhotographyProps> {
    return (
      <div className="ms-Grid-row bce-design-system-row">
        <div className="ms-Grid-col ms-xxl9">
          <p className="bce-design-system-p-l">The brand idea of "Aspiring Community" comes to life through the way people
            and places are photographed, and how this imagery is used.
          </p>
        </div>
      </div>
    );
  }

  private photographicStyleAndContent(): React.ReactElement<IFoundationsPhotographyProps> {
    return (
      <div className="ms-Grid-row bce-design-system-row">
        <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Photographic style and content</h3>
        <div className='ms-Grid-row'>
          <div className="ms-Grid-col ms-xxl9">
            <p>Whether selecting stock photography or commissioning specific shoots, consider people
              from diverse cultural backgrounds to reflect our diverse community.
          </p>
            <p>Avoid clichéd, posed situations as much as possible. Imagery must feel real and aspirational.</p>
          </div>
        </div>
        <div className='ms-Grid-row bce-design-system-row'>
          <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg3' >
            <img src={require('../../../assets/photography11.png')} alt="test" />
          </div>
          <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg3 ' >
            <img src={require('../../../assets/photography12.png')} alt="test" />
          </div>
          <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg3 ' >
            <img src={require('../../../assets/photography13.png')} alt="test" />
          </div>
          <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg3 ' >
            <img src={require('../../../assets/photography14.png')} alt="test" />
          </div>
        </div>
      </div>
    );
  }

  private photographyAndGraphicDevice(): React.ReactElement<IFoundationsPhotographyProps> {
    return (
      <div className="ms-Grid-row bce-design-system-row">
        <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Photography and graphic device</h3>
        <p className="bce-design-system-p-l">Whether selecting stock photography or commissioning specific shoots, consider people
          from diverse cultural backgrounds to reflect our diverse community. Avoid clichéd, posed situations as much as
          possible. Imagery must feel real and aspirational.
          </p>

        <div className='bce-design-system-box'>
          <p className="bce-design-system-subsectionTitle bce-design-system-border-bottom">Masked / contained treatments</p>
          <div className='ms-Grid-row bce-design-system-row ms-Grid'>
            <div className='ms-Grid-col ms-sm12 ms-lg8 ' >
              <div className='ms-Grid-row'>
                <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg6' >
                  <img src='../PublishingImages/photography21.png' ></img>
                </div>
                <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg6 alignRight' >
                  <img src='../PublishingImages/photography22.png' ></img>
                </div>
              </div>
              <div className='ms-Grid-row'>
                <div className='ms-Grid-col ms-sm12 ms-lg12 ' >
                  <p>
                    Suitable for large layout elements, such as headers, banners and large
                    canvases (e.g. Log in screens and interstitials). Place photography inside
                    graphic devices unless being used within a full bleed page over a white or
                    coloured background.
                                  </p>
                  <p>
                    Scale and white-space are important - do not make the images too large or crowded.
                                  </p>
                </div>
              </div>
            </div>
            <div className='ms-Grid-col ms-sm12 ms-lg4 alignRight' >
              <img src='../PublishingImages/photography23.png' ></img>
            </div>
          </div>

          <p className="bce-design-system-subsectionTitle bce-design-system-border-bottom">Deep etched treatments</p>
          <div className='ms-Grid-row bce-design-system-row ms-Grid'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg4 ' >
                <img src='../PublishingImages/photography31.png' ></img>
              </div>
              <div className='ms-Grid-col ms-sm12 ms-md6 ms-lg4 alignRight' >
                <img src='../PublishingImages/photography32.png' ></img>
              </div>
            </div>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm12 ms-lg8 ' >
                <p>
                  Suitable for large layout elements, such as headers, banners and large
                  canvases (e.g. Log in screens and interstitials). Place photography inside
                  graphic devices unless being used within a full bleed page over a white or
                  coloured background.
                                  </p>
                <p>
                  Scale and white-space are important - do not make the images too large or crowded.
                                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

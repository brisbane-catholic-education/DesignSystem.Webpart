import * as React from 'react';
import styles from './BrandStrategy.module.scss';
import { IBrandStrategyProps } from './IBrandStrategyProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class BrandStrategy extends React.Component<IBrandStrategyProps, {}> {
  public render(): React.ReactElement<IBrandStrategyProps> {
    const green = { color: '#00ad56' };
    const red = { color: '#da3b01' };
    const yellow = { color: '#fce100' };
    const blue = { color: '#00b7c3' };

    return (
      <div className={styles.brandStrategy + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle">What is our brand?</h3>
          <blockquote className="bce-design-system-blockquote-extraLarge">
            <h1>Our branding is the sum of perceptions our audience holds about us in their mind.</h1>
            <p className="bce-design-system-p-l Bold">It's more than simply our name or logo.</p>
            <p className="bce-design-system-p-l">It's every interaction our audience has with us over time.</p>
          </blockquote>
          <br/>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Brand strategy overview</h3>
              <div className="ms-Grid-col ms-xxl9">
                <p className="bce-design-system-p-l">Our brand strategy defines and informs who we are as Brisbane Catholic
                Education and communicates what we stand for, how we act, look and speak
                It goes beyond the visual identity elements in these guidelines: it captures and
                articulates how we want people, internally and externally, to view us when they
                think of or come into contact with us. </p>
              </div>
        </div>

        <div className={styles.brandIdea + " ms-Grid-row bce-design-system-row"}>
          <p className="bce-design-system-sectionTitle bce-design-system-border-bottom">Brand idea</p>
          <h1 >Aspiring <span>comm</span>unity</h1>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <p className="bce-design-system-sectionTitle bce-design-system-border-bottom">Brand personality</p>
            <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg4 ms-xl2' >
              <div className='ms-Grid-row'>
                <p className="l dark-navy Bold">Community-minded</p>
                <p>Collaborative<br />
                  Inclusive<br />
                  Joy</p>
              </div>
            </div>
            <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg4 ms-xl2' >
              <div className='ms-Grid-row'>
                <p className="l dark-navy Bold">Empowering</p>
                <p>Transformative<br />
                  Performance<br />
                  Excellence</p>
              </div>
            </div>
            <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg4 ms-xl2' >
              <div className='ms-Grid-row'>
                <p className="l dark-navy Bold">Committed</p>
                <p>Values-based<br />
                  Considered<br />
                  Passionate</p>
              </div></div>
            <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl6' >
              <div className='ms-Grid-row'>
                <p>We are at our best when we are:<br />
                  <span className="l dark-navy Bold">Community-minded, Empowering and Committed</span></p>
                <p>We can change the balance between these by dialling
                  elements up and down when we need to. </p>
              </div>
            </div>
        </div>

        <div className={styles.brandValue + " ms-Grid-row bce-design-system-row"}>
          <p className="bce-design-system-sectionTitle bce-design-system-border-bottom">Brand values</p>
            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl3' >
                <p className={styles.heading} style={green}>Excellence</p>
                <p>Inspired by our Catholic tradition.
                strive for excellence. </p>
              </div>
              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl3' >
                <p className={styles.heading} style={red}>Intergrity</p>
                <p>As witnesses to the Good News
                of Jesus Christ act ethically </p>
              </div>
              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl3' >
                <p className={styles.heading} style={yellow}>Justice</p>
                <p>As people of faith, foster
                  respectful relationships.
                  advocating for and empathising
                  with those at the margins. </p>
              </div>
              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg6  ms-xl3' >
                <p className={styles.heading} style={blue}>Hope</p>
                <p>Empowered by the Spirit,
                embrace the future with
                confidence. </p>
              </div>
            </div>

            <div className='ms-Grid-row bce-design-system-row'>
              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg6' >
                <p className="bce-design-system-subsectionTitle  bce-design-system-border-bottom">Vision</p>
                <p>As a community of faith, Brisbane Catholic Education
                inspires students with a love of learning and a heart of
                hope, empowering them to shape and enrich
                our world. </p>
              </div>
              <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg6' >
                <p className="bce-design-system-subsectionTitle   bce-design-system-border-bottom">Mission</p>
                <p>Our mission is to teach. challenge and transform through
                our service. support and leadership for Catholic education
                in the Archdiocese of Brisbane. </p>
              </div>
            </div>
        </div>

      </div >
    );
  }
}

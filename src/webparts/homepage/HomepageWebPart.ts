import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'HomepageWebPartStrings';
import Homepage from './components/Homepage';
import { IHomepageProps } from './components/IHomepageProps';

export interface IHomepageWebPartProps {
  description: string;
}

export default class HomepageWebPart extends BaseClientSideWebPart<IHomepageWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IHomepageProps> = React.createElement(
      Homepage,
      {
        description: this.properties.description
      }
    );
    let host = window.location.host.toLocaleLowerCase();
    let topBanner: HTMLElement = document.getElementById('SuiteNavPlaceHolder') as HTMLElement;
    let head: HTMLHeadElement = document.head || document.getElementsByTagName('head')[0];
    if (topBanner && topBanner !== null) {
      if (host.indexOf('ciintdesign') > -1 || host.indexOf('uatintdesign') > -1 || host.indexOf('intdesign') > -1) {
        //authorising site
        head.insertAdjacentHTML("beforeend", `<style>div[class^='homepage__cover_'] {min-height: calc(100vh - 50px);}</style>`);
      } else {
        //public site
        topBanner.style.display = "none";
        head.insertAdjacentHTML("beforeend", `<style>div[class^='homepage__cover_'] {min-height: calc(100vh);}</style>`);
      }
    }
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

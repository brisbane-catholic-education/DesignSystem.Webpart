import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'DesignPatternsCalloutWebPartStrings';
import DesignPatternsCallout from './components/DesignPatternsCallout';
import { IDesignPatternsCalloutProps } from './components/IDesignPatternsCalloutProps';

export interface IDesignPatternsCalloutWebPartProps {
  isCalloutVisible: boolean[];
}

export default class DesignPatternsCalloutWebPart extends BaseClientSideWebPart<IDesignPatternsCalloutWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDesignPatternsCalloutProps > = React.createElement(
      DesignPatternsCallout,
      {
        isCalloutVisible: this.properties.isCalloutVisible
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
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

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'GettingStartedOverviewWebPartStrings';
import GettingStartedOverview from './components/GettingStartedOverview';
import { IGettingStartedOverviewProps } from './components/IGettingStartedOverviewProps';

export interface IGettingStartedOverviewWebPartProps {
  description: string;
}

export default class GettingStartedOverviewWebPart extends BaseClientSideWebPart<IGettingStartedOverviewWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGettingStartedOverviewProps > = React.createElement(
      GettingStartedOverview,
      {
        description: this.properties.description
      }
    );

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

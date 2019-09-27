import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'DesignPatternsLinksWebPartStrings';
import DesignPatternsLinks from './components/DesignPatternsLinks';
import { IDesignPatternsLinksProps } from './components/IDesignPatternsLinksProps';

export interface IDesignPatternsLinksWebPartProps {
  description: string;
}

export default class DesignPatternsLinksWebPart extends BaseClientSideWebPart<IDesignPatternsLinksWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDesignPatternsLinksProps > = React.createElement(
      DesignPatternsLinks,
      {
        description: this.properties.description
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

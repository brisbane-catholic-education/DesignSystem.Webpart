import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'DesignPatternsOverflowSetWebPartStrings';
import DesignPatternsOverflowSet from './components/DesignPatternsOverflowSet';
import { IDesignPatternsOverflowSetProps } from './components/IDesignPatternsOverflowSetProps';

export interface IDesignPatternsOverflowSetWebPartProps {
  description: string;
}

export default class DesignPatternsOverflowSetWebPart extends BaseClientSideWebPart<IDesignPatternsOverflowSetWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDesignPatternsOverflowSetProps > = React.createElement(
      DesignPatternsOverflowSet,
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

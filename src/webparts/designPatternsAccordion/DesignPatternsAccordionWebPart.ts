import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import * as strings from 'DesignPatternsAccordionWebPartStrings';
import DesignPatternsAccordion from '../../../lib/webparts/designPatternsAccordion/components/DesignPatternsAccordion';

export interface IDesignPatternsAccordionWebPartProps {
  description: string;
}

export default class DesignPatternsAccordionWebPart extends BaseClientSideWebPart<IDesignPatternsAccordionWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDesignPatternsAccordionWebPartProps > = React.createElement(
      DesignPatternsAccordion,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
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

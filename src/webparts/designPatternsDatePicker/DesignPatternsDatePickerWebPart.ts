import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'DesignPatternsDatePickerWebPartStrings';
import DesignPatternsDatePicker from './components/DesignPatternsDatePicker';
import { IDesignPatternsDatePickerProps } from './components/IDesignPatternsDatePickerProps';

export interface IDesignPatternsDatePickerWebPartProps {
  description: string;
}

export default class DesignPatternsDatePickerWebPart extends BaseClientSideWebPart<IDesignPatternsDatePickerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDesignPatternsDatePickerProps > = React.createElement(
      DesignPatternsDatePicker,
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

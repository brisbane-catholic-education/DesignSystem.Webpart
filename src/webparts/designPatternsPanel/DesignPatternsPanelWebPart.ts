import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'DesignPatternsPanelWebPartStrings';
import DesignPatternsPanel from './components/DesignPatternsPanel';
import { IDesignPatternsPanelProps } from './components/IDesignPatternsPanelProps';

export interface IDesignPatternsPanelWebPartProps {
  showPanel: boolean;
}

export default class DesignPatternsPanelWebPart extends BaseClientSideWebPart<IDesignPatternsPanelWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDesignPatternsPanelProps > = React.createElement(
      DesignPatternsPanel,
      {
        showPanel: this.properties.showPanel
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

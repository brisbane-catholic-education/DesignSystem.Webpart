import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'DesignPatternsDialogWebPartStrings';
import DesignPatternsDialog from './components/DesignPatternsDialog';
import { IDesignPatternsDialogProps } from './components/IDesignPatternsDialogProps';

export interface IDesignPatternsDialogWebPartProps {
  hideDialog: boolean;
}

export default class DesignPatternsDialogWebPart extends BaseClientSideWebPart<IDesignPatternsDialogWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDesignPatternsDialogProps > = React.createElement(
      DesignPatternsDialog,
      {
        hideDialog: this.properties.hideDialog
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

import * as React from 'react';
import styles from './ResourcesDesignAndDevelopment.module.scss';
import { IResourcesDesignAndDevelopmentProps } from './IResourcesDesignAndDevelopmentProps';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';

export default class ResourcesDesignAndDevelopment extends React.Component<IResourcesDesignAndDevelopmentProps, {}> {
  public render(): React.ReactElement<IResourcesDesignAndDevelopmentProps> {
    return (
      <div className={styles.resourcesDesignAndDevelopment + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <p className="bce-design-system-p-l">Whether you're creating simple wireframes or detailed visual design compositions, we've got you covered with the design resources you need </p>
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Design Toolkit</h3>
          <p>To help projects stay aligned to the Design System we’ve provided a number of sketch files for designers to work from.</p>
          <span className="bce-design-system-subsectionTitle">Design System documentation</span>
          <p>This file contains the full documentation of the BCE Design System. Refer to this when needing to update the Design System itself. </p>
          <DefaultButton className="bce-design-system-buttom" href="http://bing.com" target="_blank" title="BCE Github - Button">
            BCE DS Documentation   <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          <br /><br />
          <span className="bce-design-system-subsectionTitle">Project starter kit sketch file</span>
          <p>This file contains the full documentation of the BCE Design System. Refer to this when needing to update the Design System itself. </p>
          <DefaultButton className="bce-design-system-buttom" href="http://bing.com" target="_blank" title="BCE Github - Button">
            BCE-Project-starter-kit.sketch   <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <br /><br />
            <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Fonts</h3>
            <p>Please download the Raleway font family here:<br/> 
             <Link href="https://fonts.google.com/specimen/Raleway">https://fonts.google.com/specimen/Raleway</Link></p>
             <br /><br />
             <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">GitHub repository</h3>
             <p>Please download the Design System code base here: </p>
          <DefaultButton className="bce-design-system-buttom" href="https://bceovs01.visualstudio.com/AppDev/_git/BCE.DesignSystem.Branding/pullrequests?_a=mine" target="_blank" title="BCE Github - Button">
          BCE GitHub <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
        </div >
      </div >

    );
  }
}

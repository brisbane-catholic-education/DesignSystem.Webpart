import * as React from 'react';
import styles from './DesignPatternsPersona.module.scss';
import { IDesignPatternsPersonaProps } from './IDesignPatternsPersonaProps';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { IPersonaSharedProps, Persona, PersonaInitialsColor, PersonaPresence, PersonaSize } from 'office-ui-fabric-react/lib/Persona';


export default class DesignPatternsPersona extends React.Component<IDesignPatternsPersonaProps, {}> {

  private examplePersona: IPersonaSharedProps = {
    secondaryText: 'Specialist Teacher',
    //tertiaryText: 'In a meeting',
    //optionalText: 'Available at 4:00pm'
  };
  private personaWithInitials: IPersonaSharedProps = {
    ...this.examplePersona,
    text: 'Jane Woodward',
    imageInitials: 'JW'
  };

  private examplePersona2: IPersonaSharedProps = {
    imageUrl: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
    imageInitials: 'AL',
    text: 'Jane Woodward',
    secondaryText: 'Specialist Teacher',
    //tertiaryText: 'In a meeting',
    //optionalText: 'Available at 4:00pm'
  };
  public render(): React.ReactElement<IDesignPatternsPersonaProps> {
    return (
      <div className={styles.designPatternsPersona + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p className="bce-design-system-p-l">Personas are used for rendering an individual's avatar and presence. They are
used within the PeoplePicker components.</p>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/persona" target="_blank" title="BCE Github - Persona">
              BCE Github - Persona  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
            <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/persona" target="_blank" title="BCE Github - Persona">
              BCE Github - Persona  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          </div>
        </div>
        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <span className="bce-design-system-sectionTitle2 bce-design-system-border-bottom">Persona in various size</span>
            <div className='ms-Grid-row bce-design-system-row ms-Grid'>
              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm2 ms-lg2' >
                  <span className="bce-design-system-subsectionTitle2">Initials</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <span className="bce-design-system-subsectionTitle2">Image</span>
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm2 ms-lg2' >
                  <span className="m">72px</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.personaWithInitials} initialsColor={PersonaInitialsColor.darkBlue} presence={PersonaPresence.online} size={PersonaSize.size72} />
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.examplePersona2} size={PersonaSize.size72} presence={PersonaPresence.online} />
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm2 ms-lg2' >
                  <span className="m">56px</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.personaWithInitials} initialsColor={PersonaInitialsColor.darkBlue} presence={PersonaPresence.online} size={PersonaSize.size48} />
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.examplePersona2} size={PersonaSize.size48} presence={PersonaPresence.online} />
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm2 ms-lg2' >
                  <span className="m">40px</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.personaWithInitials} initialsColor={PersonaInitialsColor.darkBlue} presence={PersonaPresence.online} size={PersonaSize.size40} />
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.examplePersona2} size={PersonaSize.size40} presence={PersonaPresence.online} />
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm2 ms-lg2' >
                  <span className="m">32px</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.personaWithInitials} initialsColor={PersonaInitialsColor.darkBlue} presence={PersonaPresence.online} size={PersonaSize.size32} />
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.examplePersona2} size={PersonaSize.size32} presence={PersonaPresence.online} />
                </div>
              </div>
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm2 ms-lg2' >
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona className="bce-design-system-Persona--showSecondaryText" {...this.personaWithInitials} initialsColor={PersonaInitialsColor.darkBlue} presence={PersonaPresence.online} size={PersonaSize.size32} />
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona className="bce-design-system-Persona--showSecondaryText" {...this.examplePersona2} size={PersonaSize.size32} presence={PersonaPresence.online} />
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm2 ms-lg2' >
                  <span className="m">24px</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.personaWithInitials} initialsColor={PersonaInitialsColor.darkBlue} presence={PersonaPresence.online} size={PersonaSize.size24} />
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.examplePersona2} size={PersonaSize.size24} presence={PersonaPresence.online} />
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm2 ms-lg2' >
                  <span className="m">14px</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona className="bce-design-system-Persona--showSecondaryText" {...this.personaWithInitials} initialsColor={PersonaInitialsColor.darkBlue} presence={PersonaPresence.online} size={PersonaSize.size16} />
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona className="bce-design-system-Persona--showSecondaryText" {...this.examplePersona2} size={PersonaSize.size16} presence={PersonaPresence.online} />
                </div>
              </div>

              <div className='ms-Grid-row  bce-design-system-row'>
                <div className='ms-Grid-col ms-sm2 ms-lg2' >
                  <span className="m">12px</span>
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.personaWithInitials} className="bce-design-system-Persona--size12" initialsColor={PersonaInitialsColor.darkBlue} size={PersonaSize.size10} />
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.examplePersona2} className="bce-design-system-Persona--size12" size={PersonaSize.size10} />
                </div>
              </div>

              <div className='ms-Grid-row'>
                <div className='ms-Grid-col ms-sm2 ms-lg2' >
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.personaWithInitials} className="bce-design-system-Persona--size12" initialsColor={PersonaInitialsColor.darkBlue} size={PersonaSize.size10} presence={PersonaPresence.online} />
                </div>
                <div className='ms-Grid-col ms-sm5 ms-lg5' >
                  <Persona {...this.examplePersona2} className="bce-design-system-Persona--size12" size={PersonaSize.size10} presence={PersonaPresence.online} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">For consideration</h3>
          <div className="ms-Grid-col ms-xxl9">
            <p>Use Size 24 Persona for text fields, for read mode or for experiences such as multi-column list view, which
          all need compact Persona representations. </p>
            <p>Use Size 32 Persona for text fields in edit mode. </p>
            <p>Use Size 32, Size 40. and Size 48 Personas for menus and list views. </p>
            <p>Use Size 72 Personas for profile cards and views. </p>
          </div></div>
      </div >
    );
  }
}

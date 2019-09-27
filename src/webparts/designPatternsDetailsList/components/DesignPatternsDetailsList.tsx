import * as React from 'react';
import styles from './DesignPatternsDetailsList.module.scss';
import { IDesignPatternsDetailsListProps } from './IDesignPatternsDetailsListProps';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { IDesignPatternsDetailsListWebPartProps } from '../DesignPatternsDetailsListWebPart';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import $ from "jquery";

export interface IDocument {
  key: string;
  name: string;
  value: string;
  iconName: string;
  fileType: string;
  modifiedBy: string;
  dateModified: string;
  dateModifiedValue: number;
  fileSize: string;
  fileSizeRaw: number;
}


export interface IDocument2 {
  key: string;
  name: string;
  iconName: string;
  sharing: string;
  fileSize: string;
}
const columns2: IColumn[] = [
  {
    key: 'column0', name: 'Type', fieldName: 'type', minWidth: 16, maxWidth: 16, isResizable: false, iconName: 'Page', isIconOnly: true, onRender: (item: IDocument) => {
      return <img src={'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/' + item.iconName + '_16x1.svg'} alt={item.iconName + ' file icon'} />;
    }
  },
  { key: 'column1',isRowHeader: true, name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
  {
    key: 'column2', name: 'Sharing', fieldName: 'sharing', minWidth: 100, maxWidth: 200, isResizable: true, onRender: (item: any) => {
      return <span><Icon iconName="People" />{item.sharing}</span>;
    }
  },
  { key: 'column3', name: 'File Size', fieldName: 'fileSize', minWidth: 100, maxWidth: 200, isResizable: true }
]

const columns: IColumn[] = [
  {
    key: 'column1',
    name: 'File Type',
    ariaLabel: 'Column operations for File type, Press to sort on File type',
    iconName: 'Page',
    isIconOnly: true,
    fieldName: 'name',
    minWidth: 16,
    maxWidth: 16,
    isResizable: false,
    onRender: (item: IDocument) => {
      return <img src={item.iconName} alt={item.fileType + ' file icon'} />;
    }
  },
  {
    key: 'column2',
    name: 'Name',
    fieldName: 'name',
    minWidth: 120,
    maxWidth: 200,
    isRowHeader: true,
    isResizable: true,
    isSorted: true,
    isSortedDescending: false,
    sortAscendingAriaLabel: 'Sorted A to Z',
    sortDescendingAriaLabel: 'Sorted Z to A',
    data: 'string',
    isPadded: true
  },
  {
    key: 'column3',
    name: 'Date Modified',
    fieldName: 'dateModifiedValue',
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
    data: 'number',
    onRender: (item: any) => {
      return <span>{item.dateModified}</span>;
    },
    isPadded: true
  },
  {
    key: 'column4',
    name: 'Modified By',
    fieldName: 'modifiedBy',
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
    data: 'string',
    onRender: (item: any) => {
      return <span>{item.modifiedBy}</span>;
    },
    isPadded: true
  },
  {
    key: 'column5',
    name: 'Sharing',
    fieldName: 'sharing',
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
    data: 'string',
    onRender: (item: any) => {
      return <span><Icon iconName="People" />{item.modifiedBy}</span>;
    },
    isPadded: true
  },
  {
    key: 'column6',
    name: 'File Size',
    fieldName: 'fileSizeRaw',
    minWidth: 70,
    maxWidth: 90,
    isResizable: false,
    data: 'number',
    onRender: (item: any) => {
      return <span>{item.fileSize}</span>;
    }
  }
];

export default class DesignPatternsDetailsList extends React.Component<IDesignPatternsDetailsListWebPartProps, {}> {
  private _items: IDocument[] = [];
  private _items2: IDocument2[] = [];

  private _ensureStateMatrix(){
    setTimeout(() => {
      const cells = document.querySelectorAll('.stateMatrix .ms-DetailsList .ms-List-cell');
      if(cells.length > 0){
        const cell3 = cells[3].querySelector('.ms-DetailsRow-cellCheck') as HTMLElement;
        cell3.click();
        const cell4 = cells[4].querySelector('.ms-DetailsRow-cellCheck') as HTMLElement;
        cell4.click();
      }
    }, 1000);
  }

  private _randomDate(start: Date, end: Date): { value: number; dateFormatted: string } {
    const date: Date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return {
      value: date.valueOf(),
      dateFormatted: date.toLocaleDateString()
    };
  }

  private _randomFileIcon(): { docType: string; url: string } {
    const docType: string = this.FILE_ICONS[Math.floor(Math.random() * this.FILE_ICONS.length)].name;
    return {
      docType,
      url: `https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/${docType}_16x1.svg`
    };
  }

  private FILE_ICONS: { name: string }[] = [
    { name: 'accdb' },
    { name: 'csv' },
    { name: 'docx' },
    { name: 'dotx' },
    { name: 'mpt' },
    { name: 'odt' },
    { name: 'one' },
    { name: 'onepkg' },
    { name: 'onetoc' },
    { name: 'pptx' },
    { name: 'pub' },
    { name: 'vsdx' },
    { name: 'xls' },
    { name: 'xlsx' },
    { name: 'xsn' }
  ];

  private _randomFileSize(): { value: string; rawSize: number } {
    const fileSize: number = Math.floor(Math.random() * 100) + 30;
    return {
      value: `${fileSize} KB`,
      rawSize: fileSize
    };
  }

  private LOREM_IPSUM = (
    'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut ' +
    'labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
    'eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt '
  ).split(' ');

  private loremIndex = 0;

  private _lorem(wordCount: number): string {
    const startIndex = this.loremIndex + wordCount > this.LOREM_IPSUM.length ? 0 : this.loremIndex;
    this.loremIndex = startIndex + wordCount;
    return this.LOREM_IPSUM.slice(startIndex, this.loremIndex).join(' ');
  }

  private _generateDocuments() {
    const items: IDocument[] = [];
    for (let i = 0; i < 5; i++) {
      const randomDate = this._randomDate(new Date(2012, 0, 1), new Date());
      const randomFileSize = this._randomFileSize();
      const randomFileType = this._randomFileIcon();
      let fileName = this._lorem(2);
      fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1).concat(`.${randomFileType.docType}`);
      let userName = this._lorem(2);
      userName = userName
        .split(' ')
        .map((name: string) => name.charAt(0).toUpperCase() + name.slice(1))
        .join(' ');
      items.push({
        key: i.toString(),
        name: fileName,
        value: fileName,
        iconName: randomFileType.url,
        fileType: randomFileType.docType,
        modifiedBy: userName,
        dateModified: randomDate.dateFormatted,
        dateModifiedValue: randomDate.value,
        fileSize: randomFileSize.value,
        fileSizeRaw: randomFileSize.rawSize
      });
    }
    return items;
  }

  private _generateDocuments2() {
    const items: IDocument2[] = [];
    items.push({ key: "1", sharing: "Editor", name: "Corporate guidelines", iconName: "pptx", fileSize: "34kb" });
    items.push({ key: "2", sharing: "Editor", name: "Corporate guidelines", iconName: "pptx", fileSize: "12kb" });
    items.push({ key: "3", sharing: "", name: "Corporate guidelines", iconName: "pptx", fileSize: "8kb" });
    items.push({ key: "4", sharing: "Can edit", name: "Corporate guidelines", iconName: "pptx", fileSize: "14kb" });
    items.push({ key: "5", sharing: "Can edit", name: "Corporate guidelines", iconName: "pptx", fileSize: "14kb" });
    items.push({ key: "6", sharing: "Editor", name: "Corporate guidelines", iconName: "pptx", fileSize: "34kb" });
    items.push({ key: "7", sharing: "Editor", name: "Corporate guidelines", iconName: "pptx", fileSize: "34kb" });
    items.push({ key: "8", sharing: "Editor", name: "Corporate guidelines", iconName: "pptx", fileSize: "34kb" });
    return items;
  }

  public render(): React.ReactElement<IDesignPatternsDetailsListProps> {
    this._items = this._generateDocuments();
    this._items2 = this._generateDocuments2();
    return (
      <div className={styles.designPatternsDetailsList + ' ms-Grid'} >
        <div className="ms-Grid-row bce-design-system-row">
          <h3 className="bce-design-system-sectionTitle bce-design-system-border-bottom">Overview</h3>
          <p className="bce-design-system-p-l">DetailsList is a derivative of the List component. It is a robust way to display an
              information rich collection of items. It can support powerful ways to aid a user in
          finding content with sorting, grouping and filtering. </p>
          <DefaultButton className="bce-design-system-buttom" href="https://github.com/brisbane-catholic-education/DesignSystem.Webpart/tree/master/src/webparts/designPatternsDetailsList" target="_blank" title="BCE Github - Button">
            BCE Github - Button  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
          <DefaultButton className="bce-design-system-buttom" href="https://developer.microsoft.com/en-us/fabric#/controls/web/detailslist" target="_blank" title="BCE Github - Button">
            BCE Github - Button  <IconButton iconProps={{ iconName: 'NavigateExternalInline' }} title='NavigateExternalInline'></IconButton></DefaultButton>
        </div>

        <div className="ms-Grid-row bce-design-system-row">
          <div className="bce-design-system-box">
            <span className="bce-design-system-subsectionTitle bce-design-system-border-bottom">DetailsList sample</span>
            <DetailsList 
              items={this._items}
              compact={false}
              columns={columns}
              selectionPreservedOnEmptyClick={true}
              selectionMode={SelectionMode.multiple}
              layoutMode={DetailsListLayoutMode.justified}
              isHeaderVisible={true}
              enterModalSelectionOnTouch={true}
              ariaLabelForSelectionColumn="Toggle selection"
              ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            />
            <br /><br />
            <span className="bce-design-system-sectionTitle bce-design-system-border-bottom">State matrix</span>
            <div className='stateMatrix ms-Grid'>
              <div className='ms-Grid-row '>
                <div className='ms-Grid-col ms-sm2 ms-lg2' >
                <div className='ms-Grid-row'>
                  <span>Header</span>
                </div>
                <div className='ms-Grid-row'>
                <span>Rest</span>
                </div>
                <div className='ms-Grid-row'>
                <span>Hover on name</span>
                </div>
                <div className='ms-Grid-row'>
                <span>Hover on row (check)</span>
                </div>
                <div className='ms-Grid-row'>
                <span>Select</span>
                </div>
                <div className='ms-Grid-row'>
                <span>Select Hover</span>
                </div>
                <div className='ms-Grid-row'>
                <span>Focus on row</span>
                </div>
                <div className='ms-Grid-row'>
                <span>Focus on Check</span>
                </div>
                <div className='ms-Grid-row'>
                <span>Focus on column</span>
                </div>
                </div>
                <div className='ms-Grid-col ms-sm10 ms-lg10' >
                  <DetailsList
                    items={this._items2}
                    compact={false}
                    columns={columns2}
                    selectionPreservedOnEmptyClick={true}
                    selectionMode={SelectionMode.multiple}
                    layoutMode={DetailsListLayoutMode.justified}
                    isHeaderVisible={true}
                    enterModalSelectionOnTouch={true}
                    ariaLabelForSelectionColumn="Toggle selection"
                    ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
        {this._ensureStateMatrix()}
      </div >
    );
  }
}

import * as React from 'react';
import styles from './ListView.module.scss';
import { IListViewProps } from './IListViewProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ListView as PnPListView, IViewField, SelectionMode } from '@pnp/spfx-controls-react/lib/ListView';
import { SPHttpClient } from '@microsoft/sp-http';

export interface IListViewState {
  items1: any[];
  items2: any[];
}

export default class ListView extends React.Component<IListViewProps, IListViewState> {

  constructor(props: IListViewProps) {
    super(props);

    this.state = {
      items1: [],
      items2: []
    }
  }

  public componentDidMount() {
    const restApi = `${this.props.context.pageContext.web.absoluteUrl}/_api/web/GetFolderByServerRelativeUrl('Shared%20Documents')/files?$expand=ListItemAllFields`;
    this.props.context.spHttpClient.get(restApi, SPHttpClient.configurations.v1)
      .then(resp => { return resp.json(); })
      .then(items => {
        this.setState({
          items1: items.value ? items.value : []
        });
      });

      this.props.context.spHttpClient.get(restApi, SPHttpClient.configurations.v1)
      .then(resp => { return resp.json(); })
      .then(items => {
        this.setState({
          items2: items.value ? items.value : []
        });
      });
  }

  public render(): React.ReactElement<IListViewProps> {

    const viewFields1: IViewField[] = [
      {
        name: 'ListItemAllFields.Id',
        displayName: 'ID',
        maxWidth: 40,
        sorting: true,
        isResizable: true
      },
      {
        name: 'ListItemAllFields.Underscore_Field',
        displayName: "Underscore_Field",
        sorting: true,
        isResizable: true
      },
      {
        name: 'Name',
        linkPropertyName: 'ServerRelativeUrl',
        sorting: true,
        isResizable: true
      },
      {
        name: 'ServerRelativeUrl',
        displayName: 'Path',
        render: (item: any) => {
          return <a href={item['ServerRelativeUrl']}>Link</a>;
        },
        isResizable: true
      },
      {
        name: 'Title',
        isResizable: true
      }
    ];

    const viewFields2: IViewField[] = [
      {
        name: 'ListItemAllFields.Id',
        displayName: 'ID',
        maxWidth: 40,
        sorting: true,
        isResizable: true
      },
      {
        name: 'ListItemAllFields.Underscore_Field',
        displayName: "Underscore_Field",
        sorting: true,
        isResizable: true
      },
      {
        name: 'Name',
        linkPropertyName: 'ServerRelativeUrl',
        sorting: true,
        isResizable: true
      },
      {
        name: 'ServerRelativeUrl',
        displayName: 'Path',
        render: (item: any) => {
          return <a href={item['ServerRelativeUrl']}>Link</a>;
        },
        isResizable: true
      },
      {
        name: 'Title',
        isResizable: true
      }
    ];

    return (
      <div className={styles.listView}>
        <PnPListView items={this.state.items1}
          viewFields={viewFields1}
          iconFieldName='ServerRelativeUrl'
          compact={true}
          selectionMode={SelectionMode.single}
          showFilter={true}
        // defaultFilter="Team"
        />
        <PnPListView items={this.state.items2}
          viewFields={viewFields2}
          iconFieldName='ServerRelativeUrl'
          compact={true}
          selectionMode={SelectionMode.single}
          showFilter={true}
        // defaultFilter="Team"
        />
      </div>
    );
  }
}

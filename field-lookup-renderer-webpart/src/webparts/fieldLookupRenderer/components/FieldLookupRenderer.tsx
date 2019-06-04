import * as React from 'react';
import styles from './FieldLookupRenderer.module.scss';
import { IFieldLookupRendererProps } from './IFieldLookupRendererProps';
import { FieldLookupRenderer as FLR } from '@pnp/spfx-controls-react/lib/FieldLookupRenderer';

export default class FieldLookupRenderer extends React.Component<IFieldLookupRendererProps, {}> {
  public render(): React.ReactElement<IFieldLookupRendererProps> {
    const {
      lookupId,
      lookupValue,
      useCustomOnClick,
      dispFormUrl
    } = this.props;
    return (
      <div className={ styles.fieldLookupRenderer }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <FLR
              lookups={[{ lookupId: lookupId, lookupValue: lookupValue }]}
              onClick={useCustomOnClick ? args => { alert(`Custom click. LookupId: ${args.lookup.lookupId}`); return {}; } : null}
              dispFormUrl={dispFormUrl} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

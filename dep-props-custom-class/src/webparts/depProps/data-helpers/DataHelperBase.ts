import {
  IWebPartContext
} from '@microsoft/sp-client-preview';

import { ISPList, ISPView } from '../common/SPEntities';

/**
 * Data Helpers interface
 */
export interface IDataHelper {
  /**
   * Web part context
   */
  context: IWebPartContext;
  /**
   * API to get lists from the source
   */
  getLists(): Promise<ISPList[]>;
  /**
   * API to get views from the source
   */
  getViews(listId: string): Promise<ISPView[]>;
}
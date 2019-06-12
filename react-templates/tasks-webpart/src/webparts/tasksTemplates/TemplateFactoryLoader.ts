import { ITemplateFactory } from './common/CommonTypes';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { DefaultTemplateFactory } from './DefaultTemplateFactory';

/**
 * Loader of the TemplateFactory, or, more widely - of SPFx Library Component
 */
export class TemplateFactoryLoader {
  /**
   * last selected compoentId
   */
  private static _lastComponentId: string | undefined;
  /**
   * last loaded template factory
   */
  private static _templateFactory: ITemplateFactory;

  /**
   * Loads SPFx Library Component and instantiates template factory from loaded module
   * @param componentId SPFx Library Component componentId
   */
  public static async loadTemplateFactory(componentId?: string): Promise<ITemplateFactory> {
    // we don't want to load the module more than once
    if (componentId !== this._lastComponentId || !this._templateFactory) {
      this._lastComponentId = componentId;

      // if componentId is not defined we'll use the defalut template factory
      if (!componentId) {
        this._templateFactory = new DefaultTemplateFactory();
      }
      else {
        // loading the module (component)
        const factoryModule: any = await SPComponentLoader.loadComponentById(componentId);
        // instantiating the template factory
        this._templateFactory = new factoryModule.TemplatesLibrary();
      }
    }

    return this._templateFactory;
  }
}

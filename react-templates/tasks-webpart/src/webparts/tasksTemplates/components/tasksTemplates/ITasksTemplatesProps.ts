import { ITemplateFactory, ITask } from '../../common/CommonTypes';

/**
 * Main web part component props
 */
export interface ITasksTemplatesProps {
  /**
   * Selected template factory
   */
  templateFactory: ITemplateFactory;
  /**
   * Tasks to render
   */
  tasks: ITask[];
}

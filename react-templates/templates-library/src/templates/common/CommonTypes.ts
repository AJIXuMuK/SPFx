/*******************************************************************
 * Copied Content
 *******************************************************************/
import * as React from 'react';
/**
 * Available types of templates
 */
export type TemplateType = 'task-list' | 'task' | 'task-details';

/**
 * Task statuses
 */
export enum TaskStatus {
  NotStarted,
  InProgress,
  Resolved,
  Closed
}

/**
 * Task interface
 */
export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  estimate: number;
  spentTime: number;
  dueDate: Date;
  assignedTo?: string;
}

/**
 * Props for TaskList component
 */
export interface ITaskListProps {
  /**
   * Tasks to display
   */
  tasks: ITask[];
  /**
   * React component (template) to use to display tasks
   */
  taskTemplate: React.ComponentClass<ITaskProps>;
  /**
   * Task selected handler
   */
  onTaskSelected: (task: ITask) => void;
  /**
   * Localized strings
   */
  strings: any;
}

/**
 * Props for Task component
 */
export interface ITaskProps extends ITask {
  /**
   * Selected handler
   */
  onSelected: () => void;
  /**
   * Localized strings
   */
  strings: any;
}

/**
 * Props for TaskDetails component
 */
export interface ITaskDetailsProps extends ITask {
  /**
   * Localized strings
   */
  strings: any;
}

/**
 * Main entry point of the template library - Template factory
 */
export interface ITemplateFactory {
  /**
   * Get the template component (React component) based on TemplateType
   */
  getTemplateComponent: (templateType: TemplateType) => React.ComponentClass<any> | null;
}
/*******************************************************************
 * End Copied Content
 *******************************************************************/

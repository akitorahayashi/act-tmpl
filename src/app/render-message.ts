import type { ActionRequest } from '../action/request';
import { renderMessageTemplate } from '../message/template';

export function renderMessage(request: ActionRequest): string {
  return renderMessageTemplate(request);
}

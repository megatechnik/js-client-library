import BaseApi from '../baseApi';
import * as responseHandlers from '../utils/response/responseHandlers';
import { ServerCommunication } from './types';

const resourceName = 'serverCommunication';
type ResourceName = typeof resourceName;

export class ServerCommunicationEndpoint extends BaseApi<ResourceName> {
  public readonly resourceName = resourceName;

  async readServerCommunication(account: string): Promise<{ Results: ServerCommunication }> {
    this.setAccount(account);
    const response = this._get<ResourceName>('read', { withCredentials: false });
    return responseHandlers.serverCommunication(response);
  }
}

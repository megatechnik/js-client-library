import { AxiosResponse } from 'axios';

import { ApiResponse } from './apiResponse';
import { createRawApiResponse } from './rawApiResponse';
import { createResourceResponse, ResourceResponse } from './resourceResponse';

export type RequestPromise<T> = Promise<AxiosResponse<ApiResponse<T>>>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function toApiResponse<T>(promise: RequestPromise<T>) {
  const resolved = await promise;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (resolved === undefined) {
    throw new Error('Promise resolve is undefined, please contact administrator.');
  }

  const apiResponse = resolved.data;

  if (apiResponse.Success) {
    return apiResponse;
  }

  throw apiResponse;
}

/**
 * @return A promise that resolves to T or rejects if no results
 */
export async function required<T>(promise: RequestPromise<T[]>): Promise<T> {
  const response = await toApiResponse<T[]>(promise);

  if (response.Results && response.NumResults > 0) {
    return response.Results[0];
  } else {
    throw new Error('There are no results.');
  }
}
/**
 * @return A promise that resolves to T or undefined if no results but Success is true.
 */
export async function optional<T>(promise: RequestPromise<T[]>): Promise<T | undefined> {
  const response = await toApiResponse<T[]>(promise);
  return (response.Results && response.NumResults > 0 && response.Results[0]) || undefined;
}

export async function list<T>(promise: RequestPromise<T[]>): Promise<T[]> {
  const response = await toApiResponse<T[]>(promise);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return response.Results ?? [];
}

export async function toResourceResponse<T>(promise: RequestPromise<T[]>): Promise<ResourceResponse<T>> {
  return createResourceResponse(await createRawApiResponse(promise));
}

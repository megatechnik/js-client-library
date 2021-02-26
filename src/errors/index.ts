export enum ErrorReason {
  Unkown = 'Unknow Error',
  ReponseFailed = 'Reponse Failed',
}

export type TimeTacApiError = {
  reason: ErrorReason;
  response?: unknown;
  _plainError?: string;
};
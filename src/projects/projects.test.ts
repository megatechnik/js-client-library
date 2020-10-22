import Projects from './index';
import { Project } from './types';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import RequestParams from '../utils/requestParams';

describe('Projects', () => {
  var projects: Projects = new Projects({});
  var readPath: string = `${projects.getResourcePath()}/read`;
  var mock = new AxiosMockAdapter(axios);
  var result: Promise<Project[]>;

  afterEach(() => {
    mock.reset();
  });

  test('read', async () => {
    mock.onGet(readPath).reply(200, { Success: true, NumResults: 1, Results: [{}] });
    result = projects.read();
    await result.then((result) => expect(result).toStrictEqual([{}]));
  });

  test('read with Success false', async () => {
    mock.onGet(readPath).reply(200, { Success: false });
    result = projects.read();
    await result.catch((result) => expect(result).toStrictEqual({ Success: false }));
  });

  test('read with status code 500', async () => {
    mock.onGet(readPath).reply(500);
    result = projects.read();
    await result.then((result) => expect(result).toBe('Request failed with status code 500'));
  });
});
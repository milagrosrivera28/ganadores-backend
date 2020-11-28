import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {PartidoPolitico} from '../models';

const config: ModelCrudRestApiConfig = {
  model: PartidoPolitico,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/partido-politicos',
};
module.exports = config;

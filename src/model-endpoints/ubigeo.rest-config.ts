import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Ubigeo} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Ubigeo,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/ubigeos',
};
module.exports = config;

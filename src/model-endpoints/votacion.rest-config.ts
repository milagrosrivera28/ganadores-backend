import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Votacion} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Votacion,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/votacions',
};
module.exports = config;

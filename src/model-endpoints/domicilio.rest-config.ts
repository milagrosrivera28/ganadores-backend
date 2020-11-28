import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Domicilio} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Domicilio,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/domicilios',
};
module.exports = config;

import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Postulacion} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Postulacion,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/postulacion',
};
module.exports = config;

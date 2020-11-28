import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {ExperienciaLaboral} from '../models';

const config: ModelCrudRestApiConfig = {
  model: ExperienciaLaboral,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/experiencia-laborals',
};
module.exports = config;

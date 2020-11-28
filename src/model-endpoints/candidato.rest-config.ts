import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Candidato} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Candidato,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/candidatoes',
};
module.exports = config;

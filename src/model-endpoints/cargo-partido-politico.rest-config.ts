import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {CargoPartidoPolitico} from '../models';

const config: ModelCrudRestApiConfig = {
  model: CargoPartidoPolitico,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/cargo-partido-politicos',
};
module.exports = config;

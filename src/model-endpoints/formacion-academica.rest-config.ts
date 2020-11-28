import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {FormacionAcademica} from '../models';

const config: ModelCrudRestApiConfig = {
  model: FormacionAcademica,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/formacion-academicas',
};
module.exports = config;

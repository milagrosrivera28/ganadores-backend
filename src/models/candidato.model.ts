import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Ubigeo} from './ubigeo.model';

@model()
export class Candidato extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cod_candidato?: number;

  @property({
    type: 'string',
    // required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    // required: true,
  })
  apellido_paterno: string;

  @property({
    type: 'string',
    // required: true,
  })
  apellido_materno: string;

  @property({
    type: 'number',
    // required: true,
  })
  dni: number;

  @property({
    type: 'string',
    // required: true,
  })
  fecha_nac: string;

  // @property({
  //   type: 'string',
  //   required: true,
  // })
  @belongsTo(() => Ubigeo)
  cod_ubigeo: string;

  @property({
    type: 'any',
    // required: true,
  })
  facebook: any;

  @property({
    type: 'any',
    // required: true,
  })
  twitter: any;

  @property({
    type: 'any',
    // required: true,
  })
  url_foto: any;


  constructor(data?: Partial<Candidato>) {
    super(data);
  }
}

export interface CandidatoRelations {
  // describe navigational properties here
}

export type CandidatoWithRelations = Candidato & CandidatoRelations;

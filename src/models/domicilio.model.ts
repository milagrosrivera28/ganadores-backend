import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Candidato} from './candidato.model';
import {Ubigeo} from './ubigeo.model';

@model()
export class Domicilio extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cod_domicilio?: number;

  // @property({
  //   type: 'string',
  //   required: true,
  // })
  @belongsTo(() => Ubigeo)
  cod_ubigeo: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  // @property({
  //   type: 'number',
  //   required: true,
  // })
  @belongsTo(() => Candidato)
  cod_candidato: number;


  constructor(data?: Partial<Domicilio>) {
    super(data);
  }
}

export interface DomicilioRelations {
  // describe navigational properties here
}

export type DomicilioWithRelations = Domicilio & DomicilioRelations;

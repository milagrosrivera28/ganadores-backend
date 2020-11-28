import {Entity, model, property} from '@loopback/repository';

@model()
export class Domicilio extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cod_domicilio?: number;

  @property({
    type: 'string',
    required: true,
  })
  cod_ubigeo: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'number',
    required: true,
  })
  cod_candidato: number;


  constructor(data?: Partial<Domicilio>) {
    super(data);
  }
}

export interface DomicilioRelations {
  // describe navigational properties here
}

export type DomicilioWithRelations = Domicilio & DomicilioRelations;

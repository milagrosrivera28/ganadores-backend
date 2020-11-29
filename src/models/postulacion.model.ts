import {Entity, model, property} from '@loopback/repository';

@model()
export class Postulacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cod_postulacion?: number;

  @property({
    type: 'string',
  })
  cargo_postulacion?: string;

  @property({
    type: 'number',
  })
  cod_partido?: number;

  @property({
    type: 'string',
  })
  proceso_electoral?: string;

  @property({
    type: 'string',
  })
  elegido?: string;

  @property({
    type: 'string',
  })
  circunscripcion?: string;

  @property({
    type: 'number',
  })
  cod_candidato?: number;


  constructor(data?: Partial<Postulacion>) {
    super(data);
  }
}

export interface PostulacionRelations {
  // describe navigational properties here
}

export type PostulacionWithRelations = Postulacion & PostulacionRelations;

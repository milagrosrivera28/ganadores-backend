import {Entity, model, property} from '@loopback/repository';

@model()
export class PartidoPolitico extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cod_partido?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'any',
    required: true,
  })
  pag_web: any;

  @property({
    type: 'any',
    required: true,
  })
  url_planGobierno: any;


  constructor(data?: Partial<PartidoPolitico>) {
    super(data);
  }
}

export interface PartidoPoliticoRelations {
  // describe navigational properties here
}

export type PartidoPoliticoWithRelations = PartidoPolitico & PartidoPoliticoRelations;

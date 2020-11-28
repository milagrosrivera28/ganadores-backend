import {Entity, model, property} from '@loopback/repository';

@model()
export class Votacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cod_votacion?: number;

  @property({
    type: 'number',
  })
  cod_candidato?: number;

  @property({
    type: 'number',
  })
  puntos_aprobacion?: number;


  constructor(data?: Partial<Votacion>) {
    super(data);
  }
}

export interface VotacionRelations {
  // describe navigational properties here
}

export type VotacionWithRelations = Votacion & VotacionRelations;

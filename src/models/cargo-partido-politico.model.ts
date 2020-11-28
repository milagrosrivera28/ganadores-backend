import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Candidato} from './candidato.model';
import {PartidoPolitico} from './partido-politico.model';

@model()
export class CargoPartidoPolitico extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cod_cargo?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  // @property({
  //   type: 'number',
  //   required: true,
  // })
  @belongsTo(() => PartidoPolitico)
  cod_partido: number;

  @property({
    type: 'string',
    required: true,
  })
  periodo: string;

  @property({
    type: 'string',
    required: true,
  })
  ambito: string;

  @property({
    type: 'string',
    required: true,
  })
  proceso_electoral: string;

  @property({
    type: 'string',
    required: true,
  })
  vigencia: string;

  // @property({
  //   type: 'number',
  //   required: true,
  // })
  @belongsTo(() => Candidato)
  cod_candidato: number;


  constructor(data?: Partial<CargoPartidoPolitico>) {
    super(data);
  }
}

export interface CargoPartidoPoliticoRelations {
  // describe navigational properties here
}

export type CargoPartidoPoliticoWithRelations = CargoPartidoPolitico & CargoPartidoPoliticoRelations;

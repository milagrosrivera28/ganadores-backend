import {Entity, model, property} from '@loopback/repository';

@model()
export class ExperienciaLaboral extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cod_explaboral?: number;

  @property({
    type: 'string',
    required: true,
  })
  condicion_laboral: string;

  @property({
    type: 'string',
    required: true,
  })
  ruc: string;

  @property({
    type: 'string',
    required: true,
  })
  sector: string;

  @property({
    type: 'string',
    required: true,
  })
  periodo: string;

  @property({
    type: 'string',
    required: true,
  })
  centro_trabajo: string;

  @property({
    type: 'string',
    required: true,
  })
  cod_ubigeo: string;

  @property({
    type: 'string',
    required: true,
  })
  cargo: string;

  @property({
    type: 'number',
    required: true,
  })
  cod_candidato: number;


  constructor(data?: Partial<ExperienciaLaboral>) {
    super(data);
  }
}

export interface ExperienciaLaboralRelations {
  // describe navigational properties here
}

export type ExperienciaLaboralWithRelations = ExperienciaLaboral & ExperienciaLaboralRelations;

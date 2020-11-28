import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Candidato} from './candidato.model';

@model()
export class FormacionAcademica extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cod_formacademica?: number;

  @property({
    type: 'string',
    required: true,
  })
  institucion_edu: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  periodo: string;

  @property({
    type: 'string',
    required: true,
  })
  grado_academico: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  lugar: string;

  @property({
    type: 'string',
  })
  facultad?: string;

  @property({
    type: 'string',
  })
  carrera?: string;

  // @property({
  //   type: 'number',
  //   required: true,
  // })
  @belongsTo(() => Candidato)
  cod_candidato: number;

  @property({
    type: 'boolean',
  })
  valido?: boolean;


  constructor(data?: Partial<FormacionAcademica>) {
    super(data);
  }
}

export interface FormacionAcademicaRelations {
  // describe navigational properties here
}

export type FormacionAcademicaWithRelations = FormacionAcademica & FormacionAcademicaRelations;

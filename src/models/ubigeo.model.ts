import {Entity, model, property} from '@loopback/repository';

@model()
export class Ubigeo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  cod_ubigeo: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo: string;


  constructor(data?: Partial<Ubigeo>) {
    super(data);
  }
}

export interface UbigeoRelations {
  // describe navigational properties here
}

export type UbigeoWithRelations = Ubigeo & UbigeoRelations;

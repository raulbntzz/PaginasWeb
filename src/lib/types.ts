export interface Indicador {
  id: number;
  tipo: string;
  categoria: string;
  nombre: string;
  descripcion?: string;
  valor: string;
  unidad?: string;
  fecha: string;
  ambito: string;
}

export interface IndicadorDto {
  id?: number;
  tipo: string;
  categoria: string;
  nombre: string;
  descripcion?: string;
  valor: string;
  unidad?: string;
  fecha: string;
  ambito: string;
}

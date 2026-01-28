import type { Indicador, IndicadorDto } from './types';

const API_BASE_URL = 'http://localhost:5211/api';

export class IndicadorApiService {
  // GET: Obtener todos los indicadores
  static async getAllAsync(): Promise<Indicador[]> {
    const response = await fetch(`${API_BASE_URL}/indicadores`);
    if (!response.ok) {
      throw new Error('Error al obtener indicadores');
    }
    return await response.json();
  }

  // GET: Obtener indicador por ID
  static async getByIdAsync(id: number): Promise<Indicador | null> {
    const response = await fetch(`${API_BASE_URL}/indicadores/${id}`);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error('Error al obtener el indicador');
    }
    return await response.json();
  }

  // GET: Obtener indicadores por tipo
  static async getByTipoAsync(tipo: string): Promise<Indicador[]> {
    const response = await fetch(`${API_BASE_URL}/indicadores/tipo/${encodeURIComponent(tipo)}`);
    if (!response.ok) {
      throw new Error('Error al obtener indicadores por tipo');
    }
    return await response.json();
  }

  // GET: Obtener indicadores por ámbito
  static async getByAmbitoAsync(ambito: string): Promise<Indicador[]> {
    const response = await fetch(`${API_BASE_URL}/indicadores/ambito/${encodeURIComponent(ambito)}`);
    if (!response.ok) {
      throw new Error('Error al obtener indicadores por ámbito');
    }
    return await response.json();
  }

  // GET: Obtener total por tipo
  static async getTotalPorTipoAsync(): Promise<Record<string, number>> {
    const response = await fetch(`${API_BASE_URL}/indicadores/total-por-tipo`);
    if (!response.ok) {
      throw new Error('Error al obtener totales por tipo');
    }
    return await response.json();
  }

  // POST: Crear indicador
  static async createAsync(indicador: IndicadorDto): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/indicadores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(indicador),
    });
    if (!response.ok) {
      throw new Error('Error al crear el indicador');
    }
  }

  // PUT: Actualizar indicador
  static async updateAsync(id: number, indicador: IndicadorDto): Promise<boolean> {
    const response = await fetch(`${API_BASE_URL}/indicadores/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(indicador),
    });
    if (response.status === 404) {
      return false;
    }
    if (!response.ok) {
      throw new Error('Error al actualizar el indicador');
    }
    return true;
  }

  // DELETE: Eliminar indicador
  static async deleteAsync(id: number): Promise<boolean> {
    const response = await fetch(`${API_BASE_URL}/indicadores/${id}`, {
      method: 'DELETE',
    });
    if (response.status === 404) {
      return false;
    }
    if (!response.ok) {
      throw new Error('Error al eliminar el indicador');
    }
    return true;
  }
}

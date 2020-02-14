import {Flight} from './Flight';

export interface Tourist {

  id: number;
  firstName: string;
  lastName: string;
  sex: string;
  country: string;
  notes: string;
  flights: Flight[];


}

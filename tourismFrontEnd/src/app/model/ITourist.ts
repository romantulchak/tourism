import {IFlight} from './IFlight';

export interface ITourist {

  id: number;
  firstName: string;
  lastName: string;
  sex: string;
  country: string;
  notes: string;
  flights: IFlight[];
  birthday: string;


}

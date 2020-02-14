import {Tourist} from './Tourist';

export interface Flight {
  id: number;
  timeOfDeparture: Date;
  arrivalTime: Date;
  numberOfSeats: number;
  tourists: Tourist[];
  ticketPrice: number;
}

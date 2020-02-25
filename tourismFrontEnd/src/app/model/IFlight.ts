import {ITourist} from './ITourist';

export interface IFlight {
  id: number;
  location: string;
  direction: string;
  timeOfDeparture: string;
  arrivalTime: string;
  numberOfSeats: number;
  tourists: ITourist[];
  ticketPrice: number;
}

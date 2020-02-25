import {Pipe, PipeTransform} from '@angular/core';
import {ITourist} from '../model/ITourist';

@Pipe({
  name: 'touristFilter'
})
export class TouristFilterPipe implements PipeTransform{
  transform(tourists: ITourist[], searchBySurname: string): ITourist[] {
      if  (!tourists || !searchBySurname){
        return tourists;
      }
      console.log(tourists.filter(tourist => tourist.lastName.toLowerCase().indexOf(searchBySurname.toLowerCase()) !== -1));
      let s = tourists.filter(tourist => tourist.lastName.toLowerCase().indexOf(searchBySurname.toLowerCase()) !== -1);
      if (s.length !== 0){
        return s;
      } else {
        return null;
      }

  }

}

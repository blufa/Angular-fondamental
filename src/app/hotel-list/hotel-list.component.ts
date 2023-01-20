import { Component, OnInit } from "@angular/core";
import { IHotel } from "../hotel";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit{
  title : string = 'Ma liste de chambres';

  ngOnInit(){
    this.filteredHotel = this.hotels;
  }
  hotels: IHotel[] = [
    {
      hoteld: 1,
      hotelName: 'Buea sweet life',
      description: 'Belle vue au bord de la mer',
      price: 230.5,
      imageUrl: 'assets/img/hotel-room.jpg'
    },
    {
      hoteld: 2,
      hotelName: 'Marakech',
      description: 'Profiter de la vie sur les montagnes',
      price: 145.5,
      imageUrl: 'assets/img/the-interior.jpg'
    },
    {
      hoteld: 3,
      hotelName: 'Buea sweet life',
      description: 'Belle vue au bord de la mer',
      price: 120.12,
      imageUrl: 'assets/img/indoors.jpg'
    },
    {
      hoteld: 4,
      hotelName: 'Cape town city',
      description: 'Belle vue au bord de la mer',
      price: 230.5,
      imageUrl: 'assets/img/window.jpg'
    }
  ]

  showBadge: boolean;
  _hotelFilter= "mot";
  filteredHotel: IHotel[] =[];

  toggleIsNewBadge():void{
    this.showBadge = !this.showBadge;
  }

  get hotelFilter():string{
    return this._hotelFilter;
  }

  set hotelFilter(filter: string){
    this._hotelFilter = filter;
    this.filteredHotel = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }

  filterHotels(critere: string): IHotel[]{
    critere = critere.toLowerCase();
    const resultat = this.hotels.filter(
      (hotel :IHotel)=> hotel.hotelName.toLowerCase().indexOf(critere) != -1
    );
    return resultat;
  }
}

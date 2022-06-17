import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/service/carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
count: number = 5
  sliderList: any[] = [];

  constructor(private carouselService: CarouselService) { }

  ngOnInit(): void {

    this.getSliderList()

  }

  getSliderList(){
      this.carouselService.getSliderList(this.count)
        .subscribe({
          next: (response: any | null | undefined) => {
            try {  
              if (!response) {
                return;
              }  
              this.sliderList = response.slides;
              console.log(">>>>>>>>>", this.sliderList)
  
            } catch (error) {
              console.log("Error", error);
            }
          },
          error: (error) => {
            console.log('Error in get list', error)
          }
        })
    
  }

  next(){

  }

  prev(){

  }
}

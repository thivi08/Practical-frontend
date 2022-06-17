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

  getSliderList() {
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
  slides: string [] = ['./assets/SBI_Slide_1.jpg', './assets/Eagle_Slide_2.jpg', './assets/Knot_Slide_3.jpg' ]
  i=0;

  getSlide() {
      return this.sliderList[this.i].image;
  }
  getTitle() {
      return this.sliderList[this.i].title;
  }
  getSubTitle() {
      return this.sliderList[this.i].subTitle;
  }

  getPrev() {
      this.i = this.i===0 ? 0 : this.i - 1;
  }
//edit here    
  getNext() {
      this.i = this.i===this.sliderList.length ? this.i : this.i + 1;
  }

}

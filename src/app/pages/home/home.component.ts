import { Component, HostListener } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service: MovieApiServiceService){}

  bannerResult: Array<any> = [];
  trendingResult: Array<any> = [];

  ngOnInit():void{
      this.bannerData();
      this.trendingData();
  }

  bannerData(){
    this.service.bannerApiData().subscribe((result) =>{
        console.log(result, 'banner####');
        this.bannerResult = result.results;
    })
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trending####');
      this.trendingResult = result.results
    })
  } 

}

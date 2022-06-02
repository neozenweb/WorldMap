import { Component, Input, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import 'svgmap/dist/svgMap.min.css';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent  {

  countryName: string = `Country Data \n Click on a country on the map to get details about the country.`;
  countryCapital: string = '';
  countryRegion: string = '';
  countryIncomeLevel: string = '';
  constructor(private demoService: DemoService) { }

 
  loadCountryData(countryCode: string){
  
    this.demoService.getCountryData(countryCode).subscribe(response =>{
      const data = Object.values(response)[1][0];
     
      this.countryName = data['name'];
      this.countryRegion = data['region']['value'];
      this.countryCapital = data['capitalCity'];
      this.countryIncomeLevel= data['incomeLevel']['value'];
      });
    };
    ngAfterViewInit(){
      var svgObj:any = document.getElementsByTagName('svg').namedItem('svgmain')?.getElementsByTagName('path');
     
     for(let i=0; i< svgObj.length;i++){
       svgObj.item(i).addEventListener('mouseover',function(event: any){
        svgObj.item(i).setAttribute('style', 'fill: green');
       });
       svgObj.item(i).addEventListener('mouseout',function(event: any){
       
        svgObj.item(i).setAttribute('style', 'fill: black');
       })
       svgObj.item(i).addEventListener('click',()=>{this.loadCountryData(svgObj.item(i).getAttribute('id'))});
     }
      
    }
    
}

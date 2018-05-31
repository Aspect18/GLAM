import { Component } from '@angular/core';
import { MyserviceService } from "../myservice.service";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from "@angular/platform-browser"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data :JSON;
  constructor(private myserviceService: MyserviceService) { }

  ngOnInit() {
    this.myserviceService.getData().subscribe(res=>{ 
      console.log(res.json().data);
      this.data = res.json().data;

    });
  }

}

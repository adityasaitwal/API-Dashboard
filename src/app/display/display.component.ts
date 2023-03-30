import { Component } from '@angular/core';
import { Serv3Service } from '../serv3.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  item: any;

  constructor(private src: Serv3Service) {

    this.getData();


  }
  getData() {

    this.src.getData().subscribe(Data => {
      console.log(Data)
      this.item = Data

    })
  }

  delete(item: any) {
    if (confirm("Do you really want to delete?")) {
      this.src.delete(item).subscribe(Data => {
        console.log(Data);
        alert('One Record Deleted')
        this.getData();
        

      })

    }


  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-laba';
  nextId = 11;
  sensor = [
    {
      id: 1,
      name: 'Sensor name',
      status: (Math.random() >= 0.5 ? true : false),
      
    },
    {
      id: 2,
      name: 'Sensor name',
      status: (Math.random() >= 0.5 ? true : false),
      
    },
    {
      id: 3,
      name: 'Sensor name',
      status: (Math.random() >= 0.5 ? true : false),
      
    },
    {
      id: 4,
      name: 'Sensor name',
      status: (Math.random() >= 0.5 ? true : false),
      
    },
    {
      id: 5,
      name: 'Sensor name',
      status: (Math.random() >= 0.5 ? true : false),
      
    },
    {
      id: 6,
      name: 'Sensor name',
      status: (Math.random() >= 0.5 ? true : false),
      
    },{
      id: 7,
      name: 'Sensor name',
      status: (Math.random() >= 0.5 ? true : false),
      
    },
    {
      id: 8,
      name: 'Sensor name',
      status: (Math.random() >= 0.5 ? true : false),
      
    },
    {
      id: 9,
      name: 'Sensor name',
      status: (Math.random() >= 0.5 ? true : false),
    }, {
      id: 10,
      name: 'Sensor name',
      status: (Math.random() >= 0.5 ? true : false),
    }
  ]
  delete(event: any) {
   console.log(event);
    for(var i = 0; i < this.sensor.length; i++){
      if(this.sensor[i].id === event)
        this.sensor.splice(i, 1)
    }
  }
  add(event: any){
      console.log('add'+ event.value);
      if(this.sensor.length !== 0){
        var length = this.sensor.length - 1
        console.log('length '+this.sensor.length);
        length = this.sensor[length].id + 1
        console.log('length '+length);
        this.sensor.push({id: length, name: event.value, status: (Math.random() >= 0.5 ? true : false)})
      }else{
        this.sensor.push({id: 1, name: event.value, status: (Math.random() >= 0.5 ? true : false)})
      }
     
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.scss']
})
export class AddPlayersComponent implements OnInit {
//VARIABLES

lista: any[] = [
  { title: 'alex',numberStart: 1  },
  { title: 'padre mix',numberStart: 1  }
];


addPlayer: string = ""

index: number = 0 ;

counter: number = 0

  constructor() { }

  ngOnInit(): void {
  }
  //FUNCIONES


  resta(){
    this.counter--
  }

  suma(){
    this.counter++
  }


  add(addPlayer: string){
    this.lista.push({name: addPlayer, numberStart: 1});

  }

  remove(){
    this.lista.pop

  }


}

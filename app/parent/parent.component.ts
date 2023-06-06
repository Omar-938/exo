import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

omar : Personnages = new Personnages("Bensadia Omar",28,"Rien faire");
toto : Personnages = new Personnages("Toto",18,"des blagues nul");
dewey : Personnages = new Personnages("Dewey",7,"j'ai plus d'inspie la");
goku : Personnages = new Personnages("Goku",99,"la bagare");
vegeta : Personnages = new Personnages("Vegeta",99,"se battre");
personne  = [this.omar,this.toto,this.dewey,this.goku,this.vegeta]



}


export class Personnages{
  constructor(
    public name : string,
    public age : number,
    public hobbie : string,
  ){}
}
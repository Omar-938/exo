import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {
@Input() person : any;



efface(affiche : any){
  const index = this.person.indexOf(affiche);
  this.person.splice(index, 1);
  
}
}

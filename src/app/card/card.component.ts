import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input('my-user') myUser: any = null

  @Output() deleteUser = new EventEmitter()

  removeUser(user: any) {
    this.deleteUser.emit({user: user, message: "passes toutes mes salutations a mon cher papa"})
    console.log('je suis le fils')
  }

  test(data: any) {
    console.log(data)
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { NbMenuService, NB_WINDOW } from '@nebular/theme';
import { Auth } from 'aws-amplify';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string = ''
  headerMenuItems = [
    {
      title: "Logout"
    }
  ]

  constructor(private nbMenuService: NbMenuService, @Inject(NB_WINDOW) private window: any) { }

  ngOnInit(): void {
    this.getName()
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'header-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if (title === 'Logout') {
          Auth.signOut()
        }
      });
  }


  getName() {
    Auth.currentUserInfo().then((response) => {
      this.username = response.attributes.name
    }, (err) => {
      console.log('Error Getting Username', err)
    })
  }

}

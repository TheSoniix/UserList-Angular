import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import {UserListComponent} from './user-list/user-list.component';
import {AddFormularComponent} from './add-formular/add-formular.component';
import {ContentAreaComponent} from './content-area/content-area.component';
import {EditComponent} from './edit/edit.component';
import {Routes, RouterModule} from '@angular/router';
import { ConfirmDeletingComponent } from './confirm-deleting/confirm-deleting.component';
import { AlertsComponent } from './alerts/alerts.component';

const appRoutes: Routes = [
  {path: '', component: ContentAreaComponent},
  {path: 'loggedin/user/:id', component: UserListComponent},
  {path: 'loggedin/user/:id/add', component: AddFormularComponent},
  {path: 'loggedin/user/:id/modal/:editID' , component: UserListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserListComponent,
    AddFormularComponent,
    ContentAreaComponent,
    EditComponent,
    ConfirmDeletingComponent,
    AlertsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

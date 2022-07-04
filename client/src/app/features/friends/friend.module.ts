import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { FriendMapComponent } from './components/friend-map/friend-map.component';
import { FriendCardComponent } from './components/friend-card/friend-card.component';
import { FriendSearchComponent } from './components/friend-search/friend-search.component';

@NgModule({
  declarations: [
    FriendMapComponent,
    FriendCardComponent,
    FriendSearchComponent,
  ],
  imports: [CoreModule],
  exports: [
    FriendMapComponent,
  ],
})
export class FriendModule {}

import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { FriendMapComponent } from './components/friend-map/friend-map.component';

@NgModule({
  declarations: [
    FriendMapComponent,
  ],
  imports: [CoreModule],
  exports: [
    FriendMapComponent,
  ],
})
export class FriendModule {}

import { TransferComponent } from '../companent/transfer/transfer.component';
import { Routes } from '@angular/router';
import { CardDetailComponent } from '../companent/card/card-detail/card-detail.component';
import { TransferDetailComponent } from '../companent/transfer/transfer-detail/transfer-detail.component';
import { UserCardDetailComponent } from '../companent/user/user-card-detail/user-card-detail.component';
import { UserComponent } from '../companent/user/user.component';
import { CardComponent } from '../companent/card/card.component';

export const routes: Routes = [
    // { path: 'home', component: HomeComponent },
    { path: "users", component: UserComponent },
    { path: "transfers", component: TransferComponent },
    { path: "transfer/:id", component: TransferDetailComponent },
    { path: "cards/:id", component: CardDetailComponent },
    { path: 'cards', component: CardComponent },
    { path: 'users/cards/:user.id', component: UserCardDetailComponent }

];

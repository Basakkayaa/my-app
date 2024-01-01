import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserWithCardDto } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card-detail.component.html',
  styleUrl: './user-card-detail.component.scss'
})
export class UserCardDetailComponent implements OnInit {
  userWithCardDto!: UserWithCardDto;

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.getWithCard(1);
  }

  getWithCard(id: number) {
    this.userService.getWithCardById(id).subscribe(result => {
      this.userWithCardDto = result;
    })
  }

}

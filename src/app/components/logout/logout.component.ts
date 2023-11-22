import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  isSuccessful = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}




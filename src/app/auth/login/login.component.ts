import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {Message} from '../../shared/models/message.model';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'rudkevycho-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  form: FormGroup;
  message: Message;

  ngOnInit() {
    this.message = new Message('', 'danger');

    this.route.queryParams.subscribe((params: Params) => {
      if (params.nowCanLogin) {
        this.showMessage(new Message('Congrats! Now you can sign in.', 'success'));
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
    const formData = this.form.value;

    this.userService.getUserByEmail(formData.email)
      .subscribe((users: User[]) => {
        if (users && users.length > 0) {
          const user = users[0];
          if (user.password === formData.password) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['/system', 'bill']);
          } else {
            this.showMessage(new Message('Password is not correct. Try again', 'danger'));
          }
        } else {
          this.showMessage(new Message('Password is not correct', 'danger'));
        }
      });
  }
}

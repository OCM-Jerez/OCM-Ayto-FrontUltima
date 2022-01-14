export class UserService {
    passwordExist(user: IregisterUser): Observable<boolean> {
        const url = this.URL_API + '/passwordExist';
        return this.httpClient.post<boolean>(url, user)
    }
}




export class AppLoginComponent {
    login() {
        this._user = {
            "login": this.formGroup.value.user,
            "password": this.formGroup.value.password
        }

        // console.log(this.formGroup.value);
        // const { user, password } = this.formGroup.value;
        // const userLogin: any = { user, password }
        // console.log(userLogin);

        const res = this._userService.loginExist(this._user)
            .subscribe(
                async response => {
                    // await Swal.fire('', `El usuario ${this._user.login} existe`, 'success');
                    this.passwordExist(true)
                },
                async error => {
                    // Si no existe el Usuario.
                    // await Swal.fire('', `El usuario ${this._user.login} no existe en la base de datos`, 'error');
                    this.passwordExist(false)
                }
            )
    }

    passwordExist(usuarioExist: boolean) {
        const res1 = this._userService.passwordExist(this._user)
            .subscribe(
                async response => {
                    if (usuarioExist) {
                        this._router.navigate(['/favorites/dashboardanalytics']);
                    } else {
                        Swal.fire('', `Usuario o password erroneo`, 'error');
                    }
                },
                error => {
                    // Si no existe el password.
                    Swal.fire('', `Usuario o password erroneo`, 'error');
                }
            )
    }
}
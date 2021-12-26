

https://angular.io/guide/providers

src/app/user.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
}

You can now inject UserService anywhere in your application.

The service itself is a class that the CLI generated and that's decorated with @Injectable(). By default, this decorator has a providedIn property, which creates a provider for the service. In this case, providedIn: 'root' specifies that Angular should provide the service in the root injector.


********************************************************************************************



import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductGuardService implements CanActivate {
  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // const id = +route.url[1].path;
    const id = +route.paramMap.get('id');
    console.log('product id: ', id);
    if (isNaN(id) || id < 1) {
      alert('Invalid Product Id');
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }

}

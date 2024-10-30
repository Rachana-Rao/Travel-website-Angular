import { HttpInterceptorFn } from '@angular/common/http';

export const authtokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('angularToken');
  const reqcopy = req.clone({
    setHeaders:{
      Authorization : `Bearer $(authToken)`
    }
  })
  return next(req);
};

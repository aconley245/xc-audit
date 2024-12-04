import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const apiToken = localStorage.getItem('apiToken');
  const tenant = localStorage.getItem('tenant');

  if (apiToken && tenant) {
    const clonedReq = req.clone({
      setHeaders: {
        auth: 'APIToken ' +apiToken,
        tenant: tenant
      }
    });

    return next(clonedReq);
  } else {
    alert("No Distributed Cloud API Credentials Found");
    return next(req);
  }
};

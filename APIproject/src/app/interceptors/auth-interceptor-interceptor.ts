import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  // El policía aduanero vigila los paquetes que salen...
  const token = localStorage.getItem('auth_token');

  if (token) {
    // Si tenemos pulsera VIP, clonamos la carta y le imponemos el HEADER
    const reqConVIP = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next(reqConVIP); // ¡Viaja de categoría suprema!
  }

  return next(req); // Viaja normal (como pordiosero sin login)
};

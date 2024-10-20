export default defineNuxtRouteMiddleware((to, from) => {
    const isAuthenticated = localStorage.getItem('auth');
    
    
    if (!isAuthenticated && to.path === '/categories_products') {
      return navigateTo('/login');
    }
  });
  

export function logoutHandler() {
    
    localStorage.clear('state');
    Cookies.remove('username');
    location.href = location.href;
    
}
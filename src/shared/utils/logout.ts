export default function logout() {
  sessionStorage.removeItem('token');
  localStorage.clear();
}

export const useCart = () => useState(() => []);
export const useAuth = () => useState(() => ({
  isAuthenticated: false,
}));
export const useProfiles = () => useState(() => [
  { id: 1, name: 'Dhoni', email: 'dhoni@gmail.com', password: 'password'},
  { id: 2, name: 'Nikhil', email: 'nikhil@gmail.com', password: 'password'},
  { id: 3, name: 'Gill', email: 'gill@gmail.com', password: 'password'},
  { id: 4, name: 'Kohli', email: 'kohli@gmail.com', password: 'password'},
  { id: 5, name: 'Tarun', email: 'Tarun@gmail.com', password: 'password'}
]);
export const usePageVisitCount = () => useState(() => 0)



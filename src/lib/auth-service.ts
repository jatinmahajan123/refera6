// auth-service.ts
export interface User {
    email: string;
    password: string;
  }
  
  export class AuthService {
    private readonly USERS_STORAGE_KEY = 'referralHub_users';
    
    public registerUser(email: string, password: string): boolean {
      const users = this.getUsers();
      
      // Check if user already exists
      if (users.some(user => user.email === email)) {
        return false;
      }
      
      // Add new user
      users.push({ email, password });
      localStorage.setItem(this.USERS_STORAGE_KEY, JSON.stringify(users));
      return true;
    }
    
    public validateUser(email: string, password: string): boolean {
      const users = this.getUsers();
      return users.some(user => user.email === email && user.password === password);
    }
    
    private getUsers(): User[] {
      const usersJson = localStorage.getItem(this.USERS_STORAGE_KEY);
      return usersJson ? JSON.parse(usersJson) : [];
    }
  }
  
  // Create singleton instance
  export const authService = new AuthService();
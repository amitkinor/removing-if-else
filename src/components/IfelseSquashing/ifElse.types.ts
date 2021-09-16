export type User = {
  name: string;
  role: 'shopper' | 'driver';
};

type UserRole = (user: User) => void;

export type Roles = {
  [key: string]: UserRole;
  Default: UserRole;
};

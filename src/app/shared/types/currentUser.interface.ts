export interface CurrentUserInterface {
  id: number;
  email: string;
  createdAT: string;
  updatedAT: string;
  username: string;
  bio: string | null;
  image: string | null;
  token: string;
}

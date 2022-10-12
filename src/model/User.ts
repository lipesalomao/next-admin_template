export default interface IUser {
  uid: string;
  email: string | null;
  name: string | null;
  token: string;
  provider: string | null;
  photoUrl: string | null;
}

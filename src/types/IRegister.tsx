export interface IRegister {
  userId: string | null;
  password: string | null;
  passwordConfirm?: string | null;
  email: string | null;
  phoneNum?: string | null;
}

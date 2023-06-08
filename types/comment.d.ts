export interface Comment {
  msg: string;
  addedAt: string;
  addedBy: {
    username: string;
    email: string;
  };
  addedOn: string;
}

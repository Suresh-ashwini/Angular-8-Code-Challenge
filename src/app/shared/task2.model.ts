export interface List {
  userId: number;
  id: number;
  title: number;
  completed: boolean;
}
export class FullList {
  list: List[];
}


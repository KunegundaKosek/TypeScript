export type Category = "life" | "work" | "education" | "sport";

export interface Todo {
  title: string;
  done: boolean;
  category: Category;
}
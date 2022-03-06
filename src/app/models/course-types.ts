export type CourseType = {
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
  id: string;
  editable? : boolean
}

export enum CoursesFormType {
  ADD_FORM = 'add',
  EDIT_FORM = 'edit',
}

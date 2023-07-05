export interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployees: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
  const initial = firstName.charAt(0).toUpperCase();
  const fullName = `${initial}. ${lastName}`;

  return fullName;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export interface StudentInterface {
  firstName: string;
  lastName: string;
}

export interface StudentClassInterface {
  new (firstName: string, lastName: string): StudentClass;
}

export class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
}

workOnHomework(): string {
  return "Currently working";
}

displayName(): string {
  return this.firstName;
  }
}

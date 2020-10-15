import { AppUser } from './app-user.model';
import { Student } from './student.model';

export class Parent {
  private  id:number;
	private  cin:string;

	private  appUser:AppUser;

	private  etudiants :Array<Student>;
}

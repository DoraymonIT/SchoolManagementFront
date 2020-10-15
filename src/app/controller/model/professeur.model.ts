import { AppUser } from './app-user.model';
import { Student } from './student.model';

export class Professeur {
  private  id:number;

	private  cin:string;
	private  salaire:number;

	private  dateEmbauche:Date;

	private  appUser:AppUser;

	private  etudiants :Array<Student> ;
}

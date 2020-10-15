import { AppUser } from './app-user.model';
import { Parent } from './parent.model';
import { Professeur } from './professeur.model';

export class Student {
  private  id:number;
	private  cne:string;

	private professeurs:Array<Professeur>;

	private  parent:Parent;

	private  appUser:AppUser;
}

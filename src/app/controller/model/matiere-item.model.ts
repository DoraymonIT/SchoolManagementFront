
import { Cours } from './cours.model';
import { Local } from './local.model';
import { Matiere } from './matiere.model';

export class MatiereItem {

  private  id:number;

	private  dateDebut:Date;

	private  dateFin:Date;

	private  cours:Cours;

	private  matiere:Matiere;

	private  local:Local;
	private  deleted:boolean;
}

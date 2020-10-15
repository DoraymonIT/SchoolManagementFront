import { MatiereItem } from "./matiere-item.model";
import { Niveau } from "./niveau.model";

export class Matiere {
  private id: number;
  private libelle: string;

  private niveau: Niveau;
  private deleted: boolean;

  private matiereItems: Array<MatiereItem>;
}

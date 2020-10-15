import { MatiereItem } from "./matiere-item.model";

export class Devoir {
  private id: number;

  private matiereItem: MatiereItem;
  private description: string;
  private fileName: string;
  private fileUrl: string;
  private deleted: boolean;
}

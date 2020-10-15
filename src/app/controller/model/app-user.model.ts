import { Role } from "./role.model";

export class AppUser {
  private id: number;
  // info personnel
  private nom: string;
  private prenom: string;
  private age: number;
  private sexe: string;
  private telephone: string;
  private imageUrl: string;
  // compte info
  private username: string;
  private motDePass: string;
  private activer: boolean;
  private question: string;
  private reponse: string;

  private dateCreation: Date;

  private dateModification: Date;
  private supprimer: boolean;
  private roles: Array<Role>;
}

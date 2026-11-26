export interface Ability {
    id: number;
    name: string;
    description: string;
}
 
export interface Element {
    id: number;
    name: string;
    icon: string;
    color: string;
    combatStyle: string;
    description: string;
    characterImage: string;
    abilities: Ability[];
}
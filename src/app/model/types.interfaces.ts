export interface ITypes {
  count: number;
  next: null;
  previous: null;
  results: IResults[]
}

export interface IResults {
  name: string;
  url: string;
}
export interface Types {
  id: number;
  name: string;
  damage_relations: DamageRelations;
  past_damage_relations: PastDamageRelation[];
  game_indices: GameIndex[];
  generation: Generation;
  move_damage_class: Generation;
  names: Name[];
  pokemon: Pokemon[];
  moves: Generation[];
}

export interface DamageRelations {
  no_damage_to: Generation[];
  half_damage_to: Generation[];
  double_damage_to: Generation[];
  no_damage_from: Generation[];
  half_damage_from: Generation[];
  double_damage_from: Generation[];
}

export interface Generation {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  generation: Generation;
}

export interface Name {
  name: string;
  language: Generation;
}

export interface PastDamageRelation {
  generation: Generation;
  damage_relations: DamageRelations;
}

export interface Pokemon {
  slot: number;
  pokemon: Generation;
}

export interface IPokemon {
  name: string;
  weight: number;
  types: TypeElement[];
  moves: MoveElement[]
}


export interface TypeElement {
  slot: number;
  type: TypeType;
}

export interface TypeType {
  name: string;
  url: string;
}


export interface MoveElement {
  move: MoveLearnMethodClass;
  version_group_details: VersionGroupDetail[];
}

export interface MoveLearnMethodClass {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  version_group: MoveLearnMethodClass;
  move_learn_method: MoveLearnMethodClass;
}
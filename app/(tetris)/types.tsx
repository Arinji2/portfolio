export enum Block {
  I = "I",
  J = "J",
  L = "L",
  O = "O",
  S = "S",
  T = "T",
  Z = "Z",
}

export enum EmptyCell {
  Empty = "Empty",
}
export type CellOptions = Block | EmptyCell;
export type BoardShape = CellOptions[][];
export type BlockShape = boolean[][];

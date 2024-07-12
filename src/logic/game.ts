import { ValueOf } from "type-fest";

export type Player = {
  x: number;
  y: number;
};

export const COLORS = {
  BASE_GREEN: "#20963f",
  WALL_COLOR: "#8b4513",
  INSIDE_COLOR: "#d2a679",
  PATH_COLOR: "#c2b280",
  WATER_COLOR: "#4fa4f4",
  SOIL_COLOR: "#4d3300",
} as const;

export type Color = ValueOf<typeof COLORS>;

export type Tile = {
  text: string;
  color: Color;
};

export type Grid = Array<Array<Tile>>;

export const TILES = {
  GRASS: { text: "🌱", color: COLORS.BASE_GREEN },
  LAWN: { text: "", color: COLORS.BASE_GREEN },
  TREE: { text: "🌲", color: COLORS.BASE_GREEN },
  WALL: { text: "🟫", color: COLORS.WALL_COLOR },
  DOOR: { text: "🚪", color: COLORS.WALL_COLOR },
  WINDOW: { text: "🪟", color: COLORS.WALL_COLOR },
  BED: { text: "🛌", color: COLORS.INSIDE_COLOR },
  INSIDE: { text: "", color: COLORS.INSIDE_COLOR },
  CHAIR: { text: "🪑", color: COLORS.INSIDE_COLOR },
  LOGS: { text: "🪵", color: COLORS.BASE_GREEN },
  CORN: { text: "🌾", color: COLORS.SOIL_COLOR },
  WATER: { text: "🌊", color: COLORS.WATER_COLOR },
  PATH: { text: "", color: COLORS.PATH_COLOR },
  BUSH: { text: "🌿", color: COLORS.BASE_GREEN },
  ROCK: { text: "🪨", color: COLORS.BASE_GREEN },
  LEAF_TREE: { text: "🌳", color: COLORS.BASE_GREEN },
  SQUIRREL: { text: "🐿️", color: COLORS.BASE_GREEN },
  CARROT: { text: "🥕", color: COLORS.SOIL_COLOR },
  BRICK: { text: "🧱", color: COLORS.BASE_GREEN },
  WATER_LILY: { text: "🪷", color: COLORS.WATER_COLOR },
  FISH: { text: "🐟", color: COLORS.WATER_COLOR },
  COLORFUL_FISH: { text: "🐠", color: COLORS.WATER_COLOR },
  FLOWER: { text: "🌸", color: COLORS.BASE_GREEN },
  ROSE: { text: "🌹", color: COLORS.BASE_GREEN },
  TULIP: { text: "🌷", color: COLORS.BASE_GREEN },
  DAISY: { text: "🌼", color: COLORS.BASE_GREEN },
  SUNFLOWER: { text: "🌻", color: COLORS.BASE_GREEN },
  VIOLET: { text: "🪻", color: COLORS.BASE_GREEN },
  COW: { text: "🐄", color: COLORS.BASE_GREEN },
  STATUE: { text: "🗿", color: COLORS.BASE_GREEN },
  FOUNTAIN: { text: "⛲", color: COLORS.BASE_GREEN },
} as const satisfies Record<string, Tile>;

export const DEFAULT_GRID: Grid = [
  [
    TILES.TREE,
    TILES.TREE,
    TILES.TREE,
    TILES.LEAF_TREE,
    TILES.TREE,
    TILES.TREE,
    TILES.TREE,
    TILES.TREE,
    TILES.TREE,
    TILES.PATH,
    TILES.TREE,
    TILES.TREE,
    TILES.TREE,
    TILES.TREE,
    TILES.BUSH,
    TILES.TREE,
  ],
  [
    TILES.TREE,
    TILES.TREE,
    TILES.ROCK,
    TILES.TREE,
    TILES.BUSH,
    TILES.TREE,
    TILES.LEAF_TREE,
    TILES.TREE,
    TILES.LAWN,
    TILES.PATH,
    TILES.LOGS,
    TILES.LOGS,
    TILES.LOGS,
    TILES.LOGS,
    TILES.LOGS,
    TILES.LOGS,
  ],
  [
    TILES.TREE,
    TILES.TREE,
    TILES.WALL,
    TILES.WALL,
    TILES.WALL,
    TILES.WALL,
    TILES.WALL,
    TILES.WALL,
    TILES.LAWN,
    TILES.PATH,
    TILES.LOGS,
    TILES.LAWN,
    TILES.GRASS,
    TILES.COW,
    TILES.LAWN,
    TILES.LOGS,
  ],
  [
    TILES.TREE,
    TILES.LEAF_TREE,
    TILES.WALL,
    TILES.INSIDE,
    TILES.INSIDE,
    TILES.INSIDE,
    TILES.INSIDE,
    TILES.WALL,
    TILES.LAWN,
    TILES.PATH,
    TILES.LOGS,
    TILES.GRASS,
    TILES.COW,
    TILES.LAWN,
    TILES.LAWN,
    TILES.LOGS,
  ],
  [
    TILES.TREE,
    TILES.ROCK,
    TILES.WALL,
    TILES.INSIDE,
    TILES.INSIDE,
    TILES.INSIDE,
    TILES.INSIDE,
    TILES.WALL,
    TILES.LAWN,
    TILES.PATH,
    TILES.LOGS,
    TILES.LAWN,
    TILES.LAWN,
    TILES.LAWN,
    TILES.COW,
    TILES.LOGS,
  ],
  [
    TILES.LEAF_TREE,
    TILES.TREE,
    TILES.WALL,
    TILES.INSIDE,
    TILES.INSIDE,
    TILES.INSIDE,
    TILES.INSIDE,
    TILES.WALL,
    TILES.LAWN,
    TILES.PATH,
    TILES.LOGS,
    TILES.LOGS,
    TILES.LOGS,
    TILES.LOGS,
    TILES.LOGS,
    TILES.LOGS,
  ],
  [
    TILES.TREE,
    TILES.LAWN,
    TILES.WALL,
    TILES.WALL,
    TILES.DOOR,
    TILES.WALL,
    TILES.WALL,
    TILES.WALL,
    TILES.LAWN,
    TILES.PATH,
    TILES.LAWN,
    TILES.CARROT,
    TILES.CARROT,
    TILES.CARROT,
    TILES.CARROT,
    TILES.LAWN,
  ],
  [
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.LAWN,
    TILES.CARROT,
    TILES.CARROT,
    TILES.CARROT,
    TILES.CARROT,
    TILES.LAWN,
  ],
  [
    TILES.TREE,
    TILES.LAWN,
    TILES.LAWN,
    TILES.LAWN,
    TILES.PATH,
    TILES.LAWN,
    TILES.GRASS,
    TILES.VIOLET,
    TILES.LAWN,
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.LAWN,
  ],
  [
    TILES.TREE,
    TILES.LOGS,
    TILES.LAWN,
    TILES.LAWN,
    TILES.PATH,
    TILES.TULIP,
    TILES.FOUNTAIN,
    TILES.GRASS,
    TILES.LAWN,
    TILES.LAWN,
    TILES.LAWN,
    TILES.CORN,
    TILES.CORN,
    TILES.CORN,
    TILES.CORN,
    TILES.LAWN,
  ],
  [
    TILES.TREE,
    TILES.LEAF_TREE,
    TILES.LAWN,
    TILES.LAWN,
    TILES.PATH,
    TILES.LAWN,
    TILES.SUNFLOWER,
    TILES.LAWN,
    TILES.FLOWER,
    TILES.GRASS,
    TILES.LAWN,
    TILES.CORN,
    TILES.CORN,
    TILES.CORN,
    TILES.CORN,
    TILES.LAWN,
  ],
  [
    TILES.TREE,
    TILES.TREE,
    TILES.LAWN,
    TILES.LAWN,
    TILES.PATH,
    TILES.LAWN,
    TILES.LAWN,
    TILES.GRASS,
    TILES.LAWN,
    TILES.DAISY,
    TILES.LAWN,
    TILES.CORN,
    TILES.CORN,
    TILES.CORN,
    TILES.CORN,
    TILES.LAWN,
  ],
  [
    TILES.TREE,
    TILES.ROCK,
    TILES.LAWN,
    TILES.LAWN,
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.PATH,
    TILES.LAWN,
    TILES.LAWN,
    TILES.LAWN,
    TILES.LAWN,
    TILES.WATER,
    TILES.WATER,
    TILES.WATER,
    TILES.WATER,
  ],
  [
    TILES.TREE,
    TILES.SQUIRREL,
    TILES.ROCK,
    TILES.LEAF_TREE,
    TILES.LAWN,
    TILES.LAWN,
    TILES.LAWN,
    TILES.PATH,
    TILES.LAWN,
    TILES.GRASS,
    TILES.LAWN,
    TILES.WATER,
    TILES.WATER,
    TILES.WATER,
    TILES.WATER,
    TILES.COLORFUL_FISH,
  ],
  [
    TILES.TREE,
    TILES.LEAF_TREE,
    TILES.TREE,
    TILES.TREE,
    TILES.TREE,
    TILES.LAWN,
    TILES.LAWN,
    TILES.PATH,
    TILES.GRASS,
    TILES.STATUE,
    TILES.GRASS,
    TILES.WATER,
    TILES.WATER,
    TILES.WATER_LILY,
    TILES.WATER,
    TILES.WATER,
  ],
  [
    TILES.TREE,
    TILES.TREE,
    TILES.TREE,
    TILES.TREE,
    TILES.TREE,
    TILES.BUSH,
    TILES.LAWN,
    TILES.PATH,
    TILES.LAWN,
    TILES.GRASS,
    TILES.LAWN,
    TILES.WATER,
    TILES.WATER,
    TILES.WATER,
    TILES.FISH,
    TILES.WATER,
  ],
];

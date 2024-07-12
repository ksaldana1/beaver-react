export class Scene {
  constructor(
    private grid: typeof DEFAULT_GRID,
    private player: { x: number; y: number },
    private dialog: string
  ) {
    this.grid = grid;
    this.player = player;
    this.dialog = dialog;
  }

  setCell(x: number, y: number, content: Tile) {
    this.grid[y][x] = content;
  }
}

export type Player = {
  x: number;
  y: number;
};

function rep(value, times) {
  return Array.from({ length: times }, () => value);
}

export const COLORS = {
  BASE_GREEN: "#20963f",
  WALL_COLOR: "#8b4513",
  INSIDE_COLOR: "#d2a679",
  PATH_COLOR: "#c2b280",
  WATER_COLOR: "#4fa4f4",
  SOIL_COLOR: "#4d3300",
} as const;

export type Tile = {
  text: string;
  color: (typeof COLORS)[keyof typeof COLORS];
};

export type Grid = Array<Array<Tile>>;

const GRASS = { text: "🌱", color: COLORS.BASE_GREEN };
const LAWN = { text: "", color: COLORS.BASE_GREEN };
const TREE = { text: "🌲", color: COLORS.BASE_GREEN };
const WALL = { text: "🟫", color: COLORS.WALL_COLOR };
const DOOR = { text: "🚪", color: COLORS.WALL_COLOR };
const WINDOW = { text: "🪟", color: COLORS.WALL_COLOR };
const BED = { text: "🛌", color: COLORS.INSIDE_COLOR };
const INSIDE = { text: "", color: COLORS.INSIDE_COLOR };
const CHAIR = { text: "🪑", color: COLORS.INSIDE_COLOR };
const LOGS = { text: "🪵", color: COLORS.BASE_GREEN };
const CORN = { text: "🌾", color: COLORS.SOIL_COLOR };
const WATER = { text: "🌊", color: COLORS.WATER_COLOR };
const PATH = { text: "", color: COLORS.PATH_COLOR };
const BUSH = { text: "🌿", color: COLORS.BASE_GREEN };
const ROCK = { text: "🪨", color: COLORS.BASE_GREEN };
const LEAF_TREE = { text: "🌳", color: COLORS.BASE_GREEN };
const SQUIRREL = { text: "🐿️", color: COLORS.BASE_GREEN };
const CARROT = { text: "🥕", color: COLORS.SOIL_COLOR };
const BRICK = { text: "🧱", color: COLORS.BASE_GREEN };
const WATER_LILY = { text: "🪷", color: COLORS.WATER_COLOR };
const FISH = { text: "🐟", color: COLORS.WATER_COLOR };
const COLORFUL_FISH = { text: "🐠", color: COLORS.WATER_COLOR };

const FLOWER = { text: "🌸", color: COLORS.BASE_GREEN };
const ROSE = { text: "🌹", color: COLORS.BASE_GREEN };
const TULIP = { text: "🌷", color: COLORS.BASE_GREEN };
const DAISY = { text: "🌼", color: COLORS.BASE_GREEN };
const SUNFLOWER = { text: "🌻", color: COLORS.BASE_GREEN };
const VIOLET = { text: "🪻", color: COLORS.BASE_GREEN };
const COW = { text: "🐄", color: COLORS.BASE_GREEN };
const STATUE = { text: "🗿", color: COLORS.BASE_GREEN };
const FOUNTAIN = { text: "⛲", color: COLORS.BASE_GREEN };

export const DEFAULT_GRID: Grid = [
  [
    TREE,
    TREE,
    TREE,
    LEAF_TREE,
    TREE,
    TREE,
    TREE,
    TREE,
    TREE,
    PATH,
    TREE,
    TREE,
    TREE,
    TREE,
    BUSH,
    TREE,
  ],
  [
    TREE,
    TREE,
    ROCK,
    TREE,
    BUSH,
    TREE,
    LEAF_TREE,
    TREE,
    LAWN,
    PATH,
    LOGS,
    LOGS,
    LOGS,
    LOGS,
    LOGS,
    LOGS,
  ],
  [
    TREE,
    TREE,
    WALL,
    WALL,
    WALL,
    WALL,
    WALL,
    WALL,
    LAWN,
    PATH,
    LOGS,
    LAWN,
    GRASS,
    COW,
    LAWN,
    LOGS,
  ],
  [
    TREE,
    LEAF_TREE,
    WALL,
    INSIDE,
    INSIDE,
    INSIDE,
    INSIDE,
    WALL,
    LAWN,
    PATH,
    LOGS,
    GRASS,
    COW,
    LAWN,
    LAWN,
    LOGS,
  ],
  [
    TREE,
    ROCK,
    WALL,
    INSIDE,
    INSIDE,
    INSIDE,
    INSIDE,
    WALL,
    LAWN,
    PATH,
    LOGS,
    LAWN,
    LAWN,
    LAWN,
    COW,
    LOGS,
  ],
  [
    LEAF_TREE,
    TREE,
    WALL,
    INSIDE,
    INSIDE,
    INSIDE,
    INSIDE,
    WALL,
    LAWN,
    PATH,
    LOGS,
    LOGS,
    LOGS,
    LOGS,
    LOGS,
    LOGS,
  ],
  [
    TREE,
    LAWN,
    WALL,
    WALL,
    DOOR,
    WALL,
    WALL,
    WALL,
    LAWN,
    PATH,
    LAWN,
    CARROT,
    CARROT,
    CARROT,
    CARROT,
    LAWN,
  ],
  [
    PATH,
    PATH,
    PATH,
    PATH,
    PATH,
    PATH,
    PATH,
    PATH,
    PATH,
    PATH,
    LAWN,
    CARROT,
    CARROT,
    CARROT,
    CARROT,
    LAWN,
  ],
  [
    TREE,
    LAWN,
    LAWN,
    LAWN,
    PATH,
    LAWN,
    GRASS,
    VIOLET,
    LAWN,
    PATH,
    PATH,
    PATH,
    PATH,
    PATH,
    PATH,
    LAWN,
  ],
  [
    TREE,
    LOGS,
    LAWN,
    LAWN,
    PATH,
    TULIP,
    FOUNTAIN,
    GRASS,
    LAWN,
    LAWN,
    LAWN,
    CORN,
    CORN,
    CORN,
    CORN,
    LAWN,
  ],
  [
    TREE,
    LEAF_TREE,
    LAWN,
    LAWN,
    PATH,
    LAWN,
    SUNFLOWER,
    LAWN,
    FLOWER,
    GRASS,
    LAWN,
    CORN,
    CORN,
    CORN,
    CORN,
    LAWN,
  ],
  [
    TREE,
    TREE,
    LAWN,
    LAWN,
    PATH,
    LAWN,
    LAWN,
    GRASS,
    LAWN,
    DAISY,
    LAWN,
    CORN,
    CORN,
    CORN,
    CORN,
    LAWN,
  ],
  [
    TREE,
    ROCK,
    LAWN,
    LAWN,
    PATH,
    PATH,
    PATH,
    PATH,
    LAWN,
    LAWN,
    LAWN,
    LAWN,
    WATER,
    WATER,
    WATER,
    WATER,
  ],
  [
    TREE,
    SQUIRREL,
    ROCK,
    LEAF_TREE,
    LAWN,
    LAWN,
    LAWN,
    PATH,
    LAWN,
    GRASS,
    LAWN,
    WATER,
    WATER,
    WATER,
    WATER,
    COLORFUL_FISH,
  ],
  [
    TREE,
    LEAF_TREE,
    TREE,
    TREE,
    TREE,
    LAWN,
    LAWN,
    PATH,
    GRASS,
    STATUE,
    GRASS,
    WATER,
    WATER,
    WATER_LILY,
    WATER,
    WATER,
  ],
  [
    TREE,
    TREE,
    TREE,
    TREE,
    TREE,
    BUSH,
    LAWN,
    PATH,
    LAWN,
    GRASS,
    LAWN,
    WATER,
    WATER,
    WATER,
    FISH,
    WATER,
  ],
];

export const HOME_SCENE = new Scene(
  DEFAULT_GRID,
  { x: 4, y: 4 },
  "Welcome to your cozy beaver lodge! Explore your home, garden, and the surrounding nature."
);

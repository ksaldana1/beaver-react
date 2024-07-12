import {
  Grid as GridType,
  Player as PlayerType,
  Tile as TileType,
} from "../logic/game";

type GridProps = {
  board: GridType;
  player: PlayerType;
};

export function Grid({ board, player }: GridProps) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {board.map((row, rowIndex) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {row.map((tile, tileIndex) => (
              <Tile
                tile={tile}
                occupied={player.x === rowIndex && player.y === tileIndex}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

type TileProps = {
  tile: TileType;
  // is player on this Tile
  occupied?: boolean;
};

const TILE_SIZE = 25;

function Tile({ tile, occupied }: TileProps) {
  return (
    <div
      style={{
        height: TILE_SIZE,
        width: TILE_SIZE,
        backgroundColor: tile.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {occupied ? <Player /> : tile.text}
    </div>
  );
}

function Player() {
  return "🦫";
}

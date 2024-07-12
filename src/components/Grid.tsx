import { AppState } from "../App";
import { Grid as GridType, Tile as TileType } from "../logic/game";

type GridProps = {
  board: GridType;
  player: AppState["player"];
};

export function Grid({ board, player }: GridProps) {
  return (
    <div className="flex flex-col">
      {board.map((row, rowIndex) => (
        <Row player={player} row={row} index={rowIndex} key={rowIndex} />
      ))}
    </div>
  );
}

type RowProps = {
  row: Array<TileType>;
  index: number;
  player: AppState["player"];
};

function Row({ row, player, index }: RowProps) {
  return (
    <div className="flex justify-center">
      {row.map((tile, tileIndex) => (
        <Tile
          key={tileIndex}
          tile={tile}
          occupied={
            player.position.x === tileIndex && player.position.y === index
          }
        />
      ))}
    </div>
  );
}

type TileProps = {
  tile: TileType;
  // is player on this Tile
  occupied?: boolean;
};

const TILE_SIZE = 30;

function Tile({ tile, occupied }: TileProps) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: TILE_SIZE,
        width: TILE_SIZE,
        backgroundColor: tile.color,
      }}
    >
      {occupied ? <Player /> : tile.text}
    </div>
  );
}

function Player() {
  return "🦫";
}

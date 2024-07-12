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
    <div className="h-full flex flex-col justify-center">
      {board.map((row, rowIndex) => (
        <Row player={player} row={row} index={rowIndex} key={rowIndex} />
      ))}
    </div>
  );
}

type RowProps = {
  row: Array<TileType>;
  index: number;
  player: PlayerType;
};

function Row({ row, player, index }: RowProps) {
  return (
    <div className="flex justify-center">
      {row.map((tile, tileIndex) => (
        <Tile
          key={tileIndex}
          tile={tile}
          occupied={player.x === index && player.y === tileIndex}
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

const TILE_SIZE = 25;

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

import { useAppContext } from "../context/AppContext";
import { Grid as GridType, Tile as TileType } from "../logic/game";

type GridProps = {
  board: GridType;
};

export function Grid({ board }: GridProps) {
  return (
    <div className="flex flex-col pt-4">
      {board.map((row, rowIndex) => (
        <Row row={row} index={rowIndex} key={rowIndex} />
      ))}
    </div>
  );
}

type RowProps = {
  row: Array<TileType>;
  index: number;
};

function Row({ row, index }: RowProps) {
  const { player } = useAppContext();
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
  const { player } = useAppContext();
  return (
    <span
      style={{
        transform: player.facing === "LEFT" ? "scaleX(1)" : "scaleX(-1)",
      }}
    >
      🦫
    </span>
  );
}

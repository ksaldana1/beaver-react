import { Grid as GridType, Tile as TileType } from "../logic/game";

type GridProps = {
  board: GridType;
};

export function Grid({ board }: GridProps) {
  return (
    <div style={{ height: "100%" }} className="grid-container">
      {board.map((row) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {row.map((tile) => (
              <Tile tile={tile} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

type TileProps = {
  tile: TileType;
};

const TILE_SIZE = 20;

function Tile({ tile }: TileProps) {
  return (
    <div
      style={{
        height: TILE_SIZE,
        width: TILE_SIZE,
        backgroundColor: tile.color,
      }}
    >
      {tile.text}
    </div>
  );
}

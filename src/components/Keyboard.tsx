import { DIRECTION, Direction } from "../logic/app";

const KEYBOARD_BUTTON_CLASSES =
  "text-2xl bg-green-600 text-white rounded-md cursor-pointer w-36 h-10";

export function Keyboard({
  onClick,
}: {
  onClick: (direction: Direction) => void;
}) {
  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={() => onClick(DIRECTION.UP)}
          className={KEYBOARD_BUTTON_CLASSES}
        >
          ↑
        </button>
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => onClick(DIRECTION.LEFT)}
          className={KEYBOARD_BUTTON_CLASSES}
        >
          ←
        </button>
        <button
          onClick={() => onClick(DIRECTION.DOWN)}
          className={KEYBOARD_BUTTON_CLASSES}
        >
          ↓
        </button>
        <button
          onClick={() => onClick(DIRECTION.RIGHT)}
          className={KEYBOARD_BUTTON_CLASSES}
        >
          →
        </button>
      </div>
    </>
  );
}

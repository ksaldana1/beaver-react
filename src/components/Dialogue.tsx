import { useAppContext } from "../context/AppContext";
import "./Dialogue.css";

export function Dialogue() {
  const { dialogue } = useAppContext();
  return (
    <div className="bg-gray-200 border-y-2 border-gray-300 h-40 w-3/4">
      <div id="typewriter" className="p-4">
        {dialogue}
      </div>
    </div>
  );
}

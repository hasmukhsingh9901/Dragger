import { useDrop } from "react-dnd";
import { COMPONENT_TYPES } from "./Builder";

const DropZone = ({ onDrop, children, id }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: Object.values(COMPONENT_TYPES),
    drop: (item) => onDrop(item, id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-4 border-2 ${
        isOver
          ? "border-purple-500 bg-purple-100"
          : "border-dashed border-gray-300"
      } min-h-16 rounded-md mb-4`}
    >
      {children}
    </div>
  );
};

export default DropZone;

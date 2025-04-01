import { useDrag } from "react-dnd";

const DraggableElement = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: item.type,
    item: { id: item.id, type: item.type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 bg-white border border-gray-300 rounded cursor-move ${
        isDragging ? "opacity-50 text-black" : "opacity-100 text-black"
      }`}
    >
      {item.label}
    </div>
  );
};

export default DraggableElement;

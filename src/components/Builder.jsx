"use client"
import DraggableElement from "./Draggable";


export const COMPONENT_TYPES = {
  TEXT: "text",
  IMAGE: "image",
  BUTTON: "button",
  HEADING: "heading",
  FORM: "form",
};


const Sidebar = () => {
  const elements = [
    { id: "text", type: COMPONENT_TYPES.TEXT, label: "Text Block" },
    { id: "image", type: COMPONENT_TYPES.IMAGE, label: "Image" },
    { id: "button", type: COMPONENT_TYPES.BUTTON, label: "Button" },
    { id: "heading", type: COMPONENT_TYPES.HEADING, label: "Heading" },
    { id: "form", type: COMPONENT_TYPES.FORM, label: "Form Field" },
  ];

  return (
    <div className="w-64 bg-gray-100 p-4 border-r border-gray-300 h-screen">
      <h2 className="text-xl font-bold mb-4">Elements</h2>
      <div className="space-y-2">
        {elements.map((item) => (
          <DraggableElement key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

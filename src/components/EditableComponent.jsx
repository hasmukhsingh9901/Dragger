"use client";
import { useState } from "react";
import { COMPONENT_TYPES } from "./Builder";

const EditableComponent = ({ component, onRemove, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(component.content || "");

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(component.id, content);
    setEditing(false);
  };

  const renderComponent = () => {
    switch (component.type) {
      case COMPONENT_TYPES.TEXT:
        return editing ? (
          <textarea
            className="w-full p-2 border text-black"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            autoFocus
          />
        ) : (
          <p className="mb-2 text-black">{content || "Text block (click to edit)"}</p>
        );
      case COMPONENT_TYPES.HEADING:
        return editing ? (
          <input
            type="text"
            className="w-full p-2 border text-xl font-bold text-black"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            autoFocus
          />
        ) : (
          <h2 className="text-xl font-bold mb-2 text-black">
            {content || "Heading (click to edit)"}
          </h2>
        );
      case COMPONENT_TYPES.BUTTON:
        return editing ? (
          <input
            type="text"
            className="w-full p-2 border text-black"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            autoFocus
          />
        ) : (
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            {content || "Button"}
          </button>
        );
      case COMPONENT_TYPES.IMAGE:
        return (
          <div className="relative">
            <div className="border border-gray-300 p-2 text-center bg-gray-100">
              {content ? (
                <img src={content} alt="Preview" className="max-h-40 mx-auto" />
              ) : (
                <div className="h-32 flex items-center justify-center">
                  {editing ? (
                    <input
                      type="text"
                      className="w-full p-2 border text-black"
                      placeholder="Enter image URL"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      autoFocus
                    />
                  ) : (
                    <span>Image placeholder (click to edit)</span>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      case COMPONENT_TYPES.FORM:
        return (
          <div className="border border-gray-300 p-2 rounded">
            <label className="block mb-1 font-medium">
              {editing ? (
                <input
                  type="text"
                  className="w-full p-2 border"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  autoFocus
                />
              ) : (
                content || "Form Field Label (click to edit)"
              )}
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="User input here"
              disabled
            />
          </div>
        );
      default:
        return <div>Unknown component type</div>;
    }
  };

  return (
    <div className="relative group border border-gray-200 p-2 my-2 rounded bg-white">
      <div className="flex justify-end absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {editing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white p-1 rounded mr-1 text-xs"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white p-1 rounded mr-1 text-xs"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onRemove(component.id)}
          className="bg-red-500 text-white p-1 rounded text-xs"
        >
          Remove
        </button>
      </div>
      <div
        onClick={!editing ? handleEdit : undefined}
        className={editing ? "" : "cursor-pointer"}
      >
        {renderComponent()}
      </div>
    </div>
  );
};

export default EditableComponent;

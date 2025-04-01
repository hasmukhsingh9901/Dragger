"use client"
import Sidebar from '@/components/Builder';
import Canvas from '@/components/Canvas';
import PropertiesPanel from '@/components/PropertiesPanel';
import { useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const Toolbar = ({ onSave, onPreview, onExit }) => {
  return (
    <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
      <div className="text-xl font-bold">Website Builder</div>
      <div className="space-x-2">
        <button
          onClick={onPreview}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Preview
        </button>
        <button
          onClick={onSave}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
        >
          Save
        </button>
        <button
          onClick={onExit}
          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
        >
          Exit
        </button>
      </div>
    </div>
  );
};


const WebsiteBuilder = () => {
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const nextId = useRef(1);

  const handleDrop = (item, sectionId) => {
    const newComponent = {
      id: `${item.type}-${nextId.current++}`,
      type: item.type,
      content: '',
      sectionId,
    };
    setComponents([...components, newComponent]);
    setSelectedComponent(newComponent);
  };

  const handleRemoveComponent = (id) => {
    setComponents(components.filter((comp) => comp.id !== id));
    if (selectedComponent && selectedComponent.id === id) {
      setSelectedComponent(null);
    }
  };

  const handleEditComponent = (id, content) => {
    setComponents(
      components.map((comp) =>
        comp.id === id ? { ...comp, content } : comp
      )
    );

    if (selectedComponent && selectedComponent.id === id) {
      setSelectedComponent({ ...selectedComponent, content });
    }
  };

  const handleUpdateComponent = (updatedComponent) => {
    setComponents(
      components.map((comp) =>
        comp.id === updatedComponent.id ? updatedComponent : comp
      )
    );
    setSelectedComponent(updatedComponent);
  };

  const handleSave = () => {
    alert('Website saved successfully!');
    console.log('Saved website data:', components);
  };

  const handlePreview = () => {
    alert('Opening website preview...');

  };

  const handleExit = () => {
    if (confirm('Are you sure you want to exit? Unsaved changes will be lost.')) {
      alert('Exiting builder...');

    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-screen">
        <Toolbar
          onSave={handleSave}
          onPreview={handlePreview}
          onExit={handleExit}
        />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <Canvas
            components={components}
            onDrop={handleDrop}
            onRemoveComponent={handleRemoveComponent}
            onEditComponent={handleEditComponent}
          />
          <PropertiesPanel
            selectedComponent={selectedComponent}
            onUpdateComponent={handleUpdateComponent}
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default WebsiteBuilder;
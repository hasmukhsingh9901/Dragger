import { COMPONENT_TYPES } from "./Builder";

const PropertiesPanel = ({ selectedComponent, onUpdateComponent }) => {
  if (!selectedComponent) {
    return (
      <div className="w-64 bg-gray-100 p-4 border-l border-gray-300">
        <h2 className="text-xl font-bold mb-4">Properties</h2>
        <p className="text-gray-500">Select an element to edit its properties</p>
      </div>
    );
  }

  return (
    <div className="w-64 bg-gray-100 p-4 border-l border-gray-300">
      <h2 className="text-xl font-bold mb-4">Properties</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea
            className="w-full p-2 border rounded"
            value={selectedComponent.content || ''}
            onChange={(e) =>
              onUpdateComponent({
                ...selectedComponent,
                content: e.target.value,
              })
            }
          />
        </div>
        
        {/* Additional properties based on component type */}
        {selectedComponent.type === COMPONENT_TYPES.BUTTON && (
          <div>
            <label className="block mb-1 font-medium">Button Style</label>
            <select
              className="w-full p-2 border rounded"
              value={selectedComponent.style || 'primary'}
              onChange={(e) =>
                onUpdateComponent({
                  ...selectedComponent,
                  style: e.target.value,
                })
              }
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="outline">Outline</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};


export default PropertiesPanel;
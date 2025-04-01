import DropZone from "./DropZone";
import EditableComponent from "./EditableComponent";

const Canvas = ({ components, onDrop, onRemoveComponent, onEditComponent }) => {
    const sections = [
      { id: 'header', label: 'Header' },
      { id: 'content', label: 'Main Content' },
      { id: 'sidebar', label: 'Sidebar' },
      { id: 'footer', label: 'Footer' },
    ];
  
    return (
      <div className="flex-1 p-4 bg-white overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-zinc-700">Website Preview</h2>
          
          {sections.map((section) => (
            <div key={section.id} className="mb-8">
              <h3 className="text-lg font-medium mb-2 text-zinc-700">{section.label}</h3>
              <DropZone id={section.id} onDrop={onDrop}>
                {components
                  .filter((comp) => comp.sectionId === section.id)
                  .map((component) => (
                    <EditableComponent
                      key={component.id}
                      component={component}
                      onRemove={onRemoveComponent}
                      onEdit={onEditComponent}
                    />
                  ))}
                {components.filter((comp) => comp.sectionId === section.id).length === 0 && (
                  <div className="text-zinc-700 text-center py-4">
                    Drop elements here
                  </div>
                )}
              </DropZone>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Canvas;
import Draggable from "./components/draggable";
import Droppable from "./components/droppable";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import useDropped from "./stores/dropped";

function App() {
  const isDropped = useDropped((state) => state.isDropped);
  const items = Array.from(Array(10).keys());

  const onIsDropped = useDropped((state) => state.onIsDropped);

  const onDragEnd = (event: DragEndEvent) => {
    console.log(event.over);

    if (event.over && event.over.id === "over") {
      onIsDropped(true);
    }
  };
  const draggableMarkup = (
    <Draggable>Drag me</Draggable>
  );

  return (
    <>
      <DndContext onDragEnd={onDragEnd}>
        <div flex="~ justify-center gap-2 items-center">
          {items.map((v, i) => (
            <Draggable key={i} reference={JSON.stringify(v)}>
              {v}
            </Draggable>
          ))}
        </div>

        <Droppable
          reference="reference"
          overflow-y="auto"
          flex="~ flex-wrap gap-8 items-center"
        >
          {items.map((v, i) => (
            <div key={i} size="24" bg="blue">
              {v}
            </div>
          ))}
        </Droppable>
        <Droppable reference="over">
          {isDropped ? draggableMarkup : "Drop here"}
        </Droppable>
      </DndContext>
    </>
  );
}

export default App;

import { useDraggable } from "@dnd-kit/core";
import type { HTMLAttributes, ReactNode } from "react";

interface DraggableProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  reference?: string;
}

export default function Draggable({
  children,
  reference,
  ...props
}: DraggableProps) {
  const { listeners, attributes, setNodeRef, transform } = useDraggable({
    id: reference!!,
    data: {
      title: reference
    }
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      style={style}
      size="24"
      bg="blue"
      {...props}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}

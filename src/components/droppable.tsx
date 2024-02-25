import { useDroppable } from "@dnd-kit/core";
import type { HTMLAttributes, ReactNode } from "react";

interface DroppableProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  reference: string;
}

export default function Droppable({
  children,
  reference,
  ...props
}: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: reference,
  });

  console.log(isOver);

  return (
    <div
      ref={setNodeRef}
      {...props}
      size="96"
      p="2"
      shadow="md"
      bg={`${isOver ? "blue" : "yellow"}`}
    >
      {children}
    </div>
  );
}

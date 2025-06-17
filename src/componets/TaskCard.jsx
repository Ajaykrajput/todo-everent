import React from "react";

const TaskCard = ({ task }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  return (
    <div
      className="bg-white border m-1 p-2 rounded cursor-move text-black"
      draggable
      onDragStart={handleDragStart}
    >
      {task.title}
    </div>
  );
};

export default TaskCard;

import React from 'react'

type TaskType = {
    task: string
}

export const TaskItem = ({task}: TaskType) => {
  return (
    <tr className="text-sm">
        <td className="px-5 py-5">
            {task}
        </td>
        <td className="px-5 py-5">
            <button>Delete</button>
        </td>
    </tr>
  )
}

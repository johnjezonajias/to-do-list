import React from 'react'
import { TaskItem } from './TaskItem'

type TaskType = {
    id: number,
    task: string
}

type TasksType = {
    tasks: TaskType[]
}

export const TaskList = ({ tasks }: TasksType) => {
  return (
    <div className='text-center'>
        <h1 className="text-4xl font-bold mb-4">To Do List</h1>
        <table className="min-w-full divide-y divide-gray-900">
            <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-900 text-left text-md font-medium text-gray-500 uppercase">Task</th>
                    <th className="px-6 py-3 bg-gray-900 text-left text-md font-medium text-gray-500 uppercase">Action</th>
                </tr>
            </thead>
            <tbody className="bg-gray-950 divide-y divide-gray-900">
                {tasks.map(({task, id}: TaskType) => (
                    <TaskItem key={id} task={task} />
                ))}
            </tbody>
        </table>
    </div>
  )
}

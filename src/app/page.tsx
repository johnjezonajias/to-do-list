import { TaskList } from "@/components/TaskList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <TaskList tasks={[
        { id: 1, task: 'Get this done!' },
        { id: 2, task: 'Make it good!' },
        { id: 3, task: 'Is is what it is!' },
      ]} />
    </main>
  );
}

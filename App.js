import React from 'react';

const tasks = [
  { id: 1, subject: 'Physics', topic: 'Laws of Motion' },
  { id: 2, subject: 'Chemistry', topic: 'Periodic Table' },
  { id: 3, subject: 'Biology', topic: 'Cell Structure' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-md">Study Task Manager</h1>
      <div className="grid gap-4 w-full max-w-md">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-2xl p-4 shadow-lg">
            <h2 className="text-xl font-semibold">{task.subject}</h2>
            <p className="text-gray-700">{task.topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

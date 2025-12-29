1️⃣ Create the project
npm create vite@latest react-goals


What this does:

npm create vite@latest
→ asks npm to run Vite’s official project generator (latest version)

react-goals
→ this is just the folder / project name
You can rename it to:

task-manager

personal-task-manager

react-tasks

During this step, Vite will ask you:

Framework → React

Variant → JavaScript (or TypeScript if you want later)

At the end, you get a new folder with a ready React setup.

2️⃣ Enter the project folder
cd react-goals


Now you are inside the project.

If you run:

ls


You’ll see things like:

index.html
src/
package.json
vite.config.js


This means: ✅ project created correctly.

3️⃣ Install dependencies
npm install


This step:

Reads package.json

Downloads React, React DOM, Vite, etc.

Creates node_modules/

No React app works without this step.

4️⃣ Start the dev server
npm run dev


What happens now:

Vite starts a local development server

You’ll see something like:

Local: http://localhost:5173/


Open that URL in your browser → 🎉 React app running.

5️⃣ Where your Task Manager code goes

Now the important part 👇
You do not put the project code in the terminal.

You edit files here:

src/
├── App.jsx        ← MAIN place you work
├── main.jsx
└── components/


For your Personal Task Manager:

src/
├── App.jsx
├── components/
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   └── TaskItem.jsx


Replace the default App.jsx with the code we built step-by-step.

6️⃣ Mental Model (Very Important)

Think of it like this:

Vite → engine (like Apache / Nginx for frontend)

React → brain

Components → Lego blocks

App.jsx → control room

npm run dev → turn the lights on

You don’t “run a component”.
You run the app, and React decides which components appear.

7️⃣ Common beginner mistakes (you avoided 👍)

❌ Trying to open App.jsx directly in browser

❌ Forgetting npm install

❌ Editing files outside src

❌ Thinking React works without a dev server

You’re doing it right.
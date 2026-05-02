TASK CLI
Its a simple command-line task tracker built using Node.js
The functions that can be executed in this project are:
1. Add a task
2. List tasks
3. Marks tasks as: in-progress, mark-done
4. Delete a task
5. Update a task description

Tech Used
Node.js
Built-in fs module (for file handling)
JSON file as storage

How to Run
Clone the repository and run commands using Node:
node index.js <command> [arguments]

Commands
1. Add a task
node index.js add "Buy groceries"
2. List all tasks
node index.js list
3. List tasks by status
node index.js list done
node index.js list todo
node index.js list in-progress
4. Update a task
node index.js update 1 "New description"
5. Delete a task
node index.js delete 1
6. Mark task as in-progress
node index.js mark-in-progress 1
7. Mark task as done
node index.js mark-done 1

Task Structure
Each task is stored in tasks.json with the following fields:
- id → unique identifier
- description → task details
- status → todo / in-progress / done
- createdAt → creation timestamp
- updatedAt → last updated timestamp

Notes
- The tasks.json file is automatically created when the first task is added.
- No external libraries are used.
- This project is built for learning backend fundamentals like CLI handling and file system operations.

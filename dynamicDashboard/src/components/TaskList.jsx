let taskObjects = [
    {
        id: 1,
        taskName: "Mop floor",
        completed: false,
    },
    {
        id: 2,
        taskName: "Laundry",
        completed: false,
    },
    {
        id: 3,
        taskName: "Dishes",
        completed: true,
    }
]


const TaskList = () => taskObjects.map(task => {
    return (
        <ul>

            <li key={task.id} style={{ color: task.completed ? "green" : "white" }}>
                {task.taskName} {(task.completed === true) ? `\u2705` : `\u274C`}
            </li>
            <div>
                {/* {const completedCount = completedTask.length;
                    const incompletedCount = incompletedTask.length;}
                {taskObjects.map(task => {

                    const completedTask = task.filter(task => 
                    task.isCompleted
                    );
                    const incompletedTask = task.filter(task => 
                    !task.isCompleted
                    );
                    


                })} */}
            </div>

        </ul >
    )
})

export default TaskList;
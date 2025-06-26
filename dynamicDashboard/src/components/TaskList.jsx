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
];


export const TaskList = () => taskObjects.map(task => {
    return (
        <ul>

            <li key={task.id} style={{ color: task.completed ? "green" : "white" }}>
                {task.taskName} {(task.completed === true) ? `\u2705` : `\u274C`}
            </li>

        </ul >
    )
})

export const TaskCounter = () => {
    const completedCount = taskObjects.filter(task => task.completed).length;
    const incompletedCount = taskObjects.length - completedCount;

    return (
        <p>Completed Tasks: {completedCount} | Incompleted Tasks: {incompletedCount}</p>
    );

}


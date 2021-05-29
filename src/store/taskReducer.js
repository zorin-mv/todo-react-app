const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETED_TASK = "COMPLETED_TASK";

const defaultState = {
    tasks: [
        {
            folderId: 1,
            taskId: 1,
            text: "Buy milk",
            completed: true,
        },
        {
            folderId: 1,
            taskId: 2,
            text: "Buy bread",
            completed: false,
        },
        {
            folderId: 2,
            taskId: 3,
            text: "washing",
            completed: false,
        },
    ]
}

const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(
                    (item) => item.taskId !== action.payload
                ),
            };
        case COMPLETED_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks.map((item) =>
                        item.taskId === action.payload.id
                            ? { ...item, completed: action.payload.completed }
                            : item
                    ),
                ],
            };
        default:
            return state;
    }
};

export default taskReducer;

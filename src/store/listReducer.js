const ADD_LIST = "ADD_LIST";
const REMOVE_LIST = "REMOVE_LIST";
const EDIT_FOLDER = "EDIT_FOLDER";

const defaultState = {
    list: [
        {
            name: "Purchases",
            id: 1,
            colorId: 3,
        },
        {
            name: "Housework",
            id: 2,
            colorId: 2,
        },
    ],
    colors: [
        {
            id: 1,
            hex: "#C9D1D3",
            name: "grey",
        },
        {
            id: 2,
            hex: "#42B883",
            name: "green",
        },
        {
            id: 3,
            hex: "#64C4ED",
            name: "blue",
        },
        {
            id: 4,
            hex: "#FFBBCC",
            name: "pink",
        },
        {
            id: 5,
            hex: "#B6E6BD",
            name: "lime",
        },
        {
            id: 6,
            hex: "#C355F5",
            name: "purple",
        },
        {
            id: 7,
            hex: "#110133",
            name: "black",
        },
        {
            id: 8,
            hex: "#FF6464",
            name: "red",
        },
    ]
}

const listReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_LIST:
            return { ...state, list: [...state.list, action.payload] };
        case REMOVE_LIST:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.payload),
            };
        case EDIT_FOLDER:
            return {
                ...state,
                list: [
                    ...state.list.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, name: action.payload.name }
                            : item
                    ),
                ],
            };
        default:
            return state;
    }
};

export default listReducer;

const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Dada"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Bye-bye"}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {...state,
                messages: [...state.messages, {
                    id: state.messages.length,
                    message: action.dialogMesssage
                }]};

        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageCreator = (dialogMesssage) => ({ type: SEND_MESSAGE, dialogMesssage });

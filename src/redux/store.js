import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        dialogsPage: {
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
            ],
            newMessageBody: ""
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "What's up guys?", likesCount: 14},
                {id: 4, message: "It's going well", likesCount: 13},
            ],
            newPostText: ""
        },
        sidebar: {
            friends: [
                {id: 1, name: "John", avatar: "https://www.verasport.pl/pub/skin/default-skin/img/avatar.png"},
                {id: 2, name: "Bob", avatar: "https://img.pngio.com/parent-directory-avatar-2png-39689-png-images-pngio-avatarpng-256_256.png"},
                {id: 3, name: "David", avatar: "https://monteirolobato.com.br/public/assets/admin/images/avatars/avatar1_big@2x.png"}
            ]
        }
    },
    _callSubscriber() {
        console.log("Subscribe")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;
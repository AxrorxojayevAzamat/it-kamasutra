let initialState = {
    friends: [
        {id: 1, name: "John", avatar: "https://www.verasport.pl/pub/skin/default-skin/img/avatar.png"},
        {id: 2, name: "Bob", avatar: "https://img.pngio.com/parent-directory-avatar-2png-39689-png-images-pngio-avatarpng-256_256.png"},
        {id: 3, name: "David", avatar: "https://monteirolobato.com.br/public/assets/admin/images/avatars/avatar1_big@2x.png"}
    ]
}

export const sidebarReducer = (state = initialState, action) => {
    return state;
}
export default sidebarReducer;
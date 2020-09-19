import profileReducer, {setStatus} from "./profile-reducer";


it('Setting status of profile', () => {
    let state = {
        status: ""
    }

    let action = setStatus("Hello")

    let newState = profileReducer(state, action)

    expect(newState.status).toBe("Hello")
})
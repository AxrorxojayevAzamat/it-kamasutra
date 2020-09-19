import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControl/FormControl";
import {maxLengthOfFormControl, required} from "../../../utils/validations/validate";

const maxLength = maxLengthOfFormControl(10)

const MyPostsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="newPost" placeholder="Post text" component={Textarea} validate={[required, maxLength]}/>
            </div>
            <div>
                <button>App post</button>
            </div>
        </form>
    )
}

let MyPostsReduxForm = reduxForm({form: "myposts"})(MyPostsForm)

class MyPosts extends React.Component {
    render() {
        let postsElements = this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

        let addPost = (values) => {
            this.props.addPost(values.newPost);
            values.newPost = ''
        }

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>

                <div className={s.posts}>
                    <MyPostsReduxForm onSubmit={addPost}/>
                    {postsElements}
                </div>
            </div>
        );
    }
}


export default MyPosts;
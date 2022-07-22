import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";
import {ProfileStateType} from "../../../Redux/profile-reducer";
import {useFormik} from "formik";
import {Button, FormGroup, TextField} from "@mui/material";

type FormikErrorType = {
  title?: string
}

function MyPosts({addPost}: MyPostsType) {

  const profilePage = useAppSelector<ProfileStateType>(state => state.profilePage)
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (values.title.length > 300) {
        errors.title = 'Maximum value 300 characters';
      } else if (values.title.length === 0) {
        errors.title = 'Minimum value 1 character';
      }
      return errors;
    },
    onSubmit: values => {
      addPost(values.title)
      formik.resetForm();
    },
  })

  let postsElement = profilePage.posts.map(p =>
     (<Post key={p.id}
            id={p.id}
            message={p.message}
            likeCounts={p.likeCounts}/>))

  return (
     <div className={s.postsBlock}>
       <h3>My posts</h3>
       <form onSubmit={formik.handleSubmit}>
         <FormGroup>
           <TextField sx={{width: '30ch', marginBottom: '5px'}}
                      size="small"
                      label="Enter your post"
                      {...formik.getFieldProps('title')}/>
           <Button sx={{width: '100px', height: '40px'}}
                   type={'submit'}
                   variant={'contained'}
                   color={'secondary'}>
             publish
           </Button>
         </FormGroup>
       </form>
       <div className={s.posts}>
         {postsElement}
       </div>
     </div>
  )
}

export default MyPosts;


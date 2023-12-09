import { Editor } from '@tinymce/tinymce-react'
import { withFormik } from 'formik';
import React, { useRef, useEffect } from 'react'

import { connect, useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';


function CreateProject(props) {
  const arrayCategory = useSelector(state => state.ProjectCategoryReducer.arrProjectCategory)
  const dispatch = useDispatch();


  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = props;
  const handleEditorChange = (content, editor) => {
    setFieldValue('description', content);

  }
  useEffect(() => {
    dispatch({
      type: 'GET_ALL_PROJECT_CATEGORY_SAGA'
    });
  }, [])

  return (
    <div className="container m-5">
      <h3>Create project</h3>
      <form action="" className="container" onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-group">
          <p>Name</p>
          <input className="form-control" name="projectName" />
        </div>
        <div className="form-group">
          <Editor
            name="description"

            apiKey='exx2a1fe3ujtdk0k0p3z03jfkc3pue2uqc3i3iitajt73y1c'
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            onEditorChange={handleEditorChange}

          />

        </div>
        <div className="form-group">
          <select name="categoryId" className="form-control">
            {arrayCategory.map((item, index) => {
              return <option value={item.id} key={index}>{item.projectCategoryName}</option>
            })}
          </select>
        </div>
        <button className="btn btn-outline-primary" type="submit">Create project</button>
      </form>
    </div>
  )
}

const createProjectForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    projectName: '',
    description: '',
    categoryId: props.arrProjectCategory[0]?.id
  }),
  validationSchema: Yup.object().shape({


  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    console.log('props value: ', values);
    props.dispatch({
      type: 'CREATE_PROJECT_SAGA',
      newProject: values
    })


  },
  displayName: 'Login CyberBugs',

})(CreateProject);

const mapStateToProps = (state) => {

  return {
    arrProjectCategory: state.ProjectCategoryReducer.arrProjectCategory
  }
}



export default connect(mapStateToProps)(createProjectForm);

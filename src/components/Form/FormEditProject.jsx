import { Editor } from '@tinymce/tinymce-react'
import React, { useEffect } from 'react'
import { withFormik } from 'formik';

import { connect, useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Select } from 'antd';
function FormEditProject(props) {
    const arrayCategory = useSelector(state => state.ProjectCategoryReducer.arrProjectCategory)
    console.log('array ', arrayCategory);
    const dispatch = useDispatch();
    const submitForm = (e) => {
        e.preventDefault();
        alert('submit edit');
    }
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setValues,
        setFieldValue
    } = props;

    useEffect(() => {
        // dispatch({
        //     type:  'OPEN_FORM_EDIT',
        //     submitFunction: submitForm
        // })

        //Gọi api load project category 
        dispatch({ type: 'GET_ALL_PROJECT_CATEGORY_SAGA' })
    }, [])

    const handleEditorChange = (content, editor) => {
        // setFieldValue('description', content)
    }
    return (
        <form className="container-fuild" onSubmit={submitForm}>
            <div className="row">
                <div className="col-4">

                    <div className="form-group">
                        <p className="font-weight-bold">Project id</p>
                        <input value={values.id} disabled className="form-control" name="id" />
                    </div>


                </div>
                <div className="col-4">
                    <div className="form-group">
                        <p className="font-weight-bold">Project name</p>
                        <input value={values.projectName} className="form-control" name="projectName" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="form-group">
                        <p className="font-weight-bold">Project Category</p>
                        <select className="form-control" name="categoryId" value={values.categoryId}>
                            {arrayCategory?.map((item, index) => {
                                return <option key={index} value={item.id}>
                                    {item.projectCategoryName}
                                </option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <p className="font-weight-bold">Description</p>
                        <Editor
                            name="descriptionFormEdit"
                            initialValue={values.description}
                            value={values.description}
                            apiKey='exx2a1fe3ujtdk0k0p3z03jfkc3pue2uqc3i3iitajt73y1c'

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
                </div>
            </div>
        </form >
    )
}



const openEditProject = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        const { projectEditClick } = props;
        console.log(props);
        return {
            id: projectEditClick?.id,
            projectName: projectEditClick.projectName,
            description: projectEditClick.description,
            categoryId: projectEditClick.categoryId
        }
    },
    validationSchema: Yup.object().shape({


    }),
    handleSubmit: (values, { props, setSubmitting }) => {




    },

})(FormEditProject);

const mapStateToProps = (state) => {

    return {
        projectEditClick: state.ProjectEditReducer.projectEdit
    }
}



export default connect(mapStateToProps)(openEditProject);

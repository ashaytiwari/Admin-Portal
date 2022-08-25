import React, { useState } from 'react';

import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { IconButton } from '@mui/material';

import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import Button from 'component/UI/Button/Button';

import { validateForm } from './utilities';

import styles from './CreatePDFEditor.module.scss';

function CreatePDFEditor(props) {

  const { onCreate } = props;

  const { enqueueSnackbar } = useSnackbar();

  const [description, setDescription] = useState(['']);

  const formik = useFormik({
    initialValues: {
      title: '',
      heading: '',
      subHeading: '',
      image: '',
      link: ''
    },
    validate: validateForm,
    onSubmit: handleCreatePDFFormSubmitEvent
  });

  function handleAddMoreDescription() {

    if (description.length === 10) {

      enqueueSnackbar('Maximum 10 set of descriptions can be added!', { variant: 'error' });

      return;
    }

    const _description = [...description];

    _description.push('');

    setDescription(_description);

  }

  function handleRemoveDescriptionControl(index) {

    const _description = [...description];

    _description.splice(index, 1);

    setDescription(_description);

  }

  function handleDescriptionInputControlChange(index, value) {

    const _description = [...description];

    _description[index] = value;

    setDescription(_description);

  }

  function handleCreatePDFFormSubmitEvent() {

    const data = {
      ...formik.values,
      description
    };

    onCreate(data);

  }

  function renderError(error) {

    if (!error) {
      return;
    }

    return <p className={styles.errorMessage}>{error}</p>;

  }

  function renderInputTextFormRow(label, fieldName, placeholder) {

    let error = '';

    if (formik.errors[fieldName] !== '' && formik.touched[fieldName] === true) {
      error = formik.errors[fieldName];
    }

    const inputTextFormControlAttributes = {
      type: 'text',
      name: fieldName,
      placeholder,
      className: styles.inputTextFormControl,
      value: formik.values[fieldName],
      onChange: formik.handleChange,
      onBlur: formik.handleBlur
    };

    return (
      <div className={styles.formRow}>
        <label className={styles.formLabel}>{label}</label>
        <input {...inputTextFormControlAttributes} />
        {renderError(error)}
      </div>
    );
  }

  function renderRemoveDescriptionControl(index) {

    if (index === 0) {
      return;
    }

    const descriptionRemoveControlAttributes = {
      className: styles.descriptionRemoveControl,
      onClick() {
        handleRemoveDescriptionControl(index);
      }
    };

    return (
      <IconButton {...descriptionRemoveControlAttributes}>
        <DeleteOutlineRoundedIcon />
      </IconButton>
    );
  }

  function renderTextareaFormControlRow(item, index) {

    const descriptionFormControlContainerAttributes = {
      key: index,
      className: styles.descriptionFormControlContainer
    };

    const textareaControlAttributes = {
      placeholder: 'Text description',
      className: styles.inputTextFormControl,
      rows: 5,
      value: item,
      onChange(event) {
        handleDescriptionInputControlChange(index, event.target.value);
      }
    };

    return (
      <div {...descriptionFormControlContainerAttributes}>
        <textarea {...textareaControlAttributes} />
        {renderRemoveDescriptionControl(index)}
      </div>
    );

  }

  function renderAddMoreDescriptionControl() {

    const addMoreDescriptionControl = {
      type: 'button',
      className: styles.addMoreControl,
      onClick: handleAddMoreDescription
    };

    return (
      <button {...addMoreDescriptionControl}>Add more description</button>
    );
  }

  function renderFormTextSection() {

    return (
      <div className={styles.formRow}>

        <label className={styles.formLabel}>Text description</label>

        <div className={styles.descriptionControls}>
          {
            description.map((item, index) => (
              renderTextareaFormControlRow(item, index)
            ))
          }
        </div>

        {renderAddMoreDescriptionControl()}

      </div>
    );
  }

  const createPDFEditorAttributes = {
    id: styles.createPDFEditorMain,
    onSubmit: formik.handleSubmit
  };

  return (
    <form {...createPDFEditorAttributes}>

      {renderInputTextFormRow('Title*', 'title', 'Title for pdf document')}
      {renderInputTextFormRow('Heading*', 'heading', 'Heading')}
      {renderInputTextFormRow('Sub heading*', 'subHeading', 'Sub heading')}
      {renderInputTextFormRow('Image*', 'image', 'Image url(address)')}
      {renderInputTextFormRow('Link', 'link', 'Link url')}

      {renderFormTextSection()}

      <Button type='submit'>Create</Button>

    </form>
  );
}

export default CreatePDFEditor;
import React from 'react';

import { useFormik } from 'formik';

import Button from 'component/UI/Button/Button';

import styles from './CreatePDFEditor.module.scss';

function CreatePDFEditor() {

  const formik = useFormik({
    initialValues: {
      title: '',
      heading: '',
      subHeading: '',
      image: '',
      text: [''],
      link: ''
    },
    validate() { },
    onSubmit() { }
  });

  function handleAddMoreDescription() {

    const text = '';

    // formik.hand
  }

  function renderInputTextFormRow(label, fieldName, placeholder) {

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
      </div>
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
      onChange() {

      }
    };

    return (
      <div {...descriptionFormControlContainerAttributes}>
        <textarea {...textareaControlAttributes} />
      </div>
    );

  }

  function renderAddMoreDescriptionControl() {

    const addMoreDescriptionControl = {
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
            formik.values.text.map((item, index) => (
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
    </form>
  );
}

export default CreatePDFEditor;
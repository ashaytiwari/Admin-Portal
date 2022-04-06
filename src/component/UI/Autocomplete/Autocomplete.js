import React, { useState, useRef } from 'react';

import useOnClickOutside from 'utilities/hooks/useOnClickOutside';

import globalStyles from 'styles/Global.module.scss';

import styles from './Autocomplete.module.scss';

function Autocomplete(props) {

  const { data, RenderElement, onSelect, onFilter } = props;

  const autocompleteContainerReference = useRef(null);

  const [displayDataListMenu, setDisplayDataListMenu] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [cursorPosition, setCursorPosition] = useState(-1);

  const showDataListMenu = () => {
    setDisplayDataListMenu(true);
  };

  const hideDataListMenu = () => {
    setDisplayDataListMenu(false);
  };

  useOnClickOutside(autocompleteContainerReference, hideDataListMenu);

  function renderAutocompleteItem(data, index) {

    const autocompleteItemAttributes = {
      data,
      key: index
    };

    return <RenderElement {...autocompleteItemAttributes} />;
  }

  function renderNoResultFoundContent() {

    return <div className={`${styles.dataListMenu} ${styles.noResultFound}`}>
      <span className={styles.noResultFoundText}>No country found for your search.</span>
    </div>;

  }

  function renderDataListMenu() {

    if (displayDataListMenu === false) {
      return;
    }

    const filteredList = onFilter(data, searchText);

    if (filteredList.length === 0) {
      return renderNoResultFoundContent();
    }

    return <div className={`${styles.dataListMenu} ${globalStyles.scrollbarSection}`}>
      {
        filteredList.map((item, index) => (
          renderAutocompleteItem(item, index)
        ))
      }
    </div>;

  }

  const autocompleteInputAttributes = {
    type: 'text',
    className: styles.autocompleteInput,
    placeholder: 'Search country',
    value: searchText,
    onChange(event) {
      setSearchText(event.target.value);
    },
    onClick() {
      showDataListMenu();
    }
  };

  const autoCompleteContainerAttributes = {
    className: styles.autocompleteContainer,
    ref: autocompleteContainerReference
  };

  return (
    <div {...autoCompleteContainerAttributes}>

      <input {...autocompleteInputAttributes} />

      {renderDataListMenu()}

    </div>
  );
}

export default Autocomplete;
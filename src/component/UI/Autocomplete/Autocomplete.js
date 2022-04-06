import React, { useState, useRef } from 'react';

import useOnClickOutside from 'utilities/hooks/useOnClickOutside';

import globalStyles from 'styles/Global.module.scss';

import styles from './Autocomplete.module.scss';

function Autocomplete(props) {

  const { data, RenderElement, onSelect } = props;

  const autocompleteContainerReference = useRef(null);

  const [displayDataListMenu, setDisplayDataListMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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

  function renderDataListMenu() {

    if (displayDataListMenu === false) {
      return;
    }

    return <div className={`${styles.dataListMenu} ${globalStyles.scrollbarSection}`}>
      {
        data.map((item, index) => (
          renderAutocompleteItem(item, index)
        ))
      }
    </div>;

  }

  const autocompleteInputAttributes = {
    type: 'text',
    className: styles.autocompleteInput,
    placeholder: 'Search country',
    value: searchTerm,
    onChange(event) {
      setSearchTerm(event.target.value);
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
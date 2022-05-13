import React, { useState, useRef, useEffect } from 'react';

import useOnClickOutside from 'utilities/hooks/useOnClickOutside';

import globalStyles from 'styles/Global.module.scss';

import styles from './Autocomplete.module.scss';

function Autocomplete(props) {

  const { data, RenderElement, onSelect, onFilter } = props;

  const autocompleteContainerReference = useRef(null);
  const dataListMenuReference = useRef(null);

  const [displayDataListMenu, setDisplayDataListMenu] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [cursorPosition, setCursorPosition] = useState(-1);
  const [filteredList, setFilteredList] = useState(onFilter(data, searchText));

  useEffect(() => {

    if (cursorPosition < 0) {
      return;
    }

    if (dataListMenuReference.current === null) {
      return;
    }

    const listItems = Array.from(dataListMenuReference.current.children);
    const listItem = listItems[cursorPosition];

    if (typeof listItem !== 'undefined') {
      scrollIntoView(listItem.offsetTop);
    }

  }, [cursorPosition]);

  useEffect(() => {

    setFilteredList(onFilter(data, searchText));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const scrollIntoView = (position) => {

    dataListMenuReference.current.scrollTo({
      top: position,
      behavior: "smooth"
    });

  };

  const showDataListMenu = () => {
    setDisplayDataListMenu(true);
  };

  const hideDataListMenu = () => {
    setDisplayDataListMenu(false);
  };

  useOnClickOutside(autocompleteContainerReference, hideDataListMenu);

  const handleKeyDownEvent = (event) => {

    let key = event.key;

    if (key === 'Escape') {
      hideDataListMenu();
    }

    if (key === 'ArrowUp') {
      handleUpArrowKeyEvent();
    }

    if (key === 'ArrowDown') {
      handleDownArrowKeyEvent();
    }

    if (key === "Enter" && cursorPosition > -1) {
      handleEnterKeyEvent();
    }

  };

  const handleUpArrowKeyEvent = () => {

    let cursor = cursorPosition;

    if (cursor <= 0) {
      cursor = data.length;
    }

    cursor--;

    setCursorPosition(cursor);

  };

  const handleDownArrowKeyEvent = () => {

    let cursor = cursorPosition;

    if (cursor === data.length - 1) {
      cursor = -1;
    }

    cursor++;

    setCursorPosition(cursor);

  };

  const handleEnterKeyEvent = () => {

    const country = filteredList[cursorPosition];

    handleOnSelectItem(country);

  };

  const handleOnSelectItem = (country) => {

    onSelect(country);

    setSearchText(country.name.official);

    setCursorPosition(0);

    hideDataListMenu();

  };

  function renderAutocompleteItem(data, index) {

    const autocompleteItemAttributes = {
      data,
      key: index,
      selected: cursorPosition === index ? true : false,
      onSelect(country) {
        handleOnSelectItem(country);
      }
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

    if (filteredList.length === 0) {
      return renderNoResultFoundContent();
    }

    const dataListMenuAttributes = {
      className: `${styles.dataListMenu} ${globalStyles.scrollbarSection}`,
      ref: dataListMenuReference
    };

    return <div {...dataListMenuAttributes}>
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
      showDataListMenu();
      setSearchText(event.target.value);
    },
    onClick() {
      showDataListMenu();
    },
    onKeyDown(event) {
      handleKeyDownEvent(event);
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
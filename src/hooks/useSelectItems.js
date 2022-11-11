import { useState } from 'react';

const useSelectItems = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelectActivity = (value) => {
    const indexOfSelectedActivity = selectedItems.indexOf(value);

    if (indexOfSelectedActivity === -1) {
      setSelectedItems((prevState) => [...prevState, value]);
    } else {
      setSelectedItems((prevState) => {
        const slicedState = prevState.slice();
        slicedState.splice(indexOfSelectedActivity, 1);
        return slicedState;
      });
    }
  };

  const itemIsSelected = (value) => {
    return selectedItems.includes(value);
  };

  return { toggleSelectActivity, selectedItems, itemIsSelected, setSelectedItems };
};

export default useSelectItems;

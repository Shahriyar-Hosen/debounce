const filterBySearch = (value) => {
  console.log(value);
};

const debounce = (fn, delay) => {
  let timeoutId;

  return (e) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(e.target.value);
    }, delay);
  };
};

/* 
<input
      className="search-input "
      type="search"
      name="search"
      placeholder="Search"

      onChange={debounce((value) => filterBySearch(value), 500)}

    />
*/

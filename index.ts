const filterBySearch = (value: string) => {
  console.log(value);
};

const debounce = (fn: (value: string) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout | number | undefined;

  return (e: FormEvent) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn((e.target as HTMLInputElement).value);
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

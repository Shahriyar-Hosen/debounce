<h1 align="center">Search with Debounce</h1>

```ts
const filterBySearch = (value: string) => {
  console.log(value);
};

const debounce = (fn: (value: string) => void, delay: number) => {
  let timeoutId: number | undefined;

  return (e: Event) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn((e.target as HTMLInputElement).value);
    }, delay);
  };
};
```

```tsx
<input
  className="search-input"
  type="search"
  name="search"
  placeholder="Search"
  onChange={debounce((value) => filterBySearch(value), 500)}
/>
```

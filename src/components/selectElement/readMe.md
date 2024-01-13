The following text helps you understand how the component is built and meant to function.

# **Important**

📚 The component is set to a fixed min-width of 400px and a max-width of 100%.
Either you change this or controll the width with a parent element like a div.

📚 Material Icons is used for the icon. -> [https://fonts.google.com/icons]

# **Props**

SelectElement takes in and object with the following key-pair-values

- Placeholder, string
- options, array:string

**AND**

- onSelect, function
  onSelect is called and sends back the value of the selected option in the dropdown.
  component should look like 👉🏼

```jsx
<SelectElement data={data} onSelect={onSelect} />
```

# **Options array**

The array should contain object literals with two keys

- `textContent`, string
- `value`, number

# **Get Selected value**

What ever you need to get and do to the data you want to recive, do it in this function.

```jsx
const onSelect = (value) => {
  console.log("value: ", value);
};
```

# **TEST DATA**

Add this code in the parent that holds the SelectElement component.

```js
const data = {
  placeholder: "Select value",
  options: [
    {
      textContent: "item 1",
      value: 1.54,
    },
    {
      textContent: "item 2",
      value: 2.54,
    },
    {
      textContent: "item 3",
      value: 0.5,
    },
    {
      textContent: "item 4",
      value: 900,
    },
  ],
};

const onSelect = (value) => {
  console.log("value: ", value);
};
```

---

# **Interface**

data ={
placeholder: string
options: option[]
}

option={
textContent: string
value: NUMBER
}

onSelect:function

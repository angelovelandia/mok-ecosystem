# mok-ecosystem

Data validation and transformation system.

## Install

```npm
npm install mok-ecosystem
```

```yarn
yarn add mok-ecosystem
```

# Usage

Events onChange

formatCpf - Returns the number of CPF Formatted and optionally sent to your string function handleChange(Status Handler).

```javascript
onChange={e => formatCpf(e.target.value, handleChange)}
```

```javascript
onChange={e => formatCpf(e.target.value, handleChange)}

let cpfFormat = formatCpf(e.target.value);
console.log(cpfFormat)
```

formatCpfChange - Returns the number of CPF Formatted and is sent to its handleChange(Status Handler) string function.

```javascript
onChange={e => formatCpfChange(e, handleChange)}
```

# License

mok-ecosystem is released under the [MIT License](https://opensource.org/licenses/MIT).
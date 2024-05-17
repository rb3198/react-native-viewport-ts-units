# react-native-viewport-ts-units

A simple package enabling `vw`, `vh`, `vmin`, `vmax` units for measurement in [React Native](https://github.com/facebook/react-native).
TypeScript Declarations included.

## Install

```sh
$ npm install react-native-viewport-ts-units
```

or

```sh
$ yarn add react-native-viewport-ts-units
```

## Usage

Simply call the functions to size your components.

```typescript
import { vw, vh, vmin, vmax } from "react-native-viewport-ts-units";
```

```typescript
<View style={{ width: vw(100), height: vh(100) }}>
  ...
<View>
```

```typescript
const styles = StyleSheet.create({
  Container: {
    width: vmin(95),
    height: vmax(70),
    padding: vw(2.5),
    margin: vh(5),
  },
  Font: {
    fontSize: vw(3.75),
  },
});
```

## License

MIT © Ronit Bhatia

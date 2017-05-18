<p align="center">
  <a href="https://github.com/Monte9/react-native-scroll-view">
    <img alt="react-native-scroll-view" src="" width="450">
  </a>
</p>

<p align="center">
  The (Parallax) ScrollView component we all deserve. :rocket:
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-scroll-view"><img src="https://img.shields.io/npm/v/react-native-scroll-view.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/react-native-scroll-view"><img src="https://img.shields.io/npm/dm/react-native-scroll-view.svg?style=flat-square"></a>
</p>

## Demo

![Demo gif]()

## Installation

Install the package using yarn or npm:

```yarn add react-native-scroll-view``` or  ```npm i react-native-scroll-view```

## Usage

``` js
import ParallaxScrollView from 'react-native-scroll-view';

<ParallaxScrollView />
```

## API

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| **onFinishRating** | none | function | Callback method when the user finishes rating. Gives you the final rating value as a whole number **(required)** |
| type | star | string | Choose one of the built-in types: `star`, `rocket`, `bell`, `heart` or use type `custom` to render a custom image (optional) |
| ratingImage | star | string | Pass in a custom image source; use this along with `type='custom'` prop above (optional) |
| ratingColor | #f1c40f | string (color) | Pass in a custom fill-color for the rating icon; use this along with `type='custom'` prop above (optional) |
| ratingBackgroundColor | white | string (color) | Pass in a custom background-fill-color for the rating icon; use this along with `type='custom'` prop above (optional) |
| ratingCount | 5 | number | The number of rating images to display (optional) |
| imageSize | 50 | number | The size of each rating image (optional) |
| showRating | none | boolean | Displays the Built-in Rating UI to show the rating value in real-time (optional) |
| style | none | function | Exposes style prop to add additonal styling to the container view (optional) |


## Try it out

You can try it out with Exponent [here](https://exp.host/@monte9/react-native-graphql-todolist).

### Example

Look at the [`example`](https://github.com/Monte9/react-native-scroll-view/tree/master/example) folder to run the expo app locally.

## Motivation

There are only two packages that provide a similar parallax scroll view ([here](https://github.com/jaysoo/react-native-parallax-scroll-view) and [here](https://github.com/lelandrichardson/react-native-parallax-view)) and both of them are not maintained.

I really liked [react-native-parallax-view](https://github.com/lelandrichardson/react-native-parallax-view) but there were a coupe things I didn't like about it:
1. It was outdated and not maintained.
2. It didn't have a Sticky NavBar when scrolling

So I set out to create a Parallax ScrollView (using [react-native-parallax-view](https://github.com/lelandrichardson/react-native-parallax-view) as a base) with
1. Sticky headers,
2. Super simple usage
3. Flexible and comprehensive API.

aka it's a (Parallax) ScrollView component for React Native that we truly deserve with. :tada:

## Feedback

This repo is being actvely manitained. Feel free to open a new Issue with a `Feature Request` or submit a PR with an `Enhancement`.

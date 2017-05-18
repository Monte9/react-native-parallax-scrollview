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
| coming soon | none | function | coming soon |

## Try it out

You can try it out with Exponent [here](https://exp.host/@monte9/react-native-graphql-todolist).

### Example

Look at the [`example`](https://github.com/Monte9/react-native-scroll-view/tree/master/example) folder to run the expo app locally.

## Motivation

There are a couple packages that provide a similar parallax scroll view component ([here](https://github.com/jaysoo/react-native-parallax-scroll-view) and [here](https://github.com/lelandrichardson/react-native-parallax-view)) although both of them are not maintained.

I really liked [react-native-parallax-view](https://github.com/lelandrichardson/react-native-parallax-view) but here are a couple reasons I didn't use it in my app:
1. It was not maintained hence I knew submitting issues on it would go nowhere
2. It didn't have a Sticky NavBar when scrolling (similar to Spotify/ ReactConf'17 app)

So I set out to create a Parallax ScrollView (using [react-native-parallax-view](https://github.com/lelandrichardson/react-native-parallax-view) as a base) with
1. Sticky NavBar Header :tada:
2. An awesome default component that just works out of the box (```<ParallaxScrollView />```)
3. Flexible and comprehensive API to build your custom use case on.

aka it's a **(Parallax) ScrollView component** for React Native that we *truly deserve* with. :rocket:

## Feedback

This repo is being actively manitained. Feel free to open a new Issue with a `Feature Request` or submit a PR with an `Enhancement`.

# 🥞 Wifeswap UIkit

[![Version](https://img.shields.io/npm/v/@disruptcapital/wifeswap-uikit)](https://www.npmjs.com/package/@disruptcapital/wifeswap-uikit) [![Size](https://img.shields.io/bundlephobia/min/@disruptcapital/wifeswap-uikit)](https://www.npmjs.com/package/@disruptcapital/wifeswap-uikit)

Wifeswap UIkit is a set of React components and hooks used to build pages on Wifeswap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @disruptcapital/wifeswap-uikit`

## Setup

### Theme

Before using Wifeswap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@disruptcapital/wifeswap-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@disruptcapital/wifeswap-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://pancakeswap.github.io/pancake-uikit/)

import {configure, addDecorator} from '@storybook/react';
import React from "react";
import {setOptions} from "@storybook/addon-options";
import {LayoutDecorator} from "./layoutDecorator";

setOptions({
    name: 'storybook',
    url: 'https://github.com/storybooks/storybook',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: false,
    showSearchBox: false,
    downPanelInRight: false
});

addDecorator(LayoutDecorator);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

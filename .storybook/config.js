import {addDecorator, configure} from '@storybook/react';
import React from "react";
import {setOptions} from "@storybook/addon-options";
import 'components/pages/root.scss';
import {MuiThemeProvider} from 'material-ui/styles';

setOptions({
    name: 'storybook',
    url: 'https://github.com/storybooks/storybook',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: false,
    showSearchBox: false,
    downPanelInRight: false
});

const MaterialDecorator = (storyFn) => (
    <MuiThemeProvider>
        {storyFn()}
    </MuiThemeProvider>
);
addDecorator(MaterialDecorator);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

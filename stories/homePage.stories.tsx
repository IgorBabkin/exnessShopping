import {storiesOf} from '@storybook/react';
import * as React from 'react';
import ProductsListStory from './productsListStory';
import BasketStory from './basketStory';

storiesOf('Home page', module)
    .add('ProductsListStory', ProductsListStory)
    .add('BasketStory', BasketStory);

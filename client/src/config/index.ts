import {prodConfig} from './prod.config';
import {devConfig} from './dev.config';

const {API, CONNECTION_URL} =
    process.env.NODE_ENV === 'production'
        ? prodConfig
        : devConfig;

export {API, CONNECTION_URL};
export {IAPI} from './config.interface';

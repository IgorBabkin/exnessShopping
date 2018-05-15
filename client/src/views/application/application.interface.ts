export interface IApplicationOwnProps {
    routerBasename: string;
}

export interface IApplicationDispatchProps {
    onStart: () => void;
    onUnload: () => void;
}

export type IApplicationProps = IApplicationDispatchProps & IApplicationOwnProps;

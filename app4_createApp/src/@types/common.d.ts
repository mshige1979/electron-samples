declare global {
    interface Window {
        dialog: Dialog;
    }
}

export interface Dialog {
    openDialog: () => void;
}

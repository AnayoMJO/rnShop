declare module 'react-native-toast-notifications' {
  import * as React from 'react';

export interface ToastProviderProps {
    children: React.ReactNode;
    placement?: 'top' | 'bottom' | 'center';
    duration?: number;
    offset?: number;
    offsetTop?: number;
    offsetBottom?: number;
    swipeEnabled?: boolean;
    animationType?: 'slide-in' | 'zoom-in';
    animationDuration?: number;
    successColor?: string;
    dangerColor?: string;
    warningColor?: string;
    normalColor?: string;
    textStyle?: any;
    renderToast?: (toastOptions: ToastOptions) => React.ReactNode;
    renderType?: {
      [key: string]: (toastOptions: ToastOptions) => React.ReactNode;
    };
  }

  export interface ToastOptions {
    type?: 'normal' | 'success' | 'danger' | 'warning' | string;
    placement?: 'top' | 'bottom' | 'center';
    duration?: number;
    offset?: number;
    data?: any;
    animationType?: 'slide-in' | 'zoom-in';
  }

  export interface ToastType {
    show: (message: string | React.ReactNode, options?: ToastOptions) => string;
    update: (id: string, message: string | React.ReactNode, options?: ToastOptions) => void;
    hide: (id: string) => void;
    hideAll: () => void;
  }

  export const ToastContainer: React.FC<any>;
  export const useToast: () => ToastType;
  export const ToastProvider: React.FC<ToastProviderProps>;
  export const Toast: ToastType;
}


declare module 'react-lazyload' {
    import * as React from 'react';
  
    interface LazyLoadProps {
      height?: number | string;
      offset?: number | string;
      once?: boolean;
      overflow?: boolean;
      resize?: boolean;
      scroll?: boolean;
      throttle?: number | boolean;
      debounce?: number | boolean;
      placeholder?: React.ReactNode;
      scrollContainer?: string;
      unmountIfInvisible?: boolean;
      className?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    }
  
    export default class LazyLoad extends React.Component<LazyLoadProps> {}
  }
  
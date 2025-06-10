function withLogger(WrappedComponent: any) {
  return function EnhancedComponent(props: any) {
    return <WrappedComponent {...props} />;
  };
}

const LoggedButton = withLogger((props: any) => <button {...props}>Click me</button>);

export default LoggedButton;


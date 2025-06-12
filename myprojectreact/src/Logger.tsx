import Counter from "./UseCallBack";

function withLogger(WrappedComponent: any) {
  return function EnhancedComponent(props: any) {
    return (
      <div style={{padding:'5%'}}>
        <WrappedComponent {...props}/>
        <Counter/>
      </div>
    );
  };
}

const LoggedButton = withLogger((props: any) => 

<button {...props}>Click me</button>

);

export default LoggedButton;


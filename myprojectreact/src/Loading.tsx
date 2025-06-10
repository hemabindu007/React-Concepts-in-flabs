type WithLoadingProps = {
  isLoading: boolean;
  [key: string]: any; // allow any other props
};

function withLoading(Component: any) {
  return function WithLoadingComponent({ isLoading, ...props }: WithLoadingProps) {
    if (isLoading) {
      return <div>Loading...</div>;
    }else{
      return <Component {...props} />;
    }
    
  };
}


export default withLoading
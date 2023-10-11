function Monitor(props) {

  useEffect(() => {
    props.setPagina('monitor')
  }, []);
  
  return (
    <>
      <h1>Monitor</h1>
    </>
  );
}

export default Monitor;

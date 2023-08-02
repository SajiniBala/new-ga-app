import React, { useEffect } from 'react';
// import ReactGA from 'react-ga';



const App = () => {
///////////////////////////////////

  // useEffect(() => {
  //   ReactGA.initialize('G-TJH4P6RKNH');
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

///////////////////////////////////



  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === 'buttonClicked') {
        console.log('Button Clicked');
        ///////////////////////////////////////////
        // window.dataLayer = window.dataLayer || [];
        // window.dataLayer.push({
        //   'event': 'buttonClick',
        //   'eventCategory': 'Form Interaction',
        //   'eventAction': 'Submit',
        //   'eventLabel': 'MyForm'
        // });
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div>
      <h1>Parent Component - Coming from React App</h1>
      <iframe src="https://sajinibala.github.io/test-site/" title="Iframe" />
    </div>
  );
};

export default App;




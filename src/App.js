import React, { useEffect } from "react";
import Form from "./components/Form"
import ProgressBar from "./components/ProgressBar"
import { FormProvider } from './context/FormContext'
import bgimage from "./bg.webp"

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgimage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.height = "100vh";
  }, []);

  return (
    <FormProvider>
      <ProgressBar />
      <Form />
    </FormProvider>
  )

}

export default App;

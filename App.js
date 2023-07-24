import { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import Result from "./components/Result";
import TenureSelect from "./components/TenureSelect";

function App() {
  // const [counter, setCounter] = useState(0);

  // const [homeValue, setHomeValue] = useState(3000);
  // const [downPayment, setDownPayment] = useState(3000);
  // const [loanAmount, setLoanAmount] = useState(3000);
  // const [loanTerm, setLoanTerm] = useState(3000);

  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item md={6} xs={12}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

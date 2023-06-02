import { useState } from "react";
import styles from "./styles/App.module.css";
import SelectItem from "./components/SelectItem";
import Button from "./components/Button";

// array to store all possible coil gauges to select from
const coilGauges = ["1/2 AWG"];

// array to store all possible coil materials to select from
const materials = ["Copper"];

// array to store all possible coil diameters to select from
const coilDiameters = ['.5"', '1.0"'];

// array to store all possible coil lengths to select from
const coilLengths = ['6"'];

function App() {
  // initialize coil length state with the first item selected in the SelectItem component
  const [length, setLength] = useState(coilLengths[0]);

  // initialize material state with the first item selected in the SelectItem component
  const [material, setMaterial] = useState(materials[0]);

  // initialize gauge state with the first item selected in the SelectItem component
  const [gauge, setGauge] = useState(coilGauges[0]);

  // initialize diameter state with the first item selected in the SelectItem component
  const [diameter, setDiameter] = useState(coilDiameters[0]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SelectItem
          label="Select Coil Gauge:"
          items={coilGauges}
          value={gauge}
          onChange={setGauge}
        />
        <SelectItem
          label="Select Coil Diameter:"
          items={coilDiameters}
          value={diameter}
          onChange={setDiameter}
        />
        <SelectItem
          label="Select Coil Material Type:"
          items={materials}
          value={material}
          onChange={setMaterial}
        />
        <SelectItem
          label="Select Coil Length:"
          items={coilLengths}
          value={length}
          onChange={setLength}
        />
        <div className={styles.button}>
          <Button label="Calculate" onClick={() => {}} />
        </div>
        <div className={styles.results}>
          <span>diameter: {diameter}</span>
          <span>current: TODO</span>
          <span>area: TODO</span>
          <span>resistance: TODO</span>
          <span>inductance: TODO</span>
          <span>number of wraps: TODO</span>
        </div>
      </div>
    </div>
  );
}

export default App;

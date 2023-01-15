import React from "react";
import counterSlice from "../redux-toolKit/counterSlice";
import { HighOderComponent } from "./HighOrderComponent";
import { UpdatedComponent } from "./UpdatedComponent";
const Hello = () => {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
};
const SampleComponent = HighOderComponent(Hello);
const IncrementMouse = UpdatedComponent(HoverIncrease);
const IncrmeentClick = UpdatedComponent(ClickIncrease);
// const SampleComponentTwo = HighOderComponent();
export const SayHi = () => {
  return (
    <>
      <h1>Say Hi</h1>
      <SampleComponent />
      <IncrementMouse />
      <IncrmeentClick />

      {/* <SampleComponentTwo /> */}
    </>
  );
};

function HoverIncrease(props) {
  //get the shared props

  const { counter, inrementCounter } = props;

  return (
    <div>
      {/* Further code..*/}
      {/*Now render the value of the 'name' prop */}
      <p> Value of 'name' in HoverIncrease: {counter}</p>
      <button onMouseMove={inrementCounter}>HoverIncrease</button>
    </div>
  );
}

function ClickIncrease(props) {
  //accept incoming props
  const { counter, inrementCounter } = props;
  return (
    <div>
      {/*Further code..*/}
      <p>Value of 'name' in ClickIncrease: {counter}</p>
      <button onClick={inrementCounter}>ClickIncrease </button>
    </div>
  );
}

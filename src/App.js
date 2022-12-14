import React from "react";
import { ObjectInState } from "./concepts/objectsInState/ObjectInState";
import { ComponentsMemory } from "./concepts/componentsMemory/ComponentsMemory";
import { SharingData } from "./concepts/sharingData/SharingDataApp";
import { Message } from "./concepts/stateASnapshot/Message";
import { ThinkingInReact } from "./concepts/ThinkingInReact/ThingInReact";
import { GroceryList } from "./practiceQuestions/groceryList/GroceryList";
import { Person } from "./practiceQuestions/Person";
import "./styles.css";
import { NestedObject } from "./concepts/objectsInState/NestedObject";
import {
  ArrayAdding,
  ArrayDelete,
  ArrayInsertion,
  ArrayReplace,
  ArrayTransform
} from "./concepts/arrayInState/ArrayInState";
// import "./styles/tailwind-pre-build.css";

export default function App() {
  return (
    <div className="text-2xl">
      <h2 className="bg-gray-200">Concepts Practice</h2>
      {/* <SharingData /> */}
      {/* <ThinkingInReact /> */}
      {/* <ComponentsMemory /> */}
      {/* <Person /> */}
      {/* <GroceryList /> */}
      {/* <Message /> */}
      {/* <ObjectInState /> */}
      {/* <NestedObject /> */}
      {/* <ArrayAdding/>
      <ArrayDelete/> */}
      {/* <ArrayTransform /> */}
      {/* <ArrayReplace /> */}
      <ArrayInsertion />
    </div>
  );
}

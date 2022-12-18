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
  ArrayReverse,
  ArrayTransform,
  ObjectInArray
} from "./concepts/arrayInState/ArrayInState";
import { TodoList } from "./concepts/arrayInState/todoList/TodoList";
import { ThankyouForm } from "./concepts/managingState/ThankyouForm";
import { BgActive } from "./concepts/managingState/BgActive";
import { ProfileEditor } from "./concepts/managingState/ProfileEditor";
import { FeedBackForm } from "./concepts/managingState/FeedbackForm";
import { SelectItem } from "./concepts/managingState/SelectItem";
import { ClockPage } from "./concepts/managingState/clock/ClockPage";
import { BrokenPackage } from "./concepts/managingState/packageList/BrokenPackage";
import { DissaperingSelection } from "./concepts/managingState/disapperingState/DisappearingSelection";
import { MultipleSelection } from "./concepts/managingState/multipleSelections/MultipleSelection";
import { SharingState } from "./concepts/managingState/SharingState";
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
      {/* <ArrayInsertion /> */}
      {/* <ArrayReverse /> */}
      {/* <ObjectInArray /> */}
      {/* <TodoList /> */}
      {/* <ThankyouForm /> */}
      {/* <BgActive /> */}
      {/* <ProfileEditor /> */}
      {/* <FeedBackForm /> */}
      {/* <SelectItem /> */}
      {/* <ClockPage /> */}
      {/* <BrokenPackage /> */}
      {/* <DissaperingSelection /> */}
      <SharingState />
    </div>
  );
}

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
import { SyncedInputs } from "./concepts/managingState/SyncedInputs";
import { SearchItem } from "./concepts/managingState/SearchItem";
import { PreservingState } from "./concepts/managingState/PreservingState";
import { ChatApp } from "./concepts/managingState/chatApp/ChatApp";
import { ShowHint } from "./concepts/managingState/ShowHint";
import { ResetDetails } from "./concepts/managingState/ResetDetails";
import { NextImg } from "./concepts/managingState/NextImg";
import { MisplaceState } from "./concepts/managingState/MisplaceState";
import { Reducer } from "./concepts/Reducer";
import { Gallery } from "./concepts/managingState/context/Gallery";
import { TaskApp } from "./concepts/managingState/contextApi/App";
import { MemoHook, UseMemo } from "./hooks/UseMemo";
import { CallbackHook, UseCallback } from "./hooks/UseCallback";
import { CodeSplitting } from "./codesplitting/App";
import { Pagination } from "./pagination/Pagination";
// import "./styles/tailwind-pre-build.css";
import { ClassApp, ClassName } from "./classbasedComponent/ClassApp";
import { CounterReduxApp } from "./redux-toolKit/CounterReduxApp";
import { ProductListing } from "./shopping-cart-redux/pages/ProductListing";
import { CounterHook } from "./hooks/customHooks/CounterHook";
import { PureComponentEx } from "./pureComponets/PureComponentEx";
import React from "react";
import { Container } from "./HOC/HighOrderComponent";
import { SayHi } from "./HOC/SayHi";
import { StopWatch } from "./escape-hatches/refs/StopWatch";
import { LatestState } from "./escape-hatches/refs/LatestState";
import { CounterHookCustom } from "./hooks/customHooks/useCounterWatch";
import { RandomNumber } from "./hooks/customHooks/useMinMax";
import { UseRef } from "./hooks/customHooks/UseRef";
import { MyContextApp, UseContext, UseContextHook } from "./hooks/UseContext";
import { UseEffectHook } from "./hooks/UseEffect";
import {
  AppInterSectionApi,
  AppWindowListener
} from "./hooks/customHooks/hooks";
import { AddTodoApp, ShoppingCart } from "./AddStatePracticeSet";
import { TodoReducerApp } from "./TodoReducerApp";
import { MyTodoApp } from "./TodoAppContext/MyTodoApp";

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
      {/* <SharingState /> */}
      {/* <SyncedInputs /> */}
      {/* <SearchItem /> */}
      {/* <PreservingState /> */}
      {/* <ChatApp /> */}

      {/* <ShowHint /> */}
      {/* <ResetDetails /> */}
      {/* <NextImg /> */}
      {/* <MisplaceState /> */}
      {/* <Reducer /> */}

      {/* <Gallery />
      <TaskApp /> */}

      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <CodeSplitting /> */}
      {/* <Pagination /> */}

      {/* <ClassApp /> */}
      {/* <ClassName /> */}
      {/* <CounterReduxApp /> */}

      {/* <ProductListing /> */}
      {/* <CounterHook /> */}
      {/* <PureComponentEx /> */}
      {/* <SayHi /> */}

      {/* <StopWatch/> */}
      {/* <LatestState /> */}
      {/* <CounterHookCustom /> */}
      {/* <RandomNumber /> */}

      {/* <MemoHook />
      <CallbackHook />
      <UseRef /> */}
      {/* <MyContextApp /> */}
      {/* <UseEffectHook /> */}
      {/* <AppWindowListener/> */}

      {/* <AppInterSectionApi/> */}

      {/* <ShoppingCart /> */}
      {/* <AddTodoApp /> */}
      {/* <TodoReducerApp /> */}
      <MyTodoApp />
    </div>
  );
}

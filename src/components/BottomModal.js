import React, { useRef } from "react";
import { Dimensions } from "react-native";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";

const { height: initialHeight } = Dimensions.get("window");

const App = ({ children, onModalOpen }) => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  onModalOpen(onOpen);

  return (
    <Portal>
      <Modalize modalHeight={initialHeight / 3} ref={modalizeRef}>
        {children}
      </Modalize>
    </Portal>
  );
};

export default App;

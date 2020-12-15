import React, { useRef } from "react";
import { Dimensions } from "react-native";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";

const App = ({ children, modalizeRef }) => {
  return (
    <Portal>
      <Modalize
        disableScrollIfPossible
        adjustToContentHeight
        keyboardAvoidingOffset={100}
        scrollViewProps={{ keyboardShouldPersistTaps: "handled" }}
        ref={modalizeRef}
      >
        {children}
      </Modalize>
    </Portal>
  );
};

export default App;

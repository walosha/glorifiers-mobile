import React, { useState } from "react";
import { Toast } from "galio-framework";

export default function ToastView({ message }) {
  const [isShow, setShow] = useState(true);

  return (
    <Toast isShow={isShow} positionIndicator="top">
      {message}
    </Toast>
  );
}

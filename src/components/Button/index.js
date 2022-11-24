import React from "react";
import { Button } from "react-bootstrap";

export default function SButton({
  children,
  action,
  varian,
  size,
  loading,
  disable,
  className,
}) {
  return (
    <Button
      className={className}
      onClick={action}
      varian={varian}
      disable={disable}
      size={size}
    >
      {loading ? "Loading..." : children}
    </Button>
  );
}

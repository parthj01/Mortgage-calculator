import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function SliderComponent({
  min,
  max,
  defaultValue,
  step,
  onChange,
  value,
  label,
  Amount,
  unit,
}) {
  return (
    <>
      <Stack spacing={1} direction="column">
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {Amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography variant="caption" color={"text.secondary"}>
          {unit} {min}
        </Typography>
        <Typography variant="caption" color={"text.secondary"}>
          {unit} {max}
        </Typography>
      </Stack>
    </>
  );
}

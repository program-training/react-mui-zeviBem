import * as React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import Component_1 from './tab1';
import Component_2 from './tab2';
import Component_3 from './tab3';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="page 1" {...a11yProps(0)} />
          <Tab label="page 2" {...a11yProps(1)} />
          <Tab label="page 3" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Component_1 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Component_2 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Component_3 />
      </CustomTabPanel>
    </Box>
  );
}


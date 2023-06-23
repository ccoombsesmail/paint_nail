import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <img src="https://s3-media0.fl.yelpcdn.com/bphoto/lyZupxAEuHQqIL1sqCtekg/o.jpg" width={150} style={{marginBottom: '30px'}}/>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;

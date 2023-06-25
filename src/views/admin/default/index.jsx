/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Icon,
  Input,
  SimpleGrid,
  useColorModeValue,
  Text
} from "@chakra-ui/react";
import MiniStatistics from "components/card/MiniStatistics";
import TotalSpent from "./components/TotalSpent";
import IconBox from "components/icons/IconBox";
import React, { useState } from "react";
import {
  MdAttachMoney,
  MdBarChart,
  MdAccountBalanceWallet
} from "react-icons/md";
import ComplexTable from "views/admin/default/components/ComplexTable";
import PieCard from "views/admin/default/components/PieCard";
import Card from "components/card/Card.js";

import {
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import tableDataUpFront from "views/admin/default/variables/tableDataUpFront.json";
import useCalculateTableData from "./hooks/useCalculateTableData";

// Insurance per year = 2000 / 12
// Business license per year = 200 / 12
// 50-70 per motnt for mani/pedi
// 50-80 per month for eyelash


// Upfront cost
// Machines = 1050


// basedo 26 days worked per week (Avg 4.33 weeks in a month)
export const MIN_SERVICE_HOURS_WORKED = 650 // 5 hours per day -> 5 * 5 * 4.33 * 6
export const MAX_SERVICE_HOURS_WORKED = 1040 // 8 hours per day -> 5 * 8 * 4.33 * 6

export const AVG_PER_SERVICE_PRICING_PER_HOUR = 100 // Avg between 80-120
export const AVG_LEVEL_ONE_PRICING_PER_HOUR = 47.5 // 100 * .5 * .95
export const AVG_LEVEL_TWO_PRICING_PER_HOUR = 36 // 100 * .4 * .9



export default function UserReports() {

  const [perServiceRatio, setPerServiceRatio] = useState(.05)
  const [levelOneRatio, setLevelOneRatio] = useState(.65)

  const [levelTwoRatio, setLevelTwoRatio] = useState(.3)

  const calculateTableData = useCalculateTableData() 

  const { 
    tableData: perServiceTableData, 
    minEstimate: perServiceMin, 
    maxEstimate: perServiceMax,
    meanEstimate: perServiceMean 
  } = calculateTableData(AVG_PER_SERVICE_PRICING_PER_HOUR, perServiceRatio)

  const { 
    tableData: levelOneTableData, 
    minEstimate: levelOneMin, 
    maxEstimate: levelOneMax,
    meanEstimate: levelOneMean 
  } = calculateTableData(AVG_LEVEL_ONE_PRICING_PER_HOUR, levelOneRatio)

  const { 
    tableData: levelTwoTableData, 
    minEstimate: levelTwoMin, 
    maxEstimate: levelTwoMax,
    meanEstimate: levelTwoMean 
  } = calculateTableData(AVG_LEVEL_TWO_PRICING_PER_HOUR, levelTwoRatio)


  const totalsTableData = [{
    "item": "Sales",
    "minEstimate": `$${perServiceMin + levelOneMin + levelTwoMin}`, 
    "maxEstimate": `$${perServiceMax + levelOneMax + levelTwoMax}`,
    "mean": `$${perServiceMean + levelOneMean + levelTwoMean}` 
  },
  {
    "item": "Totals: ",
    "minEstimate": `$${perServiceMin + levelOneMin + levelTwoMin}`, 
    "maxEstimate": `$${perServiceMax + levelOneMax + levelTwoMax}`,
    "mean": `$${perServiceMean + levelOneMean + levelTwoMean}` 
  }
  ]

  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Estimated Total Monthly Revenue'
          value={`$${perServiceMean + levelOneMean + levelTwoMean}` }
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name='Estimated Monthly Liabilites'
          value='$21,165'
        />
        <MiniStatistics growth={`+${(100* ((perServiceMean + levelOneMean + levelTwoMean) - 21165) / (perServiceMean + levelOneMean + levelTwoMean)).toFixed(2)}%`} name='Estimated Profit' value={`$${(perServiceMean + levelOneMean + levelTwoMean) - 21165}`} />

        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdAccountBalanceWallet} color={brandColor} />
              }
            />
          }
          name='Initial Funding'
          value='$130,000'
        />
      </SimpleGrid>
      <Card p='20px' align='center' direction='column' w='100%' mb="20px">
        <div>
          <Text mb='8px'>Per Service Ratio: {perServiceRatio}</Text>
          <Input

            variant='filled'
            bgColor="ThreeDFace"
            value={perServiceRatio}
            onChange={(e) => setPerServiceRatio(Number(e.target.value))}
            placeholder="Per Service Ratio"
            width="100px"
            type="number"
          />
        </div>
        <div>
          <Text mb='8px'>Level One Membershio Ratio: {levelOneRatio}</Text>
          <Input

            variant='filled'
            bgColor="ThreeDFace"
            value={levelOneRatio}
            onChange={(e) => setLevelOneRatio(Number(e.target.value))}
            placeholder="Per Service Ratio"
            width="100px"
            type="number"
          />
        </div>
        <div>
          <Text mb='8px'>Level Two Membershio Ratio: {levelTwoRatio}</Text>
          <Input

            variant='filled'
            bgColor="ThreeDFace"
            value={levelTwoRatio}
            onChange={(e) => setLevelTwoRatio(Number(e.target.value))}
            placeholder="Per Service Ratio"
            width="100px"
            type="number"
          />
        </div>
      </Card>
      <PieCard perServiceRatio={perServiceRatio} levelOneRatio={levelOneRatio} levelTwoRatio={levelTwoRatio} />

      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
          title="Itemized Spend (Monthly)"
        />
       <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataUpFront}
          title="Up Front Costs"
        />
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={perServiceTableData}
          title="Per Service Revenue (Monthly)"
        />
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={levelOneTableData}
          title="Level One Member Revenue (Monthly)"
        />
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={levelTwoTableData}
          title="Level Two Member Revenue (Monthly)"
        />
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={totalsTableData}
          title="Overall Revenue (Monthly)"
        />
      </SimpleGrid>
      <TotalSpent />
    </Box>
  );
}

// Chakra imports
import { Box, Flex, Text, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import { VSeparator, HSeparator } from "components/separator/Separator";
import React from "react";
import MiniStatistics from "components/card/MiniStatistics";
import { AVG_LEVEL_ONE_PRICING_PER_HOUR, AVG_LEVEL_TWO_PRICING_PER_HOUR, AVG_PER_SERVICE_PRICING_PER_HOUR, MAX_SERVICE_HOURS_WORKED, MIN_SERVICE_HOURS_WORKED } from "..";

export default function Conversion(props) {
  const { perServiceRatio, levelOneRatio, levelTwoRatio, ...rest } = props;

  const pieChartOptions = {
    labels: ["Per Service Pricing Ratio", "Level 1 Membership Ratio", "Level 2 Membership Ratio"],
    colors: ["#4318FF", "#6AD2FF", "#5DBB63"],
    chart: {
      width: "150px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#4318FF", "#6AD2FF", "#5DBB63"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  };
  
 const pieChartData = [perServiceRatio, levelOneRatio, levelTwoRatio];
  

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card p='20px' align='center' direction='column' w='100%'  mb="20px" {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Pricing Split + Assumptions
        </Text>
      </Flex>

      <PieChart
        h='100%'
        w='100%'
        chartData={pieChartData}
        chartOptions={pieChartOptions}
      />
      <Card
        bg={cardColor}
        flexDirection='row'
        boxShadow={cardShadow}
        w='100%'
        p='15px'
        px='20px'
        mt='15px'
        mx='auto'>
        <Flex direction='column' py='5px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='#4318FF' borderRadius='50%' me='4px' mb="5px" />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
               Per Service Ratio
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
          {perServiceRatio * 100}%
          </Text>
        </Flex>
        <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />

        <Flex direction='column' py='5px' me='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='#6AD2FF' borderRadius='50%' me='4px' mb="5px" />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              Level One Membership Ratio
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            {levelOneRatio * 100}%
          </Text>
        </Flex>
        <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
        <Flex direction='column' py='5px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='#5DBB63' borderRadius='50%' me='4px' mb="5px" />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
               Level Two Membership Ratio
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
          {levelTwoRatio * 100}%
          </Text>
        </Flex>
      </Card>
      <HSeparator />
      <h1 style={{margin: '20px', fontWeight: 'bold', textDecoration: 'underline'}}>
        Assumptions
      </h1>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          name='Num Employees'
          value={5}
        />
        <MiniStatistics
          name='Days Worked Per Week'
          value={6}
        />
        <MiniStatistics
          name='Hours Per Day'
          value={8}
        />
       <MiniStatistics
        name='Work Days Per Month'
        value={`${26}`}

      />
        <MiniStatistics
          name='Estimated Min Service Hours Worked'
          value={MIN_SERVICE_HOURS_WORKED}
        />
        <MiniStatistics
        
          name='Estimated Max Service Hours Worked'
          value={`${MAX_SERVICE_HOURS_WORKED}`}

        />

        <MiniStatistics 
          name='Aprox Level 1 Membership Discount' 
          value={`${100 - (AVG_LEVEL_ONE_PRICING_PER_HOUR/AVG_PER_SERVICE_PRICING_PER_HOUR * 100)}%`} 
        />

        <MiniStatistics 
          name='Aprox Level 2 Membership Discount' 
          value={`${100 - (AVG_LEVEL_TWO_PRICING_PER_HOUR/AVG_PER_SERVICE_PRICING_PER_HOUR * 100)}%`} 
        />
        <Text>
        <b>Level 1 Membership Example:</b>
        <br />
        Deposit $500 to receive $1000 total worth of store credit, and receive a 5% discount on services purchased using this credit
        </Text>
        <Text>
        <b>Level 2 Membership Example:</b>
        <br />
        Deposit $1000 to receive $2500 total in store credit, and receive a 10% discount on services purchased using this credit
        </Text>
      </SimpleGrid>
    </Card>
  );
}

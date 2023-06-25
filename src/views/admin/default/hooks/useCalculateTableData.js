/* eslint-disable import/no-anonymous-default-export */
import { useCallback } from "react"
import { MAX_SERVICE_HOURS_WORKED, MIN_SERVICE_HOURS_WORKED } from ".."

export default () => {
 
  return useCallback((pricePerHour, ratio) => {
    const minEstimate = pricePerHour * MIN_SERVICE_HOURS_WORKED * ratio
    const maxEstimate = pricePerHour * MAX_SERVICE_HOURS_WORKED * ratio
    const meanEstimate = (minEstimate + maxEstimate) / 2
    const tableData = [{
      "item": "Sales",
      "minEstimate": `$${minEstimate}`, 
      "maxEstimate": `$${maxEstimate}`,
      "mean": `$${meanEstimate}` 
    },
    {
      "item": "Totals: ",
      "minEstimate": `$${minEstimate}`, 
      "maxEstimate": `$${maxEstimate}`,
      "mean": `$${meanEstimate}` 
    }
    ]
    return { tableData, minEstimate, maxEstimate, meanEstimate}
    
  }, [])


}
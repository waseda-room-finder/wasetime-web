import React from "react"

import { media } from "wasedatime-ui"
import styled from "styled-components"

import CourseColumn from "@app/components/timetable/CourseColumn"
import { CourseWithOcc } from "@app/types/course"

const StyledDayColumnItem = styled("li")`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  min-height: calc(100vh - 150px);
  ${media("tablet", `min-height: calc(100vh - 250px);`)}
`

const DayItem = styled("div")`
  display: flex;
  flex: 0 0 3rem;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 600;
  max-height: 20px !important;
`

interface Props {
  day: string
  largestPeriod: number
  coursesAndProperties: {
    pref: {
      color: number
      displayLang: string
      visibility: boolean
    }
    course: CourseWithOcc
  }[]
}

const DayColumnItem = ({ day, largestPeriod, coursesAndProperties }: Props) => {
  return (
    <StyledDayColumnItem>
      <DayItem className="border-b border-b-gray-100 dark:border-b-dark-text3">
        <span>{day}</span>
      </DayItem>
      <CourseColumn
        largestPeriod={largestPeriod}
        coursesAndProperties={coursesAndProperties}
      />
    </StyledDayColumnItem>
  )
}

export default DayColumnItem

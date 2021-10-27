import React from "react";

import CourseItemContainer from "../../containers/CourseItemContainer";
import { UnstyledUList } from "../styles/List";
import { SyllabusKey } from "../../constants/syllabus-data";
import Course from "../../types/course";

interface Props {
  chunk: Course[];
  searchTerm: string | string[];
  searchLang: string | string[];
}

const CourseChunk = ({ chunk, searchTerm, searchLang }: Props) => {
  return (
    <UnstyledUList>
      {chunk.map((course) => (
        <CourseItemContainer
          key={course[SyllabusKey.ID]}
          searchTerm={searchTerm}
          searchLang={searchLang}
          course={course}
          expandable={true}
        />
      ))}
    </UnstyledUList>
  );
};

export default CourseChunk;

import React from "react";

import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WithTranslation, withTranslation } from "react-i18next";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import SimpleBar from "simplebar-react";
import styled from "styled-components";

import FilterEvalGroup from "@app/components/syllabus/FilterEvalGroup";
import FilterGroup from "@app/components/syllabus/FilterGroup";
import FilterOption from "@app/constants/syllabus-filter";
import SchoolFilterContainer from "@app/containers/SchoolFilterContainer";
import FilterGroups from "@app/types/filter";
import { ThemeContext } from "@app/utils/theme-context";

type FilterWrapperProps = {
  isSideBar: boolean;
};

type FilterScrollAreaProps = {
  isSideBar: boolean;
};

const FilterWrapper = styled.div<FilterWrapperProps>`
  ${(props) => !props.isSideBar && "width: 100vw;"}
  height: ${(props) =>
    props.isSideBar ? "calc(100vh - 96px)" : "calc(100vh - 50px)"};
`;

const FilterScrollArea = styled(SimpleBar)<FilterScrollAreaProps>`
  // flex: none;
  width: 100%;
  height: ${(props) => (props.isSideBar ? "100%" : "calc(100% - 50px)")};
  padding: ${(props) =>
    props.isSideBar ? "0.5em 1em 1em 1em" : "0.7em 1.2em 1.2em"};

  .simplebar-scrollbar::before {
    background-color: #999;
  }
  .simplebar-placeholder {
    height: 0px !important;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  overflow-y: auto;
`;

const FilterTitle = styled("span")`
  display: flex;
  align-items: center;
  font-family: Segoe UI, Yu Gothic Medium, Lato;
  font-display: swap;
`;

const FilterClearButton = styled(Button)`
  color: #b51e36 !important;
  font-weight: 500 !important;
  font-size: 0.8em !important;
`;

const FilterGroupWrapper = styled("div")`
  background-color: #fff;
  flex: 1 0 auto;
  padding: 0px 1rem;
  margin-top: 0.2em;
  font-size: 11px;
`;

interface Props extends WithTranslation {
  filterGroups: FilterGroups;
  handleToggleFilter: (name: string, value: any) => void;
  clearFilter: () => void;
  isSideBar: boolean;
}

const Filter = ({
  filterGroups,
  handleToggleFilter,
  clearFilter,
  isSideBar,
  t,
}: Props) => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const checkedSchools = filterGroups[FilterOption.SCHOOL];

  const semesterLegend = t("syllabus.Semesters");
  const semesterInputName = FilterOption.SEMESTER;
  const semesterInputs = [
    {
      key:
        t("syllabus.semesterMap.Spring") + t("syllabus.semesterMap.Semester"),
      text:
        t("syllabus.semesterMap.Spring") + t("syllabus.semesterMap.Semester"),
      value: "0s",
    },
    {
      key: t("syllabus.semesterMap.Fall") + t("syllabus.semesterMap.Semester"),
      text: t("syllabus.semesterMap.Fall") + t("syllabus.semesterMap.Semester"),
      value: "2s",
    },
    {
      key: t("syllabus.semesterMap.Spring") + t("syllabus.semesterMap.Quarter"),
      text:
        t("syllabus.semesterMap.Spring") + t("syllabus.semesterMap.Quarter"),
      value: "0q",
    },
    {
      key: t("syllabus.semesterMap.Summer") + t("syllabus.semesterMap.Quarter"),
      text:
        t("syllabus.semesterMap.Summer") + t("syllabus.semesterMap.Quarter"),
      value: "1q",
    },
    {
      key: t("syllabus.semesterMap.Fall") + t("syllabus.semesterMap.Quarter"),
      text: t("syllabus.semesterMap.Fall") + t("syllabus.semesterMap.Quarter"),
      value: "2q",
    },
    {
      key: t("syllabus.semesterMap.Winter") + t("syllabus.semesterMap.Quarter"),
      text:
        t("syllabus.semesterMap.Winter") + t("syllabus.semesterMap.Quarter"),
      value: "3q",
    },
    {
      key:
        t("syllabus.semesterMap.Spring") + t("syllabus.semesterMap.Intensive"),
      text:
        t("syllabus.semesterMap.Spring") + t("syllabus.semesterMap.Intensive"),
      value: "0i",
    },
    {
      key:
        t("syllabus.semesterMap.Summer") + t("syllabus.semesterMap.Intensive"),
      text:
        t("syllabus.semesterMap.Summer") + t("syllabus.semesterMap.Intensive"),
      value: "1i",
    },
    {
      key: t("syllabus.semesterMap.Fall") + t("syllabus.semesterMap.Intensive"),
      text:
        t("syllabus.semesterMap.Fall") + t("syllabus.semesterMap.Intensive"),
      value: "2i",
    },
    {
      key:
        t("syllabus.semesterMap.Winter") + t("syllabus.semesterMap.Intensive"),
      text:
        t("syllabus.semesterMap.Winter") + t("syllabus.semesterMap.Intensive"),
      value: "3i",
    },
    {
      key: t("syllabus.semesterMap.Full-Year"),
      text: t("syllabus.semesterMap.Full-Year"),
      value: "f",
    },
  ];
  const checkedSemesterInputs = semesterInputs.map((input) => ({
    ...input,
    ischecked:
      (filterGroups[semesterInputName] &&
        filterGroups[semesterInputName].includes(input.value)) ||
      false,
  }));

  const langLegend = t("syllabus.Languages");
  const langInputName = FilterOption.LANG;
  const langInputs = [
    {
      key: t("syllabus.languageCodes.0"),
      text: t("syllabus.languages.0"),
      value: "0",
    },
    {
      key: t("syllabus.languageCodes.1"),
      text: t("syllabus.languages.1"),
      value: "1",
    },
    {
      key: t("syllabus.languageCodes.2"),
      text: t("syllabus.languages.2"),
      value: "2",
    },
    {
      key: t("syllabus.languageCodes.3"),
      text: t("syllabus.languages.3"),
      value: "3",
    },
    {
      key: t("syllabus.languageCodes.4"),
      text: t("syllabus.languages.4"),
      value: "4",
    },
    {
      key: t("syllabus.languageCodes.5"),
      text: t("syllabus.languages.5"),
      value: "5",
    },
    {
      key: t("syllabus.languageCodes.6"),
      text: t("syllabus.languages.6"),
      value: "6",
    },
    {
      key: t("syllabus.languageCodes.7"),
      text: t("syllabus.languages.7"),
      value: "7",
    },
    {
      key: t("syllabus.languageCodes.8"),
      text: t("syllabus.languages.8"),
      value: "8",
    },
    {
      key: t("syllabus.languageCodes.9"),
      text: t("other"),
      value: "9",
    },
  ];
  const checkedLangInputs = langInputs.map((input) => ({
    ...input,
    ischecked:
      (filterGroups[langInputName] &&
        filterGroups[langInputName].includes(input.value)) ||
      false,
  }));

  const modalityLegend = t("classModalities.label");
  const modalityInputName = FilterOption.MODALITY;
  const modalityInputs = [
    {
      key: t("classModalities.In person"),
      text: t("classModalities.In person"),
      value: "0",
    },
    {
      key: t("classModalities.In person / Online"),
      text: t("classModalities.In person / Online"),
      value: "1",
    },
    {
      key: t("classModalities.Full On-demand"),
      text: t("classModalities.Full On-demand"),
      value: "2",
    },
    {
      key: t("classModalities.Scheduled On-demand"),
      text: t("classModalities.Scheduled On-demand"),
      value: "3",
    },
    {
      key: t("classModalities.Realtime streaming"),
      text: t("classModalities.Realtime streaming"),
      value: "4",
    },
  ];
  const checkedModalityInputs = modalityInputs.map((input) => ({
    ...input,
    ischecked:
      (filterGroups[modalityInputName] &&
        filterGroups[modalityInputName].includes(input.value)) ||
      false,
  }));

  const dayLegend = t("syllabus.day");
  const dayInputName = FilterOption.DAY;
  const dayInputs = [
    { value: "1", label: t("common.mon") },
    { value: "2", label: t("common.tue") },
    { value: "3", label: t("common.wed") },
    { value: "4", label: t("common.thu") },
    { value: "5", label: t("common.fri") },
    { value: "6", label: t("common.sat") },
  ];
  const checkedDayInputs = dayInputs.map((input) => ({
    ...input,
    ischecked:
      (filterGroups[dayInputName] &&
        filterGroups[dayInputName].includes(input.value)) ||
      false,
  }));

  const periodLegend = t("syllabus.period.Period");
  const periodInputName = FilterOption.PERIOD;
  const periodInputs = [
    { value: "1", label: t("syllabus.period.1") },
    { value: "2", label: t("syllabus.period.2") },
    { value: "3", label: t("syllabus.period.3") },
    { value: "4", label: t("syllabus.period.4") },
    { value: "5", label: t("syllabus.period.5") },
    { value: "6", label: t("syllabus.period.6") },
    { value: "7", label: t("syllabus.period.7") },
  ];
  const checkedPeriodInputs = periodInputs.map((input) => ({
    ...input,
    ischecked:
      (filterGroups[periodInputName] &&
        filterGroups[periodInputName].includes(input.value)) ||
      false,
  }));

  const minYearLegend = t("syllabus.minYear");
  const minYearInputName = FilterOption.MIN_YEAR;
  const minYearInputs = [
    { value: "1", label: "1+" },
    { value: "2", label: "2+" },
    { value: "3", label: "3+" },
    { value: "4", label: "4+" },
  ];
  const checkedMinYearInputs = minYearInputs.map((input) => ({
    ...input,
    ischecked:
      (filterGroups[minYearInputName] &&
        filterGroups[minYearInputName].includes(input.value)) ||
      false,
  }));

  const creditLegend = t("syllabus.credit");
  const creditInputName = FilterOption.CREDIT;
  const creditInputs = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3+" },
  ];
  const checkedCreditInputs = creditInputs.map((input) => ({
    ...input,
    ischecked:
      (filterGroups[creditInputName] &&
        filterGroups[creditInputName].includes(input.value)) ||
      false,
  }));

  const evalLegend = t("syllabus.eval.title");
  const evalTypeDefault = t("syllabus.eval.typeDefault");
  const evalTypeInputs = [
    { key: "Exam", text: t("syllabus.eval.Exam"), value: 0 },
    { key: "Papers", text: t("syllabus.eval.Papers"), value: 1 },
    {
      key: "Class Participation",
      text: t("syllabus.eval.Class Participation"),
      value: 2,
    },
    { key: "Others", text: t("syllabus.eval.Others"), value: 3 },
  ];
  const evalTypeInputName = FilterOption.EVAL_TYPE;
  const evalPercentInputName = FilterOption.EVAL_PERCENT;
  const selectedEvalTypeInput =
    filterGroups[evalTypeInputName] >= 0 ? filterGroups[evalTypeInputName] : -1;
  const selectedEvalPercentInputs = filterGroups[evalPercentInputName] || [
    0, 100,
  ];

  const evalSpecialInputName = FilterOption.EVAL_SPECIAL;
  const evalSpecialInputs = [
    { value: "noExam", label: t("syllabus.eval.No exam") },
    { value: "noPaper", label: t("syllabus.eval.No paper") },
    {
      value: "noClassParticipation",
      label: t("syllabus.eval.No class participation"),
    },
  ];
  const checkedEvalSpecialInputs = evalSpecialInputs.map((input) => ({
    ...input,
    ischecked:
      (filterGroups[evalSpecialInputName] &&
        filterGroups[evalSpecialInputName].includes(input.value)) ||
      false,
  }));

  const typeLegend = t("syllabus.type");
  const typeInputName = FilterOption.TYPE;
  const typeInputs = [
    {
      key: "Lecture",
      text: t("courseInfo.Details.Type.Lecture"),
      value: "0",
    },
    {
      key: "Seminar",
      text: t("courseInfo.Details.Type.Seminar"),
      value: "1",
    },
    {
      key: "Work",
      text: t("courseInfo.Details.Type.Work"),
      value: "2",
    },
    {
      key: "Foreign Language",
      text: t("courseInfo.Details.Type.Foreign Language"),
      value: "3",
    },
    {
      key: "On-demand",
      text: t("courseInfo.Details.Type.On-demand"),
      value: "4",
    },
    {
      key: "Thesis",
      text: t("courseInfo.Details.Type.Thesis"),
      value: "5",
    },
    {
      key: "Graduate Research",
      text: t("courseInfo.Details.Type.Graduate Research"),
      value: "6",
    },
    {
      key: "Practice",
      text: t("courseInfo.Details.Type.Practice"),
      value: "7",
    },
    {
      key: "Blended",
      text: t("courseInfo.Details.Type.Blended"),
      value: "8",
    },
  ];
  const checkedTypeInputs = typeInputs.map((input) => ({
    ...input,
    ischecked:
      (filterGroups[typeInputName] &&
        filterGroups[typeInputName].includes(input.value)) ||
      false,
  }));

  const levelLegend = t("syllabus.level");
  const levelInputName = FilterOption.LEVEL;
  const levelInputs = [
    {
      key: "Beginner",
      text: t("courseInfo.Details.Level.Beginner"),
      value: "0",
    },
    {
      key: "Intermediate",
      text: t("courseInfo.Details.Level.Intermediate"),
      value: "1",
    },
    {
      key: "Advanced",
      text: t("courseInfo.Details.Level.Advanced"),
      value: "2",
    },
    {
      key: "Final-stage",
      text: t("courseInfo.Details.Level.Final-stage"),
      value: "3",
    },
    {
      key: "Master",
      text: t("courseInfo.Details.Level.Master"),
      value: "4",
    },
    {
      key: "Doctor",
      text: t("courseInfo.Details.Level.Doctor"),
      value: "5",
    },
  ];
  const checkedLevelInputs = levelInputs.map((input) => ({
    ...input,
    ischecked:
      (filterGroups[levelInputName] &&
        filterGroups[levelInputName].includes(input.value)) ||
      false,
  }));

  return (
    <FilterWrapper isSideBar={isSideBar}>
      <FilterScrollArea isSideBar={isSideBar}>
        <FilterTitle className="dark:text-dark-text1">
          <FontAwesomeIcon icon={faFilter} size="1x" />
          &nbsp;
          <b>{t("syllabus.Filter by")}</b>
          &nbsp;
          <button
            onClick={clearFilter}
            className="mx-2 text-lg bg-light-bgMain text-light-main dark:bg-dark-bgMain dark:text-dark-main"
          >
            {t("syllabus.Clear filter")}
          </button>
        </FilterTitle>
        <FilterGroupWrapper className="dark:bg-dark-bgMain dark:text-dark-text1">
          <SchoolFilterContainer
            checkedSchools={checkedSchools}
            handleToggleFilter={handleToggleFilter}
            isPopup
          />
          <FilterGroup
            handleToggleFilter={handleToggleFilter}
            legend={semesterLegend}
            inputName={semesterInputName}
            inputs={checkedSemesterInputs}
            filterType="dropdown"
          />
          <FilterGroup
            handleToggleFilter={handleToggleFilter}
            legend={langLegend}
            inputName={langInputName}
            inputs={checkedLangInputs}
            filterType="dropdown"
          />
          <FilterGroup
            handleToggleFilter={handleToggleFilter}
            legend={modalityLegend}
            inputName={modalityInputName}
            inputs={checkedModalityInputs}
            filterType="dropdown"
          />
          <FilterGroup
            handleToggleFilter={handleToggleFilter}
            legend={dayLegend}
            inputName={dayInputName}
            inputs={checkedDayInputs}
            filterType="checkbox"
          />
          <FilterGroup
            handleToggleFilter={handleToggleFilter}
            legend={periodLegend}
            inputName={periodInputName}
            inputs={checkedPeriodInputs}
            filterType="checkbox"
          />
          <FilterGroup
            handleToggleFilter={handleToggleFilter}
            legend={minYearLegend}
            inputName={minYearInputName}
            inputs={checkedMinYearInputs}
            filterType="checkbox"
          />
          <FilterGroup
            handleToggleFilter={handleToggleFilter}
            legend={creditLegend}
            inputName={creditInputName}
            inputs={checkedCreditInputs}
            filterType="checkbox"
          />
          <FilterEvalGroup
            handleToggleFilter={handleToggleFilter}
            legend={evalLegend}
            typeDefault={evalTypeDefault}
            typeInputs={evalTypeInputs}
            typeInputName={evalTypeInputName}
            selectedTypeInput={selectedEvalTypeInput}
            percentInputName={evalPercentInputName}
            selectedPercentInputs={selectedEvalPercentInputs}
            specialInputName={evalSpecialInputName}
            checkedSpecialInputs={checkedEvalSpecialInputs}
          />
          <FilterGroup
            handleToggleFilter={handleToggleFilter}
            legend={typeLegend}
            inputName={typeInputName}
            inputs={checkedTypeInputs}
            filterType="dropdown"
          />
          <FilterGroup
            handleToggleFilter={handleToggleFilter}
            legend={levelLegend}
            inputName={levelInputName}
            inputs={checkedLevelInputs}
            filterType="dropdown"
          />
        </FilterGroupWrapper>
      </FilterScrollArea>
    </FilterWrapper>
  );
};

export default withTranslation("translation")(Filter);

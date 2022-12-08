import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import groups from "@app/constants/groups.json";
import CheckList from "@app/components/form/CheckList";
import { currentGroupsState } from "@app/recoil/atoms.ts";

const FilterMenu = () => {
  const [currentGroups, setCurrentGroups] = useRecoilState(currentGroupsState);
  const [openSchoolModal, setOpenSchoolModal] = useState(false);
  const navigate = useNavigate();

  const toggleGroup = (group: string | number) => {
    if (currentGroups.includes(group)) {
      var groups = [...currentGroups];
      const index = groups.indexOf(group);
      if (index > -1) {
        groups.splice(index, 1);
      }
      setCurrentGroups(groups);
    } else {
      setCurrentGroups([ ...currentGroups, group ]);
    }
  }

  const isGroupChecked = (group: string | number) => currentGroups.includes(group);

  useEffect(() => {
    console.log(currentGroups);
  }, [currentGroups]);

  return (
    <div className="w-64 text-center px-4">
      <div className="my-2 mx-auto">
        <h1 className="form-item-title">School</h1>
        <button className="w-full p-2 bg-light-main text-white rounded-lg my-1">
          Select the School
        </button>
      </div>
      
      {
        Object.keys(groups).map((groupCategory, groupCategoryId) => (
          <CheckList
            key={groupCategoryId}
            listId={groupCategoryId.toString()}
            title={groupCategory}
            items={groups[groupCategory]}
            onListItemToggle={toggleGroup}
            isItemChecked={isGroupChecked}
          />
        ))
      }
    </div>
  );
};

export default FilterMenu;

import React from "react";

import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import {
  AlumniList,
  CurrentList,
  Members,
} from "@app/components/aboutUs/MeetOurTeam/memberList";

const Title = styled("h2")`
  font-weight: bold;
`;

const SubTitle = styled("h2")`
  font-weight: bold;
  margin: 10px auto;
`;

const CardArea = styled("div")`
  width: 75%;
  margin: 0px auto 40px auto;
  font-size: 0.9em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Card = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  text-align: center;
`;

const SocialMediaArea = styled("div")`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MediaIcon = styled("img")`
  width: 100%;
  width: 1.3em;
  margin: 4px 8px 4px 0px;
  text-align: center;
`;

const MemberCard = ({
  image,
  name,
  positions,
  socials,
  profileText,
}: Members) => (
  <Card className="m-2 sm:m-3.5 xl:m-5">
    <a className="block group" href="#">
      {/* Card: pic + hidden card-body +  Name */}
      <div
        className="card w-auto bg-transparent relative
      group-hover:card-side group-hover:mx-[30px] group-hover:rounded-8xl
      group-hover:bg-gradient-to-r group-hover:from-slate-100 group-hover:via-slate-50 group-hover:to-transparent
      dark:group-hover:bg-gradient-to-r dark:group-hover:from-dark-card2 
      group-hover:drop-shadow-lg dark:group-hover:drop-shadow-lg dark:group-hover:shadow-gray-600"
      >
        {/* Profile pic */}
        <figure className="pl-3 py-3 sm:py-5">
          {/* responsive for smaller screen: w/h - [100px] */}
          <img
            className="mask mask-squircle object-cover opacity-100 transition-opacity group-hover:drop-shadow-none w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
            src={image}
          />
        </figure>
        {/* Card Body */}
        <div className="card-body items-left text-left w-[200px] sm:w-[260px] hidden group-hover:block transition ease-in-out delay-300ms transition-duration: 1500ms opacity-0  group-hover:opacity-100 p-[10px] sm:p-[20px]">
          {/* Name */}
          <p className="card-title font-bold text-3xl text-slate-800 dark:text-dark-text1 mt-6 mb-3 ml-1.5">
            {name}
          </p>
          {/* Position */}
          <div className="justify-start text-left inline-block drop-shadow-none my-1.5">
            {positions &&
              positions.map((position) => (
                <div
                  className="badge bg-gray-200 font-normal text-lg sm:text-xl border-transparent text-slate-500 h-auto sm:h-10 mr-1.5 mt-1.5
                    dark:text-dark-text2 dark:bg-dark-card2 w-auto"
                >
                  {position}
                </div>
              ))}

            {/* Profile Text */}
            <p className="justify-start font-medium text-lg sm:text-xl leading-normal text-slate-600 dark:text-dark-text2 mt-3 mb-2 pl-1.5 w-auto ">
              {profileText}
            </p>

            {/* Socials */}
            <div className="justify-start inline-block mx-1.5">
              {socials && (
                <SocialMediaArea>
                  {socials.map((social) => (
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MediaIcon src={social.platform} />
                    </a>
                  ))}
                </SocialMediaArea>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Name below the card*/}
      <p className="text-center font-bold text-2xl sm:text-3xl text-slate-800 px-3 py-1.5 dark:text-dark-text1 group-hover:hidden">
        {name}
      </p>
    </a>
  </Card>
);

const MeetOurTeam = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title className="mt-3.5 mb-2.5 sm:my-5 text-center text-3xl sm:text-4xl 2xl:text-5xl text-light-text1 dark:text-dark-text1">
        Meet Our Talented Team!
      </Title>
      <SubTitle className="my-1.5 sm:my-5 text-2xl text-center sm:text-3xl 2xl:text-4xl text-light-text1 dark:text-dark-text1">
        Current Members
      </SubTitle>
      <CardArea>
        {CurrentList.map((member) => (
          <MemberCard
            image={member.image}
            name={member.name}
            positions={member.positions}
            socials={member.socials}
            profileText={member.profileText}
          />
        ))}
      </CardArea>

      <SubTitle className="my-1.5 sm:my-5 text-2xl text-center text-2xl sm:text-3xl xl:text-4xl text-light-text1 dark:text-dark-text1">
        Our Alumni
      </SubTitle>
      <CardArea>
        {AlumniList.map((member) => (
          <MemberCard
            image={member.image}
            name={member.name}
            positions={member.positions}
            socials={member.socials}
            profileText={member.profileText}
          />
        ))}
      </CardArea>
    </Wrapper>
  );
};

export default MeetOurTeam;

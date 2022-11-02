import React from "react";
import Block from "./Block";

type Props = {
  isPreview: boolean;
  thread: any;
}

const ThreadBlock = ({ isPreview, thread }: Props) => {
  const actions = [
    {
      icon: "",
      title: "",
      onClick: () => {}
    }
  ];
  return (
    <Block actions={actions}>
      <div className={isPreview ? `border-2 mt-12 mx-16 rounded-xl shadow-lg pb-6` : ``}>
        <div className="px-2">
        <div className="flex justify-between mt-2">
        <h1 className='text-2xl text-light-main my-auto'>{thread.threadTitle}</h1>
        <h2 className="text-sm text-light-text2 my-auto">{thread.threadAuthor}</h2>
        </div> 
      <p className="justify-left text-light-text1 pt-4">
        {thread.threadBody}
      </p>
      </div>
      <hr className="mx-2 pt-4 mt-6"/>
      </div>
    </Block>
  )
}

export default ThreadBlock;

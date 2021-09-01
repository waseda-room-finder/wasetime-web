import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Header from "@bit/wasedatime.core.ts.ui.header";
import { withTranslation, WithTranslation } from "react-i18next";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";

const StyledMarkdown = styled(ReactMarkdown)`
    * {
      font-family: Segoe UI, Yu Gothic Medium, Lato !important;
      padding: 0px;
    }
    & p {
      font-size: 2rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
      line-height: 3.5rem;
    }
    & a {
      font-size: 2rem;
      color: #3366ff;
    }
    & ul {
      list-style: square;
      margin-top: 10px;
      font-size: 2rem;
    }
    & li {
      padding-bottom: 2px;
    }
    & h2 {
      display: none;
    }
    & img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  flex: 0 0 67px;
  h2 {
    font-size: 32px;
    padding-bottom: 90px;
  }
`;

const StyledDiv = styled.div`
  margin: 1em 15%;
  ${media.tablet`margin: 1em;`}
`;

interface Props extends WithTranslation {
  match: {
    params: {
      title: string;
    };
  };
}

interface State {
  content: any;
  urlFile: string;
}

class CareerArticles extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    const { params } = this.props.match;
    this.state = {
      content: null,
      urlFile: `https://wasedatime-feeds.s3-ap-northeast-1.amazonaws.com/blogs/${params.title}/${params.title}.md`,
    };
  }
  componentDidMount() {
    axios
      .get(this.state.urlFile)
      .then((response) => {
        console.log("Success in fetching the file from " + this.state.urlFile);
        this.setState({ content: response.data });
      })
      .catch((error) => {
        console.error("Error in fetching the file from " + this.state.urlFile);
      });
  }
  render() {
    const { urlFile, content } = this.state;
    const { t, i18n } = this.props;

    return (
      <ArticleWrapper>
        <HeaderWrapper>
          <Header
            title={t("navigation.feeds")}
            onInputChange={() => {}}
            placeholder={t("search placeholder")}
            inputText={""}
            disabled={true}
            isBlur={false}
            changeLang={(lng) => i18n.changeLanguage(lng)}
          />
        </HeaderWrapper>
        <StyledDiv>
          {/* <h3> Fetched from: </h3> {urlFile}
          <hr /> */}
          <div className="markdown-body">
            <StyledMarkdown source={content} />
          </div>
        </StyledDiv>
      </ArticleWrapper>
    );
  }
}

export default withTranslation("translation")(CareerArticles);

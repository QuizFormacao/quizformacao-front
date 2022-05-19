import React from 'react';
import {Route, Routes} from "react-router-dom";
import PageNotFound from "../notFound/PageNotFound";
import QuestionViewer from "./viewer/QuestionViewer";
import QuestionRegistration from "./registration/QuestionRegistration";
import TopBar from "../../components/TopBar";

const Question = () => {
  return (
      <TopBar>
          <Routes>
              <Route path={'/:id'} element={<QuestionViewer/>}/>
              <Route path={'/cadastro'} element={<QuestionRegistration/>}/>
              <Route path={'*'} element={<PageNotFound/>}/>
          </Routes>
      </TopBar>
  );
}

export default Question;
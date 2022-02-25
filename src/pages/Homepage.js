import React, { useEffect } from "react";
import Usersetting from "../component/Usersetting";
import Userdescription from "../component/Description"
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action";

const Homepage = () => {
  const users = useSelector((state) => state.users);
  const disPatch = useDispatch();
  
  
  useEffect(() => {
    disPatch(fetchAllUser());
    console.log(users);
  }, []);

  return (
      <>
        <Usersetting />
        <Userdescription/>
      </>
  );
};

export default Homepage;

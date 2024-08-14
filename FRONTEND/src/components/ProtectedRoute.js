import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate(); 
  const [requestInProgress, setRequestInProgress] = useState(false); 
  const getUser = async () => {
    try {
      if (requestInProgress) return; 
      setRequestInProgress(true); 
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/getUserData",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res);
      dispatch(hideLoading());
      if (res.data.success) {
        dispatch(setUser(res.data.data));
      } else {
        localStorage.clear();
        navigate("/login"); 
      }
    } catch (error) {
      localStorage.clear();
      dispatch(hideLoading());
      console.log(error);
    } finally {
      setRequestInProgress(false); 
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  if (localStorage.getItem("token")) {
    return children;
  } else {
    navigate("/login"); 
    return null; 
  }
}

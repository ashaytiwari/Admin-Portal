import { useSnackbar } from "notistack";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import SliderComponent from "../../../component/UI/Slider/Slider";
import { getTestimonialData } from "../../../services/commonServices";
import { setTestimonialData } from "../../../redux/actions/common.actions";
import styles from "./Testimonials.module.scss";
import TestimonialsCard from "../../../component/Dashboard/Testimonials/TestimonialsCard/TestimonialsCard";

const Testimonials = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const testimonialData = useSelector((state) => state.common.testimonialData);

  const getTestimonials = useCallback(() => {
    setIsLoading(true);
    getTestimonialData().then((res) => {
      if (res.status === 200) {
        setIsLoading(false);
        dispatch(setTestimonialData(res.data));
      } else {
        setIsLoading(false);
        enqueueSnackbar(res.statusText, { variant: "error" });
      }
    });
  }, [dispatch, enqueueSnackbar]);

  useEffect(() => {
    getTestimonials();

    return () => {
      dispatch(setTestimonialData([]));
    };
  }, [dispatch, getTestimonials]);

  return (
    <div className={styles.container}>
      <div className={"text-center"}>
        <h4>What Our Client Says</h4>
        <p>
          Our clients send us bunch of smiles with our services and we love them
        </p>
      </div>
      <div className={styles.body}>
        <SliderComponent>
          {testimonialData.map((item) => (
            <TestimonialsCard />
          ))}
        </SliderComponent>
      </div>
    </div>
  );
};

export default Testimonials;

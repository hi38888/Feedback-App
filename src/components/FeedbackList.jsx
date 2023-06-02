import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
//import PropTypes from "prop-types";
//This is a list
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback</p>;
  }

  return isLoading ? (
    <h3>
      <Spinner />
    </h3>
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  //return (
  //<div className='feedback-list'>
  // {feedback.map((item) => (
  //  <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //  ))}
  // </div>
  // );
};

//FeedbackList.propTypes = {
// feedback: PropTypes.arrayOf(
//   PropTypes.shape({
//     id: PropTypes.number.isRequired,
//    text: PropTypes.string.isRequired,
//    rating: PropTypes.number.isRequired,
//  })
// ),
//};

export default FeedbackList;

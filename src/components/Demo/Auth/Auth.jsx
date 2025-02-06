/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from '../../../Utils/Modal';
import { FaTimes, FaGithubAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook, MdMarkEmailRead } from 'react-icons/md';
import Signin from './Signin';
import Signup from './Signup';

const Auth = ({ modal, setModal }) => {
  const [createUser, setCreateUser] = useState(false);
  const [signReq, setSignReq] = useState("");

  const closeModal = () => {
    setSignReq("");
    setModal(false); // Close the modal
  };

  const handleBackgroundClick = (e) => {
    // Close the modal if the background is clicked
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleHeaderClick = (e) => {
    // Close the modal if the header is clicked
    closeModal();
  };

  return (
    <Modal modal={modal} setModal={setModal}>
      <section
        className={`z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-900 to-black shadow-2xl p-6 rounded-lg 
        max-w-[22rem] w-full flex flex-col items-center
        text-white md:max-w-[28rem] lg:max-w-[32rem] 
        transition-opacity duration-500 ${modal ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleBackgroundClick} // Background click handler
      >
        <div
          className="w-full"
          onClick={(e) => e.stopPropagation()} // Prevent background click when clicking inside the modal
        >
          <button
            className="absolute top-4 right-4 text-xl hover:opacity-70 text-white"
            onClick={handleHeaderClick} // Header click handler
          >
            <FaTimes />
          </button>
          {signReq === "" ? (
            <>
              <h2 className="text-xl font-semibold mt-2 text-center md:text-2xl">
                {createUser ? "Join Svtech" : "Welcome Back"}
              </h2>
              <div className="flex flex-col gap-3 mt-4 w-full">
                <Button icon={<FcGoogle />} text={`${createUser ? "Sign up" : "Sign"} with Google`} />
                <Button icon={<MdFacebook className="text-blue-600" />} text={`${createUser ? "Sign up" : "Sign up"} with Facebook`} />
                <Button icon={<FaGithubAlt />} text={`${createUser ? "Sign up" : "Sign in"} with GitHub`} />
                <Button click={() => setSignReq(createUser ? "sign-up" : "sign-in")} icon={<MdMarkEmailRead />} text={`${createUser ? "Sign up" : "Sign in"} with Email`} />
              </div>
              <p className="mt-4 text-sm text-center">
                {createUser ? "Already have an account? " : "No Account? "}
                <button
                  onClick={() => setCreateUser(!createUser)}
                  className="text-green-400 hover:text-green-500 font-bold ml-1"
                >
                  {createUser ? "Sign in" : "Create one"}
                </button>
              </p>
            </>
          ) : signReq === "sign-in" ? (
            <Signin setSignReq={setSignReq} />
          ) : signReq === "sign-up" ? (
            <Signup setSignReq={setSignReq} />
          ) : null}
          <p className="text-sm mt-4 mx-auto text-center mb-8">
            Check the Agreement <br /> to Sign in or Sign up
          </p>
        </div>
      </section>
    </Modal>
  );
};

export default Auth;

const Button = ({ icon, text, click }) => {
  return (
    <button
      onClick={click}
      className="flex items-center gap-3 w-full border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-700 text-white"
    >
      {icon} <span className="text-sm">{text}</span>
    </button>
  );
};

import React from "react";
import Card from "./Card";
import react from "/src/assets/clients/react.svg";
import Vue from "/src/assets/clients/vue.svg";
import Angular from "/src/assets/clients/angular.svg";

import Node from "/src/assets/clients/node.svg";
import Mongo from "/src/assets/clients/mongo.svg";
import Express from "/src/assets/clients/express.svg";

import Figma from "/src/assets/clients/figma.svg";
import Jest from "/src/assets/clients/jest.svg";
import Karma from "/src/assets/clients/Karma.svg";
import Jasmine from "/src/assets/clients/jasmine.svg";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="w-[92.5%] ml-auto py-[3em]">
      <p className="text-yellow text-subheading ">Services.</p>
      <div className="flex">
        <div className="w-[30%] pr-[2em]">
          <p className="text-white text-heading font-secondary font-medium">
            I Provide a Wide Range of Digital Services.
          </p>
          <div className="flex justify-between w-[40%] my-[3em]">
            <div className="text-yellow border-[1px] text-[2em] border-yellow rounded-[50%] h-[40px] w-[40px] flex items-center justify-center">
              <FaAngleLeft />
            </div>

            <div className=" bg-yellow text-white rounded-[50%] h-[40px] w-[40px] flex items-center justify-center text-[2em]">
              <FaAngleRight />
            </div>
          </div>
          <div className="w-[100%] bg-yellow h-[2px]"></div>
        </div>


        <div className="flex gap-[3em] w-[70%] overflow-x-scroll pr-[2em] overscroll-none no-scrollbar">
          <Card bg="bg-[#F1F0F9] px-[2em] py-[3em] text-center">
            <div className="flex justify-around items-center">
              <img src={react} alt="react" />
              <img src={Angular} alt="Angular" />
              <img src={Vue} alt="Vue" />
            </div>
            <p className="text-[20px] py-[1em] font-medium">Frontend.</p>
            <p className="text-[16px] font-light">
              I design quality, user-friendly and scalable products with any
              stack.
            </p>
          </Card>

          <Card bg="bg-[#FCFDF8] px-[2em] py-[3em] text-center">
            <div className="flex justify-around items-center">
              <img src={Mongo} alt="mongo" />
              <img src={Node} alt="node" />
              <img src={Express} alt="Express" />
            </div>
            <p className="text-[20px] py-[1em] font-medium">Backend. </p>
            <p className="text-[16px] font-light">
              I design and develop web applications across multiple APIs, third
              party integrations and databases.
            </p>
          </Card>

          <Card bg="bg-[#E2F6E0] px-[2em] py-[3em] text-center">
            <div className="flex justify-around items-center">
              <img src={Figma} alt="Figma" />
            </div>
            <p className="text-[20px] py-[1em] font-medium">UI/UX Design.</p>
            <p className="text-[16px] font-light">
              I care about details and consider the motion design of affordances
              to be crucial in creating effective and intuitive interfaces.
            </p>
          </Card>

          <Card bg="bg-[#E0EEF6] px-[2em] py-[3em] text-center">
            <div className="flex justify-around items-center">
              <img src={Karma} alt="Karma" />
              <img src={Jest} alt="Jest" />
              <img src={Jasmine} alt="Jasmine" />
            </div>
            <p className="text-[20px] py-[1em] font-medium">QA Testing.</p>
            <p className="text-[18px] font-light">
              I perform functionality testing, integration testing, and
              regression testing manually.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;

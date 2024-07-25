"use client";
import Nav from "./Components/Nav";
// import { FaCheck, FaTimes, FaUser } from "react-icons/fa";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import mainCat from "@/public/mainCat.png";
// import cat1 from "@/public/cat1.webp";
// import cat1 from "@/public/mainCat.jpg";
import cat1 from "@/public/mainCat-removebg-preview.png";
import cat2 from "@/public/cat2.webp";
import cat3 from "@/public/cat3.webp";
import cat4 from "@/public/cat4.webp";
import hat1 from "@/public/alien.webp";
import hat2 from "@/public/anime2.webp";
import hat3 from "@/public/ans.webp";
import hat4 from "@/public/ansem.webp";
import face1 from "@/public/face1.webp";
import face2 from "@/public/face2.webp";
import face3 from "@/public/face3.webp";
import face4 from "@/public/face4.webp";
import hand1 from "@/public/hand1.webp";
import hand2 from "@/public/hand2.webp";
import hand3 from "@/public/hand3.webp";
import hand4 from "@/public/hand4.webp";
import back1 from "@/public/back1.webp";
import back2 from "@/public/back2.webp";
import back3 from "@/public/back3.webp";
import back4 from "@/public/back4.webp";
import pant1 from "@/public/pant1.webp";
import pant2 from "@/public/pant2.webp";
import pant3 from "@/public/pant3.webp";
import pant4 from "@/public/pant4.webp";
import outfit1 from "@/public/outfit1.webp";
import outfit2 from "@/public/outfit2.webp";
import outfit3 from "@/public/outfit3.webp";
import outfit4 from "@/public/outfit4.webp";
import bg1 from "@/public/bg1.webp";
import bg2 from "@/public/bg2.webp";
import bg3 from "@/public/bg3.webp";
import bg4 from "@/public/bg4.webp";
import html2canvas from "html2canvas";
import download from "downloadjs";

import { useState } from "react";
import { useRef } from "react";

export default function Home() {
  const divRef = useRef(null);
  let [cat, setCat] = useState(cat1);
  let [hat, setHat] = useState(null);
  let [face, setFace] = useState(null);
  let [hand, setHand] = useState(null);
  let [back, setback] = useState(null);
  let [pant, setpant] = useState(null);
  let [outfit, setoutfit] = useState(null);
  let [bg, setbg] = useState(bg1);
  let harArray = [hat1, hat2, hat3, hat4];
  let faceArray = [face1, face2, face3, face4];
  let handArray = [hand1, hand2, hand3, hand4];
  let catArray = [cat1, cat2, cat3, cat4];
  let backArray = [back1, back2, back3, back4];
  let pantArray = [pant1, pant2, pant3, pant4];
  let bgArray = [bg1, bg2, bg3, bg4];
  let outfitArray = [outfit1, outfit2, outfit3, outfit4];
  function resetAll() {
    setHat(null);
    setFace(null);
    setHand(null);
    setCat(cat1);
    setback(null);
    setpant(null);
    setoutfit(null);
    setbg(bg1);
  }
  const handleDownload = async () => {
    const element = divRef.current;
    if (!element) return;

    const canvas = await html2canvas(element);
    const dataURL = canvas.toDataURL("image/png");
    download(dataURL, "myImage.png", "image/png");
  };
  const generateRandom = () => {
    console.log(Math.floor(Math.random() * 4));
    setHat(harArray[Math.floor(Math.random() * 4)]);
    setFace(faceArray[Math.floor(Math.random() * 4)]);
    setHand(handArray[Math.floor(Math.random() * 4)]);
    setCat(catArray[Math.floor(Math.random() * 4)]);
    setback(backArray[Math.floor(Math.random() * 4)]);
    setpant(pantArray[Math.floor(Math.random() * 4)]);
    setoutfit(outfitArray[Math.floor(Math.random() * 4)]);
    setbg(bgArray[Math.floor(Math.random() * 4)]);
  };

  return (
    <div className="px-[3%] xl:px-[6%] custom3:px-[12%] w-full h-fit pb-10 bg-light-brown">
      <Nav />
      <div className="flex flex-col custom:flex-row justify-between items-start bg-green-30 w-full h-full pt-5 bg-green-40 zooming2">
        <div className="flex flex-col justify-start items-center custom:items-start bg-yellow-30 w-[100%] custom:w-[43%] h-full gap-y-6 bg-red-30">
          <div className="relative flex justify-between items-start bg-light-brown w-[430px] h-[430px] rounded-2xl border-[8px] border-main-brown overflow-hidden">
            <div
              ref={divRef}
              className="w-full h-full flex justify-center items-center"
            >
              <img
                src={bg ? bg.src : ""}
                className="absolute w-[100%] h-full"
                alt=""
              />
              <img
                src={cat ? cat.src : ""}
                className="absolute w-[70%] mx-auto h-ful translate-y-[22%]"
                alt=""
              />
              <img
                src={hat ? hat.src : ""}
                className="absolute w-[100%] h-full translate-y-[20%]"
                alt=""
              />
              <img
                src={face ? face.src : ""}
                className="absolute w-[100%] h-ful translate-y-24"
                alt=""
              />
              <img
                src={hand ? hand.src : ""}
                className="absolute w-[100%] h-ful z-[10] translate-y-28"
                alt=""
              />
              <img
                src={back ? back.src : ""}
                className="absolute w-[100%] h-ful"
                alt=""
              />
              <img
                src={pant ? pant.src : ""}
                className="absolute w-[100%] h-ful"
                alt=""
              />
              <img
                src={outfit ? outfit.src : ""}
                className="absolute w-[100%] h-ful"
                alt=""
              />
            </div>
          </div>
          <h2
            className="flex justify-center items-start bg-light2-brown w-[430px] uppercase py-3 rounded-full border-4 border-main-brown text-[20px] font-[900] transform text-main-brown hover:cursor-pointer"
            onClick={() => resetAll()}
          >
            reset
          </h2>
          <h2
            className="flex justify-center items-start bg-light2-brown w-[430px] uppercase py-3 rounded-full border-4 border-main-brown text-[20px] font-[900] transform text-main-brown hover:cursor-pointer"
            onClick={generateRandom}
          >
            generate random
          </h2>
          <h2
            className="flex justify-center items-start bg-main-brown w-[430px] uppercase py-3 rounded-full border-4 border-main-brown text-[20px] font-[900] transform text-light-brown hover:cursor-pointer"
            onClick={handleDownload}
          >
            download
          </h2>
        </div>
        <div className="flex flex-col justify-start items-start bg-red-30 w-[100%] custom:w-[57%] h-fit border-l-0 custom:border-l-2 border-main-brown border-black px-[20px] custom:px-[60px] gap-y-7 mt-10 custom:mt-0 bg-yellow-30 zooming">
          <div className="w-full text-start text-[24px] font-[900] pt-0 text-main-brown">
            CREATE YOUR{" "}
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5 bg-pink-40">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                CAT
              </div>
              <div className="w-full h-[90px] flex justify-center custom:justify-between items-start">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-center items-center">
                  <FaChevronLeft />
                </div>
                <div className="w-fit mx-[2%] custom:mx-0 custom:w-[75%] h-[90px] flex justify-center items-start gap-3 overflow-auto">
                  <div className="w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    {catArray.map((item, key) => (
                      <div
                        key={key}
                        className={`rounded-xl w-[90px] border-main-brown h-[90px] flex flex-col justify-start items-start ${
                          cat === item ? "bg-white border-4" : "border-2"
                        }`}
                        onClick={() => setCat(item)}
                      >
                        <img src={item.src} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-center cursor-pointer items-center bg-light2-brown">
                  <FaChevronRight className="text-main-brown" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                HAT
              </div>
              <div className="w-full h-[90px] flex justify-center custom:justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-center items-center">
                  <FaChevronLeft />
                </div>
                <div className=" w-fit mx-[2%] custom:mx-0 custom:w-[75%] h-[90px] flex justify-center items-start gap-3 overflow-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    {harArray.map((item, key) => (
                      <div
                        key={key}
                        className={`rounded-xl w-[90px] border-main-brown h-[90px] flex flex-col justify-start items-start ${
                          hat === item ? "bg-white border-4" : "border-2"
                        }`}
                        onClick={() => setHat(item)}
                      >
                        <img src={item.src} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-center cursor-pointer items-center bg-light2-brown">
                  <FaChevronRight className="text-main-brown" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                FACE
              </div>
              <div className="w-full h-[90px] flex justify-center custom:justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-center items-center">
                  <FaChevronLeft />
                </div>
                <div className=" w-fit mx-[2%] custom:mx-0 custom:w-[75%] h-[90px] flex justify-center items-start gap-3 overflow-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    {faceArray.map((item, key) => (
                      <div
                        key={key}
                        className={`rounded-xl w-[90px] border-main-brown h-[90px] flex flex-col justify-start items-start ${
                          face === item ? "bg-white border-4" : "border-2"
                        }`}
                        onClick={() => setFace(item)}
                      >
                        <img src={item.src} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-center cursor-pointer items-center bg-light2-brown">
                  <FaChevronRight className="text-main-brown" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                FRONT ACCESSORY
              </div>
              <div className="w-full h-[90px] flex justify-center custom:justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-center items-center">
                  <FaChevronLeft />
                </div>
                <div className=" w-fit mx-[2%] custom:mx-0 custom:w-[75%] h-[90px] flex justify-center items-start gap-3 overflow-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    {handArray.map((item, key) => (
                      <div
                        key={key}
                        className={`rounded-xl w-[90px] border-main-brown h-[90px] flex flex-col justify-start items-start ${
                          hand === item ? "bg-white border-4" : "border-2"
                        }`}
                        onClick={() => setHand(item)}
                      >
                        <img src={item.src} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-center cursor-pointer items-center bg-light2-brown">
                  <FaChevronRight className="text-main-brown" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                BACK ACCESSORY
              </div>
              <div className="w-full h-[90px] flex justify-center custom:justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-center items-center">
                  <FaChevronLeft />
                </div>
                <div className=" w-fit mx-[2%] custom:mx-0 custom:w-[75%] h-[90px] flex justify-center items-start gap-3 overflow-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    {backArray.map((item, key) => (
                      <div
                        key={key}
                        className={`rounded-xl w-[90px] border-main-brown h-[90px] flex flex-col justify-start items-start ${
                          back === item ? "bg-white border-4" : "border-2"
                        }`}
                        onClick={() => setback(item)}
                      >
                        <img src={item.src} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-center cursor-pointer items-center bg-light2-brown">
                  <FaChevronRight className="text-main-brown" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                PANT
              </div>
              <div className="w-full h-[90px] flex justify-center custom:justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-center items-center">
                  <FaChevronLeft />
                </div>
                <div className=" w-fit mx-[2%] custom:mx-0 custom:w-[75%] h-[90px] flex justify-center items-start gap-3 overflow-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    {pantArray.map((item, key) => (
                      <div
                        key={key}
                        className={`rounded-xl w-[90px] border-main-brown h-[90px] flex flex-col justify-start items-start ${
                          pant === item ? "bg-white border-4" : "border-2"
                        }`}
                        onClick={() => setpant(item)}
                      >
                        <img src={item.src} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-center cursor-pointer items-center bg-light2-brown">
                  <FaChevronRight className="text-main-brown" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                OUTFIT
              </div>
              <div className="w-full h-[90px] flex justify-center custom:justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-center items-center">
                  <FaChevronLeft />
                </div>
                <div className=" w-fit mx-[2%] custom:mx-0 custom:w-[75%] h-[90px] flex justify-center items-start gap-3 overflow-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    {outfitArray.map((item, key) => (
                      <div
                        key={key}
                        className={`rounded-xl w-[90px] border-main-brown h-[90px] flex flex-col justify-start items-start ${
                          outfit === item ? "bg-white border-4" : "border-2"
                        }`}
                        onClick={() => setoutfit(item)}
                      >
                        <img src={item.src} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-center cursor-pointer items-center bg-light2-brown">
                  <FaChevronRight className="text-main-brown" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                BACKGROUND
              </div>
              <div className="w-full h-[90px] flex justify-center custom:justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-center items-center">
                  <FaChevronLeft />
                </div>
                <div className=" w-fit mx-[2%] custom:mx-0 custom:w-[75%] h-[90px] flex justify-center items-start gap-3 overflow-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    {bgArray.map((item, key) => (
                      <div
                        key={key}
                        className={`rounded-xl w-[90px] border-main-brown h-[90px] flex flex-col justify-start items-start overflow-hidden ${
                          bg === item ? "bg-white border-4" : "border-2"
                        }`}
                        onClick={() => setbg(item)}
                      >
                        <img src={item.src} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-center cursor-pointer items-center bg-light2-brown">
                  <FaChevronRight className="text-main-brown" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-[17px] font-[600] pt-52">
        ©2024, All Right Reserved.
      </div>
    </div>
  );
}

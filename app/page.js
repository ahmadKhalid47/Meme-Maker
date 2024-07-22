import Nav from "./Components/Nav";
// import { FaCheck, FaTimes, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" px-[12%] w-full h-fit pb-10 bg-light-brown">
      <Nav />
      <div className="flex justify-between items-start bg-green-30 w-full h-full pt-5">
        <div className="flex flex-col justify-start items-start bg-yellow-30 w-[43%] h-full gap-y-6">
          <div className="flex justify-between items-start bg-light-brown w-[430px] h-[430px] rounded-2xl border-[8px] border-main-brown"></div>
          <h2 className="flex justify-center items-start bg-light2-brown w-[430px] uppercase py-3 rounded-full border-4 border-main-brown text-[20px] font-[900] transform text-main-brown">
            {/* <FaTimes/> */}
            reset michi
          </h2>
          <h2 className="flex justify-center items-start bg-light2-brown w-[430px] uppercase py-3 rounded-full border-4 border-main-brown text-[20px] font-[900] transform text-main-brown">
            generate random
          </h2>
          <h2 className="flex justify-center items-start bg-main-brown w-[430px] uppercase py-3 rounded-full border-4 border-main-brown text-[20px] font-[900] transform text-light-brown">
            download
          </h2>
        </div>
        <div className="flex flex-col justify-start items-start bg-red-30 w-[57%] h-fit border-l-2 border-main-brown border-black px-[60px] gap-y-7">
          <div className="w-full text-start text-[24px] font-[900] pt-0 text-main-brown">
            CREATE YOUR MICHI{" "}
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                CAT
              </div>
              <div className="w-full h-[90px] flex justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-start items-start"></div>
                <div className=" w-[75%] h-[90px] flex justify-start items-start gap-3 overflow-x-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    <div className="rounded-xl w-[90px] border-4 border-main-brown h-[90px] flex flex-col justify-start items-start bg-white"></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-start items-start bg-light2-brown"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                HAT
              </div>
              <div className="w-full h-[90px] flex justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-start items-start"></div>
                <div className=" w-[75%] h-[90px] flex justify-start items-start gap-3 overflow-x-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    <div className="rounded-xl w-[90px] border-4 border-main-brown h-[90px] flex flex-col justify-start items-start bg-white"></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-start items-start bg-light2-brown"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                FACE
              </div>
              <div className="w-full h-[90px] flex justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-start items-start"></div>
                <div className=" w-[75%] h-[90px] flex justify-start items-start gap-3 overflow-x-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    <div className="rounded-xl w-[90px] border-4 border-main-brown h-[90px] flex flex-col justify-start items-start bg-white"></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-start items-start bg-light2-brown"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                FRONT ACCESSORY
              </div>
              <div className="w-full h-[90px] flex justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-start items-start"></div>
                <div className=" w-[75%] h-[90px] flex justify-start items-start gap-3 overflow-x-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    <div className="rounded-xl w-[90px] border-4 border-main-brown h-[90px] flex flex-col justify-start items-start bg-white"></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-start items-start bg-light2-brown"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                BACK ACCESSORY
              </div>
              <div className="w-full h-[90px] flex justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-start items-start"></div>
                <div className=" w-[75%] h-[90px] flex justify-start items-start gap-3 overflow-x-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    <div className="rounded-xl w-[90px] border-4 border-main-brown h-[90px] flex flex-col justify-start items-start bg-white"></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-start items-start bg-light2-brown"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                PANT
              </div>
              <div className="w-full h-[90px] flex justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-start items-start"></div>
                <div className=" w-[75%] h-[90px] flex justify-start items-start gap-3 overflow-x-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    <div className="rounded-xl w-[90px] border-4 border-main-brown h-[90px] flex flex-col justify-start items-start bg-white"></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-start items-start bg-light2-brown"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                OUTFIT
              </div>
              <div className="w-full h-[90px] flex justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-start items-start"></div>
                <div className=" w-[75%] h-[90px] flex justify-start items-start gap-3 overflow-x-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    <div className="rounded-xl w-[90px] border-4 border-main-brown h-[90px] flex flex-col justify-start items-start bg-white"></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-start items-start bg-light2-brown"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
            <div className="w-full h-full">
              <div className="w-full text-[19px] font-[700] text-main-brown uppercase">
                BACKGROUND
              </div>
              <div className="w-full h-[90px] flex justify-between items-start ">
                <div className="rounded-xl w-[10%] border-2 border-main-brown opacity-[0.2] h-[90px] flex flex-col justify-start items-start"></div>
                <div className=" w-[75%] h-[90px] flex justify-start items-start gap-3 overflow-x-auto">
                  <div className=" w-fit h-[90px] flex justify-start items-start gap-3 overflow-auto">
                    <div className="rounded-xl w-[90px] border-4 border-main-brown h-[90px] flex flex-col justify-start items-start bg-white"></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                    <div className="rounded-xl w-[90px] border-2 border-main-brown h-[90px] flex flex-col justify-start items-start "></div>
                  </div>
                </div>
                <div className="rounded-xl w-[10%] h-[90px] border-2 border-main-brown flex flex-col justify-start items-start bg-light2-brown"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-[17px] font-[600] pt-52">
        ©2024 $MICHI, All Right Reserved.
      </div>
    </div>
  );
}

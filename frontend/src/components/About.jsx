import React from 'react';
import Khlaif from '../images/khlaif.JPG';
import Anas from '../images/photo_anas.jpeg';
import Yassine from '../images/badraoui.jfif';
import Ayoub from '../images/sarab.jfif';

function About() {
  return (
    <div className="pt-36 space-y-8">
      <h1 className="font-extrabold text-4xl text-center">About</h1>
      <p className="text-center text-gray-600">
        We are a team of second year studens of Institut National des Postes et
        Telecommunications, passionate about AI, ML and software engineering
      </p>
      <div className="flex justify-center">
        <div className="w-1/5">
          <img
            src={Anas}
            alt="anas"
            className="w-[270px] h-[321px] object-cover rounded-xl"
          />
          <p className="font-semibold text-lg text-center pt-4">ANAS TAQI</p>
        </div>
        <div className="w-1/5">
          <img
            src={Khlaif}
            alt="khlaif"
            className="w-[270px] h-[321px] object-cover rounded-xl"
          />
          <p className="font-semibold text-lg text-center pt-4">
            MOHAMED KHLAIF
          </p>
        </div>
        <div className="w-1/5">
          <img
            src={Yassine}
            alt="yassine"
            className="w-[270px] h-[321px] object-cover rounded-xl"
          />
          <p className="font-semibold text-lg text-center pt-4">
            YASSINE EL BADRAOUI
          </p>
        </div>
        <div className="w-1/5">
          <img
            src={Ayoub}
            alt="ayoub"
            className="w-[270px] h-[321px] object-cover rounded-xl"
          />
          <p className="font-semibold text-lg text-center pt-4">AYOUB SARAB</p>
        </div>
      </div>
    </div>
  );
}

export default About;

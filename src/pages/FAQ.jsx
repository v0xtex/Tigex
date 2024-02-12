import React, { useEffect, useContext, useState } from 'react'
import Header from '../components/Header';
import Contextpage from '../Contextpage';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

function FAQ() {
  const faqData = [
    {
      question: "C'est quoi Tigex ?",
      answer: "Tigex c'est un site ou tu peux regarder tous les films et séries que tu veux GRATUITEMENT et en ILLIMITÉ !"
    },
    {
      question: "Y'a tous les derniers films ?",
      answer: "Ouaip ! Y'a tout et en même temps que le cinéma !"
    },
    {
      question: "Qu'est-ce qui arrivera prochainement ?",
      answer: "Prochainement ? Un système de compte avec  watch list et un onglet pour voir tous les matchs sportifs en direct et en redif !"
    },
    {
      question: "Et c'est qui le fondateur ?",
      answer: "C'est moi ! v0xtex !"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tigex Movies | FAQ</title>
      </Helmet>

      <div className='w-full bg-[#10141e] md:p-10 mb-20 md:mb-0'>
        <Header />
        <motion.div
          layout
          className="w-full md:p-2 flex flex-wrap relative justify-evenly md:justify-around">
          <div className="w-full md:w-3/4">
            <h1 className="text-4xl font-bold text-white mb-5">Frequently Asked Questions</h1>
            {faqData.map((faq, index) => (
              <div key={index} className="mb-5">
                <h2 className="text-xl font-bold text-white mb-2">{faq.question}</h2>
                <p className="text-white">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default FAQ;

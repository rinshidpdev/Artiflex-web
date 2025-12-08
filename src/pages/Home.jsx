import React from "react";
import Hero from "../components/Hero/Hero";
import ArtiflexShowcase from "../components/Hero/ArtiflexShowcase";
import TrustedBy from "../components/Hero/TrustedBy";
import FeatureSections from "../components/Hero/FeatureSections";
import WhyChoose from "../components/Hero/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <ArtiflexShowcase />
      <TrustedBy />
      <FeatureSections />
      <WhyChoose/>
    </>
  );
}


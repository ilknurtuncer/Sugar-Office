import { Inter } from 'next/font/google'
// * react
import {useState, useEffect} from "react";

// * component
import OneComponent from "@/components/one-component";
import TwoComponent from "@/components/two-component";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // * State
  const [oneVariable, setOneVariable] = useState<string>("1")
  const [two, setTwo] = useState<number>(2)
  const [tree, setTree] = useState<number>(3)

  // * useEffect
  useEffect(() => {
    setOneVariable("2")
  }, []);

  useEffect(() => {
    setTwo(3)
  }, []);

  useEffect(() => {
    setTree(4)
  }, []);

  return (
    <>
      {oneVariable}
      <hr/>
      {two}
      <hr/>
      {tree}
      <hr/>
      <OneComponent/>
      <hr/>
      <TwoComponent/>
    </>
  )
}

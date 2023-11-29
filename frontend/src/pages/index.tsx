import { Inter } from 'next/font/google'
// * react
import {useState, useEffect} from "react";

// * component
import OneComponent from "@/components/one-component";
import TwoComponent from "@/components/two-component";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { getPosts, testReducer } from '@/store/apps/posts';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // ** Redux
  const dispatch = useDispatch<AppDispatch>();

  // ** Selector
  const dataGetPosts: any[] = useSelector((state: RootState) => state.posts.data)
  const loadingGetPosts: boolean = useSelector((state: RootState) => state.posts.loading)

  // ** State
  const [oneVariable, setOneVariable] = useState<string>("1")
  const [two, setTwo] = useState<number>(2)
  const [tree, setTree] = useState<number>(3)

  // ** useEffect
  // useEffect(() => {
  //   dispatch(getPosts())
  // }, [])
  

  useEffect(() => {
    setOneVariable("2")
  }, []);

  useEffect(() => {
    setTwo(3)
  }, []);

  useEffect(() => {
    setTree(4)
  }, []);

  const handleGetPosts = () => {
    dispatch(getPosts())
  }

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
      <hr/>
      <button onClick={() => dispatch(testReducer('abc - testReducer'))}>Test Reducer</button>
      <hr/>
      <button onClick={handleGetPosts}>Post u Getir</button>
      <hr/>
      {loadingGetPosts ? 'yükleniyor' : dataGetPosts.length === 0 ? '' : 'yüklendi'}
      {dataGetPosts.map((k: any, index: number) => {
        return <div key={index}>{k.id} {k.title} {k.status}</div>
      })}
    </>
  )
}

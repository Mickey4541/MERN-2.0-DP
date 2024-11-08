



import Card from '../../globals/components/card/Card'
import Navbar from '../../globals/components/navbar/Navbar'
import Divider from '../../globals/components/divider/Divider'
import Footer from '../../globals/components/footer/Footer'
import Hero from './components/Hero'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useEffect } from 'react'
import { fetchProduct } from '../../store/productSlice'

const Home = () => {
  const dispatch = useAppDispatch()
  const {status, product} = useAppSelector((state)=>state.products)
  useEffect(() => {
    dispatch(fetchProduct())
  
  }, [])
  console.log(product);
  
  
  return (
    <>
    <Navbar/>
    <Hero/>
    <Divider/>

    <h1 className='mx-auto flex text-center justify-center font-bold  text-4xl text-gray-600'>TOP PRODUCTS</h1>
    {
      product.length > 0 && product.map((pd)=>{
        return (
          <Card key={pd.id} data={pd}/>
        )
      })
    }
    
    <Footer/>

    </>
  )
}

export default Home
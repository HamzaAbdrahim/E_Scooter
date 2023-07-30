import styles from "./style"
import Navbar from "./componants/Navbar"
import Hero from "./componants/Hero"
import Product from "./componants/Product"
import Efficiency from "./componants/Efficiency"
import Accessories_shoping from "./componants/Accessories_shoping"
import Shopping from "./componants/Shopping"
import Gallery from "./componants/Gallery"
import Colors from "./componants/Colors"
import Testimonials from "./componants/Testimonials"
import Subscribe from "./componants/Subscribe"
import Footer from "./componants/Footer"

const App = () => {
  return (
    <div className="w-full overflow-hidden">
       <div>
    <Navbar />
   </div>
   <div className={`py-8`}>
    <Hero />
   </div>
   <div className={`${styles.paddingx}`}>
    <Product />
    <Efficiency />
    <Accessories_shoping/>
   </div>
   <div>
   <Shopping />
   </div>
   <div className={`${styles.paddingx} ${styles.paddingY}`}>
    <Gallery/>
   </div>
   <div>
   <Colors />
   <Testimonials />
   </div>
   <div className={`${styles.flexCenter} flex-col ${styles.paddingY}`}>
    <Subscribe/>
   </div>
   <div>
    <Footer />
   </div>
    </div>
  )
}
export default App
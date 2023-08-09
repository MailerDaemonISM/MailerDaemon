import Head from 'next/head'
import Link from 'next/link';
// import Carousels from '../Components/Carousels';
import Header from '../Components/Header'
import Typed from "react-typed";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import styles from "./style.module.css"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


interface Props{
  posts: [Post];
}

const getConfigurableProps = () => ({
  showArrows: false,
  showStatus:false, 
  showIndicators: true,
  infiniteLoop:true,
  showThumbs:false,
  useKeyboardArrows: false,
  autoPlay: true,
  stopOnHover: true,
  swipeable: true

});



export default function Home({ posts }: Props) {

  return (
    <div className='transition-colors'>
    <div className="mx-auto mt-0 max-w-10xl ">
      <Head>
        <title>Mailer Daemon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
<section className="text-gray-700 body-font">
  <div className="container md:px-5  mx-auto flex flex-wrap">
    <div className="flex flex-wrap  mt-auto mb-auto  w-3/5 lg:w-1/2 content-start ">
     
      <div className="w-full mt-10 sm:p-4 px-4 mb-6">
      <h1 className="max-w-xl font-serif text-l md:text-6xl ml-[5%] text-center ">
       
       <Typed
       className="text-right"
           strings={["Mailer Daemon"]}
           typeSpeed={80}
           backSpeed={80}
           loop
         />
         </h1>
        {/* <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1> */}
        <div className="leading-relaxed text-center text-xs lg:text-lg">Student run media body of IIT(ISM) Dhanbad.</div>
      </div>
  
      <div className="px-2  sm:w-1/4  w-14">
        <h2 className="title-font font-medium text-sm sm:text-3xl text-gray-900">100k+</h2>
        <p className="leading-relaxed  text-xs sm:text-xl">Likes</p>
      </div>
      <div className="px-3  sm:w-1/4  w-14">
        <h2 className="title-font font-medium text-sm sm:text-3xl text-gray-900">340+</h2>
        <p className="leading-relaxed  text-xs sm:text-xl">Posts</p>
      </div>
      <div className="px-3  sm:w-1/4  w-14">
        <h2 className="title-font font-medium text-sm sm:text-3xl text-gray-900">1k+</h2>
        <p className="leading-relaxed  text-xs sm:text-xl">Downloads</p>
      </div>
      <div className="px-6  sm:w-1/4  w-14">
        <h2 className="title-font font-medium text-sm sm:text-3xl text-gray-900">9</h2>
        <p className="leading-relaxed  text-xs sm:text-xl">hashtags</p>
      </div>
    </div>
   
    <div className=" w-2/5 pl-2 lg:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    <img className="object-cover object-center w-full h-50px" src={`/main_img.avif`}  alt="stats"/>
    </div>
  </div>
</section>

       <div className="lg:flex mt-20 lg:flex-row">
       
        <div className=" overflow-auto w-full mr-8 lg:w-2/3 h-96 lg:h-96 lg:bg-gray-100 ">
        <h1 className="text-gray-800 font-bold text-2xl lg:text-3xl text-center mt-2 lg:mt-8 md:mt-12 ">Latest Posts</h1>
         <div className=' sm:grid sm:grid-cols-3'>
          {posts?.map((post) => {
            return (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className=" mx-4 relative max-w-xs overflow-hidden bg-cover bg-no-repeat" style={{ display: "inline-block" }}>
                  <img
                    className="mx-20 mt-6 mr-10 w-60 h-40  md:w-60 md:h-40 md:mx-4 md:mt-10 mb-6 max-w-xs transition duration-300 ease-in-out hover:scale-110"
                    src={urlFor(post.mainImage).url()}
                    alt=""
                  />
                  <div>
                    <div>
                      <p
                        className="text-md ml-20 md:text-sm md:ml-4 "
                      >
                        {post.title}
                      </p>
                      <p
                        className="text-md ml-20 md:text-sm md:ml-4"
                        // style={{ fontSize: 14, marginLeft: 32 }}
                      >
                        by {post.author.name}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div></div>
        <div className="overflow-y-auto mt-20 lg:mt-2 ml-5 w-full lg:w-1/3 h-96  ">
          <h1 className="text-gray-800 font-bold text-2xl lg:text-3xl text-center mt-2 lg:mt-8 ">Popular Reads</h1>

          {posts?.map((post) => {
            return (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className=" lg:ml-2 relative max-w-xs overflow-hidden bg-cover bg-no-repeat" style={{ display:"flex" }}>
                  <img
                    className="h-25 w-20 mt-5 max-w-xs transition duration-300 ease-in-out hover:scale-110"
                    src={urlFor(post.mainImage).url()}
                    alt=""
                  />
                  <div>
                    <div className='mx-4 pt-18'>
                      <p
                        className="text-sm text-bot mx-2 mt-12"
                        
                      >
                        {post.title}
                      </p>
                      <p
                        className="text-xs mx-2"
                        
                      >
                        
                        by {post.author.name}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>






      <h1 className="text-center font-bold text-2xl md:text-3xl mt-12 mb-6">Glimpses Of Mailer Daemon</h1>
      <div className="lg:grid grid-cols-4 gap-1 flex md:ml-10 flex-wrap">

        <iframe
          className="rounded-xl ml-8 md:ml-8 mt-8 mb-4 "
          width="250"
          height="180"
          src="https://www.youtube.com/embed/F8SXYoZdDlE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          className="rounded-xl ml-20  md:ml-8 mt-8 mb-4 "
          width="250"
          height="180"
          src="https://www.youtube.com/embed/9Unn9PrJipE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          className="rounded-xl ml-20  md:ml-8 mt-8 mb-4 "
          width="250"
          height="180"
          src="https://www.youtube.com/embed/rDwTHDuo9to"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          className="rounded-xl ml-20  md:ml-8 mt-8 mb-4 "
          width="250"
          height="180"
          src="https://www.youtube.com/embed/Q5zUix83988"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

<iframe
          className="rounded-xl ml-20  md:ml-8 mt-8 mb-4" 
          width="250"
          height="180"
          src="https://www.youtube.com/embed/N6CWgqhbwu8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

<iframe
          className="rounded-xl ml-20  md:ml-8 mt-8 mb-4 "
          width="250"
          height="180"
          src="https://www.youtube.com/embed/SljIgF9c9-s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

<iframe
          className="rounded-xl ml-20  md:ml-8 mt-8 mb-4 "
          width="250"
          height="180"
          src="https://www.youtube.com/embed/PT1l5nwHLAs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="rounded-xl ml-20  md:ml-8 mt-8 mb-4 "
          width="250"
          height="180"
          src="https://www.youtube.com/embed/X198lAfenQo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    
    </div>
   
    <footer className="text-gray-600 body-font">
  <div className="container px-5 pt-20 pb-8 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Contact us</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 text-md hover:text-gray-800" href="https://www.facebook.com/MDiitism/" target="_blank" ><p  className='text-blue-400'>Facebook-</p>Mailer Daemon, IIT ISM Dhanbad</a>
          </li>
          <li>
            <a className="text-gray-600 text-md hover:text-gray-800" href="https://www.instagram.com/md_iit_dhanbad/?hl=en" target="_blank"><p className='text-pink-400'>Instagram-</p>md_iit_dhanbad</a>
          </li>
          <li>
            <a className="text-gray-600 text-md hover:text-gray-800" href="https://www.youtube.com/c/MailerDaemonIITISMDhanbad" target="_blank"><p className='text-red-600'>Youtube-</p>Mailer Daemon , IIT ISM Dhanbad</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Products</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800" href="https://play.google.com/store/apps/details?id=com.mailerdaemon.app&hl=en_IN&gl=US" target="_blank" >md App</a>
          </li>
          
          <li>
            <a className="text-gray-600 hover:text-gray-800" href="https://placementor-iit-dhanbad.onrender.com" target="_blank">Placementor website</a>
          </li>
          
        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Any Suggestions!!</h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 w-50 md:w-96 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Submit</button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">It's news till it's new.
          <br className="lg:block hidden"/>All of you are our first priority.
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       
        <img src={`/unnamed.png`} alt="" className="w-13 h-12 rounded-xl text-grey-100"  />
        <span className="ml-3 text-xl">Mailer Daemon</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2004 MailerDaemon —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@StudentBody of IIT(ISM)</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-500" href="https://www.facebook.com/MDiitism/" target="_blank">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        
        <a className="ml-3 text-gray-500" href="https://www.instagram.com/md_iit_dhanbad/?hl=en" target="_blank">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        
        <a className="ml-3 text-gray-500" href="https://www.youtube.com/c/MailerDaemonIITISMDhanbad" target="_blank">

          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 28">
          <path stroke="none" d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/>
           
          </svg>
        </a>
      </span>
    </div>
  </div>
  </footer>






    </div>
  )
}

export const getServerSideProps = async () => {
  //turns a homepage into server side rendering
  const query = `*[_type == "post"]| order(_createdAt desc){
    _id,
    title,
    author -> {
      name,
      image
    },
      description,
      slug,
      mainImage
  }`

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  }

}